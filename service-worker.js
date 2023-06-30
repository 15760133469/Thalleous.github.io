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
    "revision": "84d67262644c12a62cc8ae36240c6d5b"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.538bb698.js",
    "revision": "945da42a977dc09141fed27d9a674270"
  },
  {
    "url": "assets/js/10.f5b178bc.js",
    "revision": "175960e4c9a3165fb96beca1d75907c5"
  },
  {
    "url": "assets/js/11.cfaafcaf.js",
    "revision": "15f08209aaf420356c0964ed39904b11"
  },
  {
    "url": "assets/js/12.57952187.js",
    "revision": "da5ab8bda16dae8e56569025200f612a"
  },
  {
    "url": "assets/js/13.2dac01cf.js",
    "revision": "a4af053a6bb0cb2de31431f6f6ac2538"
  },
  {
    "url": "assets/js/14.7966f9d3.js",
    "revision": "ecf9a0a80aa036b4a853e01d62d43c84"
  },
  {
    "url": "assets/js/15.7e3c312a.js",
    "revision": "f0b124158c694154c035c1f929dcbf74"
  },
  {
    "url": "assets/js/16.99e0e0d2.js",
    "revision": "79fc8f47b424fdad7dd1e38d2820be25"
  },
  {
    "url": "assets/js/17.6dd519bd.js",
    "revision": "de52edc84f263263e08a9a0b2f6c374b"
  },
  {
    "url": "assets/js/18.a9f9e37d.js",
    "revision": "53111659bd438cdaaa199ce0ac1ec90c"
  },
  {
    "url": "assets/js/19.8cb26cac.js",
    "revision": "0ba58e585f713fef14e16d3b66caaa43"
  },
  {
    "url": "assets/js/20.31492df3.js",
    "revision": "1abcf70694c02bf28161a986270b47ce"
  },
  {
    "url": "assets/js/21.f7f3fa27.js",
    "revision": "bb8ddc691b7d752f7b4a74aac0a26558"
  },
  {
    "url": "assets/js/4.63eeb3dc.js",
    "revision": "451d48584fec7b7d6d41e02bf4ec78fc"
  },
  {
    "url": "assets/js/5.a7b89bc8.js",
    "revision": "e274d13b91238519c8f7aaf51cbd6d5e"
  },
  {
    "url": "assets/js/6.39e42ff4.js",
    "revision": "84742da1ed4d886db74c404037004a76"
  },
  {
    "url": "assets/js/7.e5abc524.js",
    "revision": "d235f4d50399bc6eb492f2c9470e50ed"
  },
  {
    "url": "assets/js/8.91108586.js",
    "revision": "e6e064476ee86a77b45deb630d20358d"
  },
  {
    "url": "assets/js/9.fc129756.js",
    "revision": "370462bbdae94f4efa62bcb22474b1b2"
  },
  {
    "url": "assets/js/app.14d80a2a.js",
    "revision": "b6649ad20975b34ea02b95c498f1b78c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.c5897f7a.js",
    "revision": "87a31bc352aa9f4ce4290b2dc3b78390"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "1f85a82cfa3ec8ed8808010c8d4fa6ab"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9ab35559b44e0ce7af2f6737d79d9228"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "4c28c69713c70611e4da7239d7af45cb"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "922488690184c2a8bb89843d6322dc56"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "42802f68f2e7ea09803950140d041a6d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "33d0cee481c71d9ddcf0ea76e817df73"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "b4786396b12b9ea75a53c73999194b9e"
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
    "revision": "7c095c85c23f161a55bc2a421176212d"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "js记录/js.html",
    "revision": "cd7d594c55552cc95c44257e098fede4"
  },
  {
    "url": "tag/index.html",
    "revision": "0f609151d6066cfa269173c63f03255a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "acb268d3efb7880bbd5762726292bc46"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0352de0b48675740368f25c95ca05552"
  },
  {
    "url": "tags/js/index.html",
    "revision": "07bc7c22e8537444c3d6fc19ac63f11c"
  },
  {
    "url": "tags/js分支/index.html",
    "revision": "60157e8f73c63656540739b737c0cdb3"
  },
  {
    "url": "tags/js基础/index.html",
    "revision": "526ea7f82efec94cf178d988f27b7b4b"
  },
  {
    "url": "tags/js面试/index.html",
    "revision": "c5985a5fea61063869470957db182e68"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6c5ac970b1416c4ad1cae06c80dbca90"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0bcbab1489007ff38468fcae060b27cd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b570cd026134114b6c26881ec9b0fca4"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "5c5ff75c81e789ea9ab3ad29fb9888e6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ae967364dcbaffb254eb18648a494dd9"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2b29084f69a4ca38f13a210ea8767284"
  },
  {
    "url": "timeline/index.html",
    "revision": "15f18bad12625eb3e1a731766996afae"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "39114e1fbb62f0ec53278ac869b52e39"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7301cbe70097d0454031048efcb15159"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "25ee53150a1b1bc15ed3632af246614b"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "e2c5a3d07a70731297437d4372894d4f"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "dfa8d7c1a9342363828aa35263c188ab"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "29a65747c3f906a15c145d5847928761"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "57dbe25d8e6a76d2fa729dce15226ff7"
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
