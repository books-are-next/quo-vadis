/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-da3f5ec';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./favicon.png","./index.html","./manifest.json","./quo_vadis_002.html","./quo_vadis_005.html","./quo_vadis_006.html","./quo_vadis_007.html","./quo_vadis_008.html","./quo_vadis_009.html","./quo_vadis_010.html","./quo_vadis_011.html","./quo_vadis_012.html","./quo_vadis_013.html","./quo_vadis_014.html","./quo_vadis_015.html","./quo_vadis_016.html","./quo_vadis_017.html","./quo_vadis_018.html","./quo_vadis_019.html","./quo_vadis_020.html","./quo_vadis_021.html","./quo_vadis_022.html","./quo_vadis_023.html","./quo_vadis_024.html","./quo_vadis_025.html","./quo_vadis_026.html","./quo_vadis_027.html","./quo_vadis_028.html","./quo_vadis_029.html","./quo_vadis_030.html","./quo_vadis_031.html","./quo_vadis_032.html","./quo_vadis_033.html","./quo_vadis_034.html","./quo_vadis_035.html","./quo_vadis_036.html","./quo_vadis_037.html","./quo_vadis_038.html","./quo_vadis_039.html","./quo_vadis_040.html","./quo_vadis_041.html","./quo_vadis_042.html","./quo_vadis_043.html","./quo_vadis_044.html","./quo_vadis_045.html","./quo_vadis_046.html","./quo_vadis_047.html","./quo_vadis_048.html","./quo_vadis_049.html","./quo_vadis_050.html","./quo_vadis_051.html","./quo_vadis_052.html","./quo_vadis_053.html","./quo_vadis_054.html","./quo_vadis_055.html","./quo_vadis_056.html","./quo_vadis_057.html","./quo_vadis_058.html","./quo_vadis_059.html","./quo_vadis_060.html","./quo_vadis_061.html","./quo_vadis_062.html","./quo_vadis_063.html","./quo_vadis_064.html","./quo_vadis_065.html","./quo_vadis_066.html","./quo_vadis_067.html","./quo_vadis_068.html","./quo_vadis_069.html","./quo_vadis_070.html","./quo_vadis_071.html","./quo_vadis_072.html","./quo_vadis_073.html","./quo_vadis_074.html","./quo_vadis_075.html","./quo_vadis_076.html","./quo_vadis_077.html","./quo_vadis_078.html","./quo_vadis_079.html","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001_fmt.jpeg","./resources/image003_fmt.jpeg","./resources/image004_fmt.jpeg","./resources/quo_vadis_-(1)_fmt.jpeg","./resources/quo_vadis_-(10)_fmt.jpeg","./resources/quo_vadis_-(11)_fmt.jpeg","./resources/obalka_quo_vadis_fmt.jpeg","./resources/quo_vadis_-(12)_fmt.jpeg","./resources/quo_vadis_-(13)_fmt.jpeg","./resources/quo_vadis_-(14)_fmt.jpeg","./resources/quo_vadis_-(15)_fmt.jpeg","./resources/quo_vadis_-(16)_fmt.jpeg","./resources/quo_vadis_-(17)_fmt.jpeg","./resources/quo_vadis_-(18)_fmt.jpeg","./resources/quo_vadis_-(19)_fmt.jpeg","./resources/quo_vadis_-(2)_fmt.jpeg","./resources/quo_vadis_-(20)_fmt.jpeg","./resources/quo_vadis_-(21)_fmt.jpeg","./resources/quo_vadis_-(3)_fmt.jpeg","./resources/quo_vadis_-(4)_fmt.jpeg","./resources/quo_vadis_-(5)_fmt.jpeg","./resources/quo_vadis_-(6)_fmt.jpeg","./resources/quo_vadis_-(7)_fmt.jpeg","./resources/quo_vadis_-(8)_fmt.jpeg","./resources/quo_vadis_-(9)_fmt.jpeg","./resources/upoutavka_eknihy_fmt.jpeg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
