// Nome do cache
const CACHE_NAME = 'my-pwa-cache'

const urlsToCache = [
  '/',
  'dist/bcc6a39f8332d6008f1ca59fba1b786e.png',
  'dist/main.js',
  'dist/vendors-main.js',
]

// A primeira vez que o usuário inicia a PWA, 'install' é acionado.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Abre um cache e armazena nossos arquivos em cache
        return cache.addAll(urlsToCache)
      })
  )
})

// Elimina caches antigos que não sejam os atuais.
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map((key) => {
      if (!cacheWhitelist.includes(key)) {
        return caches.delete(key)
      }
    })))
  )
})

// Quando a página da Web vai buscar arquivos, nós interceptamos esse pedido e servimos os arquivos correspondentes
// se tivemos
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (event.request.cache === 'only-if-cache') {
        event.request.mode = 'same-origin'
      }
      return response || fetch(event.request)
    })
  )
})
