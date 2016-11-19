if ('serviceWorker' in navigator) {                                   // Primero validamos que el navegador soporte SW

  navigator.serviceWorker.register('/sw.js').then(registration => {   // A continuación invocamos el método register indicando la ruta del archivo del SW
                                                                      // Debe estar al mismo nivel de index.html,
                                                                      //   en la raíz de nuestra app para que tenga acceso a todos los archivos
    console.log('Service worker registrado :D');
  }).catch(err => {
    console.log(':( Algo pasó: ', err);
  });
}
