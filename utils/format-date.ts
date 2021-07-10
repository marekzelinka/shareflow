import { format } from "date-fns";

export const formatDate = (value: string | number | Date) => {
  return format(new Date(value), "MMMM d, yyyy 'at' p");
};
