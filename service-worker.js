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
    "revision": "0572a3b62211a8694056cd405bebbb33"
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
    "url": "assets/js/12.7a790b31.js",
    "revision": "f8c9c456d8ba667cb76a46c757567c3d"
  },
  {
    "url": "assets/js/13.382c6872.js",
    "revision": "d2938469fe6e80f8c3e894df29a4e53d"
  },
  {
    "url": "assets/js/14.45799b5f.js",
    "revision": "f72bd516cd5a1dd6df29abe3cc16966a"
  },
  {
    "url": "assets/js/15.c9485b95.js",
    "revision": "9e96f297db8eee145f272fa47e346c97"
  },
  {
    "url": "assets/js/16.309f00ad.js",
    "revision": "bd5a092d994a510c1c552a0b792dcaf1"
  },
  {
    "url": "assets/js/17.391cc4ef.js",
    "revision": "376211ddd45a78905650c1d66afb884c"
  },
  {
    "url": "assets/js/18.0c0c5e60.js",
    "revision": "5666bc2f372db9f904b96b368f5a4942"
  },
  {
    "url": "assets/js/19.43dfac93.js",
    "revision": "97e2bf056ac5a8d3543b943c126f9bca"
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
    "url": "assets/js/app.84ead51b.js",
    "revision": "d5980720c215e3970e70b69ab7264c7a"
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
    "revision": "c55c12abd34084aa658c116443d1ba9d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "7a6c705165780b22abac9f0192fe20e8"
  },
  {
    "url": "categories/js/index.html",
    "revision": "13dd6773b348b13f6cc6a350a406903f"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "7a7d2a4d0dacab456fc01a1f93355805"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6b571766b31127da01e9dd75ec2dd077"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "6e0b2b6fb3d6e0dfd3b17f0e96e28d22"
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
    "revision": "34c82bbcec15a136939b3a4d2664690f"
  },
  {
    "url": "js/custom.js",
    "revision": "673ee22e25ddc56ba02d786b1ecf9ef8"
  },
  {
    "url": "tag/index.html",
    "revision": "015540a649f6c0f1b312eb56b496c3cb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "23608e1d5a347c9e866f691d386c7bd1"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "34b25eaa25c1b9a7fae36390538157de"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "c219486812c1971b7d9101aba015426f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a4d5e1f3fc9a39832163ccb501aef674"
  },
  {
    "url": "timeline/index.html",
    "revision": "c1f3eed2d7b8757c5c6616cbb5a44a69"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "129790c3caa7f2735298531dc9bdd62c"
  },
  {
    "url": "技术文章/js基础/Promise.html",
    "revision": "0ee41ca533f19f5e03b2a3ff32506652"
  },
  {
    "url": "技术文章/js基础/原型与原型链.html",
    "revision": "5bc2b55b6d88970da02632823c2dbdd8"
  },
  {
    "url": "技术文章/js基础/导入导出.html",
    "revision": "d39afe8fb7e912fa5bb4e5e7d8732b38"
  },
  {
    "url": "技术文章/js基础/数组.html",
    "revision": "f220a9314fd35d2784712f205ad1797f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "08930814e58f97c80b501f418e06719a"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "d657e06883ab59e6c35d75fb8d5626f5"
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
