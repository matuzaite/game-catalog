import { supabase } from "../../../core/config/supabaseClient";

export async function fetchGames() {
  const { data, error } = await supabase.from("games").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
