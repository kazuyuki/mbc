self.addEventListener("install", event => {
  console.log('WORKER: Install', event.request);
});
self.addEventListener("activate", event => {
  console.log('WORKER: Activate', event.request);
});
self.addEventListener("fetch", event => {
  console.log('WORKER: Fetch', event.request);
});
