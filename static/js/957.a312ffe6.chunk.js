"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[957],{957:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});var t=n(5861),a=n(9439),c=n(7757),i=n.n(c),s=n(2791),o=n(7689),u=n(1087),l=n(2426),d=n.n(l),h=n(184),p=function(e){var r,n=e.info,t=n.genres,a=n.homepage,c=n.original_title,i=n.overview,s=n.poster_path,o=n.production_companies,l=n.production_countries,p=n.release_date,v=n.tagline,f=n.title,x=n.vote_average,j=n.vote_count,m=null===t||void 0===t?void 0:t.map((function(e){return e.name})).join(", "),g=null===l||void 0===l?void 0:l.map((function(e){return e.name})).join(", "),w=null===o||void 0===o?void 0:o.map((function(e){var r=e.id,n=e.logo_path,t=e.name;return n&&(0,h.jsx)("li",{children:n&&(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t,style:{maxHeight:50,maxWidth:200}})},r)}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:a,children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s),alt:c,loading:"lazy",width:"300","max-height":"709"})}),(0,h.jsx)("p",{children:""!==g?g:"Country information not available"})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[f,p&&(0,h.jsxs)("span",{children:[" (",p.slice(0,4),")"]})]}),(0,h.jsx)("p",{children:v})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{children:"Overview: "}),(0,h.jsx)("p",{children:""!==i?i:"Unfortunately, there is no detailed overview available for this movie."})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{children:"Genres: "}),(0,h.jsx)("p",{children:""!==m?m:"No genres provided"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{children:"Statistics: "}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:["Release Date:",(0,h.jsx)("p",{children:(r=p,d()(r).format("DD MMM YYYY"))})]}),(0,h.jsxs)("li",{children:["User Score:",(0,h.jsxs)("p",{children:[Math.round(10*x),"%\u2002"]})]}),(0,h.jsxs)("li",{children:["Votes:",(0,h.jsx)("p",{children:""!==j?j:"No votes yet"})]})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{children:"Production Companies:"}),(null===w||void 0===w?void 0:w.length)>0&&(0,h.jsx)("div",{children:w})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional Information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]})]})},v=n(3714),f=n(6673),x=function(){var e,r,n=(0,o.TH)(),c=(0,s.useRef)(null!==(e=null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),l=(0,s.useState)({}),d=(0,a.Z)(l,2),x=d[0],j=d[1],m=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.TP)(m);case 3:r=e.sent,j(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("article",{children:[(0,h.jsx)(u.rU,{to:c.current,children:"Go back"}),(0,h.jsx)(p,{info:x})]}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(f.Z,{}),children:(0,h.jsx)(o.j3,{})})]})}},3714:function(e,r,n){n.d(r,{Df:function(){return u},TP:function(){return d},tx:function(){return p},z1:function(){return l},zv:function(){return h}});var t=n(5861),a=n(7757),c=n.n(a),i=n(1243),s="https://api.themoviedb.org/3",o="ab7c8e3be151e2a634eb03e6c55db2da",u=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(r,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=957.a312ffe6.chunk.js.map