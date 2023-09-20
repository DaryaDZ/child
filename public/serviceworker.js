const CACHE_NAME = "version-1"
const urlsToCach = ["index.html", "offline.html"]
this.addEventListener('install', (event) => { 
  event.waitUntil(caches.open(CACHE_NAME).then((caches) => {
    console.log("open cache")
    return caches.addAll(urlsToCach)
  }))
})
this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return fetch(event.request).catch(()=>caches.match('offline.html'))
    })
  )
})
this.addEventListener('activate', (event) => {
  const cacheWhileList = []
  cacheWhileList.push(CACHE_NAME)
  event.waitUntil(caches.keys().then((cacheNames) => Promise.all(
    cacheNames.map((cacheName) => {
      if (!cacheWhileList.includes(cacheName)) {
        return caches.delete(cacheName)
      }
    })
  )))
})
