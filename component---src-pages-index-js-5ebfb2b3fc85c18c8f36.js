(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(0),i=a.n(n),o=a(231),r=a(230),A=a(239),c=a(240),d=a(247),s=a(241),l=a(242),b=a(243),p=a(2);var g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.data,a=e.data.site.siteMetadata,n=t.allMdx.edges,i=this.props.location.href;return Object(p.d)(o.a,{location:this.props.location},Object(p.d)(r.a,{title:""+a.description,url:i}),Object(p.d)(c.a,{theme:"hero"},Object(p.d)("h1",null,a.title),Object(p.d)("p",null,a.description)),Object(p.d)(c.a,null,Object(p.d)(s.a,null,Object(p.d)(l.a,null,n.map(function(e){var t=e.node;return Object(p.d)(d.a,{key:t.fields.slug,type:"blog",node:t})})),Object(p.d)(b.a,null,Object(p.d)(A.a,null)))))},n}(i.a.Component);t.default=g;var u="1897115647"},224:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return l});var n=a(249),i=a.n(n),o=a(250),r=a.n(o),A=a(246),c=a(226);r.a.overrideThemeStyles=function(){var e;return(e={"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:c.c},"a:visited":{color:c.c},"a:hover, a:focus":{color:c.b},"ul, ol":{listStyle:"disc inside",marginLeft:0},"li > p":{display:"inline"}})[A.MOBILE_MEDIA_QUERY]={"ul, ol":{marginLeft:0}},e},r.a.baseFontSize="19px",r.a.baseLineHeight="1.68",r.a.scaleRatio=2,r.a.googleFonts=[{name:"Open Sans",styles:["700"]},{name:"Open Sans",styles:["400","400i","700","700i"]}],r.a.headerFontFamily=["Open Sans","sans-serif"],r.a.bodyFontFamily=["Open Sans","sans-serif"];var d=new i.a(r.a);var s=d.rhythm,l=(d.scale,s(36))},226:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"i",function(){return i}),a.d(t,"f",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"d",function(){return A}),a.d(t,"b",function(){return c}),a.d(t,"g",function(){return d}),a.d(t,"h",function(){return s}),a.d(t,"e",function(){return l});var n="-10",i="0",o="10",r="#D10003",A="#2B2D42",c="#0A2463",d="white",s="#333333",l={SMALLEST:"(min-width: "+"36em"+")",SMALL:"(min-width: "+"48em"+")",MEDIUM:"(min-width: "+"62em"+")",LARGE:"(min-width: "+"75em"+")"}},227:function(e,t,a){"use strict";var n=a(225),i=a(224),o=Object(n.a)("div",{target:"ecy2wsj0"})("margin-left:auto;margin-right:auto;max-width:",i.a,";");t.a=o},230:function(e,t,a){"use strict";a(229),a(28);var n=a(236),i=(a(0),a(251)),o=a.n(i),r=a(2);function A(e){var t=e.dateModified,a=e.datePublished,i=e.description,A=e.image,c=e.keywords,d=e.lang,s=e.meta,l=e.title,b=e.schemaType,p=e.url,g=e.wordCount,u=n.data,m=u.logo,f=u.site,h=i||f.siteMetadata.description,j=[{name:"description",content:h},{property:"og:title",content:l},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:h}],y=new Date(t).getFullYear(),O=p?p.split("/")[3]:"",w=""+f.siteMetadata.siteUrl+m.childImageSharp.fixed.src,E=null;A&&(j=[{property:"twitter:image",content:E=""+f.siteMetadata.siteUrl+A.src},{property:"og:image",content:E}].concat(j));return Object(r.d)(o.a,{htmlAttributes:{lang:d},title:l,titleTemplate:"%s | "+f.siteMetadata.title,meta:j.concat(s)},Object(r.d)("script",{type:"application/ld+json"},'\n        {\n          "@context" : "http://schema.org",\n          "@type" : "'+b+'",\n          "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+f.siteMetadata.siteUrl+'"\n          },\n          '+("BlogPosting"===b?'"articleSection" : "'+O+'",':"")+'\n          "name" : "'+l+'",\n          "headline" : "'+l+'",\n          "description" : "'+h+'",\n          '+(A?'"image": "'+E+'",':"")+'\n          "inLanguage" : "'+d+'",\n          "author" : "'+f.siteMetadata.author+'",\n          "creator" : "'+f.siteMetadata.author+'",\n          "publisher": {\n            "@type": "Organization",\n            "name": "'+f.siteMetadata.title+'",\n            "logo": {\n              "@type": "ImageObject",\n              "url": "'+w+'"\n            }\n          },\n          "accountablePerson" : "'+f.siteMetadata.author+'",\n          "copyrightHolder" : "'+f.siteMetadata.title+'",\n          "copyrightYear" : "'+y+'",\n          "datePublished": "'+a+'",\n          "dateModified" : "'+t+'",\n          "url" : "'+p+'",\n          '+(g?'"wordCount" : "'+g+'",':"")+'\n          "keywords" : ['+c.join(", ")+"]\n        }\n      "))}var c=new Date,d=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate();A.defaultProps={dateModified:d,datePublished:d,description:"",image:null,keywords:[],lang:"en",meta:[],schemaType:"WebPage",wordCount:null},t.a=A},231:function(e,t,a){"use strict";var n=a(225),i=a(0),o=a.n(i),r=a(2),A=a(82),c=a(252),d=(a(25),a(248),a(229),a(232)),s=a(149),l=a(228),b=a.n(l),p=a(224),g=a(226),u=a(233),m=a.n(u),f=a(234),h=a.n(f);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var y=Object(n.a)("header",{target:"e18zoque0"})("position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;max-width:",p.a,";margin-left:auto;margin-right:auto;padding:",Object(p.b)(.5),";background-color:",g.g,";&:before{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:",g.a,";display:block;width:100vw;height:100%;background-color:",g.g,';content:"";}'),O=Object(n.a)("a",{target:"e18zoque1"})("display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;line-height:1;text-decoration:none;text-transform:uppercase;color:",g.h," !important;"),w=Object(n.a)("a",{target:"e18zoque2"})("position:relative;overflow:hidden;display:block;width:",Object(p.b)(1.5),";height:",Object(p.b)(1.5),";box-shadow:none;outline:none;text-decoration:none;color:transparent;@media ",g.e.MEDIUM,'{display:none;}&[href="#menu-navigation"] > svg{fill:',g.h,";}> svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;width:100%;height:100%;padding:",Object(p.b)(.4),";fill:",g.g,";}"),E=Object(n.a)("nav",{target:"e18zoque3"})("position:fixed;top:0;left:0;z-index:",g.f,";display:flex;flex-direction:row;width:100vw;min-height:100vh;background:",g.d,";opacity:0;transform:translate3d(",Object(p.b)(2),",0,0);visibility:hidden;transition-delay:400ms,0ms,100ms;transition-duration:0ms,300ms,300ms;transition-property:visibility,opacity,transform;transition-timing-function:ease-in;@media ",g.e.MEDIUM,"{position:static;z-index:",g.i,";display:block;width:auto;min-height:auto;background:none;opacity:1;transform:none;transition:none;visibility:visible;}&.is-open{opacity:1;transform:none;visibility:visible;transition-delay:0ms,0ms,100ms;}"),B=Object(n.a)("ul",{target:"e18zoque4"})("display:block;width:100%;margin:0;padding:",Object(p.b)(1),";list-style:none;@media ",g.e.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;padding:0;white-space:nowrap;}"),v=Object(n.a)("li",{target:"e18zoque5"})("display:block;width:100%;margin:0;padding:0;@media ",g.e.MEDIUM,"{&:first-child{display:none;}}"),x=Object(n.a)(s.Link,{target:"e18zoque6"})("display:block;width:100%;margin:0;padding:",Object(p.b)(.5),";box-shadow:none;outline:none;text-decoration:none;color:",g.g,";&:visited{color:",g.g,";}@media ",g.e.MEDIUM,"{color:",g.h,";&:visited{color:",g.h,";}}"),k={name:"b20leo",styles:"width:100%;> svg{width:auto;right:0;transform:translate(0, -50%);left:initial;}"},M=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){e.preventDefault(),a.setState(function(e){return{menuOpen:!e.menuOpen}})},a.state={menuOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.menu,a=e.title;return Object(r.d)(y,null,Object(r.d)(O,{href:"/"},Object(r.d)(b.a,{fixed:this.props.data.logo.childImageSharp.fixed,alt:a,style:{marginRight:Object(p.b)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})," ","Badmintons Best"),Object(r.d)(w,{href:"#menu-navigation",onClick:this.toggleMenu},Object(r.d)(m.a,null)," Open Menu"),Object(r.d)(E,{id:"menu-navigation",className:this.state.menuOpen?"is-open":""},Object(r.d)(B,null,Object(r.d)(v,{key:"0"},Object(r.d)(w,{href:"#close-menu-navigation",onClick:this.toggleMenu,css:k},Object(r.d)(h.a,null)," Close Menu")),t.map(function(e,t){return Object(r.d)(v,{key:t},Object(r.d)(x,{to:e.link},e.text))}))))},n}(i.Component),Q=function(e){return Object(r.d)(s.StaticQuery,{query:"229204878",render:function(t){return Object(r.d)(M,j({data:t},e))},data:d})},I=a(235),C=a(227),D=Object(n.a)("footer",{target:"eegg9ep0"})("padding:",Object(p.b)(1)," 0;background:",g.d,";color:white;@media ",g.e.MEDIUM,"{padding-top:",Object(p.b)(2),";padding-bottom:",Object(p.b)(2),";}"),Y=Object(n.a)("div",{target:"eegg9ep1"})("@media ",g.e.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(p.b)(1.5),";}"),R=Object(n.a)("div",{target:"eegg9ep2"})("& + &{margin-top:",Object(p.b)(1.5),";}@media ",g.e.MEDIUM,"{flex:1 1 0;margin-top:0;padding-left:",Object(p.b)(1.5),";& + &{margin-top:0;}}& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}"),S=Object(n.a)(s.Link,{target:"eegg9ep3"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),U=Object(n.a)("a",{target:"eegg9ep4"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),L=function(){var e=I.data.site.siteMetadata,t=e.social,a=e.contact;return Object(r.d)(D,null,Object(r.d)(C.a,{style:{padding:"0 "+Object(p.b)(.5)}},Object(r.d)(Y,null,Object(r.d)(R,null,Object(r.d)("h3",null,"Legal Information"),Object(r.d)("p",null,"This site is owned and operated by Ramiel Ltd. Ramiel Ltd is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Ramiel Ltd is compensated for referring traffic and business to these companies. Copyright © Ramiel Ltd"),Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)(S,{to:"/terms-and-conditions"},"Terms and Conditions")),Object(r.d)("li",null,Object(r.d)(S,{to:"/privacy-policy"},"Privacy Policy")))),Object(r.d)(R,null,Object(r.d)("h3",null,"Contact Us"),Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)(U,{href:"https://youtube.com/"+t.youtube},"YouTube")),Object(r.d)("li",null,Object(r.d)(U,{href:"https://instagram.com/"+t.instagram},"Instagram")),Object(r.d)("li",null,Object(r.d)(U,{href:"https://twitter.com/"+t.twitter},"Twitter")),Object(r.d)("li",null,Object(r.d)(U,{href:"https://facebook.com/"+t.twitter},"Facebook")),Object(r.d)("li",null,Object(r.d)(U,{href:"mailto:"+a.email},"Email")))))),Object(r.d)(C.a,{style:{textAlign:"center",marginTop:Object(p.b)(1.5),padding:"0 "+Object(p.b)(.5)}},"© ",(new Date).getFullYear()," Badmintons Best, Built with"," ",Object(r.d)("a",{style:{color:"white"},href:"https://www.gatsbyjs.org"},"Gatsby")))};var N={Tweet:c.a},G=Object(n.a)("div",{target:"ea5p3660"})(),P=Object(n.a)("div",{target:"ea5p3661"})(),T=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return Object(r.d)(A.MDXProvider,{components:N},Object(r.d)(G,null,Object(r.d)(r.a,{styles:Object(r.c)()}),Object(r.d)(Q,null),Object(r.d)(P,null,e),Object(r.d)(L,null)))},n}(o.a.Component);t.a=T},232:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCBAP/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgME/9oADAMBAAIQAxAAAAGlqR2T1daGGu6Gh7Bpf//EABsQAQACAwEBAAAAAAAAAAAAAAIBAxESEwAE/9oACAEBAAEFAuu8ZxMfQPU7G19CBS7IsEQ7o2JME//EABoRAQACAwEAAAAAAAAAAAAAAAEAAxARQVH/2gAIAQMBAT8BawdEaa/Ycx//xAAYEQACAwAAAAAAAAAAAAAAAAAAARAREv/aAAgBAgEBPwGzTn//xAAgEAACAgAGAwAAAAAAAAAAAAAAAQIRAxIhMTJBUYGh/9oACAEBAAY/Anl6PbZUnqhwq34G3D6WkLEXIUepMpbH/8QAIBABAAIBAgcAAAAAAAAAAAAAAQARIUFRMWFxgbHR8P/aAAgBAQABPyFNljyGZuwzsQF0Wp6ymcysq+xFWcNacvREzkvjCmoIXvLBUoNQsdDSf//aAAwDAQACAAMAAAAQnAcB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAUWH/2gAIAQMBAT8Qsoj73AYy5qtyq13/xAAZEQEAAgMAAAAAAAAAAAAAAAABABARQVH/2gAIAQIBAT8QGmWHGO6//8QAIBABAAICAgEFAAAAAAAAAAAAAQARITFBgcFRYXGR8P/aAAgBAQABPxBJ2VOmkvSUncz6uGuQfKSo7BZhoXXbXUC8ZKjIEcvufuPMDamr4D6wuLIK5fzMYh1oOKemGXAfat+IK8tAn//Z",width:50,height:50,src:"/static/aa5bffb11c463c6ebfcf01f9697c7915/99438/badmintonsbest-logo.jpg",srcSet:"/static/aa5bffb11c463c6ebfcf01f9697c7915/99438/badmintonsbest-logo.jpg 1x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/aba1d/badmintonsbest-logo.jpg 1.5x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/b315d/badmintonsbest-logo.jpg 2x"}}},site:{siteMetadata:{title:"Badmintons Best",menu:[{text:"Recommended Gear",link:"/recommended-gear/"},{text:"Beginners Guide",link:"/categories/beginners-info/"},{text:"The Blog",link:"/blog/"},{text:"About Us",link:"/about/"}]}}}}},233:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,[n.createElement("g",{key:0},n.createElement("g",{id:"menu"},n.createElement("path",{d:"M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"}))),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}i.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"459px",height:"459px",viewBox:"0 0 459 459",style:{enableBackground:"new 0 0 459 459"},xmlSpace:"preserve"},e.exports=i,i.default=i},234:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,[n.createElement("g",{key:0},n.createElement("path",{d:"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\r\n\t\tc-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\r\n\t\tC1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\r\n\t\ts1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"})),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}i.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 47.971 47.971",style:{enableBackground:"new 0 0 47.971 47.971"},xmlSpace:"preserve"},e.exports=i,i.default=i},235:function(e){e.exports={data:{site:{siteMetadata:{social:{facebook:"BadmintonsBest",instagram:"badmintonsbest",twitter:"BadmintonsBest",youtube:"UCszQfT2se87xk2TqrS7xHEQ"},contact:{email:"info@badmintonsbest.com"}}}}}},236:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABoUlEQVQ4y4WTzStEURiHzzVkGjbULFn4KCRxpzuLCTWaZExDWfhsRCl2NNmQFMpGs7Oj2FvZsLDwB1iYoVBko8iCsrIcz5n7DrdrPk49ve/5nXN+9733vFcpx8g4IhiS96SVaiKGwU/eJrrHfa7gyC9ysB7amUfBhH7ohW6N+ttX3NBRoR+WIQ5BGIKQmHfBIoyLoVHK0CMxwcYvSOiqiDPyysPkg5Ai/4AaVabCSonbb0pliYcwAmOCrnACHm7s9W7ZX1HSkAo2X+wDL+Q7xC2J63AkZt/QWc6wQgwj9/YhzQXsox3oCI9P6MzvHZ+o+KWk/27v/N02jLgu7PjT1mfd7fOv98QoX2Ud2q1+1bwOXrhCT2ntzOs1XonJxsbc2UAg8GtmyPUbrtuuRo9rI5m3woDOs+w99flUh2UZAdM0MDNyhmkxKdX1Gdee/MgWEtN2A7eABc2whDYOfRmbGExLgwev+abP/DkntbXRTssKWabZQIUm1bWDqZ++AUlYkbZYgwWYglWYk7V52MVw8o71y6qqPVz6YBTDUczC+MZ+ALYguYm5iS5XAAAAAElFTkSuQmCC",width:1200,height:756,src:"/static/7e31ccdda506dba41a1d03f767a25b73/f3583/badmintonsbest-logo-full.png",srcSet:"/static/7e31ccdda506dba41a1d03f767a25b73/f3583/badmintonsbest-logo-full.png 1x,\n/static/7e31ccdda506dba41a1d03f767a25b73/bbee5/badmintonsbest-logo-full.png 1.5x,\n/static/7e31ccdda506dba41a1d03f767a25b73/0ef64/badmintonsbest-logo-full.png 2x"}}},site:{siteMetadata:{title:"Badmintons Best",description:"Learning from the best, realise your true potential 🔥 🏸 💯",author:"Liam Walsh",siteUrl:"https://www.badmintonsbest.com"}}}}},238:function(e,t,a){"use strict";var n=a(225),i=a(149),o=a(224),r=Object(n.a)(i.Link,{target:"e5s94850"})("display:inline-block;padding:",Object(o.b)(.3)," ",Object(o.b)(.7),";border:1px solid;border-radius:5px;text-decoration:none;");t.a=r},239:function(e,t,a){"use strict";var n=a(244),i=(a(0),a(228)),o=a.n(i),r=a(238),A=a(224),c=a(2);t.a=function(){var e=n.data,t=e.site.siteMetadata.author;return Object(c.d)("div",{style:{}},Object(c.d)("h3",{style:{marginTop:0}},"About"),Object(c.d)(o.a,{fluid:e.avatar.childImageSharp.fluid,alt:t,style:{marginBottom:Object(A.b)(1)}}),Object(c.d)("p",null,"Hi"," ",Object(c.d)("span",{role:"img","aria-label":"waving hand"},"👋")," ","I'm Liam. I've been playing Badminton for over 17 years. Second only to my family, Badminton is my biggest passion in life. If I'm not with family I'm either playing or watching Badminton with the mission to be the best I can be. I'm a qualified Badminton coach with a UKCC Level 2 Certificate from Badminton England. This site is where I can share what I've learnt from playing, coaching and from watching the best in the world! BadmintonsBest."),Object(c.d)("p",null,Object(c.d)(r.a,{to:"/about"},"Read more")))}},240:function(e,t,a){"use strict";var n=a(225),i=a(0),o=a.n(i),r=a(2),A=a(227),c=a(224),d=a(226);var s=Object(n.a)("div",{target:"e1tdh1ze0"})("&.hero{background:",d.c,";background:-webkit-linear-gradient( to right,",d.c,",",d.d," );background:linear-gradient(to right,",d.c,",",d.d,");color:white;}"),l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.children,a=e.theme;return Object(r.d)(s,{className:a},Object(r.d)(A.a,{css:Object(r.c)("padding:",Object(c.b)(1)," ",Object(c.b)(.5),";@media ",d.e.MEDIUM,"{padding-top:",Object(c.b)(2),";padding-bottom:",Object(c.b)(2),";}")},t))},n}(o.a.Component);t.a=l},241:function(e,t,a){"use strict";var n=a(225),i=a(224),o=a(226),r=Object(n.a)("div",{target:"e1svbmn50"})("@media ",o.e.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(i.b)(2.5),";}");t.a=r},242:function(e,t,a){"use strict";var n=a(225),i=a(224),o=a(226),r=Object(n.a)("main",{target:"e1ijqqu0"})("twitter-widget{margin-top:0 !important;margin-bottom:",Object(i.b)(1)," !important;}@media ",o.e.MEDIUM,"{flex:1 1 70%;max-width:",Object(i.b)(22),";padding-left:",Object(i.b)(2.5),";}");t.a=r},243:function(e,t,a){"use strict";var n=a(225),i=a(224),o=a(226),r=Object(n.a)("aside",{target:"e1oe3q8y0"})("@media ",o.e.MEDIUM,"{flex:1 1 30%;padding-left:",Object(i.b)(2.5),";}> * + *{margin-top:",Object(i.b)(2),";}");t.a=r},244:function(e){e.exports={data:{avatar:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAACBAUD/9oADAMBAAIQAxAAAAHBatSDz2loGa4rX6Dcf//EABsQAAICAwEAAAAAAAAAAAAAAAABAhEDEBIh/9oACAEBAAEFAqJYeTkivWUW7eRy1//EABoRAAICAwAAAAAAAAAAAAAAAAABAhESITH/2gAIAQMBAT8BT02ZDirJdP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAhARMv/aAAgBAgEBPwGXSRlI/8QAGRAAAQUAAAAAAAAAAAAAAAAAEQABAhAg/9oACAEBAAY/AkWmcm//xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMUFxgf/aAAgBAQABPyHnOuSp7kYxkrs0PH5HUCIUSNC0UeJd7P/aAAwDAQACAAMAAAAQJBh9/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARUf/aAAgBAwEBPxAtkVI0gDDt/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMRD/2gAIAQIBAT8QDQ5t2YJ//8QAGRABAQEBAQEAAAAAAAAAAAAAAREAITFB/9oACAEBAAE/EByRQC/KzAaRQAd7Obp5m4L6DKZQefEbcdZE5URzbJ8Mt91AXqb/2Q==",aspectRatio:1,src:"/static/6d538818ec4056b7794d89b5e176e574/9c4e5/profile-pic.jpg",srcSet:"/static/6d538818ec4056b7794d89b5e176e574/490c5/profile-pic.jpg 88w,\n/static/6d538818ec4056b7794d89b5e176e574/37f59/profile-pic.jpg 175w,\n/static/6d538818ec4056b7794d89b5e176e574/9c4e5/profile-pic.jpg 350w,\n/static/6d538818ec4056b7794d89b5e176e574/cd7dd/profile-pic.jpg 525w,\n/static/6d538818ec4056b7794d89b5e176e574/1ef8b/profile-pic.jpg 700w,\n/static/6d538818ec4056b7794d89b5e176e574/f5d72/profile-pic.jpg 1264w",sizes:"(max-width: 350px) 100vw, 350px"}}},site:{siteMetadata:{author:"Liam Walsh"}}}}},247:function(e,t,a){"use strict";var n=a(225),i=a(0),o=a.n(i),r=a(149),A=a(228),c=a.n(A),d=a(224),s=a(2);var l=Object(n.a)("div",{target:"elm5g250"})("& + &{margin-top:",Object(d.b)(2),";}"),b=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.node,a=e.variant,n=t.frontmatter.title||t.fields.slug,i=!!t.frontmatter.featured&&t.frontmatter.featured.childImageSharp.fluid;return Object(s.d)(l,null,i&&Object(s.d)(r.Link,{style:{boxShadow:"none",display:"block",marginBottom:Object(d.b)(1)},to:t.fields.slug},Object(s.d)(c.a,{fluid:i})),a&&"mini"===a?Object(s.d)("h4",{style:{marginTop:0}},Object(s.d)(r.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)):Object(s.d)("h2",{style:{marginTop:0}},Object(s.d)(r.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),Object(s.d)("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},style:{marginBottom:0}}))},n}(o.a.Component);t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-5ebfb2b3fc85c18c8f36.js.map