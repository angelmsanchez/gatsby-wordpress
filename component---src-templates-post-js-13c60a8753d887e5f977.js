(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(158),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.wordpressPost;return console.log(e),i.a.createElement(s.a,null,i.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))},t}(o.Component);t.default=c;var u="2728819313"},153:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(32),c=n.n(s);n.d(t,"a",function(){return c.a});n(154);var u=r.a.createContext({}),l=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(54),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},156:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"529f2488-cdf8-5edd-a0b7-ea4ba53f525c",name:"Menú tokiota",items:[{title:"Filosofía",object_slug:"filosofia",order:1},{title:"Sobre Nosotros",object_slug:"sobre-nosotros",order:2},{title:"Servicios y soluciones",object_slug:"servicios-y-soluciones",order:3},{title:"Únete",object_slug:"unete",order:4},{title:"Contacto",object_slug:"contacto",order:5}]}}]}}}},157:function(e,t,n){e.exports=n.p+"static/tokiota-horizontal-d5cf02199e842bb506e682cd01ef73a9.png"},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(159),c=n.n(s),u=n(153),l=n(156),d=n(32),m=n.n(d),p=(n(143),function(){return r.a.createElement(u.b,{query:"4029812935",render:function(e){return r.a.createElement("nav",{id:"menu"},e.allWordpressWpApiMenusMenusItems.edges.map(function(e){return e.node.items.map(function(e){return r.a.createElement(m.a,{key:e.object_slug,to:e.object_slug},e.title)})}),r.a.createElement(m.a,{to:"/posts"},"Blog"))},data:l})}),f=n(157),g=n.n(f),h=(n(144),function(){return r.a.createElement("header",{id:"header"},r.a.createElement(u.a,{to:"/"},r.a.createElement("img",{className:"logo",src:g.a,alt:"tokiota"})),r.a.createElement(p,null))});n(145);function y(){return a.createElement("footer",{id:"footer"},a.createElement("span",null,"Copyright © 2019 Tokiota. Todos los derechos reservados."))}n(146);var E=function(e){var t=e.children;e.data;return r.a.createElement("div",{id:"tokiota-web"},r.a.createElement(c.a,{title:"Gatsby Default Starter",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement(h,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)),r.a.createElement(y,null))};E.propTypes={children:i.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-templates-post-js-13c60a8753d887e5f977.js.map