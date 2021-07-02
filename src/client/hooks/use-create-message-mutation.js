import { useMutation, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();

  return useMutation(createMessage, {
    onMutate: async ({ roomSlug, values }) => {
      await queryClient.cancelQueries(["rooms", roomSlug]);

      const previousRoom = queryClient.getQueryData(["rooms", roomSlug]);

      const newMessage = {
        id: Date.now(),
        type: values.type,
        url: values.url.trim(),
        language: values.language,
        code_string: values.codeString.trim(),
        inserted_at: new Date(),
      };

      queryClient.setQueryData(["rooms", roomSlug], (old) => ({
        ...old,
        messages: [newMessage, ...old.messages],
      }));

      return { previousRoom };
    },
    onError: (_error, { roomSlug }, { previousRoom }) => {
      queryClient.setQueryData(["rooms", roomSlug], previousRoom);
    },
    onSettled: (_data, _error, { roomSlug }) => {
      queryClient.invalidateQueries(["rooms", roomSlug]);
    },
  });
};
