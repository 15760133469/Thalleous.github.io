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
    "revision": "b430eacc6f29a57db038ca5e5ed77e98"
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
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
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
    "url": "assets/js/10.d691b34a.js",
    "revision": "6b3936652aadf1ebcce58b79678ff24a"
  },
  {
    "url": "assets/js/11.eb77e978.js",
    "revision": "f96b4bb45b20fb02db8af85374c2c4c0"
  },
  {
    "url": "assets/js/12.02d36cc7.js",
    "revision": "b5b6bbc850ab779788214883a6c4a875"
  },
  {
    "url": "assets/js/13.e971f2fa.js",
    "revision": "a7cb6703987b540bd94cc73926a335e4"
  },
  {
    "url": "assets/js/14.70b34d37.js",
    "revision": "e6b0307090b0e612f553a548926bf24a"
  },
  {
    "url": "assets/js/15.acb3d5f2.js",
    "revision": "6968f95b5355a35fc1293bbe6cbf75a5"
  },
  {
    "url": "assets/js/16.f0a71b09.js",
    "revision": "d31db7a246d9bd9a56000364d9383678"
  },
  {
    "url": "assets/js/17.b37fa179.js",
    "revision": "b3cac650468463203553138884a7a3b3"
  },
  {
    "url": "assets/js/18.c07dd3f7.js",
    "revision": "553966e8b81124ead1db407b26487341"
  },
  {
    "url": "assets/js/19.b606e390.js",
    "revision": "1af21d2f5da615fa31e49667dfbf3f5c"
  },
  {
    "url": "assets/js/20.6d8d6947.js",
    "revision": "f12cdf03bab4f0b223acb7a2e2f7d17d"
  },
  {
    "url": "assets/js/21.1d079558.js",
    "revision": "e3a85a6b3b6d9d05bff9ccdd567693b8"
  },
  {
    "url": "assets/js/4.74a8c977.js",
    "revision": "5cda6b33516dbad826915574166bfdb4"
  },
  {
    "url": "assets/js/5.4562d4a0.js",
    "revision": "10887ec39865d143ca9dd9a473a3b305"
  },
  {
    "url": "assets/js/6.5d1e6418.js",
    "revision": "e87ab3287e9c512582b1876ad736eede"
  },
  {
    "url": "assets/js/7.98e6d6c5.js",
    "revision": "bff060c3c524a58de1fbf19f1aa5bd26"
  },
  {
    "url": "assets/js/8.94ac1892.js",
    "revision": "ffcbce5f6e2f320f5013ede792c0d6b3"
  },
  {
    "url": "assets/js/9.b8f77872.js",
    "revision": "28cdcf465f81fa7f0c67483e7fa285d0"
  },
  {
    "url": "assets/js/app.e8633044.js",
    "revision": "5f08c298e5c236363ccca389134dc9b2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.d4121097.js",
    "revision": "d124c0f7738f094fbc8e9faa45dc9839"
  },
  {
    "url": "avatar.jpg",
    "revision": "c4d36cf82a715f2fa2f9d6d33bc89ccb"
  },
  {
    "url": "categories/index.html",
    "revision": "73cb4a5834e65824f5f45af5318db78a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1528fd4c0146987cb494c5964a8b3569"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "419fa9e3f2d115d0b3c204ecf36f9aee"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2f628508b8ed7c06ad5e736d01255dc6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8104599309f2bcadf5a2c79528d23f18"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "86818e76c810b17e6d33b9bee8b007fb"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "690f5ab70eacd6caefd7e2bc1ecedbba"
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
    "revision": "bf5392777d8f72f7947513c7c1071954"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "js记录/js.html",
    "revision": "8021cd3615dc8c3917472ef122784c9d"
  },
  {
    "url": "tag/index.html",
    "revision": "1c1276f157fb71ec64405e5d019bda87"
  },
  {
    "url": "tag/JavaSE/index.html",
    "revision": "2f9ae3f1e6f07fd3f034e82db80bb99d"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "11fe35d856f03e9561e7171685ef93ab"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c640fda530331a9c003ea2e44a5d7214"
  },
  {
    "url": "tag/js分支/index.html",
    "revision": "c98699545434aac02a5778b9e729dc9e"
  },
  {
    "url": "tag/js基础/index.html",
    "revision": "8fbd24aea98b1508366e762097566d90"
  },
  {
    "url": "tag/js面试/index.html",
    "revision": "d6cac5f2fe0c4f42d5bf1a0e06bc0dcc"
  },
  {
    "url": "tag/Spring/index.html",
    "revision": "4d58148314ee16b596211295af3b6be1"
  },
  {
    "url": "tag/SpringBoot/index.html",
    "revision": "0eb810d1f03110f0d8009cfcd5a2f9a5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e647e54cd97e6fceb65e06258da8602d"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "c23f70b0cdb590ccf6fdb62f934712a3"
  },
  {
    "url": "tag/零基础/index.html",
    "revision": "7ff36ab55f158ebdf22ae5ddbdc18ad3"
  },
  {
    "url": "tag/面向对象/index.html",
    "revision": "9269a7e1788932912dbbd5d45ded0617"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d384dd23144f5606928282709745c35"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b415241ac3ab6dec918b045a6a3a7aaf"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5c983807a21291bfda82fb407365159a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "27d62fccc5d8f7bad19122a31eaf1f0a"
  },
  {
    "url": "技术文章/js基础/js.html",
    "revision": "90c75938270c2935b935f6fd73049a31"
  },
  {
    "url": "技术文章/js基础/js面试题.html",
    "revision": "6938635549f258fdbdb0f73e682187e6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "077eaad8ea0cd505e1dede0bcf7e016d"
  },
  {
    "url": "技术文章/vue/Vue面试题.html",
    "revision": "6caae2e6b6b17331baf53102225b7c42"
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
