(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[688],{67228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},23646:function(t,e,r){var n=r(67228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},69100:function(t,e,r){var n=r(99489),o=r(57067);function a(e,r,u){return o()?(t.exports=a=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=a=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a},t.exports.__esModule=!0,t.exports.default=t.exports),a.apply(null,arguments)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},57067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},46860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},98206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,e,r){var n=r(23646),o=r(46860),a=r(60379),u=r(98206);t.exports=function(t){return n(t)||o(t)||a(t)||u()},t.exports.__esModule=!0,t.exports.default=t.exports},60379:function(t,e,r){var n=r(67228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},69881:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(67294),o=r(70977),a=r(35510),u=r(46725),s=r(49758),c=r(61930),i=r(54917),p=["32px","16px","8px","4px"].map((function(t){return"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"})),l=function(t){var e=t.data.post;return(0,o.tZ)(s.Z,null,(0,o.tZ)(i.Z,{title:e.title,description:e.description?e.description:e.excerpt,image:e.banner?e.banner.childImageSharp.resize.src:void 0,pathname:e.slug,canonicalUrl:e.canonicalUrl}),(0,o.tZ)(a.X6,{as:"h1",variant:"styles.h1"},e.title),(0,o.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,o.tZ)("time",null,e.date),e.tags&&(0,o.tZ)(n.Fragment,null," — ",(0,o.tZ)(c.Z,{tags:e.tags})),e.timeToRead&&" — ",e.timeToRead&&(0,o.tZ)("span",null,e.timeToRead," min read")),(0,o.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:p.join(", ")},variant:"layout.content"}},(0,o.tZ)(u.MDXRenderer,null,e.body)))};var f=function(t){var e=Object.assign({},t);return n.createElement(l,e)}},61930:function(t,e,r){"use strict";var n=r(67294),o=r(35510),a=r(25444),u=r(71299),s=r(80126);e.Z=function(t){var e=t.tags,r=(0,u.Z)(),c=r.tagsPath,i=r.basePath;return n.createElement(n.Fragment,null,e.map((function(t,e){return n.createElement(n.Fragment,{key:t.slug},!!e&&", ",n.createElement(o.rU,{as:a.Link,to:(0,s.Z)("/"+i+"/"+c+"/"+t.slug)},t.name))})))}},46725:function(t,e,r){var n=r(93395);t.exports={MDXRenderer:n}},93395:function(t,e,r){var n=r(69100),o=r(319),a=r(59713),u=r(37316),s=["scope","children"];function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r(67294),l=r(64983).mdx,f=r(89480).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,a=u(t,s),c=f(e),d=p.useMemo((function(){if(!r)return null;var t=i({React:p,mdx:l},c),e=Object.keys(t),a=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,e]);return p.createElement(d,i({},a))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-4c91799552054e74dab7.js.map