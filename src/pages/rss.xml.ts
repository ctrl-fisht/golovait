import { getCollection } from "astro:content";

export async function GET() {
  const posts = (await getCollection("blog"))
    .filter(p => !p.data.draft)
    .sort((a,b) => b.data.date.valueOf() - a.data.date.valueOf());
  const site = "https://golovait.ru";
  const items = posts.map(p => {
    const slug = p.id.replace(/\.mdx?$/, "");
    const link = `${site}/blog/${slug}/`;
    const desc = (p.data.description || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const title = p.data.title.replace(/&/g, "&amp;");
    return `  <item>
    <title>${title}</title>
    <link>${link}</link>
    <guid>${link}</guid>
    <description>${desc}</description>
    <pubDate>${p.data.date.toUTCString()}</pubDate>
  </item>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>айти голова — статьи</title>
  <link>${site}/blog/</link>
  <description>Бесплатные ИИ-агенты, вайбкодинг и автоматизация — гайды на айти голова</description>
  <language>ru</language>
  <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
