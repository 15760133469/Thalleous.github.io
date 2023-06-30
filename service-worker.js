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
    "revision": "da5cca92a9d1819943731295da224ab1"
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
    "url": "assets/js/13.60dfff51.js",
    "revision": "b2fe72a81143b31f74445b15e6bbbb4d"
  },
  {
    "url": "assets/js/14.700e52f0.js",
    "revision": "db805241c79960eaf91c4ee9f1593bd6"
  },
  {
    "url": "assets/js/15.9d4d3b53.js",
    "revision": "7858fb9cc68cf84caeae5f4319cb1684"
  },
  {
    "url": "assets/js/16.3d20cd6a.js",
    "revision": "f0c7d78494ea6caa1611e29e34f25cb2"
  },
  {
    "url": "assets/js/17.a4997da2.js",
    "revision": "f7e5b13b7fc757053578c3a67507bb90"
  },
  {
    "url": "assets/js/18.0bd28e58.js",
    "revision": "0ad5d7446eb5e1c1bde9277e0bd105e3"
  },
  {
    "url": "assets/js/19.c8b506d8.js",
    "revision": "1d6739c058e7982138550089512f1718"
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
    "url": "assets/js/app.cd3380f2.js",
    "revision": "bcc719fd670e66acd35274461db30862"
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
    "revision": "39b28b0e6873ec3ff4f4f918ee4e1a7a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "34770cb4f3268aec676c5da62799be49"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e93bb9afbea7d24f0e7b7c6b27183f89"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4d3595cf753fef5e4abb83e0bebc94b3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "803549d8b859667b0825bf1172cfe1f6"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "48ef5a3dcf3ba6c4e703c743cc5af16e"
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
    "revision": "835a7bf2ed79c1375afbbc280d2f5f4a"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "js记录/js.html",
    "revision": "6abb902d06980e07599ad9147dbe2fef"
  },
  {
    "url": "tag/index.html",
    "revision": "6947cb01b65f9f1c17c4e85d3b1ac146"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f3d3ac99644f3843c424b5bb9fd7fb22"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0a2a7964f05fb84c165c2594151ba00a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ebb577afbe921f9ed6d716ce6140dfb5"
  },
  {
    "url": "tags/js分支/index.html",
    "revision": "52c9224fb97052e5cdc169f8ad20e5f7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3aaabaf5225b3e8cdacda76dc3f2fcb6"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "bee03273c5c7aed351a30db2e7745a50"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "238aaf094a64f86dc00f829b87a83d35"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "962b1339a8ed4c1b975d6a52fc133dd2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2e09b255f47c4732c6099ac87fe5989c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "07ebd38791af6c2a1fe37f03244f4390"
  },
  {
    "url": "timeline/index.html",
    "revision": "21ca21f25997dd855b731c67f4e1a9ae"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1f668ffe05eb7fc18b499bf067b5d30b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0d1fc53f9439fdc78d374ceb32a6cc4a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2a13b23c734f459e96386d519207261d"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "b7cc40f302b490cd5e032088c1138c56"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "44508f2200e6431763e9c290ff10c697"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9e45c395bfbff1ca5a7dc6647ac43363"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "fc8d825b5249063cbdcc7e9d22d960c6"
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
