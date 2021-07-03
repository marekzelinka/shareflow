import { useMutation } from "react-query";
import { supabase } from "client/lib/supabase";

const createMessage = async ({ roomId, values }) => {
  const insertResult = await supabase
    .from("messages")
    .insert({
      room_id: roomId,
      type: values.type,
      url: values.url.trim(),
      language: values.language,
      code_string: values.codeString.trim(),
    })
    .single();
  if (insertResult.error !== null) {
    throw insertResult.error;
  }

  return insertResult.data;
};

export const useCreateMessageMutation = () => {
  return useMutation(createMessage);
};
