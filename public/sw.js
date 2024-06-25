const cacheName = "site-static-v1";

const assets = [
  "/logo192.png",
  "/manifest.json",
  "static/js/bundle.js",
  "/index.html",
  "/",
  "/cart",
  "/products",
];

// install event
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then(
        (cacheRes) =>
          cacheRes || fetch(evt.request).then((fetchRes) => fetchRes)
      )
  );
});
