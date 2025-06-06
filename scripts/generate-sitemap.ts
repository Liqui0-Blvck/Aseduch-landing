import { writeFile } from 'node:fs/promises';
import fetch from 'node-fetch';

const SITE_URL = 'https://aseduch.cl';
const BASE_PATH = '/react';

const staticPaths = [
  '/',
  '/about',
  '/about/vision-mision',
  '/about/values',
  '/about/directive',
  '/news',
  '/partners',
  '/partners/social-quotes',
  '/partners/benefits',
  '/partners/rights',
  '/partners/advices',
  '/media',
  '/foundation',
  '/foundation/activities',
  '/foundation/donations',
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

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number; // Entre 0.0 y 1.0
}

function enhanceUrls(urls: string[]): SitemapUrl[] {
  const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
  
  return urls.map(url => {
    // Configurar prioridad y frecuencia basadas en la ruta
    let priority = 0.8;
    let changefreq: SitemapUrl['changefreq'] = 'weekly';
    
    if (url.includes('/foundation')) {
      priority = 0.9; // Prioridad alta para secciones de Fundación
    } else if (url.endsWith('/')) {
      priority = 1.0; // Prioridad máxima para la página principal
      changefreq = 'daily';
    } else if (url.includes('/news/')) {
      priority = 0.7; // Prioridad media para noticias individuales
      changefreq = 'monthly';
    }
    
    return {
      loc: url,
      lastmod: today,
      changefreq,
      priority
    };
  });
}

function buildXml(urls: SitemapUrl[]): string {
  const header = `<?xml version="1.0" encoding="UTF-8"?>`;
  const openUrlset = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const closeUrlset = `</urlset>`;

  const body = urls
    .map(url => {
      let urlXml = `
  <url>
    <loc>${url.loc}</loc>`;
      
      if (url.lastmod) {
        urlXml += `
    <lastmod>${url.lastmod}</lastmod>`;
      }
      
      if (url.changefreq) {
        urlXml += `
    <changefreq>${url.changefreq}</changefreq>`;
      }
      
      if (url.priority !== undefined) {
        urlXml += `
    <priority>${url.priority.toFixed(1)}</priority>`;
      }
      
      urlXml += `
  </url>`;
      return urlXml;
    })
    .join('\n');

  return [header, openUrlset, body, closeUrlset].join('\n');
}

async function main() {
  try {
    console.log('🔍 Generando sitemap...');
    console.time('Tiempo de generación');
    
    // Obtener URLs
    const staticUrls = getStaticUrls();
    console.log(`✨ ${staticUrls.length} URLs estáticas encontradas`);
    
    const postUrls = await getPostUrls();
    console.log(`✨ ${postUrls.length} URLs de noticias encontradas`);
    
    const allUrls = [...staticUrls, ...postUrls];
    
    // Mejorar URLs con metadatos
    const enhancedUrls = enhanceUrls(allUrls);
    
    // Generar XML
    const xml = buildXml(enhancedUrls);
    await writeFile('public/sitemap.xml', xml, 'utf-8');
    
    console.timeEnd('Tiempo de generación');
    console.log(`✅ sitemap.xml generado con ${allUrls.length} URLs.`);
    console.log(`💾 Archivo guardado en public/sitemap.xml`);
  } catch (err) {
    console.error('❌ Error generando sitemap:', err);
    console.error(err);
    process.exit(1);
  }
}

// Ejecutar el script
main();
