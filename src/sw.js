self.addEventListener('install', function(event) {
  // Perform install steps
  var CACHE_NAME = 'test-wickwock-cache-v1';
  var urlsToCache = [
    '/index.html',
    '/styles.css',
    '/loading_logo.png'

  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
});
