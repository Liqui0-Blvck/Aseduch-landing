import { writeFile } from 'node:fs/promises';
import fetch from 'node-fetch';

const SITE_URL = 'https://aseduch.cl';
const BASE_PATH = '/react';

const staticPaths = [
  '/',
  '/about',
  '/news',
  '/docs',
  '/partners',
  '/medios',
] as const;

function getStaticUrls(): string[] {
  return staticPaths.map((path) =>
    `${SITE_URL}${BASE_PATH}${path}`
  );
}

interface WPPost {
  id: number;
}

async function getPostUrls(): Promise<string[]> {
  const perPage = 100;
  const res = await fetch(
    `https://aseduch.cl/wp-json/wp/v2/posts?per_page=${perPage}`
  );
  if (!res.ok) {
    throw new Error(`WP REST error: ${res.status} ${res.statusText}`);
  }
  const posts = await res.json() as WPPost[];
  return posts.map((p) => `${SITE_URL}${BASE_PATH}/news/${p.id}`);
}

function buildXml(urls: string[]): string {
  const header = `<?xml version="1.0" encoding="UTF-8"?>`;
  const openUrlset = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const closeUrlset = `</urlset>`;

  const body = urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n');

  return [header, openUrlset, body, closeUrlset].join('\n');
}

async function main() {
  try {
    console.log('🔍 Generating sitemap...');
    const staticUrls = getStaticUrls();
    const postUrls = await getPostUrls();
    const allUrls = [...staticUrls, ...postUrls];

    const xml = buildXml(allUrls);
    await writeFile('public/sitemap.xml', xml, 'utf-8');
    console.log(`✅ sitemap.xml generated with ${allUrls.length} URLs.`);
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
    process.exit(1);
  }
}

main();
