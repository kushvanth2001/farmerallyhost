'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9478e903b698f364f38f583a60d9dacb",
".git/config": "ea1942c489cdaf6e5283ee91a939c3ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "331e47d7311f2aa544c661872770fa36",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fe47559d0870f993d15ade315a64f73",
".git/logs/refs/heads/master": "8fe47559d0870f993d15ade315a64f73",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/5ccafbe3a1f1785d5b4967da7d95f2e4a3bc04": "104b472d1e1b1b6ec465f7b1a14f4326",
".git/objects/06/474da54caf30b6b0869920f8ab488baa92e8f1": "d6ea9c189c9236ab28c68be6320bebcd",
".git/objects/0a/0ea5c752c2d29a2861d7d4e9ab4eb0097c0f3a": "d5ff6827d590d438b336eec465385789",
".git/objects/0a/2dbf3050705d626cfa1a3f8cd7b5ab22ba4399": "bcf683650f0e1adcfcd25852535ca810",
".git/objects/0a/57edffb9332ccf845c857f2e30548a03fe445e": "8c2a8098e09985c82b2450368af087de",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/0e/c9fb0ff15c757895890038a916cfb5646fb1e1": "512b16e2ed8818e9f08b289f39feb0be",
".git/objects/12/9d6055cf710a977c67925d25dd8b4aa96d7c6d": "7fdd11636f93bb18a52a014f0a45420d",
".git/objects/19/618768a3104da8aa3c93ddb83dae1973ffda14": "51b21ca9147b5e4acd303d317e617a04",
".git/objects/1c/53f20fe2cccb7a224aadcb7c3f348ad2d3745e": "74a9e942068c0d2483198a65ae82a0ec",
".git/objects/2c/1fb0afaa966ba75660346b045e45148735ef86": "5d1a00cc1f247a2bfe62fbf6940904da",
".git/objects/2e/4f15920e4442b2dba3ee261e37193243ff4875": "90cc24a9226677c3dffaea24c6b2464f",
".git/objects/2f/5e36c2ec36f6f5f45184445ae4ee8c9e50a903": "ca0a31a8077e9ef82c51eec59da50e61",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/910299aae79fb556bcee86dc2977990fb6ee47": "a98501c132112dbfae473b32b82836f2",
".git/objects/3d/3aa530bd80fd9a5d8434232c6ad87d23417bd1": "6378c86165f3f57ca5ba17b228cdb972",
".git/objects/4b/b6143b3a53ae1c33f280e7040a91b88e2ae560": "30a935c20c28af2e8ec0ce8aeab6e52a",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/52/ef75d55cb24bc53c233e9a18ef3d7fd46ea6ab": "4e05f1c0dadf9df0210497e5e828a703",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/61/b499ccfac045f6d64e9c0387b7b1c880e97190": "a110e23d45ad83175b91dd9b3b4148a4",
".git/objects/65/42e330910478b100243257b17d431a1db34c6e": "332367daf0ac6044af4c1dde4a495886",
".git/objects/68/7ae2decf312ddf37e2faa38899d30f4f482375": "2e289c697b23a167008cc87a750cefc7",
".git/objects/68/fc806c9c88f39c725782993e4f820ae9662492": "45e57d30fab4bdf12e23ec48a175cdee",
".git/objects/6f/bca69461acaba861ff294aada046ba41252b6b": "162d3f554751e066177dd66d2614d2b2",
".git/objects/71/bd4aa785ad8f7def9b68cd1bf3443fe15da120": "4470faa9b52f921f0d0f474a8735e3f8",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/1afdd95422264ca555c0cf0c32e1df42c8bf81": "d2b4ef1a6b0232a73c833bab07ffbdc1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/560759c738557f21d8ca3111f786320813075f": "11f1a7e01a877666bcab26c4d4f5f259",
".git/objects/8d/b4e52c167c68a28d480f279cd25c2e31e1bff4": "eaebf62f1c44cc306b1f4be3a1322f01",
".git/objects/93/81f53d9f2f1bacc6bd1505f2ee7b63ae8f06d0": "3b29b321638efddcfce8bf0a08d88b58",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9a/d8aba5762c47efa733dbde9244c9af9aba74f9": "8bedb9226c428f236ea428d364b766f2",
".git/objects/a7/3d7dd4b5b822ada640fade0461e31733db04ec": "c383a45ccf53cbaea140e455f495ad17",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/74cae4134de1e873ea5b0e31f420856858fcc7": "3bcfb2c4293c5acbb4920d5c6b00b4ca",
".git/objects/b0/405a48dd443aa27be583d7926fbc7a1bf2d477": "2241213e6ce67ad17149b7715f07e39c",
".git/objects/b1/3a358e67134acddace42c842029c2707b408a9": "35aac586bad5b4291f62e902a167da8d",
".git/objects/b2/adc844027556fb4646d6d778169d42d321701b": "1baf93e5c9c5769d7232c6fc9870ce2e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/55c6bad4c9336752ff3455fd7fa8ea3b806217": "e35c687b34bbcd2d4ad0bafc6abc175c",
".git/objects/c9/37c6c6e8e09a1a2f85d343c6f537962c7293b1": "d2294eed8b514e14a87063e89013ff2e",
".git/objects/d1/64b2b18277065bfbfbd71b09b70971ea87aa47": "a2820b44fc6bd284a1ae5018d06b8d6a",
".git/objects/d3/3008c6e509cbf81b6fb7a8c1e183dc1a5c524f": "faaf39aea076eabacfc82901392d5afa",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/7e6a043810235773e1bc81fa231362cb5ce125": "e094c52b8cbd6546083ee62e48813f88",
".git/objects/e3/d30132c714f1269c57dc3c60096e0b6c8edfd6": "c537bbe19507e26048956fbeb4883d48",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1bfb55384991e7a7ca070886d2eabb960bab45": "01d810b8eecf9ab899528bbb59c6017e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/4ba703df126c57db3852aeed02d492ee70039b": "e769c28d23735121e118d53d01b1087d",
".git/objects/ea/cbe0976d02f57edabda63614fc1674831e8acd": "d19d68eb70b061e15719134488d86d3e",
".git/objects/eb/97953dab1ac1b5927aa2d224127ce164c140f3": "ad07800417bce16584536e6344912b99",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2a8776440f7fb46e4375a314e5b7c00ebaae44": "2b54ef0d849898c836022d47ed09e2d5",
".git/objects/ed/1b81605f1145bd7403155138ee4a7caddf9a78": "a451c37dfc4cbd0683de3494f4813880",
".git/objects/f1/bf7473482f5ba53572b6e43a6e911c31c52298": "d40efa954bf15483aea894015db5f156",
".git/objects/f2/7b7a2164ba89c96a8e1b4300671d7ad4a45e56": "8a2f65afa320faa533d934a04b4e12c3",
".git/objects/f3/51873c663835bf2347e80cb813f55a0c815de3": "c39a0f0fd111872d634b55fe9b05128a",
".git/objects/f8/eef4c075f894a812a59fc071e6648b5875425a": "b023f0cef1d409300419fe18dd24b9e4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/1d65b8648aa4d54cfcd9db327611d1d59df04c": "15fb6012625612aaa0ffb72223b93f66",
".git/objects/ff/22dfeb94f242fdf6dda487452e75ba55b915fa": "a363c726064d005a18420e060216abdb",
".git/objects/ff/7a829592fba586b7a1bc9e3c3f7415ec0d31b0": "f04ae906eeb368dba385bbd25b16c675",
".git/refs/heads/master": "554dc317db9fa3cc74b8fd01de805337",
"assets/AssetManifest.bin": "5bbd6abdd2916abe8f00409b89e709a2",
"assets/AssetManifest.json": "0be11ff79ce8cc9e2e95a08084799ff5",
"assets/assets/fonts/JosefinSlab-Italic-VariableFont_wght.ttf": "5f9e7c9ea1b83113aac291fbec13ce5b",
"assets/assets/icons/drpdwnicn.png": "8987c237ddb4052d82aa4f2395c90dfe",
"assets/assets/icons/drpupicn.png": "09d44efe178ebd96754a64aa447519fa",
"assets/assets/images/appbarbgimg.png": "5a2810483b5a64a382929c0871a7cfc4",
"assets/assets/images/appbarbgimg1.png": "5c4364d65410fcc856ae5796aed4c6a9",
"assets/assets/images/appbarimg3.png": "ac3247ada5b226e9bb7c77ef488f0b0c",
"assets/assets/images/cropdetailsimg.png": "c2df0a1535b2a50c22fa5331a7db40f5",
"assets/assets/images/cropstagesimg.png": "100a1da17a32f39869afe0e7a593334f",
"assets/assets/images/farmerallylogo.png": "523cb6bd32d393d7602cf05d5a4d56ee",
"assets/assets/images/homepagecoroselimg1.jpg": "2b603c4782466153587ea977f0de3a32",
"assets/assets/images/homepagecoroselimg2.png": "134be76436cb09993b0650273414c023",
"assets/assets/images/homepagecoroselimg3.png": "871a77ce07c5891ce8dcd43b424dc9f7",
"assets/assets/images/productbgimg.png": "105e565ce10db601e54d8f13f5f93d14",
"assets/assets/images/productsimg.png": "c6021471ef6279ace99e6ed1a9547108",
"assets/assets/images/selectimgicon.png": "c4b12234425171e4ece9a413ae6f90e1",
"assets/assets/images/submitimg.png": "2d9788c0a3379d66f12a19ebbcec75f6",
"assets/assets/riv/plantloading.riv": "805006267381ea3b63defeaca3b86a9f",
"assets/FontManifest.json": "de6bf704bc2f08811e6d73d6abc538ab",
"assets/fonts/MaterialIcons-Regular.otf": "ce778b3b78fbef30e8031e94a5829bc1",
"assets/NOTICES": "1c05417a17a1d791d1086c69cf1919f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "523cb6bd32d393d7602cf05d5a4d56ee",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "da8e4f121d9c20ed96dfdd9fd116ab31",
"/": "da8e4f121d9c20ed96dfdd9fd116ab31",
"main.dart.js": "613463aaa78d027d652ebd3397631e8e",
"manifest.json": "f3592893cf9d4567a37495af6481c7cc",
"version.json": "5603abc73000b9d2e1e1a7b99cac3fb6"};
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
