/*! For license information please see component---src-templates-index-template-index-template-tsx-eb2d71317bba5c65ad6e.js.LICENSE.txt */
(self.webpackChunkblogger=self.webpackChunkblogger||[]).push([[574],{4184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},8988:function(e,t,a){"use strict";a.d(t,{f:function(){return o}});var n=a(7294),r=a(4854),l="Feed-module--link--6123b";var o=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(r.Link,{to:e.node.fields.categorySlug,className:l},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(r.Link,{className:l,to:e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement(r.Link,{className:"Feed-module--more--51a4e",to:e.node.fields.slug},"Read")))))}},9014:function(e,t,a){"use strict";a.d(t,{t:function(){return c}});var n=a(7294),r=a(4184),l=a.n(r),o=a(4854),i=a(100),s="Pagination-module--disable--7e105";var c=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:r,hasPrevPage:c}=e;const d=l()("Pagination-module--previousLink--5590d",{[s]:!c}),m=l()("Pagination-module--nextLink--532ff",{[s]:!r});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(o.Link,{rel:"prev",to:c?t:"/",className:d},i.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(o.Link,{rel:"next",to:r?a:"/",className:m},i.X.NEXT_PAGE)))}},5886:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(8988),l=a(3425),o=a(3578),i=a(9014),s=a(9848),c=a(7783);t.default=e=>{let{data:t,pageContext:a}=e;const{title:d,subtitle:m}=(0,c.$W)(),{pagination:u}=a,{currentPage:g,hasNextPage:f,hasPrevPage:p,prevPagePath:P,nextPagePath:v}=u,{edges:h}=t.allMarkdownRemark,E=g>0?"Posts - Page "+g+" - "+d:d;return n.createElement(l.A,{title:E,description:m},n.createElement(s.Y,{isIndex:!0}),n.createElement(o.T,null,n.createElement(r.f,{edges:h}),n.createElement(i.t,{prevPagePath:P,nextPagePath:v,hasPrevPage:p,hasNextPage:f})))}}}]);
//# sourceMappingURL=component---src-templates-index-template-index-template-tsx-eb2d71317bba5c65ad6e.js.map