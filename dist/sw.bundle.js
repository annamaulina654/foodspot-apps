if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,f)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const r=e=>a(e,c),d={module:{uri:c},exports:s,require:r};i[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(f(...e),s)))}}define(["./workbox-3bd9af45"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"107.bundle.js",revision:"ff71e733aab7b57c4b6254e2e7909e60"},{url:"27.bundle.js",revision:"15a9a70d8fb99bb145291476ab008480"},{url:"39.bundle.js",revision:"cc95075a1dccee270761d7426c7540c7"},{url:"app.webmanifest",revision:"387e6d78ef45c2d2bd79ef7c8b17c9f6"},{url:"app~05b0fc3f.bundle.js",revision:"6f58080f30547f9ae559a13cb97c6fbd"},{url:"app~05b0fc3f.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~56591076.bundle.js",revision:"d570054c796f061e05c0056255c612f1"},{url:"app~56591076.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~8d4244f7.bundle.js",revision:"d3a8e2ce21b857919ec38a5c628fa796"},{url:"app~a51fa3f5.bundle.js",revision:"127c778ff522ab141c8fe67e08477a62"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"c77de2ab728ed38c98b0939bb4b639fc"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"e2b0c583f7854c6a937944125a97b34a"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"db88bd58eb4d08b6e26bafaa5e7d1cfc"},{url:"data/DATA.json",revision:"59ea74bf083abc9dedf493d88f202850"},{url:"favicon.png",revision:"feb0d53ee9f45993fa0249c314d8abf7"},{url:"icons/favicon_11zon (1).png",revision:"a32615dc4ae383db599ee4529fefaa5d"},{url:"icons/favicon_11zon (2).png",revision:"67bc7b8ee460a952c4f40ab32764e539"},{url:"icons/favicon_11zon (3).png",revision:"e1719e1992187e46b4381ebe5416a41a"},{url:"icons/favicon_11zon (4).png",revision:"32592e397e5945791c1c5abe683fd7ba"},{url:"icons/favicon_11zon (5).png",revision:"826f0188bcffb44ea1f84eb8cbf0aaf3"},{url:"icons/favicon_11zon (6).png",revision:"0d63cb939d3c636815b47fff2fb68d8f"},{url:"icons/favicon_11zon (7).png",revision:"e77fc0a53705c5053cd16f926630b28d"},{url:"icons/favicon_11zon.png",revision:"0b5ba67a298f5408a770558c7b19c7fc"},{url:"images/testi/testimonial-1.jpg",revision:"64a5d16c40afde3d3c2109477c217bfd"},{url:"images/testi/testimonial-4.jpg",revision:"efa63a57f8da299aa8f4f143c2eb4404"},{url:"index.html",revision:"5d499c349916168d79d0ddc58e41b204"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"therestaurantdb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"therestaurantdb-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
