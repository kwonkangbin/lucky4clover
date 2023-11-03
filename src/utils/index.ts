import { supabase } from "@/supabase";

export async function fetchUserRanking() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data, error } = await supabase.rpc("getuserranking", {
    user_id: user?.id,
  });

  if (!error && data) {
    return data[0];
  }
}
