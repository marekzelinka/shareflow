import { useQuery } from "react-query";
import { supabase } from "client/lib/supabase";

const getRoomById = async (slug) => {
  const selectResult = await supabase
    .from("rooms")
    .select(
      `
      title, 
      host, 
      inserted_at,
      messages (
        type, 
        url, 
        language,
        code_string,
        inserted_at
      )
      `
    )
    .eq("slug", slug)
    .single();
  if (selectResult.error !== null) {
    throw selectResult.error;
  }

  return selectResult.data;
};

export const useRoomQuery = (slug) => {
  return useQuery(["rooms", slug], () => getRoomById(slug), {
    enabled: slug !== undefined,
  });
};
