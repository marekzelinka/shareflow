import { format } from "date-fns";

export const formatDate = (dateString) => {
  return format(new Date(dateString), "MMMM d, yyyy 'at' p");
};
