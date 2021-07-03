import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (supabaseUrl === undefined) {
  throw new Error("Define the NEXT_PUBLIC_SUPABASE_URL env var!");
}

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (supabaseAnonKey === undefined) {
  throw new Error("Define the NEXT_PUBLIC_SUPABASE_ANON_KEY env var!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
