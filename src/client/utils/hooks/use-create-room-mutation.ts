import { useMutation } from "react-query";
import { supabase } from "client/lib/supabase";
import { NewRoom, Room } from "../types";

type Data = Room;

type SelectData = Pick<Room, "slug">;

interface Variables {
  values: NewRoom;
}

const createRoom = async ({ values }: Variables) => {
  const selectResult = await supabase
    .from<SelectData>("rooms")
    .select("slug")
    .eq("slug", values.slug.trim())
    .single();
  if (selectResult.data !== null) {
    throw selectResult.error;
  }

  const insertResult = await supabase
    .from<Data>("rooms")
    .insert({
      slug: values.slug.trim(),
      title: values.title.trim(),
      host: values.host.trim(),
    })
    .single();
  if (insertResult.error !== null) {
    throw insertResult.error;
  }

  return insertResult.data;
};

export const useCreateRoomMutation = () => {
  return useMutation<Data, Error, Variables>(createRoom);
};
