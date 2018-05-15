var CACHE_NAME = 'wechat-extendable-cache';
var CACHE_FILE_PATTERN = /(.js|.css|.png|.svg|.jpg|.jpeg)$/gi;
var urlsToCache = [
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                if (event.request.url && CACHE_FILE_PATTERN.test(event.request.url)) {

                    var fetchRequest = event.request.clone();

                    return fetch(fetchRequest).then(
                        function(response) {
                            console.log(response.url + '===>' + response.type);
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }

                            var responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then(function(cache) {
                                    cache.put(event.request, responseToCache);
                                });
                            return response;
                        }
                    );
                }

                return fetch(event.request);
                
            })
    );
})