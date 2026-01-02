/* Service worker skeleton for TrackMate PWA
   - Handles basic install/activate and a simple cache-first strategy for GET requests.
   - Keep logic minimal; extend later for offline caching of API responses via runtime cache.
*/

const CACHE_NAME = 'trackmate-static-v1'
const ASSETS_TO_CACHE = [ '/', '/index.html', '/manifest.json' ]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
+  // Basic cache-first for navigation and static assets
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((resp) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, resp.clone())
        return resp
      })
    })).catch(() => caches.match('/index.html'))
  )
})
