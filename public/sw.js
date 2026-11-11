// High-performance Service Worker for instant image delivery on weak mobile devices
const CACHE_NAME = 'natal-lucrativo-img-v1';
const CRITICAL_IMAGES = [
  '/images/hero-banner-new.webp',
  '/images/vip-pack-offer.webp',
  '/images/comparacao-tabela.webp',
  '/images/garantia-14-dias.webp',
  '/images/moldes-1.webp',
  '/images/moldes-2.webp',
  '/images/moldes-3.webp',
  '/images/moldes-4.webp',
  '/images/prova_social.webp',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_IMAGES).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Cache-first for images in /images/
  if (url.pathname.startsWith('/images/')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
