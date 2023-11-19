'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b18749af3e33e0aac6bf52d37492aac",
"assets/AssetManifest.json": "25b64cf5de38ac91c32909fe39bb515d",
"assets/assets/fonts/Amasis_MT_Std_Black.otf": "324ba454679fbaf195dbd9a8843a8d04",
"assets/assets/fonts/Amasis_MT_Std_Medium.otf": "b6f0cf2ac27c975e2f60985baacca86d",
"assets/assets/fonts/BAHNSCHRIFT.ttf": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/Bitter_Bold.ttf": "21c58d749d8fc57d9897bc9cccdc9b7f",
"assets/assets/fonts/Bitter_italic.ttf": "58093e86d36ba0cbc6e47f76748e2070",
"assets/assets/fonts/Bitter_Regular.ttf": "c99f7ae5952f464b2119c58157abf51b",
"assets/assets/fonts/gill_sans_mt.ttf": "d084e51196d50dd6735ff8a6e4d6f4f2",
"assets/assets/fonts/GOTHIC.TTF": "cfce6abbbff0099b15691345d8b94dcc",
"assets/assets/fonts/GOTHICB.TTF": "bc420c1c2b98e2ee8b2a75c1ce1fe083",
"assets/assets/fonts/GOTHICBI.TTF": "abd76d61050c97ab0e7bf2db2d9bd5ad",
"assets/assets/fonts/GOTHICI.TTF": "89d1d828dd7407e8e5ff6aa83cc5b294",
"assets/assets/fonts/NanumGothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/assets/fonts/NanumGothic-ExtraBold.ttf": "4b1b824d86d866cb8245accebe324b62",
"assets/assets/fonts/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/assets/fonts/NanumSquareNeoOTF-Bd.otf": "ac2c6dd4698f65fb1e799efc81b8d77a",
"assets/assets/fonts/NanumSquareNeoOTF-Eb.otf": "669013195bb11b943952ac23bae56070",
"assets/assets/fonts/NanumSquareNeoOTF-Hv.otf": "facd5b49ad23a067a6e894ac983a0405",
"assets/assets/fonts/NanumSquareNeoOTF-Lt.otf": "09cca6769e48ef5564154dbfca1a746d",
"assets/assets/fonts/NanumSquareNeoOTF-Rg.otf": "4ba733bc5941db853a333f11ee65ba01",
"assets/assets/fonts/NotoSansJP-Black.ttf": "1de9d37e0ae45a004283b4089b168760",
"assets/assets/fonts/NotoSansJP-Bold.ttf": "bac78109ca93004c4c343f6dbc8f54dd",
"assets/assets/fonts/NotoSansJP-ExtraBold.ttf": "2f53ada2cc7a82e382cf03c03cc9495c",
"assets/assets/fonts/NotoSansJP-ExtraLight.ttf": "1a7c0864947f5c768cae4fd0936c8c95",
"assets/assets/fonts/NotoSansJP-Light.ttf": "ae757ee0983953cbac940c41a3cfd9df",
"assets/assets/fonts/NotoSansJP-Medium.ttf": "1e951db65b09651f57b54b24f03deaaf",
"assets/assets/fonts/NotoSansJP-Regular.ttf": "5b785f19a399d2b4a41797257bc4838f",
"assets/assets/fonts/NotoSansJP-SemiBold.ttf": "719bd11f52872da7631b51ae6bebeb47",
"assets/assets/fonts/NotoSansJP-Thin.ttf": "e60c1418c3e43c04583e7edd50544024",
"assets/assets/fonts/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/assets/fonts/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/images/arrow_01.png": "1d2a95d6969c62560433907dc881f984",
"assets/assets/images/dialog_end.png": "c79f5882292442f4610e73a8d6b6d6bd",
"assets/assets/images/subtitle_item_arrow.png": "015f360f7e595aa248d61f3f26b9d053",
"assets/FontManifest.json": "b50f6c2b775f3629d90903cc1e9741b6",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "aba1ed4dd6cd2aeef6d162ea84606bcb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"css/style.css": "dc9c5a92e44570e057bf8fea7ac29a77",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"fonts/OFL.txt": "3aeefd810d2a2b18d7c463e363d79fbd",
"icons/favicon.png": "f879c536b07afd4fcbb34910d91e436f",
"icons/Icon-192.png": "4ddcf505caac6b5940e42c73c49f6aee",
"icons/Icon-512.png": "0e7ddb09ed8880c5930a6894d4e2e36e",
"icons/Icon-maskable-192.png": "4ddcf505caac6b5940e42c73c49f6aee",
"icons/Icon-maskable-512.png": "0e7ddb09ed8880c5930a6894d4e2e36e",
"icons/nail.png": "1fff8103f19c136e90945cd72f5201c7",
"icons/unsplash-x9WGMWwp1NM.png": "9341a6e5371646d09781da1b06a81963",
"index.html": "6bfcbcf4fee8d92643c323347ad2121c",
"/": "6bfcbcf4fee8d92643c323347ad2121c",
"js/demo-css-fx.js": "956e444af5b63b808362fb260237a19d",
"js/demo-js-interop.js": "7eff46065e3ba1e7a3fba154528ccaf8",
"main.dart.js": "1a61aab1cd17cdd77d9e06e3f9fbfeda",
"manifest.json": "1512219f59eb8956425a25d59bd28b53",
"version.json": "a9fa2086509a0dfd624f6a5c0a03c4c3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
