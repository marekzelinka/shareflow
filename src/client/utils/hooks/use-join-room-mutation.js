import { useMutation } from "react-query";
import { supabase } from "client/lib/supabase";

const joinRoom = async ({ values }) => {
  const selectResult = await supabase
    .from("rooms")
    .select("slug")
    .eq("slug", values.slug.trim())
    .single();
  if (selectResult.error !== null) {
    throw selectResult.error;
  }

  return selectResult.data;
};

export const useJoinRoomMutation = () => {
  return useMutation(joinRoom);
};
