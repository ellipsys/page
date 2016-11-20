// sw.js

const FILE_CACHE = 'v.1'; // El nombre de la caché que vamos a usar. 
const archivos_cache = [       // Array de las urls de los archivos que quiero guardar en caché
  '/',                                
  'javascripts/main.js',
  'images/x-icon.png',
  'stylesheets/stylesheet.css',
  
  
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(FILE_CACHE)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(archivos_cache);
      })
  );
});

 self.addEventListener('activate', event => {   // Escuchamos al evento 'activate'
  event.waitUntil(self.clients.claim());        // El SW se registra como el worker activo para el cliente actual 

  event.waitUntil(
    caches.keys().then(cacheNames => {          // Toma las caches existentes

      return Promise.all(
        cacheNames.map(cacheName => {           // Recorremos las caches exitentes
          if (FILE_CACHE !== cacheName) {     // Si la caché del recorrido no es la caché actual...  
            return caches.delete(cacheName);    // La borramos, así conservamos únicamente la más reciente
            console.log('funciono');
          }
        })
      );

    })
  );
});
