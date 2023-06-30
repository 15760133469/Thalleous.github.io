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
    "revision": "a1d99e6e05baeb799a3b6ae0dec848b2"
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
    "url": "assets/js/11.1d672356.js",
    "revision": "487b96976d4857796b9c6f493ea33fe5"
  },
  {
    "url": "assets/js/12.7a790b31.js",
    "revision": "f8c9c456d8ba667cb76a46c757567c3d"
  },
  {
    "url": "assets/js/13.bb459375.js",
    "revision": "96b5c9ee0f34e3162f9b619da0c8784b"
  },
  {
    "url": "assets/js/14.e12616d1.js",
    "revision": "99e06f082ffe19852544e4bc6aabe83c"
  },
  {
    "url": "assets/js/15.0d851c3a.js",
    "revision": "bd93144de2a65d3cabe1d32bfd68f62a"
  },
  {
    "url": "assets/js/16.d02d3937.js",
    "revision": "a3a842c779df20e630a0e7ec0ee447a9"
  },
  {
    "url": "assets/js/17.152a29dd.js",
    "revision": "fdb2bb6b28d316881737bf8def7ed692"
  },
  {
    "url": "assets/js/18.ba647483.js",
    "revision": "5f32a9b93771e07919ad8a6d596eccdd"
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
    "url": "assets/js/app.30e2fe49.js",
    "revision": "dadb49bcf881d6c93f5f9a56002a3812"
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
    "revision": "dc356f137d327dc9652a840660700b88"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "211fa96486dff9cabad7bdec453300fc"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "62067611a9b897bbd774e3e398c82325"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "95d0c3fce7ece59e40054184ddcdee56"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "a6410a4984231c57c30cdbc52bf01cdc"
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
    "revision": "415ca4402eedc29c9e6e4b4b01077216"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "6161505f6554f2ae526a59f3ce55c03d"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "0fb2548c03c38b9af2e2bfbb6dd8ce18"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a4909085f620aae11185e117ca5fa66b"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "3e35b2bf184998618590487cce1089b4"
  },
  {
    "url": "tag/js面试/index.html",
    "revision": "e3bf8b9368e6e738a9702b0478eda18a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e6d7e6bfb0f7b41fc82843865cfd9c92"
  },
  {
    "url": "tag/零基础/index.html",
    "revision": "4ac211c8fd31ce71169d3359f40bac85"
  },
  {
    "url": "timeline/index.html",
    "revision": "a7463cad6de8d5a9ceb4dcbd347120bd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "582018ef964aafee9dc896e3f0d7a651"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "9fb6650d84d05dd5aeddecbe508d40b8"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "3f09397cd7c44a88aa41e97c8c226738"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7abb3990a60e61719830a11320688a94"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "a7cd2c0c10fa8aebff40e3cae7547705"
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
