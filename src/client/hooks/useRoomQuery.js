import { useQuery } from "react-query";
import { supabase } from "client/lib/supabase";

const getRoomById = async (slug) => {
  const selectResult = await supabase
    .from("rooms")
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

export const useRoomQuery = (slug) => {
  return useQuery(["rooms", slug], () => getRoomById(slug), {
    enabled: slug !== undefined,
  });
};
