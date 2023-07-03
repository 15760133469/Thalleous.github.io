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
    "revision": "e0ffdd8ae6de494a3d10da210b960c00"
  },
  {
    "url": "assets/css/0.styles.8983e902.css",
    "revision": "7868fb777b58ee1da511a1867d1bca7f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.4a503d05.js",
    "revision": "7f1136ac81797a6739bdab588e4595b6"
  },
  {
    "url": "assets/js/10.0463d9cf.js",
    "revision": "593ea005d300d8225777114630b75ae6"
  },
  {
    "url": "assets/js/11.7d23f892.js",
    "revision": "680be67e647cdb25d2ff71de05f9f2ac"
  },
  {
    "url": "assets/js/12.66aa0e0b.js",
    "revision": "6c6b095886f71fc0473063c012c94d6f"
  },
  {
    "url": "assets/js/13.db91b62b.js",
    "revision": "a2596d99be6328a62808ad90b4edf34c"
  },
  {
    "url": "assets/js/14.81804a01.js",
    "revision": "eb361858e924ee6d796cd3d551d08693"
  },
  {
    "url": "assets/js/15.82a241c1.js",
    "revision": "bd1b60bd71301c923a5c395fc7a030dd"
  },
  {
    "url": "assets/js/16.b07cb1c9.js",
    "revision": "e6244cb882a15e88e6a41b20640d28ea"
  },
  {
    "url": "assets/js/17.970ae559.js",
    "revision": "77db6a6db1e85ec9ad8eccd84b9edfcb"
  },
  {
    "url": "assets/js/18.f41b2d12.js",
    "revision": "c23623aac0ad1258ee6d15388c677823"
  },
  {
    "url": "assets/js/19.97ae6a88.js",
    "revision": "15576e25586daf0c7d39ecda475a6439"
  },
  {
    "url": "assets/js/20.447d3f36.js",
    "revision": "921445748ed1bc665b3a6019ac1f3b61"
  },
  {
    "url": "assets/js/4.c31a06a6.js",
    "revision": "01f493c1fa84cb47b4a40608ff6c31a8"
  },
  {
    "url": "assets/js/5.d3103872.js",
    "revision": "6f4035bd98323193336bbc908a7d8bf3"
  },
  {
    "url": "assets/js/6.4fb46b16.js",
    "revision": "6274642c1e055a44e7515a2caf70276d"
  },
  {
    "url": "assets/js/7.b9a9945d.js",
    "revision": "7e05ce88e28ea8de9f58d2beb736b358"
  },
  {
    "url": "assets/js/8.a643f6d9.js",
    "revision": "100c2b4ad7c612deed14272e2f1200d1"
  },
  {
    "url": "assets/js/9.371873fb.js",
    "revision": "e593a68dec3c48416be707624386196b"
  },
  {
    "url": "assets/js/app.23915488.js",
    "revision": "14be35c14642a2495bce8d8b1162e1aa"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.f689da5b.js",
    "revision": "a81bf277247e860b23e9466bd5048d55"
  },
  {
    "url": "avatar.jpg",
    "revision": "c4d36cf82a715f2fa2f9d6d33bc89ccb"
  },
  {
    "url": "categories/index.html",
    "revision": "4bdb61b4e111f543a584ba38272d18e2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a35dcc70f38c3be176b7222c904ac42c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "e1e78398f60b85b80308988372d2f909"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "32867e794c0066ef90c239feb83454a9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0b9982123113129716914d88d51a4623"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "d9db6020fef2db34a727a675df6c60b0"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/5.png",
    "revision": "f94aceb5d34a4f13294ac809dd2a42e4"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "b29b3b4d708f34b355dc55372660c672"
  },
  {
    "url": "js/custom.js",
    "revision": "673ee22e25ddc56ba02d786b1ecf9ef8"
  },
  {
    "url": "tag/index.html",
    "revision": "294795cdd6d421ac724a1cd5afadbfb7"
  },
  {
    "url": "tag/js/index.html",
    "revision": "25ce3204c0eb6094e8ac55d6cacade30"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "27442aade79fa4bedb48350b02f4ce3a"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "727bacdb33a82ad82b3c2d873cc64836"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "906af3b430db286aa4d54432c66708a8"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c5598e6eac7278f32d354cec15a0917"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "024017b6297dad80385919715fa3a331"
  },
  {
    "url": "技术文章/js基础/Promise.html",
    "revision": "a757b84aa0dbfa273c00c8d41fda968e"
  },
  {
    "url": "技术文章/js基础/原型与原型链.html",
    "revision": "88674e9aaca5a2774b01e6b381fc09de"
  },
  {
    "url": "技术文章/js基础/导入导出.html",
    "revision": "efd95d4efa1a74d024ace539780ce176"
  },
  {
    "url": "技术文章/js基础/数组.html",
    "revision": "7e8033091434b8667b22a7112da3d192"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0610b13b37b3963aa5319ee83561fdbe"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "1e544c5affa633095cd8f22a08af7fad"
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
