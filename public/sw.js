// let cacheData = "appCache";

// this.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(cacheData).then((cache) => {
//       cache.addAll([
//         "/logo192.png",
//         "/manifest.json",
//         "static/js/bundle.js",
//         "/index.html",
//         "/",
//         "/cart",
//       ]);
//     })
//   );
// });

// let imageData = "imgData"

// this.addEventListener("fetch", async (event) => {
//   if (!navigator.onLine) {
//     event.respondWith(
//       caches.match(event.request).then((resp) => {
//         if (resp) {
//           return resp;
//         }
//         let requestUrl = event.request.clone();
//         console.warn(requestUrl, "offline");
//         fetch(requestUrl);
//         // const responsefromNetwork = fetch(event.request);
//         // caches.open(cacheData).then((cache) => {
//         //   cache.put(event.request, responsefromNetwork.clone());
//         // });
//         // return responsefromNetwork;
//       })
//     );
//   }
//   let requestUrl = event.request.url;

//   const responsefromNetwork = fetch(requestUrl);
//   console.warn(event.request.url, await responsefromNetwork, "logging");

//   //   console.warn(event.request, responsefromNetwork);

//   //   caches.open(cacheData).then((cache) => {
//   //     cache.put(requestUrl, responsefromNetwork.clone());
//   //   });
//   return responsefromNetwork;
// });

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
