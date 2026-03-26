const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const SITE_URL = 'https://www.paultaylormade.com';
const OUTPUT_DIR = './framer-assets';

// Pages to scrape (add any additional pages here)
const PAGES = [
  '/',
  '/about',
  '/contact',
  '/allergytracker',
  '/jetsweat',
];

const visited = new Set();
const imageUrls = new Set();

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function fetchBinary(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBinary(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function extractImageUrls(html) {
  const patterns = [
    /https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.[a-zA-Z]+/g,
    /src="([^"]*framerusercontent[^"]*)"/g,
    /url\(['"]?([^'")]*framerusercontent[^'")]*)/g,
  ];
  
  for (const pattern of patterns) {
    const matches = html.matchAll(pattern);
    for (const match of matches) {
      const url = match[1] || match[0];
      // Remove query params for cleaner filenames
      const cleanUrl = url.split('?')[0];
      if (cleanUrl.includes('framerusercontent.com')) {
        imageUrls.add(cleanUrl);
      }
    }
  }
}

async function scrapePage(pagePath) {
  const url = SITE_URL + pagePath;
  if (visited.has(url)) return;
  visited.add(url);
  
  console.log(`Scraping: ${url}`);
  try {
    const html = await fetch(url);
    extractImageUrls(html);
  } catch (err) {
    console.log(`  Failed to fetch ${url}: ${err.message}`);
  }
}

async function downloadImage(url, index) {
  const ext = path.extname(new URL(url).pathname) || '.png';
  const filename = `image-${String(index).padStart(3, '0')}${ext}`;
  const filepath = path.join(OUTPUT_DIR, filename);
  
  console.log(`Downloading: ${url}`);
  console.log(`  -> ${filename}`);
  
  try {
    const buffer = await fetchBinary(url);
    fs.writeFileSync(filepath, buffer);
    return { url, filename, success: true };
  } catch (err) {
    console.log(`  Failed: ${err.message}`);
    return { url, filename, success: false, error: err.message };
  }
}

async function main() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Scrape all pages
  console.log('=== Scraping pages for image URLs ===\n');
  for (const page of PAGES) {
    await scrapePage(page);
  }
  
  console.log(`\n=== Found ${imageUrls.size} unique images ===\n`);
  
  // Download all images
  console.log('=== Downloading images ===\n');
  const results = [];
  let index = 1;
  for (const url of imageUrls) {
    const result = await downloadImage(url, index++);
    results.push(result);
  }
  
  // Write manifest
  const manifest = results.map(r => ({
    original_url: r.url,
    local_file: r.filename,
    success: r.success,
  }));
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`\n=== Done ===`);
  console.log(`Downloaded ${results.filter(r => r.success).length}/${results.length} images`);
  console.log(`Files saved to: ${OUTPUT_DIR}/`);
  console.log(`Manifest saved to: ${OUTPUT_DIR}/manifest.json`);
}

main().catch(console.error);
