const CACHE_NAME = 'pwa-cache-v1';
const FILES_TO_CACHE = ['/'];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[ServiceWorker] install');
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    console.log('[ServiceWorker] Activate');
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (event.request.url.indexOf('http') === 0) {
        event.respondWith(
            caches.match(event.request).then(response => {
                console.log('[ServiceWorker] Fetch');
                return (
                    response ||
                    fetch(event.request).then(res =>
                        caches.open(CACHE_NAME).then(function(cache) {
                            cache.put(event.request, res.clone());
                            return res;
                        })
                    )
                );
            })
        );
    }
});
