"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{6:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),i=n.n(u),c=n(87),o=n(689),s=n(184),p=function(e){var t=e.movies,n=(0,o.TH)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.original_title;return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"".concat(t),state:{from:n},children:(0,s.jsx)("p",{children:r})})},t)}))})})},f=n(791),l=n(347),d=function e(){var t,n=(0,f.useState)([]),u=(0,a.Z)(n,2),o=u[0],d=u[1],v=(0,c.lr)(),h=(0,a.Z)(v,2),g=h[0],m=h[1],x=null!==(t=g.get("query"))&&void 0!==t?t:"";(0,f.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.NV)(x);case 3:if((t=e.sent).length){e.next=6;break}return e.abrupt("return");case 6:d(t),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,9,11,13]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,s.jsx)("input",{type:"text",name:"query",value:x,autoComplete:"off",autoFocus:!0,onChange:function(e){var t=e.target.value;if(""===t)return m({});m({query:t})}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),e&&(0,s.jsx)(p,{movies:o})]})}},347:function(e,t,n){n.d(t,{Hg:function(){return s},M1:function(){return l},NV:function(){return g},TP:function(){return f},tx:function(){return v}});var r=n(861),a=n(757),u=n.n(a),i=n(243),c=n(272);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="12a1c9f7c08bf08c5c3c451723bbd88a";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,r=n.results.map((function(e){return{id:e.id,original_title:e.original_title}})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,c,s,p,f,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?language=en-US&api_key=").concat(o));case 2:return n=e.sent,r=n.data,a=r.poster_path,c=r.original_title,s=r.release_date,p=r.vote_average,f=r.overview,l=r.genres,e.abrupt("return",{poster_path:x(a),original_title:c,release_date:s.slice(0,4),vote_average:p.toFixed(1),overview:f,genres:l.map((function(e){return e.name})).join(", ")});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?language=en-US&page=1&include_adult=false&api_key=").concat(o));case 2:return n=e.sent,r=n.data,a=r.cast.map((function(e){var t=e.id,n=e.name,r=e.profile_path;return{id:t,name:n,profile_path:x(r)}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?language=en-US&page=1&api_key=").concat(o));case 2:return n=e.sent,r=n.data,a=r.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(t,"&language=en-US&page=1&include_adult=false&api_key=").concat(o));case 2:return n=e.sent,r=n.data,a=r.results.map((function(e){return{id:e.id,original_title:e.original_title}})),console.log(a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){return e?"https://image.tmdb.org/t/p/w500"+e:c}},272:function(e,t,n){e.exports=n.p+"static/media/default.b18d01b007a2aed2c005.jpg"}}]);
//# sourceMappingURL=6.c30e7ea5.chunk.js.map