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
    "revision": "15ffcc1ebedaa752a245fd9844aaa502"
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
    "url": "assets/js/12.76b8b429.js",
    "revision": "2a9207510d0895675b2ba56e2f7a6052"
  },
  {
    "url": "assets/js/13.08486cfa.js",
    "revision": "3b50f928ed18971b783096184f3e6c2f"
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
    "url": "assets/js/16.9ccd2c3b.js",
    "revision": "9e15bd87c290234ae76d52a5783d1814"
  },
  {
    "url": "assets/js/17.745b1c90.js",
    "revision": "3c71724526fa99d50d0734f64d841e73"
  },
  {
    "url": "assets/js/18.f41e710a.js",
    "revision": "9cefa13d07806510dd1d07c4c012aee0"
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
    "url": "assets/js/app.e35ca946.js",
    "revision": "52f80bda5ec90ef5ea596864fe4643df"
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
    "revision": "adf7086656bce6a5c5746220f6bad43a"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "b45239958a30ccd80f7723001c4ad104"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d242fc09c7b54213cd7b17f93690aa5d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "eb00b3ad208c6a9f5dee8fd9ef75788c"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "0adce0a8bd08a3f3142913be610b4220"
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
    "revision": "55564f43eea23528b4b50203f54ac6a8"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "28fa04ce32f8460e8815e7f2b20d3968"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "8dffef726b7583cc262823d255f93eca"
  },
  {
    "url": "tag/js/index.html",
    "revision": "4ea4c0a6be4a4a1f34590b8372f3f591"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "993d35403d171995c2fa7e16310e1893"
  },
  {
    "url": "tag/js面试/index.html",
    "revision": "a98f6ab585b7233c54caecda1a91bc6c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dc14b0a7e64999708e1835a43070138c"
  },
  {
    "url": "tag/零基础/index.html",
    "revision": "156fe9cea5b8d4733312e21503f436cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "bbd33435e410157da15112ea0c2e26a4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "eef63e922b44a79f836f1300773d3255"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "20c2b1d738e9f1a11bd2d04350081151"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "47841d4268de01c8089937d7c2a93caf"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a57f3e7a8c0dbe4acf0ed46632e41143"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "7bb408e65c1e38ad0e343cf14b94e27e"
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
