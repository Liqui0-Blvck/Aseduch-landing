import { useState, useEffect } from 'react';
import type { WordPressImage } from '../types/GeneralType';

export const useMedia = (query: number[]) => {
  const [media, setMedia] = useState<WordPressImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const responses = await Promise.all(
          query.map(id =>
            fetch(`https://aseduch.cl/index.php/wp-json/wp/v2/media/${id}`).then(res => res.json())
          )
        );
        setMedia(responses);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [query]);

  return { media, loading, setLoading };
};
