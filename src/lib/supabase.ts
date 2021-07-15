import { createClient } from "@supabase/supabase-js";

const PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (PUBLIC_SUPABASE_URL === undefined) {
  throw new Error("Define the NEXT_PUBLIC_SUPABASE_URL env var");
}

const PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (PUBLIC_SUPABASE_ANON_KEY === undefined) {
  throw new Error("Define the NEXT_PUBLIC_SUPABASE_ANON_KEY env var");
}

export const supabase = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);
