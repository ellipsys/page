
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registrado: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker no registrado fuck: ', err);
  });
}
