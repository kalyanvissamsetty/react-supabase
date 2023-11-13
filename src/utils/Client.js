import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URI,
  process.env.REACT_APP_SUPABASE_ANON
);

export default supabase;
