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
    "revision": "b12dc3df395df9ab172c6173a0aaf942"
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
    "url": "assets/js/1.fef0ee14.js",
    "revision": "27ff1c0942065413d61eea98a0d04ae0"
  },
  {
    "url": "assets/js/10.536d4cff.js",
    "revision": "a67b5b890cae646e172dc8e5140f67dd"
  },
  {
    "url": "assets/js/11.e3e77ef4.js",
    "revision": "d05318d9a3c3a34c4406d9f7108c1e74"
  },
  {
    "url": "assets/js/12.c7169123.js",
    "revision": "b63690f3c1b00b7fdde76cd07b2ccdbe"
  },
  {
    "url": "assets/js/13.665ce0ec.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.a43f0770.js",
    "revision": "fb47b90773200538d915ec38459e61a3"
  },
  {
    "url": "assets/js/15.8f144518.js",
    "revision": "f2ec9ab2e1938dbbd0284d3cb50505fa"
  },
  {
    "url": "assets/js/16.73247346.js",
    "revision": "348b677e9262ba78f81531ec0c453735"
  },
  {
    "url": "assets/js/17.453792d6.js",
    "revision": "46883273344d7599224b34b126734bec"
  },
  {
    "url": "assets/js/18.55e5690a.js",
    "revision": "e68579bc251cbca1dc54e62798db6a17"
  },
  {
    "url": "assets/js/4.1ace6332.js",
    "revision": "ef6ed30fe655c1f2e83d42c6dcfbb735"
  },
  {
    "url": "assets/js/5.a3f14b16.js",
    "revision": "74edda22319e7e930102cff48d8a0a0f"
  },
  {
    "url": "assets/js/6.7c911a6f.js",
    "revision": "84577c89ced861633ba67cbdd2cda3d6"
  },
  {
    "url": "assets/js/7.63b4df15.js",
    "revision": "0c4cab82dd1bdf72eae35a07fdc99b91"
  },
  {
    "url": "assets/js/8.85ae13b9.js",
    "revision": "0fdbe356535365944e0ae86af746a958"
  },
  {
    "url": "assets/js/9.75ef85fd.js",
    "revision": "8753dff7e23be266fe0527623142a3cd"
  },
  {
    "url": "assets/js/app.0abbe9ae.js",
    "revision": "3db8df922c1094906f34241664203f12"
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
    "revision": "d3b32227a975ae059f97f1445da11e3f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "65f014dd5f0302692624ee3e9f2530bd"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6447b535b9c5b186a1eee4aa1813a331"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6b08716ac63fe6ffa82687f71de44f54"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9c5c4a74b6ef104b8448ed61507e9fd5"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "9f8f2e834bbba4484b5b898579bf443f"
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
    "revision": "81f7cc4dc58af5900a2c475b6395c865"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "js记录/js.html",
    "revision": "83a9ff726b92fb52934282ac029c41ac"
  },
  {
    "url": "tag/index.html",
    "revision": "1f1810d50d152c72265e4dc4f1f5b592"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "55749962f5357f7484fbf19e332c5f40"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "91b23b8310c1c65122f802a337b20a20"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3377379c9fc2f27cff1db8f4c16e16c6"
  },
  {
    "url": "tags/js分支/index.html",
    "revision": "2486ceb18d5d795984af24aa89c0bed0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9a973ef1d142e10f69e2f2b203bf01c8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6696c21453864a38abf91f36e20ef1b6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "87e3f98dc2938909c2beb5d5ae51111c"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "5ba715826e3b76d2ddd0f4627a311f2e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "55ad881f9a0a6ec6ed1c80af4010e6e6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "9aa7bd24850efcbe5ef9ae8b756478fc"
  },
  {
    "url": "timeline/index.html",
    "revision": "55e34df5ae49cb957afc327056570643"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2d6a323f64af61e5bcfae0b2884fbd7d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fc8cafbbbd8492eecb51430ef8f4622d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0fb42df2ffdc9019192224553f33ff67"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cada540fb2f238e8e42ed1f53e2c29ce"
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
