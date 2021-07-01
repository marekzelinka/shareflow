import { useMutation } from "react-query";
import { supabase } from "client/lib/supabase";

const createRoom = async (values) => {
  const selectResult = await supabase
    .from("rooms")
    .select("slug")
    .eq("slug", values.slug.trim())
    .single();
  if (selectResult.data !== null) {
    throw selectResult.error;
  }

  const insertResult = await supabase
    .from("rooms")
    .insert({
      slug: values.slug.trim(),
      title: values.title.trim(),
      host: values.host.trim(),
    })
    .single();
  if (insertResult.error !== null) {
    throw insertResult.error;
  }

  const slug = insertResult.data.slug;
  return slug;
};

export const useCreateRoomMutation = () => {
  return useMutation(createRoom);
};
