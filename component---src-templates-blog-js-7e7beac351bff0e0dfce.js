(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{207:function(t,e,o){"use strict";o.r(e);o(45),o(12);var a=o(9),n=o(0),r=o.n(n),i=o(219),l=o(218),d=o(210),c=o(212),p=o(209),s=Object(d.a)(c.a,{target:"e5s94850"})("display:block;padding:",Object(p.b)(.3)," ",Object(p.b)(.7),";border:1px solid;border-radius:5px;text-decoration:none;"),b=o(221),u=o(214),g=o(222),j=o(223),m=o(224),O=o(225),f=o(216),h=o(215),y=o(220),v=Object(d.a)("nav",{target:"e1konmbv0"})("display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;margin-top:",Object(p.b)(2),";");o.d(e,"pageQuery",function(){return x});var w=function(t){var e,o;function n(){return t.apply(this,arguments)||this}return o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,n.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,e=this.props.data.site.siteMetadata.description,o=this.props.data.allMarkdownRemark.edges,n=this.props.location.href,r=this.props.pageContext,d=r.currentPage,c=1===d,p=d===r.numPages,w=d-1==1?"/blog":"/blog/page/"+(d-1).toString(),x="/blog/page/"+(d+1).toString();return Object(a.d)(i.a,{location:this.props.location},Object(a.d)(l.a,{title:t,description:e,url:n}),Object(a.d)(u.a,null,Object(a.d)(g.a,null,Object(a.d)(f.a,null,Object(a.d)("h1",{style:{marginTop:0,marginBottom:0}},"Blog")),Object(a.d)(j.a,null,Object(a.d)(m.a,null,o.map(function(t){var e=t.node;return Object(a.d)(y.a,{key:e.fields.slug,type:"blog",node:e})}),Object(a.d)(v,null,!c&&Object(a.d)(s,{to:w,className:"pagination-link",rel:"prev"},"← Newer Posts"),!p&&Object(a.d)(s,{to:x,className:"pagination-link",rel:"next"},"Older Posts →"))),Object(a.d)(O.a,null,Object(a.d)(h.a,{slug:"sidebar-unit"}),Object(a.d)(b.a,null))))))},n}(r.a.Component),x=(e.default=w,"1984542373")},216:function(t,e,o){"use strict";var a=o(210),n=o(209),r=o(211),i=Object(a.a)("header",{target:"edjjvsm0"})("position:relative;margin-bottom:",Object(n.b)(1.5),";padding-bottom:",Object(n.b)(1.5),";&::after{position:absolute;bottom:0;left:0;display:inline-block;height:2px;width:10em;max-width:100%;background-color:",r.g,';content:"";opacity:0.5;}*:first-child{margin-top:0;padding-top:0;}*:last-child{margin-bottom:0;padding-bottom:0;}');e.a=i},220:function(t,e,o){"use strict";var a=o(210),n=o(9),r=o(0),i=o.n(r),l=o(212),d=o(213),c=o.n(d),p=o(209);var s=Object(a.a)("div",{target:"elm5g250"})("& + &{margin-top:",Object(p.b)(2),";}"),b=function(t){var e,o;function a(){return t.apply(this,arguments)||this}return o=t,(e=a).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,a.prototype.render=function(){var t=this.props,e=t.node,o=t.variant,a=e.frontmatter.title||e.fields.slug,r=!!e.frontmatter.featured&&e.frontmatter.featured.childImageSharp.fluid;return Object(n.d)(s,null,r&&Object(n.d)(l.a,{style:{boxShadow:"none",display:"block",marginBottom:Object(p.b)(1)},to:e.fields.slug},Object(n.d)(c.a,{fluid:r})),o&&"mini"===o?Object(n.d)("h4",{style:{marginTop:0}},Object(n.d)(l.a,{style:{boxShadow:"none"},to:e.fields.slug},a)):Object(n.d)("h2",{style:{marginTop:0}},Object(n.d)(l.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),Object(n.d)("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},style:{marginBottom:0}}))},a}(i.a.Component);e.a=b}}]);
//# sourceMappingURL=component---src-templates-blog-js-7e7beac351bff0e0dfce.js.map