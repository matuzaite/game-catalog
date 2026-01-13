import { supabase } from "../supabaseClient.js";

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshteinDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const rows = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i += 1) rows[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) rows[0][j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      rows[i][j] = Math.min(
        rows[i - 1][j] + 1,
        rows[i][j - 1] + 1,
        rows[i - 1][j - 1] + cost
      );
    }
  }

  return rows[a.length][b.length];
}

function fuzzyScore(title, rawSearch) {
  const titleText = normalizeText(title);
  const searchText = normalizeText(rawSearch);

  if (!titleText || !searchText) return 0;
  if (titleText.includes(searchText)) return 1;

  const distance = levenshteinDistance(titleText, searchText);
  const maxLen = Math.max(titleText.length, searchText.length);
  return maxLen === 0 ? 0 : 1 - distance / maxLen;
}

function fuzzyFilter(games, search) {
  const MIN_SCORE = 0.5;

  return games
    .map((game) => ({
      game,
      score: fuzzyScore(game.title ?? "", search),
    }))
    .filter((item) => item.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.game);
}

export async function getGames(search) {
  let query = supabase.from("games").select("*");

  if (search) {
    const { data: directMatches, error: directError } = await query.ilike(
      "title",
      `%${search}%`
    );

    if (directError) {
      throw directError;
    }

    if (directMatches.length) {
      return directMatches;
    }

    const { data: allGames, error: allError } = await supabase
      .from("games")
      .select("*");

    if (allError) {
      throw allError;
    }

    return fuzzyFilter(allGames, search);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
}
