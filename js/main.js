window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  
  document.getElementById('att3').addEventListener('click',function(){
	caches.keys().then(function(cacheNames) {
		console.log(cacheNames);
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
		  return true;
        }).map(function(cacheName) {
			console.log(cacheName);
          return caches.delete(cacheName);
        })
      );
    })
});
}

