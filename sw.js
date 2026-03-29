self.addEventListener('install', (event) => {
    console.log('[SW] Service Worker Terinstall');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Service Worker Aktif');
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Biarkan request jaringan berjalan normal (tanpa offline cache sementara ini)
});
