(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[230],{1309:function(e,t,n){"use strict";var l=n(7294),o=n(9),i=n(3201),r=n(9349),a=o.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-5v8ml6-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),c="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":r.siteUrl,s=o.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-5v8ml6-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/Profile_Cartoon_bg_white_4.png);background-size:cover;background-position:center;"],c),u=o.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-5v8ml6-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(function(e){return e.theme.colors.text})),m=o.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-5v8ml6-3"})(["margin-bottom:11.2px;line-height:0.5;font-size:16px;color:",";"],(function(e){return e.theme.colors.secondaryText})),d=o.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-5v8ml6-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),p=function(e){var t=e.link,n=e.children;return t?l.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.Z=function(){var e=r.links.github,t=r.links.kaggle,n=r.links.instagram,o=r.links.facebook,c=r.links.linkedIn,f=r.links.email,g=r.links.etc;return l.createElement(a,{id:"bio"},l.createElement(s,null),l.createElement("div",null,l.createElement(u,null,r.author,"｜",r.NickName,"｜",r.ChineseName),l.createElement(m,null,l.createElement(i.nGB,null)," ",r.GraduationSchool),l.createElement(m,null,l.createElement(i.CP_,null)," ",r.Skills),l.createElement(m,null,r.description),l.createElement(d,null,l.createElement(p,{link:e},l.createElement(i.hJX,null)),l.createElement(p,{link:t},l.createElement(i.jnu,null)),l.createElement(p,{link:n},l.createElement(i.Zf_,null)),l.createElement(p,{link:o},l.createElement(i.Am9,null)),l.createElement(p,{link:c},l.createElement(i.ltd,null)),l.createElement(p,{link:f},l.createElement(i.SRX,null)),l.createElement(p,{link:g},l.createElement(i.gjK,null)))))}},4246:function(e,t,n){"use strict";var l=n(3493),o=n.n(l),i=n(7294),r=n(9),a=n(1597),c=n(2213),s=n(729),u=n(184),m=r.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),d=r.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),p=r.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(function(e){return e.theme.colors.tertiaryText})),f=r.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(function(e){return e.theme.colors.secondaryText}));t.Z=function(e){var t=e.postList,n=(0,i.useState)(10),l=n[0],r=n[1],g=o()((function(){document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&l<t.length&&setTimeout((function(){return r(l+10)}),300)}),250);return(0,i.useEffect)((function(){return window.addEventListener("scroll",g),function(){window.removeEventListener("scroll",g)}}),[l,t]),(0,i.useEffect)((function(){r(10)}),[t]),i.createElement(m,null,t.slice(0,l).map((function(e,n){var o=e.frontmatter,r=o.title,m=o.date,g=o.tags,h=e.excerpt,E=e.fields.slug;return i.createElement(i.Fragment,null,i.createElement(d,null,i.createElement(c.Z,{size:"bg"},i.createElement(a.Link,{to:E},r)),i.createElement(p,null,m),i.createElement(f,null,h),i.createElement(u.Z,{tagList:g})),l-1!==n&&t.length-1!==n&&i.createElement(s.Z,{mt:"48px",mb:"32px"}))})))}},184:function(e,t,n){"use strict";var l=n(7294),o=n(9),i=n(1597),r=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),a=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(function(e){return e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground}),(function(e){return e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText}),(function(e){return e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground})),c=function(e){return e.replace(/\s+/g,"-")};t.Z=function(e){var t=e.tagList,n=e.count,o=e.selected;return t?n?l.createElement(r,null,t.map((function(e,t){return l.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},l.createElement(a,{selected:e.fieldValue===o},c(e.fieldValue)," (",e.totalCount,")"))}))):l.createElement(r,null,t.map((function(e,t){return l.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},l.createElement(a,null,c(e)))}))):null}},804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var l=n(9734),o=n.n(l),i=n(7294),r=n(2225),a=n(3966),c=n(1309),s=n(4246),u=n(5161),m=n.n(u),d=n(9),p=n(1597),f=d.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-11pn9fc-0"})(["position:relative;"]),g=d.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-11pn9fc-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),h=d.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-11pn9fc-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],(function(e){return e.theme.colors.secondaryText})),E=d.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-11pn9fc-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],(function(e){return e.theme.colors.tertiaryText}),(function(e){return e.theme.colors.text})),x=function(e){var t=e.tags,n=e.postCount;return i.createElement(f,null,i.createElement(g,null,i.createElement(h,null,"TAG LIST"),i.createElement("ul",null,i.createElement(E,null,i.createElement(p.Link,{to:"/tags"},"all (",n,")")),m()(t,(function(e){return i.createElement(E,null,i.createElement(p.Link,{to:"/tags?q="+e.fieldValue},e.fieldValue," (",e.totalCount,")"))})))))},k=n(729),v=n(1093),_=n(9349),w=function(e){var t=e.data,n=t.allMarkdownRemark.nodes,l=o()(t.allMarkdownRemark.group,["totalCount"]).reverse();return 0===n.length?i.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):i.createElement(r.Z,null,i.createElement(a.Z,{title:_.title,description:_.description,url:_.siteUrl}),i.createElement(v.Z,{size:48}),i.createElement(c.Z,null),i.createElement(k.Z,null),i.createElement(x,{tags:l,postCount:n.length}),i.createElement(s.Z,{postList:n}))}},5161:function(e,t,n){var l=n(9932),o=n(7206),i=n(9199),r=n(1469);e.exports=function(e,t){return(r(e)?l:i)(e,o(t,3))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-956ed7f06310abc88313.js.map