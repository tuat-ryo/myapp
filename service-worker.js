"use strict";var precacheConfig=[["/myapp/index.html","997463fd4924fe5a60c2433ec8c674fc"],["/myapp/static/css/main.54150d8a.css","aeb095bc9775754c19c66eaeed379e55"],["/myapp/static/js/main.4be3c98c.js","702b62eec0b60f2b42b3fc9885db807b"],["/myapp/static/media/GN-Koharuiro_Sunray.1e2ee5a2.ttf","1e2ee5a235c6b361f3bf40e07fcb7f5d"],["/myapp/static/media/GN-Koharuiro_Sunray.6fa2f847.svg","6fa2f847ea4a0261cd8777df217dfda8"],["/myapp/static/media/GN-Koharuiro_Sunray.7228f234.woff","7228f234ca4f11a3f7890dc2c016b7bb"],["/myapp/static/media/GN-Koharuiro_Sunray.7a8af3d7.eot","7a8af3d7367c084f49d5e15097417fec"],["/myapp/static/media/hacka_1.4657ad1e.png","4657ad1ea70f81fc40400ea560f8d681"],["/myapp/static/media/hacka_2.1bd59786.png","1bd5978644f0b04f678db7ad82ef2c46"],["/myapp/static/media/hacka_3.284b0c08.png","284b0c08f0315a2990d2fc6d59165fbf"],["/myapp/static/media/hacka_4.3554e4dd.png","3554e4dddd11bd0b138b1f29dd4aeccd"],["/myapp/static/media/hackadoll.cf8d206d.png","cf8d206d75bcf8191062e1f86b8580bb"],["/myapp/static/media/mini_hacka_1.9f51e8b0.png","9f51e8b01340095d92d3f08d8dbfe95f"],["/myapp/static/media/mini_hacka_3.d24ba824.png","d24ba82423757c8ce64b1eb63d6a8e3c"],["/myapp/static/media/mini_hacka_4.efe37e82.png","efe37e82570bea3386943ed68ae694e5"],["/myapp/static/media/ranobe.0f6a0fd3.svg","0f6a0fd32a5eb2508769dcee56e3bfe7"],["/myapp/static/media/ranobe.7abdc389.eot","7abdc38947b29c364219f17062670208"],["/myapp/static/media/ranobe.f6ae0cb3.woff","f6ae0cb37216c625202be2ada01ce4d5"],["/myapp/static/media/ranobe.fb4d48ba.ttf","fb4d48bae9fe9b8c28410b301566f95c"],["/myapp/static/media/wave_hacka1.f22bd621.png","f22bd6219a962385d0444be8031dd432"],["/myapp/static/media/wave_hacka2.93760316.png","937603164542022bc709259edcae8e1d"],["/myapp/static/media/wave_hacka3.b0cccd8c.png","b0cccd8cf6b94ef9b31e556efe4d754d"],["/myapp/static/media/wave_hacka4.a0ae2362.png","a0ae236224d1b3d48102ae41c43e17b0"],["/myapp/static/media/wave_hacka5.5beedf87.png","5beedf8781e04370cf05ffa91b630ef0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/myapp/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});