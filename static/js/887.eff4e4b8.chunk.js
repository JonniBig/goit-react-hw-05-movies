"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[887],{887:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),s=r(184),o=function(t){var e=t.character,r=t.name,n=t.profile_path,a=n?"".concat("https://image.tmdb.org/t/p/w200").concat(n):"";return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:a,alt:""}),(0,s.jsxs)("p",{children:["Actor's name: ",r]}),(0,s.jsxs)("p",{children:["Character: ",e]})]})},p=r(689),h=r(894),f=function(){var t=(0,p.UO)().id,e=(0,i.useState)(null),r=(0,a.Z)(e,2),c=r[0],f=r[1],l=(0,i.useState)(!1),d=(0,a.Z)(l,2),v=d[0],m=d[1],x=(0,i.useState)(!1),g=(0,a.Z)(x,2),w=g[0],Z=g[1],b=(0,i.useState)("Something went wrong! Try again later"),j=(0,a.Z)(b,2),I=j[0],y=j[1];return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,h.IQ)(t);case 4:r=e.sent,f(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),Z(!0),y(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t]),(0,s.jsxs)("div",{children:[w&&(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:I})}),v&&(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"Loading..."})}),null===c&&(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"No cast available"})}),c&&c.length>0&&(0,s.jsx)("ul",{children:c.map((function(t){return(0,s.jsx)(o,{character:t.character,name:t.name,profile_path:t.profile_path},t.id)}))})]})}},894:function(t,e,r){r.d(e,{Df:function(){return i},HI:function(){return s},IQ:function(){return o},Tn:function(){return p},q:function(){return h}});var n=r(861),a=r(757),c=r.n(a),u=r(243).Z.create({headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTNkN2JiMGI5M2ZlMDM3MmQ4YTZkNDJkOGE5NGNhOCIsInN1YiI6IjY1MmFmZjY3ZWE4NGM3MDBhZWYyOGFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JoJ09IKYIcQbLxtX-lIS9ov1ytunDzmtILtaCy1xGqw")}}),i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("https://api.themoviedb.org/3/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("https://api.themoviedb.org/3/search/movie?query=".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=887.eff4e4b8.chunk.js.map