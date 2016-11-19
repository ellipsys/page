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
