export interface WordPressImage {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  alt_text: string;
  source_url: string;
  media_type: "image" | string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      thumbnail?: ImageSize;
      medium?: ImageSize;
      full?: ImageSize;
      [key: string]: ImageSize | undefined;
    };
  };
}

export interface ImageSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}



export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  link: string;
  categories: number[]; // IDs de categorías
  featured_media: number;

  // Embebidos (si usas _embed en la query)
  _embedded?: {
    "wp:featuredmedia"?: WordPressImage[];
    "wp:term"?: WordPressCategory[][];
  };
}


export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}



export interface ImageGroup {
  id: string
  title: string
  src: string
  alt: string
  description: string
}