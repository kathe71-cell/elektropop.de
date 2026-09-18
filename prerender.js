import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  {
    url: '/',
    title: 'Elektropop.de – Das deutsche Electro Pop Magazin',
    desc: 'Elektropop.de: Faktenbasiertes Magazin für Electro Pop. Künstler, Charts, Subgenres, BPM-Rechner und Musikwissenschaft seit 2024.'
  },
  {
    url: '/kuenstler',
    title: 'Electro Pop Künstler & Pioniere | elektropop.de',
    desc: 'Porträts und Diskografien wegweisender Electro Pop Acts von Kraftwerk und Depeche Mode bis zu modernen Synth-Pop-Pionieren.'
  },
  {
    url: '/rechner-embed',
    title: 'BPM & Delay Rechner Widget | elektropop.de',
    desc: 'Interaktiver BPM-, Millisekunden- und Delay-Rechner für Musikproduzenten und DJs im Electro Pop Bereich.'
  },
  {
    url: '/impressum',
    title: 'Impressum | elektropop.de',
    desc: 'Rechtliche Angaben und Kontaktdaten gemäß § 5 DDG für elektropop.de.'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung | elektropop.de',
    desc: 'Informationen zur Verarbeitung personenbezogener Daten auf elektropop.de gemäß DSGVO.'
  }
];

console.log(`Starting prerendering of ${routesToPrerender.length} routes for elektropop.de...`);

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace(/<div id="root"[^>]*><\/div>/, `<div id="root">${appHtml}</div>`);
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    rendered = rendered.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    const fullUrl = `https://elektropop.de${route.url === '/' ? '' : route.url}`;
    rendered = rendered.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    rendered = rendered.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${route.desc}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const absolutePath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered);
    console.log(`  ✓ ${route.url} -> ${filePath} (${(rendered.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
    process.exit(1);
  }
}

console.log('Prerendering complete!');
