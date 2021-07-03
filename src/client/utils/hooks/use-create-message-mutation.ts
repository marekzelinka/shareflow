import { useMutation } from "react-query";
import { supabase } from "client/lib/supabase";
import { Message, NewMessage } from "../types";

type Data = Message;

interface Variables {
  roomId: string;
  values: NewMessage;
}

const createMessage = async ({ roomId, values }: Variables) => {
  const insertResult = await supabase
    .from<Data>("messages")
    .insert(
      values.type === "link"
        ? {
            room_id: roomId,
            type: values.type,
            url: undefined,
            code_string: undefined,
          }
        : {
            room_id: roomId,
            type: values.type,
            url: undefined,
            language: values.language,
            code_string: values.code_string
              ? values.code_string.trim()
              : undefined,
          }
    )
    .single();
  if (insertResult.error !== null) {
    throw insertResult.error;
  }

  return insertResult.data;
};

export const useCreateMessageMutation = () => {
  return useMutation<Data, Error, Variables>(createMessage);
};
