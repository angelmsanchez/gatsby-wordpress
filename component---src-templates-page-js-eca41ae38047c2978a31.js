(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return s});var a=n(7),r=n.n(a),o=n(0),c=n.n(o),i=n(158),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.wordpressPage;return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.date}}),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.slug}})))},t}(o.Component);t.default=l;var s="3111871871"},153:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(32),l=n.n(i);n.d(t,"a",function(){return l.a});n(154);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},156:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"529f2488-cdf8-5edd-a0b7-ea4ba53f525c",name:"Menú tokiota",items:[{title:"Filosofía",object_slug:"filosofia",order:1},{title:"Sobre Nosotros",object_slug:"sobre-nosotros",order:2},{title:"Servicios y soluciones",object_slug:"servicios-y-soluciones",order:3},{title:"Únete",object_slug:"unete",order:4},{title:"Contacto",object_slug:"contacto",order:5},{title:"Contacto",object_slug:"contacto",order:6}]}}]}}}},157:function(e,t,n){e.exports=n.p+"static/tokiota-horizontal-d5cf02199e842bb506e682cd01ef73a9.png"},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(159),l=n.n(i),s=n(153),u=n(156),d=n(32),m=n.n(d),p=(n(143),function(){return r.a.createElement(s.b,{query:"4029812935",render:function(e){return r.a.createElement("nav",{id:"menu"},e.allWordpressWpApiMenusMenusItems.edges.map(function(e){return e.node.items.map(function(e){return r.a.createElement(m.a,{key:e.object_slug,to:e.object_slug},e.title)})}),r.a.createElement(m.a,{to:"/posts"},"Blog"))},data:u})}),f=n(157),g=n.n(f),h=(n(144),function(){return r.a.createElement("header",{id:"header"},r.a.createElement(s.a,{to:"/"},r.a.createElement("img",{className:"logo",src:g.a,alt:"tokiota"})),r.a.createElement(p,null))});n(145);function E(){return a.createElement("footer",{id:"footer"},a.createElement("span",null,"Copyright © 2019 Tokiota. Todos los derechos reservados."))}n(146);var y=function(e){var t=e.children;e.data;return r.a.createElement("div",{id:"tokiota-web"},r.a.createElement(l.a,{title:"Gatsby Default Starter",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement(h,null),r.a.createElement("div",{style:{overflowY:"auto",padding:"3rem",marginTop:"75px",height:"100%"}},r.a.createElement("main",null,t)),r.a.createElement(E,null))};y.propTypes={children:c.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-templates-page-js-eca41ae38047c2978a31.js.map