interface BaseMessage {
  id: string;
  type: "link" | "snippet";
  inserted_at: string;
}

interface LinkMessage extends BaseMessage {
  type: "link";
  url: string;
  language: undefined;
  code_string: undefined;
}

interface SnippetMessage extends BaseMessage {
  type: "snippet";
  language: string;
  code_string: string;
  url: undefined;
}

export type Message = LinkMessage | SnippetMessage;

export interface Room {
  id: string;
  slug: string;
  title: string;
  host: string;
  inserted_at: string;
  messages: Message[];
}

export type NewRoom = Pick<Room, "slug" | "title" | "host">;
