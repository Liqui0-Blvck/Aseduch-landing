import { useState, useEffect } from "react";
import type { WordPressPost } from "../types/GeneralType";

interface UsePostsOptions {
  perPage?: number;
  categoryName?: string;
  search?: string;
}

export function usePosts({
  perPage = 10,
  categoryName = "",
  search = "",
}: UsePostsOptions = {}) {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Cuando cambian los filtros, reinicia todo
  useEffect(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
    setError(null);
  }, [perPage, categoryName, search]);

  useEffect(() => {
    if (!hasMore) return;
    setLoading(true);

    const params = new URLSearchParams({
      _embed: "true",
      per_page: String(perPage),
      page: String(page),
    });
    if (categoryName) params.set("category_name", categoryName);
    if (search) params.set("search", search);

    fetch(`https://aseduch.cl/wp-json/wp/v2/posts?${params.toString()}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 400) {
            setHasMore(false);
            return [];
          }
          throw new Error(`Error ${res.status}`);
        }
        return res.json();
      })
      .then((data: WordPressPost[]) => {
        setPosts((prev) => [...prev, ...data]);
        if (data.length < perPage) setHasMore(false);
      })
      .catch((err: Error) => {
        setError(err);
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, [page, perPage, categoryName, search, hasMore]);

  return { posts, loading, page, setPage, hasMore, error };
}
