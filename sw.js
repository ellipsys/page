// sw.js

const FILE_CACHE = 'v.1'; // El nombre de la caché que vamos a usar. 
const archivos_cache = [       // Array de las urls de los archivos que quiero guardar en caché
  '/',                                
  '/javascripts/main.js',
  '/images/x-icon.png',
  '/stylesheets/stylesheet.css',
  
  
];

self.addEventListener('install', event => {         // self es lo mismo que 'this'
  
  event.waitUntil(                                  // Recibe una promesa y actúa dependiendo de su resolución
    caches.open(FILE_CACHE)                           // ... Es claro qué hace
      .then(cache => {
        return cache.addAll(archivos_cache); // Una vez se abre la caché se agregan a ella todos los archivos especificados
      })
  ).then(() => {
    return self.skipWaiting();                      // El SW pasa de estado 'instalando' a 'activado'
  });

});
