// All Green: oyunu ilk açılıştan sonra internetsiz de çalıştırır.
// Dosyalar değişince CACHE adındaki sürüm numarasını artır.
const CACHE = "allgreen-v1";
const FILES = [
  "./",
  "index.html",
  "privacy.html",
  "support.html",
  "manifest.webmanifest",
  "favicon.ico",
  "fonts/fonts.css",
  "fonts/Baloo2-latin-224589.woff2",
  "fonts/Baloo2-latin-ext-d0fd4b.woff2",
  "fonts/Nunito-latin-b8db19.woff2",
  "fonts/Nunito-latin-ext-fd8c59.woff2",
  "icons/favicon-32.png",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Önce ağdan dene (güncel sürüm gelsin), olmazsa önbellekten ver.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
