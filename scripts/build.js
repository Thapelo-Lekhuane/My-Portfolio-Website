#!/usr/bin/env node
/**
 * Build script: desktop site + mobile app for responsive deployment.
 * - Desktop (large screens): full website
 * - Mobile (small screens): redirects to /mobile/ (Expo app)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const MOBILE_DIST = path.join(ROOT, 'mobile', 'dist');

// Desktop files/folders to copy
const DESKTOP_COPY = [
  'index.html',
  'index-3d.html',
  'css',
  'img',
  'js',
  'lib',
  'contactform',
];

function rmrf(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((f) => {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) rmrf(p);
      else fs.unlinkSync(p);
    });
    fs.rmdirSync(dir);
  }
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((f) => {
      copyRecursive(path.join(src, f), path.join(dest, f));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

console.log('Building mobile app...');
execSync('cd mobile && npm install && npm run build:web', {
  stdio: 'inherit',
  cwd: ROOT,
});

console.log('Preparing dist folder...');
rmrf(DIST);
fs.mkdirSync(DIST, { recursive: true });

console.log('Copying desktop site...');
for (const item of DESKTOP_COPY) {
  const src = path.join(ROOT, item);
  if (fs.existsSync(src)) {
    copyRecursive(src, path.join(DIST, item));
  }
}

console.log('Copying mobile app to dist/mobile/...');
if (fs.existsSync(MOBILE_DIST)) {
  copyRecursive(MOBILE_DIST, path.join(DIST, 'mobile'));
}

console.log('Build complete. Output: dist/');
