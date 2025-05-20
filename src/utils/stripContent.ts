export function stripFirstImageAndTitle(html: string): string {
  let cleaned = html
    // quita primer figure…</figure>
    .replace(/<figure[\s\S]*?<\/figure>/i, "")
    // quita primer <img …>
    .replace(/<img[\s\S]*?>/i, "")
    // quita primer <h1…>…</h1>
    .replace(/<h1[\s\S]*?<\/h1>/i, "");
  return cleaned;
}