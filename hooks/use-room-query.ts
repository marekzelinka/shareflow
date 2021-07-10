import { useQuery, useQueryClient } from "react-query";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Message, Room } from "../types";

type Data = Room;

const getRoomById = async (slug: Room["slug"]) => {
  const selectResult = await supabase
    .from<Room>("rooms")
    .select(
      `
      id,
      title, 
      host, 
      inserted_at,
      messages (
        id,
        type, 
        url, 
        language,
        code_string,
        inserted_at
      )
      `
    )
    .eq("slug", slug)
    .order("inserted_at", { ascending: false, foreignTable: "messages" })
    .single();
  if (selectResult.error !== null) {
    throw selectResult.error;
  }

  return selectResult.data;
};

export const useRoomQuery = (slug: Room["slug"]) => {
  const queryClient = useQueryClient();
  const roomResult = useQuery<Data, Error>(
    ["rooms", slug],
    () => getRoomById(slug),
    {
      enabled: slug !== undefined,
    }
  );
  const room = roomResult.data;

  useEffect(() => {
    if (room?.id !== undefined) {
      const subscription = supabase
        .from<Message>(`messages:room_id=eq.${room.id}`)
        .on("INSERT", async (payload) => {
          await queryClient.cancelQueries(["rooms", slug]);

          queryClient.setQueryData<Room | undefined>(["rooms", slug], (old) => {
            if (old === undefined) {
              return undefined;
            }

            return {
              ...old,
              messages: [payload.new, ...old.messages],
            };
          });
        })
        .subscribe();

      const cleanup = () => {
        supabase.removeSubscription(subscription);
      };
      return cleanup;
    }
  }, [queryClient, room?.id, slug]);

  return roomResult;
};
