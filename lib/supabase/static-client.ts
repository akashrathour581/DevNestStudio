import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * A simple Supabase client for use in generateStaticParams and other
 * places that run outside of a request context (no cookies needed).
 */
export function createStaticClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
