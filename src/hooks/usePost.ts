import { useState, useEffect } from "react";
import type { WordPressPost } from "../types/GeneralType";

export function usePost(id?: string) {
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://aseduch.cl/index.php/wp-json/wp/v2/posts/${id}?_embed=true`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then(setPost)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { post, loading, error };
}
