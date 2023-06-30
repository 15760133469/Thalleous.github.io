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
    "revision": "861d9770a89193f747ac2b51bab4b008"
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
    "url": "assets/js/13.b6c2b919.js",
    "revision": "918131889f2a7737ab705cde5586d10e"
  },
  {
    "url": "assets/js/14.e458ea19.js",
    "revision": "cd3ba0fe084d59a1932f43e59dee6ca7"
  },
  {
    "url": "assets/js/15.915ad6f2.js",
    "revision": "dcd68ce10a7df905f615dcce1c976634"
  },
  {
    "url": "assets/js/16.d02d3937.js",
    "revision": "a3a842c779df20e630a0e7ec0ee447a9"
  },
  {
    "url": "assets/js/17.7ae49841.js",
    "revision": "990032e5028ef6d7f963a25a40373141"
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
    "url": "assets/js/app.467f0c1f.js",
    "revision": "9df3efc4f025813b092b5a28eed35192"
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
    "revision": "54e2808604fd93403314fb2d110fbc9b"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "ed95498745937a7b9e07d0bdab5d48a7"
  },
  {
    "url": "categories/js/index.html",
    "revision": "85b4c138d6cc8b8cbc23ec91daa37b1a"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "632f163da8c3afc35d3177d95a9df625"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9fc1c30523744609075769ea57099505"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "b2376542545ecdbb0400cf0c38332a1d"
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
    "revision": "cee9a216ab7e5fafde3dacdd105eff77"
  },
  {
    "url": "js/custom.js",
    "revision": "673ee22e25ddc56ba02d786b1ecf9ef8"
  },
  {
    "url": "tag/index.html",
    "revision": "f3ee89d2a394494850d3678d78b934e4"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ec82cf8a5892fa339b86a07f02427792"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "a99711ef898e8d86de99dd8b7fde795c"
  },
  {
    "url": "tag/js面试/index.html",
    "revision": "0b2e83499119628aeecf1bedcc345da6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "77634ea3b64b13500d2bc5562deba763"
  },
  {
    "url": "timeline/index.html",
    "revision": "562041a529530bd73407a1dc2a71b94e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7161640b7a08bb5cd574f985f3bd51d6"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "bf73a50634eca34aab1d4fec142a89a2"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "a72b3b133c938a252a603b600a1ad21a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d273566e41b40d334212d1138a87239c"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "32615a72d26c6bce5a48e76f482bd50a"
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
