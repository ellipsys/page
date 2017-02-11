// sw.js

const FILE_CACHE = 'v.1'; // El nombre de la caché que vamos a usar. 
const archivos_cache = [       // Array de las urls de los archivos que quiero guardar en caché
  '/',                                
  'javascripts/main.js',
  'images/x-icon.png',
  'stylesheets/stylesheet.css',
  'javascripts/tests.js'
  
  
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

self.addEventListener('fetch', event => {                   // Escuchamos al evento 'fetch',
                                                            //  este se ejecuta siempre que se hace una solicitud HTTP (se pide o envía algo por Internet)
  event.respondWith(
    caches.open(FILE_CACHE).then(cache => {               // Abrimos la caché (en este momento ya contiene los archivos que decidimos cachear)
      return fetch(event.request).then(fetchResponse => {   // event.request es la solicitud al recurso. Contiene la URL y el método utilizado

        if(event.request.method === 'GET'){                 // Si el método es GET, quiere decir que estamos intentando traer datos,   
          cache.put(event.request, fetchResponse.clone());  //entonces interceptamos la respuesta y la agregamos a MI_CACHE
        }

        return fetchResponse;                     // Después dejamos que la solicitud siga su curso

      }).catch( _ => {                            // .catch se ejecutará cuando no se pueda hacer un 'fetch', en otras palabras,
                                                  //   cuando no se pueda completar una solicitud HTTP a Internet (offline)

        return cache.match(event.request)         // cache.match intenterá encontrar un archivo que cumpla con las características del recurso solicitado
          .then(cacheResponse => cacheResponse);  // Y después enviamos ese archivo encontrado en caché como respuesta.

      })

    })

  );

});

