import { useMutation } from "react-query";
import { supabase } from "../lib/supabase";
import { Room } from "../types";

type Data = Pick<Room, "slug">;

interface Variables {
  values: Pick<Room, "slug">;
}

const joinRoom = async ({ values }: Variables) => {
  const selectResult = await supabase
    .from<Data>("rooms")
    .select("slug")
    .eq("slug", values.slug.trim())
    .single();
  if (selectResult.error !== null) {
    throw selectResult.error;
  }

  return selectResult.data;
};

export const useJoinRoomMutation = () => {
  return useMutation<Data, Error, Variables>(joinRoom);
};
