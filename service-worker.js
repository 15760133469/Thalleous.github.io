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
    "revision": "8b15e058be017c94716871b6ab5869eb"
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
    "url": "assets/js/1.aa2e696e.js",
    "revision": "9c04bb4913ce4c0c652c5c34d35330a1"
  },
  {
    "url": "assets/js/10.85f7f7e3.js",
    "revision": "c107bde67c9f7518875c16dbc7aacb50"
  },
  {
    "url": "assets/js/11.663c363a.js",
    "revision": "e6ac90d3d34b93bf6754bc3755de3d79"
  },
  {
    "url": "assets/js/12.7c6be196.js",
    "revision": "706a7b1411a498fc88a2cfafa4b4031b"
  },
  {
    "url": "assets/js/13.f1e4e89d.js",
    "revision": "6af76196b750c52467f876cd309a6fe2"
  },
  {
    "url": "assets/js/14.32ad97a9.js",
    "revision": "85f8b98a16c2eb6fc9ada2b0c9a50a65"
  },
  {
    "url": "assets/js/15.529a0f69.js",
    "revision": "ccb0b39962692b36636025882366c80b"
  },
  {
    "url": "assets/js/16.88c87840.js",
    "revision": "7af89ae25a79361175faff464725b0b0"
  },
  {
    "url": "assets/js/17.ebad61b1.js",
    "revision": "76232718ae212153db12dd695670990f"
  },
  {
    "url": "assets/js/18.24c0547f.js",
    "revision": "fa3204f91933f9c1200cf31f8c133012"
  },
  {
    "url": "assets/js/19.cb8b6566.js",
    "revision": "712ed1058ed949f85bc2fd481c489e41"
  },
  {
    "url": "assets/js/20.06007e5b.js",
    "revision": "c05dce600d482987a7065ba9bbfe7286"
  },
  {
    "url": "assets/js/21.71728201.js",
    "revision": "9bc323823343da14c3c6c9b0f233b0c3"
  },
  {
    "url": "assets/js/22.16fe3d87.js",
    "revision": "42a45252d1d88c95ff983cab1102f623"
  },
  {
    "url": "assets/js/23.1a3d2edc.js",
    "revision": "1489bd529c3df022f9506a5e7b78debc"
  },
  {
    "url": "assets/js/24.09257d01.js",
    "revision": "0c3d533694e416240e4b1d70f6b135cf"
  },
  {
    "url": "assets/js/25.57340653.js",
    "revision": "a32003fedcc43581f90159f13a2b10ed"
  },
  {
    "url": "assets/js/4.66805df8.js",
    "revision": "bf0c462eaeb10ab4bd043e743866091c"
  },
  {
    "url": "assets/js/5.bfed0d44.js",
    "revision": "53151e58862d41682b6dac6eda5031d6"
  },
  {
    "url": "assets/js/6.a182a45f.js",
    "revision": "cd9e91e6c925b35fd2a2659bbe813327"
  },
  {
    "url": "assets/js/7.7a1cdea4.js",
    "revision": "f5a7aab1099e9d6a8bc9dcba7dcc29b9"
  },
  {
    "url": "assets/js/8.17dcc0dc.js",
    "revision": "de720b80e5ca6be0a13aab16247e9fb5"
  },
  {
    "url": "assets/js/9.fbd558ec.js",
    "revision": "b37e35fd6650da9c6b95f06048c60f44"
  },
  {
    "url": "assets/js/app.7e9673cb.js",
    "revision": "f4813032e56d2a850d948e302fa81eb4"
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
    "revision": "a4a27ed375d0f8c8d313c24b1d054667"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a8c2db3f96796741652d2ba7486d17e4"
  },
  {
    "url": "categories/js/index.html",
    "revision": "31ba71deb52448c0b244f28c87be8c21"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "0be72ef45a4b3fdcaa57358787717280"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "f247c1c9f54276d5111ee394c3713c1d"
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
    "revision": "2c20dd264fe7901215b92205e7f49aad"
  },
  {
    "url": "js/custom.js",
    "revision": "673ee22e25ddc56ba02d786b1ecf9ef8"
  },
  {
    "url": "tag/component/index.html",
    "revision": "81bc98ea0243ac9e898e01b51b17c9a1"
  },
  {
    "url": "tag/index.html",
    "revision": "bfad8c836e615af49173f1304f1e85be"
  },
  {
    "url": "tag/js/index.html",
    "revision": "5424beef7ba738e7453e97d374d78b28"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "84398cd71dfb388e499fd483c481de20"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "ea3e9a600b7ed433b47b7ed899f7a705"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "4699a5a422c0a87627b667d95c30f64f"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "dca9094e14ab06c12af260876457b9ad"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ce00e3c68c63110484b92b03f971bb7b"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "ec2da16f7d75b625c0bf8cc081e3da13"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "e20f1259c1dfcd713907739ceb24f306"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "468b7e34f488438e91bcc0a3fb64d41b"
  },
  {
    "url": "timeline/index.html",
    "revision": "913576198e68d24f66ab9f924d2e0c41"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4b7b9222dc80ae7b2d04ecc1a0161660"
  },
  {
    "url": "技术文章/js基础/Promise.html",
    "revision": "f44281f31f71deab895963ff9daeeb85"
  },
  {
    "url": "技术文章/js基础/原型与原型链.html",
    "revision": "6095cfe18be3799193e5bdd2da63c72b"
  },
  {
    "url": "技术文章/js基础/导入导出.html",
    "revision": "ed81ec31efc27bc91fcc0055987fa91e"
  },
  {
    "url": "技术文章/js基础/数组.html",
    "revision": "030d18aa9e88fbfa62a57ca4382b27bc"
  },
  {
    "url": "技术文章/vue/vue-router.html",
    "revision": "966c64b60befb093e1d2350e25b9c6e0"
  },
  {
    "url": "技术文章/vue/vue2&vue3.html",
    "revision": "65fa3ce7cbc6375038ed92286aba52a2"
  },
  {
    "url": "技术文章/vue/vuex.html",
    "revision": "eea72d1167b71b5aea347353a1c7cef8"
  },
  {
    "url": "技术文章/vue/vue中的指令.html",
    "revision": "f1b1689800b644a2b32120239a5b4756"
  },
  {
    "url": "技术文章/vue/vue的参数选项.html",
    "revision": "7c614bbab1c8127418bf1f378edfe94b"
  },
  {
    "url": "技术文章/vue/vue的组件.html",
    "revision": "74613e270b2cde190929944c0e2187e1"
  },
  {
    "url": "技术文章/vue/暂无归类.html",
    "revision": "f0d6bbf74875a77f8a4c9a3a09539c7f"
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
