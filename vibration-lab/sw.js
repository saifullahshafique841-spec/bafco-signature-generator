/* Offline support: the page comes from the network when there is one (so updates show at once) and from the cache when not. */
const CACHE = 'vlab-3cc78b29eb';
const SHELL = ['./', './index.html', './manifest.webmanifest', './apple-touch-icon.png', './favicon.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('vlab-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });   // only this app's old caches: other apps share the github.io origin
const FILES = new Set(SHELL.map(s => new URL(s, self.location).pathname));
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url); if (url.origin !== self.location.origin) return;
  const page = url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');
  if (page) {
    e.respondWith(fetch(req).then(res => { if (res.ok && /text\/html/.test(res.headers.get('content-type') || '')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); } return res; })
      .catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  if (!FILES.has(url.pathname)) return;   // anything else (the Android app, the iPhone install file, the QR code) comes straight from the network and is never kept as the page
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; })));
});
