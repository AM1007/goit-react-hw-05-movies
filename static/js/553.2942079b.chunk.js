"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[553],{553:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(439),c=e(791),u=e(689),a=e(184),o=function(n){var t=n.author,e=n.content;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h2",{children:["Author: ",t]}),(0,a.jsx)("p",{children:e})]})},i=e(228),s=function(){var n=(0,u.UO)().movieId,t=(0,c.useState)(null),e=(0,r.Z)(t,2),s=e[0],f=e[1];if((0,c.useEffect)((function(){(0,i.yJ)(n).then((function(n){var t=n.results;f(t)}))}),[n]),s)return(0,a.jsx)("ul",{children:s.length>0?s.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,a.jsx)(o,{author:t,content:e},r)})):(0,a.jsx)("p",{children:"We don't have any reviews for this movie"})})}},228:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,i,"next",n)}function i(n){r(a,c,u,o,i,"throw",n)}o(void 0)}))}}e.d(t,{fT:function(){return v},ZP:function(){return p},Ny:function(){return h},yJ:function(){return l},qF:function(){return d}});var u=e(757),a=e.n(u),o="a80320dfafec72dcbb6280cf373b1a2a",i="https://api.themoviedb.org/3/";function s(){return(s=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f={fetchDataWeek:function(){return s.apply(this,arguments)}},p=f,h=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=553.2942079b.chunk.js.map