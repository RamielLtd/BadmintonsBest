(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{217:function(t,e,A){"use strict";A.r(e),A.d(e,"pageQuery",function(){return m});var n=A(0),r=A.n(n),o=A(248),a=A(258),c=A(234),i=A(230),u=A(227),p=A(239),l=A(231),d=A(240),s=A(241),f=A(242),b=A(243),j=A(235),h=A(2);var g=function(t){var e,A;function n(){return t.apply(this,arguments)||this}return A=t,(e=n).prototype=Object.create(A.prototype),e.prototype.constructor=e,e.__proto__=A,n.prototype.render=function(){var t=this.props.data.mdx,e=this.props.location.href,A=t.parent.mtime,n=t.frontmatter.date,r=t.frontmatter.schemaType;return Object(h.d)(c.a,{location:this.props.location},Object(h.d)(i.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt,dateModified:A,datePublished:n,schemaType:r,url:e}),Object(h.d)(l.a,null,Object(h.d)(d.a,null,Object(h.d)(j.a,null,Object(h.d)("h1",{style:{marginTop:0,marginBottom:0}},t.frontmatter.title)),Object(h.d)(s.a,null,Object(h.d)(f.a,null,Object(h.d)(o.MDXRenderer,null,t.body),Object(h.d)("hr",{style:{marginBottom:Object(u.d)(1)}}),Object(h.d)(a.a,null)),Object(h.d)(b.a,null,Object(h.d)(p.a,null))))))},n}(r.a.Component);e.default=g;var m="959266463"},235:function(t,e,A){"use strict";var n=A(226),r=A(227),o=A(228),a=Object(n.a)("header",{target:"edjjvsm0"})("position:relative;margin-bottom:",Object(r.d)(1.5),";padding-bottom:",Object(r.d)(1.5),";&::after{position:absolute;bottom:0;left:0;display:inline-block;height:2px;width:10em;max-width:100%;background-color:",o.d,';content:"";opacity:0.5;}*:first-child{margin-top:0;padding-top:0;}*:last-child{margin-bottom:0;padding-bottom:0;}');e.a=a},236:function(t,e,A){var n=A(1),r=A(64),o=A(35),a=A(7),c=A(8),i=A(11),u=A(157),p=(A(5).Reflect||{}).construct,l=i(function(){function t(){}return!(p(function(){},[],t)instanceof t)}),d=!i(function(){p(function(){})});n(n.S+n.F*(l||d),"Reflect",{construct:function(t,e){o(t),a(e);var A=arguments.length<3?t:o(arguments[2]);if(d&&!l)return p(t,e,A);if(t==A){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(u.apply(t,n))}var i=A.prototype,s=r(c(i)?i:Object.prototype),f=Function.apply.call(t,s,e);return c(f)?f:s}})},248:function(t,e,A){var n=A(249);t.exports={MDXRenderer:n}},249:function(t,e,A){function n(t,e,A){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,A){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return A&&r(o,A.prototype),o}).apply(null,arguments)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,A=new Array(t.length);e<t.length;e++)A[e]=t[e];return A}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),A.push.apply(A,n)}return A}function c(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?a(A,!0).forEach(function(e){i(t,e,A[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):a(A).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))})}return t}function i(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}A(43),A(13),A(20),A(81),A(150),A(61),A(19),A(12),A(49),A(6),A(236),A(236),A(81),A(150),A(49),A(61),A(43),A(19),A(12),A(13),A(6),A(20);var u=A(0),p=A(83),l=p.useMDXComponents,d=p.mdx,s=A(110).useMDXScope;t.exports=function(t){var e=t.scope,A=t.components,r=t.children,a=function(t,e){if(null==t)return{};var A,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)A=o[n],e.indexOf(A)>=0||(r[A]=t[A]);return r}(t,["scope","components","children"]),i=l(A),p=s(e),f=u.useMemo(function(){if(!r)return null;var t=c({React:u,mdx:d},p),e=Object.keys(t),A=e.map(function(e){return t[e]});return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(A)))},[r,e]);return u.createElement(f,c({components:i},a))}},258:function(t,e,A){"use strict";A(233);var n=A(259),r=(A(0),A(229)),o=A.n(r),a=A(227),c=A(2);e.a=function(){var t=n.data,e=t.site.siteMetadata.author;return Object(c.d)("div",{style:{display:"flex"}},Object(c.d)(o.a,{fixed:t.avatar.childImageSharp.fixed,alt:e,style:{marginRight:Object(a.d)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),Object(c.d)("p",{style:{marginBottom:0}},"Written by ",Object(c.d)("strong",null,e)," who lives in Manchester, England. Working as a Software Engineer but moonlighting as a dad, Badminton player/coach and creator of BadmintonsBest."))}},259:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAACBAUD/9oADAMBAAIQAxAAAAHBatSDz2loGa4rX6Dcf//EABsQAAICAwEAAAAAAAAAAAAAAAABAhEDEBIh/9oACAEBAAEFAqJYeTkivWUW7eRy1//EABoRAAICAwAAAAAAAAAAAAAAAAABAhESITH/2gAIAQMBAT8BT02ZDirJdP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAhARMv/aAAgBAgEBPwGXSRlI/8QAGRAAAQUAAAAAAAAAAAAAAAAAEQABAhAg/9oACAEBAAY/AkWmcm//xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMUFxgf/aAAgBAQABPyHnOuSp7kYxkrs0PH5HUCIUSNC0UeJd7P/aAAwDAQACAAMAAAAQJBh9/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARUf/aAAgBAwEBPxAtkVI0gDDt/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMRD/2gAIAQIBAT8QDQ5t2YJ//8QAGRABAQEBAQEAAAAAAAAAAAAAAREAITFB/9oACAEBAAE/EByRQC/KzAaRQAd7Obp5m4L6DKZQefEbcdZE5URzbJ8Mt91AXqb/2Q==",width:50,height:50,src:"/static/6d538818ec4056b7794d89b5e176e574/99438/profile-pic.jpg",srcSet:"/static/6d538818ec4056b7794d89b5e176e574/99438/profile-pic.jpg 1x,\n/static/6d538818ec4056b7794d89b5e176e574/aba1d/profile-pic.jpg 1.5x,\n/static/6d538818ec4056b7794d89b5e176e574/b315d/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Liam Walsh"}}}}}}]);
//# sourceMappingURL=component---src-templates-page-js-5a4ea64953f3db5df064.js.map