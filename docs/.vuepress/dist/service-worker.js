/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "824f4765bebdf1964982b69541885061"
  },
  {
    "url": "about/index.html",
    "revision": "a120932c352079f2ecb188611debd731"
  },
  {
    "url": "about/test.html",
    "revision": "d0f0d756cdaf7fb85e9819711c761065"
  },
  {
    "url": "assets/css/0.styles.48913271.css",
    "revision": "c1386fd0099c5dbd01d0afe260900716"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dce25d02.js",
    "revision": "679e43ac59464f941cbcb37a506d7709"
  },
  {
    "url": "assets/js/11.1385fe81.js",
    "revision": "b5db7b884f7a8322d336e639fc0a0278"
  },
  {
    "url": "assets/js/12.7cec0f82.js",
    "revision": "aba3ab7a3d1fa0296dc06fd1c215afe4"
  },
  {
    "url": "assets/js/13.83047ca5.js",
    "revision": "f70b8194e31138e053c98b438f007c41"
  },
  {
    "url": "assets/js/14.d7b4d49e.js",
    "revision": "b87b9665853a8c7d9762cd7aa30367de"
  },
  {
    "url": "assets/js/15.532d57e8.js",
    "revision": "64c9648114471eac12164e94c6c657d0"
  },
  {
    "url": "assets/js/16.a4e9b0b8.js",
    "revision": "2035dc8ae1f9301878938e86f26d5257"
  },
  {
    "url": "assets/js/17.26afdc30.js",
    "revision": "21bbd536b5fd9d69ba0e2a085404bb9a"
  },
  {
    "url": "assets/js/2.7207048f.js",
    "revision": "c0f31f9c3efcc23a16d2929e1a0160b4"
  },
  {
    "url": "assets/js/3.6af1a396.js",
    "revision": "612d41f413e40317a04fb8ad81774d87"
  },
  {
    "url": "assets/js/4.06d7082f.js",
    "revision": "4069f0a1880e19af8ff8cf191924e237"
  },
  {
    "url": "assets/js/5.0c6952ff.js",
    "revision": "1c89b401323f8249292188b4615c7b54"
  },
  {
    "url": "assets/js/6.220c3bab.js",
    "revision": "989752a3cfc24d9a404a299f7f307217"
  },
  {
    "url": "assets/js/7.e55217b0.js",
    "revision": "18213da9a1eaee22fcc01edc43d09795"
  },
  {
    "url": "assets/js/8.e0bca01d.js",
    "revision": "66c658b3b3d5e5594a3b2e924390a000"
  },
  {
    "url": "assets/js/9.47ea0ad6.js",
    "revision": "21c97a3cfa223a38e2ac956d823a9ef6"
  },
  {
    "url": "assets/js/app.324795f9.js",
    "revision": "d10b5140e0fd89206eb9d527f297d3c6"
  },
  {
    "url": "css/css1.html",
    "revision": "edd7ff71d9584ae0c98d3c09ce564e8f"
  },
  {
    "url": "css/css2.html",
    "revision": "39f21747ec662585425bd97606ce1bdd"
  },
  {
    "url": "css/index.html",
    "revision": "b38e09b449f56bb567a1c3607f3986d7"
  },
  {
    "url": "index.html",
    "revision": "ed077c5e4ae719ae12d04739f5e3108b"
  },
  {
    "url": "javascript/index.html",
    "revision": "847ab034a9d3dc57e9402f6062a10ae9"
  },
  {
    "url": "javascript/javascript1.html",
    "revision": "eee5b7b856a93630d33468691cd4da16"
  },
  {
    "url": "javascript/javascript2.html",
    "revision": "b0c2dcb7fda584cd1b290f61c4751ffa"
  },
  {
    "url": "logo.jpg",
    "revision": "9e25abaf9b11fd836d03ec3c2cbfeef2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
