const cacheName = 'todo-pwa-v1';
const assets = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json'
];

// Install Event: Cache files
self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

// Fetch Event: Serve from cache if offline
self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});
