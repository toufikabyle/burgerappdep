(this.webpackJsonpburgerapp=this.webpackJsonpburgerapp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),o=(n(13),n(14),n(5)),i=n(3),u=n(4);n(15);var s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),s=Object(u.a)(c,2),m=s[0],d=s[1];return r.a.createElement("div",{className:"todo"},r.a.createElement("input",{type:"text",name:"text",id:"text",onChange:function(e){return function(e){l(e.target.value)}(e)},placeholder:"Place your order..."}),r.a.createElement("button",{className:"add-btn",onClick:function(){if(""!==n){var e={id:Math.floor(1e3*Math.random()),value:n,isCompleted:!0};d([].concat(Object(i.a)(m),[e]))}}},"Make it"),r.a.createElement("br",null),m!==[]?r.a.createElement("ul",null,m.map((function(e){return r.a.createElement("li",{className:e.isCompleted?"crossText":"listitem"},e.value,r.a.createElement("button",{className:"completed",onClick:function(t){return function(e,t){e.preventDefault();var n=m.findIndex((function(e){return e.id==t})),a=Object(i.a)(m);a[n]=Object(o.a)(Object(o.a)({},a[n]),{},{isCompleted:!1}),d(a)}(t,e.id)}},"Eat it"))}))):null,m!==[]?r.a.createElement("ul",null,m.map((function(e){return r.a.createElement("li",{className:e.isCompleted?"crossTexte":"listiteme"},e.value,r.a.createElement("button",{className:"delete",onClick:function(t){return function(e,t){e.preventDefault(),d(m.filter((function(e){return e.id!=t})))}(t,e.id)}},"Poop it"))}))):null)};var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("span",{className:"title"},"Burger App")," ",r.a.createElement("br",null),r.a.createElement("span",{className:"title1"},"Burger Eaten")," ",r.a.createElement("br",null),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f4a78643.chunk.js.map