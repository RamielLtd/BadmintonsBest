(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(A,e,t){"use strict";t.r(e);var a=t(9),o=t(0),n=t.n(o),i=t(213),s=t.n(i),r=t(257),d=t(219),c=t(218),l=t(209),h=t(221),f=t(234),g=t(210),u=t(261),m=t(212),p=t(220),B=(t(61),t(47),t(29),t(30),t(12),t(57),t(262)),b=function(){function A(A,e){this.articles=A.edges.filter(function(A){return A.node.fields.slug!==e}),this.currentArticleSlug=e,this.maxArticles=3,this.categories=[],this.tags=[]}var e=A.prototype;return e.setMaxArticles=function(A){return this.maxArticles=A,this},e.setCategories=function(A){return this.categories=A,this},e.setTags=function(A){return this.tags=A,this},e.getArticles=function(){var A=this.categories,e=this.tags,t=this.articles,a=this.maxArticles,o={};function n(A){return A.node.fields.slug}function i(A){var e=n(A);o.hasOwnProperty(e)||(o[e]={article:A,points:0})}function s(A,e){var t=n(A);A.node.frontmatter.categories.forEach(function(A){Object(B.includes)(e,A)&&(o[t].points+=2)})}function r(A,e){var t=n(A);A.node.frontmatter.tags.forEach(function(A){Object(B.includes)(e,A)&&(o[t].points+=1)})}var d=t,c=Array.isArray(d),l=0;for(d=c?d:d[Symbol.iterator]();;){var h;if(c){if(l>=d.length)break;h=d[l++]}else{if((l=d.next()).done)break;h=l.value}var f=h;i(f),A&&A.length>0&&s(f,A),e&&e.length>0&&r(f,e)}var g=Object.keys(o).map(function(A){return o[A]});return Object(B.orderBy)(g,["points"],["desc"]).splice(0,a)},A}(),E=t(211),j=Object(g.a)("section",{target:"e6xu66v0"})(),w=Object(g.a)("div",{target:"e6xu66v1"})("@media ",E.c.SMALL,"{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;margin-left:-",Object(l.b)(1),";& > *{flex:1 1 50%;margin:0 !important;padding-left:",Object(l.b)(1),";}}"),Q=function(A){var e=A.articles;return Object(a.d)(j,null,Object(a.d)("h3",{style:{marginTop:0}},"Related Content"),Object(a.d)(w,null,e.map(function(A,e){return Object(a.d)(p.a,{type:"blog",node:A.article.node,variant:"mini",key:e})})))},y=function(A){return Object(a.d)(m.b,{query:"4217602052",render:function(e){var t=A.currentArticleSlug,o=A.categories,n=void 0===o?[]:o,i=A.tags,s=void 0===i?[]:i,r=e.posts,d=new b(r,t).setMaxArticles(2).setCategories(n).setTags(s).getArticles();return Object(a.d)(Q,{articles:d})},data:u})},Y=t(214),I=t(222),v=t(223),x=t(224),N=t(225),C=t(216),D=t(215);t.d(e,"pageQuery",function(){return S});var R=function(A){var e,t;function o(){return A.apply(this,arguments)||this}return t=A,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,o.prototype.render=function(){var A=this.props.data.site.siteMetadata.siteUrl,e=this.props.data.markdownRemark,t=e.fields.slug,o=this.props.location.href,i=e.frontmatter.categories,g=e.parent.mtime,u=e.frontmatter.date,m=e.frontmatter.featured?e.frontmatter.featured.childImageSharp.fluid:null,p=e.frontmatter.featuredSocial?e.frontmatter.featuredSocial.childImageSharp.fluid:null,B={url:""+(A+this.props.location.pathname),identifier:e.id,title:e.title};return Object(a.d)(d.a,{location:this.props.location},Object(a.d)(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt,dateModified:g,datePublished:u,image:p,schemaType:"BlogPosting",url:o}),Object(a.d)(Y.a,null,Object(a.d)(I.a,null,Object(a.d)(C.a,null,Object(a.d)("h1",{style:{marginTop:0}},e.frontmatter.title)),Object(a.d)(v.a,null,Object(a.d)(x.a,null,m&&Object(a.d)(s.a,{style:{marginBottom:Object(l.b)(1)},fluid:m}),Object(a.d)(D.a,{slug:"in-content-ad-unit"}),Object(a.d)("div",{dangerouslySetInnerHTML:{__html:e.html}}),Object(a.d)("hr",{style:{marginTop:Object(l.b)(1.5),marginBottom:Object(l.b)(1.5)}}),Object(a.d)(f.a,null),i.length>0&&Object(a.d)(n.a.Fragment,null,Object(a.d)("hr",{style:{marginTop:Object(l.b)(1.5),marginBottom:Object(l.b)(1.5)}}),Object(a.d)(y,{categories:i,currentArticleSlug:t})),Object(a.d)("hr",{style:{marginTop:Object(l.b)(1.5),marginBottom:Object(l.b)(1.5)}}),Object(a.d)(r.Disqus,{config:B})),Object(a.d)(N.a,null,Object(a.d)(D.a,{slug:"sidebar-unit"}),Object(a.d)(h.a,null))))))},o}(n.a.Component),S=(e.default=R,"1867200854")},216:function(A,e,t){"use strict";var a=t(210),o=t(209),n=t(211),i=Object(a.a)("header",{target:"edjjvsm0"})("position:relative;margin-bottom:",Object(o.b)(1.5),";padding-bottom:",Object(o.b)(1.5),";&::after{position:absolute;bottom:0;left:0;display:inline-block;height:2px;width:10em;max-width:100%;background-color:",n.g,';content:"";opacity:0.5;}*:first-child{margin-top:0;padding-top:0;}*:last-child{margin-bottom:0;padding-bottom:0;}');e.a=i},220:function(A,e,t){"use strict";var a=t(210),o=t(9),n=t(0),i=t.n(n),s=t(212),r=t(213),d=t.n(r),c=t(209);var l=Object(a.a)("div",{target:"elm5g250"})("& + &{margin-top:",Object(c.b)(2),";}"),h=function(A){var e,t;function a(){return A.apply(this,arguments)||this}return t=A,(e=a).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,a.prototype.render=function(){var A=this.props,e=A.node,t=A.variant,a=e.frontmatter.title||e.fields.slug,n=!!e.frontmatter.featured&&e.frontmatter.featured.childImageSharp.fluid;return Object(o.d)(l,null,n&&Object(o.d)(s.a,{style:{boxShadow:"none",display:"block",marginBottom:Object(c.b)(1)},to:e.fields.slug},Object(o.d)(d.a,{fluid:n})),t&&"mini"===t?Object(o.d)("h4",{style:{marginTop:0}},Object(o.d)(s.a,{style:{boxShadow:"none"},to:e.fields.slug},a)):Object(o.d)("h2",{style:{marginTop:0}},Object(o.d)(s.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),Object(o.d)("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},style:{marginBottom:0}}))},a}(i.a.Component);e.a=h},234:function(A,e,t){"use strict";t(217);var a=t(9),o=t(235),n=(t(0),t(213)),i=t.n(n),s=t(209);e.a=function(){var A=o.data,e=A.site.siteMetadata.author;return Object(a.d)("div",{style:{display:"flex"}},Object(a.d)(i.a,{fixed:A.avatar.childImageSharp.fixed,alt:e,style:{marginRight:Object(s.b)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),Object(a.d)("p",{style:{marginBottom:0}},"Written by ",Object(a.d)("strong",null,e)," who lives in Manchester, England. Working as a Software Engineer but moonlighting as a dad, Badminton player and creator of BadmintonsBest."))}},235:function(A){A.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAb/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAWnFQGihoxtjecGs/wD/xAAeEAACAgAHAAAAAAAAAAAAAAACAwEEABESISIyM//aAAgBAQABBQJZsJQk5RyOK08m+QZSNTdxTogu3//EABcRAAMBAAAAAAAAAAAAAAAAAAECECH/2gAIAQMBAT8BC5BP/8QAFREBAQAAAAAAAAAAAAAAAAAAEiD/2gAIAQIBAT8BUf/EACAQAAIABAcAAAAAAAAAAAAAAAABAgMRMhASIjFBUWH/2gAIAQEABj8CSl3bVEprzKLBEWj0vZCuCq7Gf//EABsQAQADAQEBAQAAAAAAAAAAAAEAESFBMWFx/9oACAEBAAE/Iajzs5ktcKrgrKbLpOM92kxsAFD8Ybheqv5KABUGyhgez//aAAwDAQACAAMAAAAQcPc8/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxAhtjLjZf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESEQ/9oACAECAQE/EKb0pFnP/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYXGB/9oACAEBAAE/ECnZFvAVfrh/SCGg+dmUB3keWgNG+t44fgSmPF/BcZnGoyYkPljpactqI2eWYAACuvc//9k=",width:50,height:50,src:"/static/1cec331301d026de0eed38a86dff2db6/9b664/profile-pic.jpg",srcSet:"/static/1cec331301d026de0eed38a86dff2db6/9b664/profile-pic.jpg 1x,\n/static/1cec331301d026de0eed38a86dff2db6/06a10/profile-pic.jpg 1.5x,\n/static/1cec331301d026de0eed38a86dff2db6/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Liam Walsh"}}}}},261:function(A){A.exports={data:{posts:{edges:[{node:{fields:{slug:"/blog/skills-you-need-to-play-badminton/"},frontmatter:{date:"October 29, 2019",title:"The 9 Skills You Need to Play Badminton",description:"To be good at any sport you need to master the basics. Mastering the basic techniques and skills allows you to play consistently and improve. Badminton is a very beginner-friendly sport but difficult to master. Anybody can learn and master the basic skills for Badminton. So what are the basic skills you need to play Badminton?",categories:["Common Questions","Beginners Info"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAezSCSwik//EABsQAAMAAgMAAAAAAAAAAAAAAAABAgMEERMx/9oACAEBAAEFAptteD2YFmqV3M5Z/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BR//EABsQAAIBBQAAAAAAAAAAAAAAAAAQAQIRITFB/9oACAEBAAY/AsF4qOrS/8QAGxABAAIDAQEAAAAAAAAAAAAAAQAhEUFhMVH/2gAIAQEAAT8h80Dawvgq6Zkxi1J2UUB+ztP/2gAMAwEAAgADAAAAEKgv/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxDVy//EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAgBAgEBPxDEP//EABwQAQACAgMBAAAAAAAAAAAAAAERIQAxQVFxgf/aAAgBAQABPxARTlGV8MY4XHhQnQa9xNrRZRDkSumQs+4Gh73mMmLS8q7z/9k=",aspectRatio:1.5086206896551724,src:"/static/2ecb87f822a1daf39ce948421f99de20/fd334/featured.jpg",srcSet:"/static/2ecb87f822a1daf39ce948421f99de20/5f26b/featured.jpg 175w,\n/static/2ecb87f822a1daf39ce948421f99de20/e8857/featured.jpg 350w,\n/static/2ecb87f822a1daf39ce948421f99de20/fd334/featured.jpg 700w,\n/static/2ecb87f822a1daf39ce948421f99de20/32983/featured.jpg 1050w,\n/static/2ecb87f822a1daf39ce948421f99de20/bf790/featured.jpg 1400w,\n/static/2ecb87f822a1daf39ce948421f99de20/e3a02/featured.jpg 2592w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/must-have-badminton-equipment/"},frontmatter:{date:"June 26, 2019",title:"5 Must-Have Equipment You Need for Badminton",description:"You need equipment with any sport. Without equipment, you can’t play, unfortunately. Badminton equipment is widely available and affordable. There are very good basics sets on Amazon for people just getting started and there are online retailers that provide more professional equipment for players who want to get serious. So, what are the essential pieces of equipment for Badminton?",categories:["Common Questions"],featured:null}}},{node:{fields:{slug:"/blog/is-tennis-or-badminton-harder/"},frontmatter:{date:"June 13, 2019",title:"Is Tennis or Badminton Harder? (The Answer Will Surprise You)",description:"Tennis and Badminton are often compared to one another in various ways. They’re both racquet sports, they both require great speed and agility, to play well you need to have good hand-eye coordination and so on. Like many sports, they’re easy to start but difficult to master. So is Tennis or Badminton harder?",categories:["Common Questions"],featured:null}}},{node:{fields:{slug:"/blog/gutting-in-badminton/"},frontmatter:{date:"May 17, 2019",title:"What is Gutting in Badminton?",description:"I'll admit, before writing this article I'd never heard of the term “gutting” in Badminton before. Without an explanation, it's hard to take a guess at what it could mean. So, what is gutting in Badminton?",categories:["Common Questions"],featured:null}}},{node:{fields:{slug:"/blog/best-badminton-string-for-smashing/"},frontmatter:{date:"May 12, 2019",title:"Which Badminton String is Best for Smashing?",description:"A lot of players, especially less experienced players, ask me this or similar questions. They want to improve their smash to feel like they can win more points. I understand the jump smash in Badminton is exciting. When you hit a jump smash just right it feels really good. Even better if you manage to win the point. Unfortunately, there is a lot of misinformation out there regarding strings and tension. So which is the best Badminton string for smashing?",categories:["Common Questions"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEDAv/aAAwDAQACEAMQAAAB49a0LYQaepobYDX/xAAZEAADAQEBAAAAAAAAAAAAAAABAhIAEBP/2gAIAQEAAQUCC6ZIKcanO8108//EABgRAAIDAAAAAAAAAAAAAAAAAAASARAx/9oACAEDAQE/AUXRYv8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgIDAAAAAAAAAAAAAAAAARAAIRExgf/aAAgBAQAGPwIKweShM29r/8QAGxAAAwEBAQEBAAAAAAAAAAAAAAERIVExcYH/2gAIAQEAAT8hu/ik6KNYIUBZX7cF8fmxUpyq/S0hFxH/2gAMAwEAAgADAAAAELzvwP/EABgRAQEBAQEAAAAAAAAAAAAAAAEAESFB/9oACAEDAQE/EHBerT2AgMv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhMf/aAAgBAgEBPxCtMwguH//EAB4QAQEAAwABBQAAAAAAAAAAAAERACExYUFRsfDx/9oACAEBAAE/EIIB6FtfvpgWUdC9TDoauiJzzlAIVvn8M1ibA0Nbd++BmzAvh44LhZTJaWnjP//Z",aspectRatio:1.5086206896551724,src:"/static/d6d87cfea068c39ac27fd4f775155e02/fd334/featured.jpg",srcSet:"/static/d6d87cfea068c39ac27fd4f775155e02/5f26b/featured.jpg 175w,\n/static/d6d87cfea068c39ac27fd4f775155e02/e8857/featured.jpg 350w,\n/static/d6d87cfea068c39ac27fd4f775155e02/fd334/featured.jpg 700w,\n/static/d6d87cfea068c39ac27fd4f775155e02/32983/featured.jpg 1050w,\n/static/d6d87cfea068c39ac27fd4f775155e02/bf790/featured.jpg 1400w,\n/static/d6d87cfea068c39ac27fd4f775155e02/8cd56/featured.jpg 2838w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/improve-short-serve-in-badminton/"},frontmatter:{date:"April 10, 2019",title:"How to Improve a Short Serve in Badminton (7 Steps)",description:"The short serve, especially in doubles, is a key technique everyone should learn. A good short serve can give you an advantage from the start of the rally. Here we'll be talking mainly about the backhand serve in relation to doubles. To learn how to improve the forehand short serve then click here to our article covering that question. So how do you improve a short serve in Badminton?",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/tennis-shoes-for-badminton/"},frontmatter:{date:"March 24, 2019",title:"Can you Wear Tennis Shoes for Badminton?",description:"When I first started out playing Badminton, I played for fun, purely recreational. As soon as I started to get better and my father started taking me to a coach, we were advised I get a proper set of Badminton shoes. All sports have specialised footwear designed for the needs of that sport. I was just using my normal trainers for playing Badminton. So can you wear Tennis shoes for Badminton?",categories:["Common Questions"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABXLpM2o47/8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIRAwASIv/aAAgBAQABBQLSgt6A00jKGC3rG5//xAAWEQEBAQAAAAAAAAAAAAAAAAARARD/2gAIAQMBAT8BS5//xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPwGn/8QAGxAAAwACAwAAAAAAAAAAAAAAAAERAiExMkH/2gAIAQEABj8CzQpzPRTAdNOHc//EABwQAAICAgMAAAAAAAAAAAAAAAERACFBUTFhkf/aAAgBAQABPyEERA2L5ghDRT0ggmBagD0iFNhuPz8n/9oADAMBAAIAAwAAABD7D//EABgRAQADAQAAAAAAAAAAAAAAAAEAESEx/9oACAEDAQE/EB8LlLs//8QAGBEBAQADAAAAAAAAAAAAAAAAAQARITH/2gAIAQIBAT8QTgjBq//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhUYH/2gAIAQEAAT8QYpWNS/XIq96wQ4y8lKAAN4bW7OO+wAOHF4qF5fmJ/9k=",aspectRatio:1.5086206896551724,src:"/static/8c55d3c33bac257f599171746d79e86d/fd334/featured.jpg",srcSet:"/static/8c55d3c33bac257f599171746d79e86d/5f26b/featured.jpg 175w,\n/static/8c55d3c33bac257f599171746d79e86d/e8857/featured.jpg 350w,\n/static/8c55d3c33bac257f599171746d79e86d/fd334/featured.jpg 700w,\n/static/8c55d3c33bac257f599171746d79e86d/32983/featured.jpg 1050w,\n/static/8c55d3c33bac257f599171746d79e86d/bf790/featured.jpg 1400w,\n/static/8c55d3c33bac257f599171746d79e86d/eefba/featured.jpg 2048w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/badminton-played-both-hands/"},frontmatter:{date:"March 23, 2019",title:"Can Badminton be Played with Both Hands?",description:"It's a rarity in itself to be ambidextrous. I don't think I've ever met someone who is coordinated with both hands. Things like writing and drawing etc people only do it with one hand. Their left or right. Be some gifted people can do them with both hands. So what if those people played a sport like Badminton, Tennis or Squash? Could they play with either hand? Another question would then be. Can Badminton be played with both hands?",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/is-a-badminton-racquet-allowed-in-flight/"},frontmatter:{date:"March 18, 2019",title:"Is a Badminton Racquet Allowed in Flight? [All Major Airlines]",description:"I've never taken my Badminton equipment on holiday. I've never travelled with my Badminton equipment by any others mean other than driving. International players have to take their equipment wherever they go. I can imagine being a little nervous ever letting your bag out of sight. Our equipment becomes very personal and we like to have it close at all times. So, can a Badminton racquet be taken on a flight as hand luggage?",categories:["Common Questions"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgABA//EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB46Bscov/xAAZEAACAwEAAAAAAAAAAAAAAAAAEgECExD/2gAIAQEAAQUCykwsZ8VrIf/EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAEDAQE/AZS//8QAFREBAQAAAAAAAAAAAAAAAAAAABP/2gAIAQIBAT8Boo//xAAYEAADAQEAAAAAAAAAAAAAAAAAITEBEP/aAAgBAQAGPwInXBaf/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAIRAxQWFx/9oACAEBAAE/IbgFvXeE44hu7cYDGKbV7P/aAAwDAQACAAMAAAAQEz//xAAVEQEBAAAAAAAAAAAAAAAAAAAQcf/aAAgBAwEBPxCx/8QAFhEBAQEAAAAAAAAAAAAAAAAAABFR/9oACAECAQE/EKxT/8QAHBABAQACAgMAAAAAAAAAAAAAAREAIUFRMXGB/9oACAEBAAE/EGih5tfGdV+kxiqaUTY5vEwfNbgD30o3XWcHQbmf/9k=",aspectRatio:1.5086206896551724,src:"/static/c7cf0c3ae3a1c2e1badd5eed4b148f61/fd334/featured.jpg",srcSet:"/static/c7cf0c3ae3a1c2e1badd5eed4b148f61/5f26b/featured.jpg 175w,\n/static/c7cf0c3ae3a1c2e1badd5eed4b148f61/e8857/featured.jpg 350w,\n/static/c7cf0c3ae3a1c2e1badd5eed4b148f61/fd334/featured.jpg 700w,\n/static/c7cf0c3ae3a1c2e1badd5eed4b148f61/32983/featured.jpg 1050w,\n/static/c7cf0c3ae3a1c2e1badd5eed4b148f61/bf790/featured.jpg 1400w,\n/static/c7cf0c3ae3a1c2e1badd5eed4b148f61/eefba/featured.jpg 2048w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/do-you-have-to-be-tall-to-play-badminton/"},frontmatter:{date:"March 16, 2019",title:"Do You Have to be Tall to Play Badminton?",description:"Throughout sport, you always see shared trends in athletes who are at the top of the sport. In basketball and volleyball you see a lot of the best players are tall, commonly at least six feet tall. In other sports, it's more desirable to be shorter and more compact like racing jockeys. So naturally, there must be traits that are desirable for Badminton? So do you have to be tall to play Badminton?",categories:["Common Questions"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHWWYpJFw//xAAYEAEBAQEBAAAAAAAAAAAAAAABAgADEP/aAAgBAQABBQJVbtEu/L5mK3//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBQEBAAAAAAAAAAAAAAAAAQIRITEQkf/aAAgBAQAGPwKqIRxrfOSmmH//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFRcaH/2gAIAQEAAT8hpCQfZeQJuJMN7DQ63EW1cumAGDP/2gAMAwEAAgADAAAAENAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAAMAAQUAAAAAAAAAAAAAAQARITFBUXGBof/aAAgBAQABPxBEkaWrtD6ZpODLcd3Qfkow5VfMt8ber0QWAvcUn//Z",aspectRatio:1.5086206896551724,src:"/static/a5d9348589fd890ae1dd2c07d06c66de/fd334/featured.jpg",srcSet:"/static/a5d9348589fd890ae1dd2c07d06c66de/5f26b/featured.jpg 175w,\n/static/a5d9348589fd890ae1dd2c07d06c66de/e8857/featured.jpg 350w,\n/static/a5d9348589fd890ae1dd2c07d06c66de/fd334/featured.jpg 700w,\n/static/a5d9348589fd890ae1dd2c07d06c66de/32983/featured.jpg 1050w,\n/static/a5d9348589fd890ae1dd2c07d06c66de/bf790/featured.jpg 1400w,\n/static/a5d9348589fd890ae1dd2c07d06c66de/75d15/featured.jpg 5184w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/can-you-serve-overhand-in-badminton/"},frontmatter:{date:"March 07, 2019",title:"Can You Serve Overhand in Badminton?",description:"It's the default in Tennis and you can even see it done in squash and table tennis. Serving overhand in other racquet sports is normally legal. A good serve can be all the difference in racquet sports. Most people picking up a racquet for the first time will naturally look to serve underarm in Badminton. It feels natural, the shuttlecock has to go over the net so it makes sense to serve underarm. But it begs to question, can you serve overhand in Badminton?",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/can-badminton-be-played-outdoors/"},frontmatter:{date:"March 06, 2019",title:"Can Badminton be Played Outdoors?",description:"I used to play Badminton outside, at least what I thought was Badminton. I used to play with a kids set that had plastic shuttles, simple racquets and a popup net. I used to with my brother and sister in the summertime. Looking back now it's not really the Badminton we know and love is it? But it does bring up an interesting question. Can Badminton be played outdoors?",categories:["Common Questions"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAQP/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGPrLmScQk//8QAGhAAAgIDAAAAAAAAAAAAAAAAAhIAARARIf/aAAgBAQABBQLqlQrHJd4//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAAYDAAAAAAAAAAAAAAAAABAREiFBAQJR/9oACAEBAAY/AnUNUzNk1Y4f/8QAHBABAAIBBQAAAAAAAAAAAAAAAQARQSExUWGB/9oACAEBAAE/IavJvq+5cjUeGLTHADhmC5i6z//aAAwDAQACAAMAAAAQt+//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQIBAT8QMIv/xAAdEAEAAwABBQAAAAAAAAAAAAABABEhMUFRcaHw/9oACAEBAAE/EC2NL64Rw1pl+z7IiC14jCELcDXL3YcoVEQXWf/Z",aspectRatio:1.5086206896551724,src:"/static/c7fafce4a18e15a31e191ae465f1cb8c/fd334/featured.jpg",srcSet:"/static/c7fafce4a18e15a31e191ae465f1cb8c/5f26b/featured.jpg 175w,\n/static/c7fafce4a18e15a31e191ae465f1cb8c/e8857/featured.jpg 350w,\n/static/c7fafce4a18e15a31e191ae465f1cb8c/fd334/featured.jpg 700w,\n/static/c7fafce4a18e15a31e191ae465f1cb8c/32983/featured.jpg 1050w,\n/static/c7fafce4a18e15a31e191ae465f1cb8c/bf790/featured.jpg 1400w,\n/static/c7fafce4a18e15a31e191ae465f1cb8c/91b7c/featured.jpg 3840w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/badminton-vs-tennis-courts/"},frontmatter:{date:"February 27, 2019",title:"Are Badminton and Tennis Courts the Same?",description:"Some sports can share venues, you see it all the time. Football stadiums can host rugby matches and netball matches can be played at basketball venues. These are just two examples of how sports venues can be multi-use. People know there are differences between all of these sports and that just because they can be played at the same venue doesn't mean the court or field setup is the same. They're not the same. So the question is; are Badminton and Tennis courts the same?",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/are-badminton-and-volleyball-nets-the-same/"},frontmatter:{date:"February 22, 2019",title:"Are Badminton and Volleyball Nets the Same?",description:"The Badminton club which I play for uses a school's sports hall as a venue. I turned up for practice one night and saw something I've never seen since. Someone had turned up early and set up the nets ready for people to play when they got there. But this person used Volleyball nets mistakenly with the Badminton posts instead of the actual Badminton nets. The results were strange, to say the least. So are Badminton and Volleyball nets the same?",categories:["Common Questions"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABzSvKNFEf/8QAGRABAAMBAQAAAAAAAAAAAAAAAAECERIi/9oACAEBAAEFAomsPDKscsf/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARES/9oACAEDAQE/Acwp/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAADIBIKGS/9oACAEBAAY/AnjkfB8p/8QAGhAAAgMBAQAAAAAAAAAAAAAAABEBcZFB8P/aAAgBAQABPyGOWh8uP40XLkIf/9oADAMBAAIAAwAAABCT/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCg/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qp//EABoQAAMBAAMAAAAAAAAAAAAAAAABESExUZH/2gAIAQEAAT8QRMEmjHfCArGpElc0R28IJT//2Q==",aspectRatio:1.5086206896551724,src:"/static/ead5e9b576f2cb90f2fe12a8d142561a/fd334/featured.jpg",srcSet:"/static/ead5e9b576f2cb90f2fe12a8d142561a/5f26b/featured.jpg 175w,\n/static/ead5e9b576f2cb90f2fe12a8d142561a/e8857/featured.jpg 350w,\n/static/ead5e9b576f2cb90f2fe12a8d142561a/fd334/featured.jpg 700w,\n/static/ead5e9b576f2cb90f2fe12a8d142561a/32983/featured.jpg 1050w,\n/static/ead5e9b576f2cb90f2fe12a8d142561a/bf790/featured.jpg 1400w,\n/static/ead5e9b576f2cb90f2fe12a8d142561a/cb25a/featured.jpg 3872w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/improve-your-reaction-time-badminton/"},frontmatter:{date:"February 19, 2019",title:"How to Improve Your Reaction Time in Badminton",description:"You see it all the time on the world stage for badminton. Elite level players are capable of defending smashes of over 350kmph. They're capable of picking up deceptive shots when wrong-footed. They're capable of incredible feats of speed and agility! The best elite players are able to keep up with the pace of the game thanks to stupidly fast reaction times. So how do you improve your reaction time in Badminton?",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/the-split-step/"},frontmatter:{date:"December 04, 2018",title:"What is a Split Step? The Secret to Speed in Badminton",description:"Everyone I’ve ever met in badminton always asks the question; “how can I get faster” or “how can I go faster to the shuttle” and I really believe that one of the keys to great speed in badminton is practising footwork. A lot of coaches go over the various movements that get you to the shuttle in a certain way, either by travelling backwards, forwards or sideways, slow and fast movements etc. One of the key technique which isn’t given enough focus is the split step. So what is it and how can it help to learn this technique?",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/how-to-warm-up-and-cooldown/"},frontmatter:{date:"September 16, 2018",title:"How to Warm-Up and Cooldown Properly to Avoid Injury?",description:"I was out playing badminton the other night at the badminton league club I play for just for a general practice, I have been playing as much recently so was feeling a bit rusty going on to have a knock up to warm-up. I thought about that and actually, I've always been taught to do a full dynamic warm-up properly before getting onto court and to do a cooldown afterwards. All the coaches I've ever been too always instructed and insisted on that for the simple fact that it's necessary to decrease the risk of picking up an injury. So how do you warm-up properly and cooldown properly?",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/can-i-play-badminton-whilst-pregnant/"},frontmatter:{date:"September 09, 2018",title:"Can I Play Badminton Whilst Pregnant?",description:"Fun fact, I once had the honour of training and playing with the Olympic silver medalists Gail Emms and Nathan Robertson, true story. At the time Gail Emms was expecting her first child which would turn out to be a boy and despite being heavily pregnant at the time was still able and willing to do the group training session I was attending alongside Nathan. Despite being very heavily pregnant she managed to do the training session helping other and managed a shortened mixed game at the end playing against Nathan and each of them playing with someone from the session. Obviously being an Olympian level athlete and previous world champion to boot, a short match for fun should be no problem, right? You can still play Badminton while pregnant, right?",categories:["Common Questions"],featured:null}}},{node:{fields:{slug:"/blog/how-to-hit-a-killer-badminton-smash/"},frontmatter:{date:"August 07, 2018",title:"How to Hit a Killer Badminton Smash! How the Best do it",description:"Probably the most asked question, the most search topic and the thing the majority of people fixate on when they first start playing badminton. It’s definitely the most exciting shot to play and watch in the sport, there really isn’t anything else quite like it. Seeing some of the greats play this iconic shot is jaw-dropping to say the least but how do they do it? What’s the key to a killer smash?",categories:["Common Questions"],featured:null}}},{node:{fields:{slug:"/blog/which-badminton-strings-are-best/"},frontmatter:{date:"July 23, 2018",title:"Which Badminton Strings are Best?",description:"In recent years I’ve changed a lot about how I play badminton and I’ve also learnt a lot more about the games and the things that make up the game. One of the things I’ve learnt more about is about strings for badminton racquets. It’s not often talked about as most people never end up changing the strings they use for their racquets because they take their stringers recommendation, which is definitely not a bad thing. I, however, wanted to learn more about the types of strings and which ones were best for me.",categories:["Common Questions"],featured:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEDAv/aAAwDAQACEAMQAAAB49a0LYQaepobYDX/xAAZEAADAQEBAAAAAAAAAAAAAAABAhIAEBP/2gAIAQEAAQUCC6ZIKcanO8108//EABgRAAIDAAAAAAAAAAAAAAAAAAASARAx/9oACAEDAQE/AUXRYv8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgIDAAAAAAAAAAAAAAAAARAAIRExgf/aAAgBAQAGPwIKweShM29r/8QAGxAAAwEBAQEBAAAAAAAAAAAAAAERIVExcYH/2gAIAQEAAT8hu/ik6KNYIUBZX7cF8fmxUpyq/S0hFxH/2gAMAwEAAgADAAAAELzvwP/EABgRAQEBAQEAAAAAAAAAAAAAAAEAESFB/9oACAEDAQE/EHBerT2AgMv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhMf/aAAgBAgEBPxCtMwguH//EAB4QAQEAAwABBQAAAAAAAAAAAAERACExYUFRsfDx/9oACAEBAAE/EIIB6FtfvpgWUdC9TDoauiJzzlAIVvn8M1ibA0Nbd++BmzAvh44LhZTJaWnjP//Z",aspectRatio:1.5086206896551724,src:"/static/d6d87cfea068c39ac27fd4f775155e02/fd334/featured.jpg",srcSet:"/static/d6d87cfea068c39ac27fd4f775155e02/5f26b/featured.jpg 175w,\n/static/d6d87cfea068c39ac27fd4f775155e02/e8857/featured.jpg 350w,\n/static/d6d87cfea068c39ac27fd4f775155e02/fd334/featured.jpg 700w,\n/static/d6d87cfea068c39ac27fd4f775155e02/32983/featured.jpg 1050w,\n/static/d6d87cfea068c39ac27fd4f775155e02/bf790/featured.jpg 1400w,\n/static/d6d87cfea068c39ac27fd4f775155e02/8cd56/featured.jpg 2838w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{fields:{slug:"/blog/how-to-hold-a-badminton-racquet/"},frontmatter:{date:"July 16, 2018",title:"How to Hold a Badminton Racquet - The Correct Badminton Grip",description:"I’ve been playing for a long time but every now and then I practice something and when it’s not working consistently I come back to the basics and see if there is anything I’m doing wrong there that might be hindering me practicing or playing a certain shot. One of the basics which is often overlooked is how you hold the racquet or your “grip”. I had a habit of letting the handle of the racquet turn too much in my grip, I was holding it too loose, and as a result, I wasn’t getting power or accuracy in some shots because when I hit the shuttle it was never with a consistent grip.",categories:["Common Questions","Beginners Info"],featured:null}}},{node:{fields:{slug:"/blog/five-reasons-badminton-will-help-you-lose-weight/"},frontmatter:{date:"July 10, 2018",title:"5 Reasons Badminton Will Help You Lose Weight",description:"Everybody wants to be trim, everybody wants to stay in shape but not everybody enjoys going to the gym, I believe the best answer is finding a sport you love is the best way to get in shape as you’ll enjoy getting a sweat on more and it won’t feel like such a chore.",categories:["Common Questions"],featured:null}}},{node:{fields:{slug:"/blog/which-badminton-racquet-is-best-for-me/"},frontmatter:{date:"July 07, 2018",title:"Which Badminton Racquet is Best for Me?",description:"I’ve played with the same badminton racquets for over 12 years, it wasn’t until I broke one of only two racquets I had (a Yonex Armortec 900 Power) that I realised I might need to get some more but after 12 years with the same racquets how was I going to be able to pick a new one right for me?",categories:["Common Questions","Beginners Info"],featured:null}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e4c0de62da3baf28a9f3.js.map