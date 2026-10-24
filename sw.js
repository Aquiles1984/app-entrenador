const C='entrenador-pub-5';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r;}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./'))));});
