const base = 'https://darulhadith-yatimkhana.org';
const routes = ['', '/about', '/teachers', '/gallery', '/location', '/contact', '/donation'];

export default function sitemap() {
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
