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
    "revision": "642094c2097938ae1a772f456e36b24f"
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
    "url": "assets/js/12.51441e7b.js",
    "revision": "6c08866b5d1b6ca81825547378787641"
  },
  {
    "url": "assets/js/13.08486cfa.js",
    "revision": "3b50f928ed18971b783096184f3e6c2f"
  },
  {
    "url": "assets/js/14.521cf74d.js",
    "revision": "d1588c2e3db0d4fc00485ae660fb4af1"
  },
  {
    "url": "assets/js/15.1c10c196.js",
    "revision": "fdc2051bf8cbda3299e57f6e7897f4e9"
  },
  {
    "url": "assets/js/16.85be5724.js",
    "revision": "c835c0cc9bcd8ce355d2c61eb6d38bd3"
  },
  {
    "url": "assets/js/17.a534aed7.js",
    "revision": "902769bc31af098260790cd946ef57fb"
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
    "url": "assets/js/app.0902702e.js",
    "revision": "9eeec95c26ba873e128f653249307b52"
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
    "revision": "3e17eacba4d825b445488aa16df2608d"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "5ea4d35755714eb3ace06a17b8b03cf2"
  },
  {
    "url": "categories/js/index.html",
    "revision": "153ef1138f2c061dc77f6adb98c222f6"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "73fc7913411b2f7194ed6e6c998c2e68"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d80a0c7b4c3eb84471b71e6ba7c10232"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "480e528926bd232e65dfb10e10487d89"
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
    "revision": "5a139245811ee0c89d3ba9067ba16b76"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "83857f206ce869ed1606ad699db76c23"
  },
  {
    "url": "tag/js/index.html",
    "revision": "bd9f78208fb4aec2864406277073b922"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "14479be67b9d2a7f53acaaebcc79211b"
  },
  {
    "url": "tag/js面试/index.html",
    "revision": "315b7213f4b4132c10202fbc00a9f590"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2d327f254e52f28486d11169524eddb9"
  },
  {
    "url": "timeline/index.html",
    "revision": "986dfbf81d12907de74122baef05bfd2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1d2a4c9ecd38cb72ef9b862052722f49"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "1d1cf60c10420ddd1ae43130f8212766"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "15a052573118e754c082504b51362809"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "dcedec5851dd2417283e7686865991e5"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "caae6d4c95f9855fbc9028d742aa40d8"
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
