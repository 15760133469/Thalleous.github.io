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
    "revision": "bf0ec4e9c8a9dd33874670e4523003df"
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
    "url": "assets/js/12.8c5870a4.js",
    "revision": "15ce27f71d892592101e87d735ceb5ab"
  },
  {
    "url": "assets/js/13.60dfff51.js",
    "revision": "b2fe72a81143b31f74445b15e6bbbb4d"
  },
  {
    "url": "assets/js/14.c3a1bab0.js",
    "revision": "a3fe2a84a9e3740660f3afc88c9f974d"
  },
  {
    "url": "assets/js/15.c9190ed0.js",
    "revision": "432969d08bc66ad6e74567388a53f254"
  },
  {
    "url": "assets/js/16.3d20cd6a.js",
    "revision": "f0c7d78494ea6caa1611e29e34f25cb2"
  },
  {
    "url": "assets/js/17.6dd519bd.js",
    "revision": "de52edc84f263263e08a9a0b2f6c374b"
  },
  {
    "url": "assets/js/18.9059ac57.js",
    "revision": "df62751d751cbb1cd24e4bdb60a95c77"
  },
  {
    "url": "assets/js/19.71d8d60c.js",
    "revision": "095e7cb03f8bd4fac4433a4dcd73b4a2"
  },
  {
    "url": "assets/js/20.4048e6ed.js",
    "revision": "a87764a324396310492dd663f96b63db"
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
    "url": "assets/js/app.134cd3f6.js",
    "revision": "6c40e395ea1024c7834af6f45cecdfc0"
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
    "url": "avatar.jpg",
    "revision": "a30ab2a7d20cf82c646c245f2847c554"
  },
  {
    "url": "categories/index.html",
    "revision": "4c8d7f2bac45216b9aedc1e12404dac9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9f7108fea18f75af1fce355f254c711b"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "9df669613ae1d075786722b07377db0e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "984701480f155a641b8ff6fc2bfdb4ac"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8aea92dabb2d485bd5954d361961e4e2"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5bc0280fb4895161b764681bcfb0b4b3"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "ad2b39115340ae6645c5af933bca1d35"
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
    "revision": "dca3a9d7cb63b369f2df57bc3d3a2bff"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "js记录/js.html",
    "revision": "e84acdcf0376db0092f54b5dee2efe24"
  },
  {
    "url": "tag/index.html",
    "revision": "be8fb44f4a776d3850aecf0bfb3b2aff"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a97f340fa61ac76ff4679b8e4bbfa423"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "29dd91333f7903827131cc5379a89d9b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "89f0f432b48faa510d915d3e38f01cfe"
  },
  {
    "url": "tags/js分支/index.html",
    "revision": "9c1ce1eadf959cbddae70b6ff5067dd2"
  },
  {
    "url": "tags/js基础/index.html",
    "revision": "33debcefb6f403ce6d8b1b7effa52dc7"
  },
  {
    "url": "tags/js面试/index.html",
    "revision": "84c80e2e06c423f6ea7b2ef3330e9b69"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5144144e09ad62b73d70072ce0c81050"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "97635dd66977b878838ebddefc94b5b5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8f9d05868808d0b8ce00a0eb0f9d9334"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "cb1df1cede72230cc5f3b8e0ea4bb31c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6ffa600a61e10251a0bc5d73fc263717"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0d4d1544da5aea24a2426fe2cf948f8d"
  },
  {
    "url": "timeline/index.html",
    "revision": "3be274e58854b8e7375c99a6fb5acb9a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "74db943386d3975d38dd8aea29f0788f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3f8772009c05ce9a33f51aac0e7e3f36"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "24f6d817d1ab2daa78f4048e080e722e"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "e082e635d8f40624106ba198e067bf07"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "4b97c2b3230b1c5c4232dd4811e172d8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "df4d03b4506c6304b9193ae22efe7073"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "ca7179c93059a907aa5f1b60891933ed"
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
