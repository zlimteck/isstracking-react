const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Liste des routes de votre application
const links = [
  { url: '/', changefreq: 'daily', priority: 0.8 },
  { url: '/Tracking', changefreq: 'monthly', priority: 0.6 },
  { url: '/Expeditions', changefreq: 'monthly', priority: 0.6 },
  { url: '/Live', changefreq: 'monthly', priority: 0.6 },
  // Ajoutez d'autres routes ici
];

const stream = new SitemapStream({ hostname: 'https://isstracking.xyz' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), data.toString())
);
