(this["webpackJsonpyahoo-shopping-ranking"]=this["webpackJsonpyahoo-shopping-ranking"]||[]).push([[0],{65:function(e,t,n){e.exports=n(83)},70:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"shopping",(function(){return X})),n.d(a,"Ranking",(function(){return ne}));var r=n(0),o=n.n(r),c=n(6),i=n.n(c),l=(n(70),n(127)),u=n(128),p=n(125),s=n(25),d=n(32),m=n(20),g=n(52),y=n(53),f=n(60),h=n(112),E=n(115),v=n(116),k=n(117),b=n(38),j=n(118),R=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.onMount(this.props.categoryId)}},{key:"componentWillReceiveProps",value:function(e){this.props.categoryId!==e.categoryId&&this.props.onUpdate(e.categoryId)}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.ranking,a=e.error;return o.a.createElement("div",null,o.a.createElement("h2",null,"undefined"!==typeof t?"".concat(t.name,"\u306e\u30e9\u30f3\u30ad\u30f3\u30b0"):""),a?o.a.createElement("p",null,"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f"):"undefined"===typeof n?o.a.createElement("p",null,"\u8aad\u8fbc\u4e2d..."):n.map((function(e,t){return o.a.createElement(h.a,{key:"ranking-item-".concat(e.code),style:{maxWidth:"500px",margin:"32px auto"}},o.a.createElement(E.a,{image:e.imageUrl,title:"".concat(t+1,"\u4f4d ").concat(e.name),style:{height:"200px"}}),o.a.createElement(v.a,null,o.a.createElement(b.a,{type:"title"},"".concat(t+1,"\u4f4d ").concat(e.name))),o.a.createElement(k.a,null,o.a.createElement(j.a,{raised:!0,color:"secondary",fullWidth:!0,href:e.url},"\u5546\u54c1\u30da\u30fc\u30b8\u3078")))})))}}]),t}(o.a.Component);R.defaultProps={categoryId:"1"};var O=n(37),I=n.n(O),w=n(54),x=n.n(w),T=n(55),S=n.n(T),W=n(19),U=function(e){return{type:"START_REQUEST",payload:{category:e}}},C=function(e,t,n){return{type:"RECEIVE_DATA",payload:{category:e,error:t,response:n}}},A=function(e){return{type:"FINISH_REQUEST",payload:{category:e}}},N=function(e){return function(t,n){var a,r,o,c,i;return I.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(a=n().shopping.categories,"undefined"!==typeof(r=a.find((function(t){return t.id===e})))){l.next=5;break}return t(Object(W.c)("/")),l.abrupt("return");case 5:return t(U(r)),o=S.a.stringify({appid:"dj00aiZpPWkxUzFqRmgzNGZkTCZzPWNvbnN1bWVyc2VjcmV0Jng9MDY-",category_id:e}),l.prev=7,l.next=10,I.a.awrap(x()("".concat("http://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking","?").concat(o)));case 10:return c=l.sent,l.next=13,I.a.awrap(c.json());case 13:i=l.sent,t(C(r,null,i)),l.next=20;break;case 17:l.prev=17,l.t0=l.catch(7),t(C(r,l.t0));case 20:t(A(r));case 21:case"end":return l.stop()}}),null,null,[[7,17]])}},V=Object(s.b)((function(e,t){return{category:e.Ranking.category,ranking:e.Ranking.ranking,error:e.Ranking.error}}),(function(e){return{onMount:function(t){e(N(t))},onUpdate:function(t){e(N(t))}}}))(R),_=n(124),M=n(119),P=n(129),z=n(120);var D=Object(s.b)((function(e){return{categories:e.shopping.categories}}),(function(e){return{onClick:function(t){e(Object(W.b)(t))}}}))((function(e){var t=e.categories,n=e.onClick;return o.a.createElement(_.a,{variant:"permanent"},o.a.createElement(M.a,{style:{width:240}},t.map((function(e){return o.a.createElement(P.a,{button:!0,key:"menu-item-".concat(e.id),onClick:function(){return n(function(e){return"1"===e.id?"/all":"/category/".concat(e.id)}(e))}},o.a.createElement(z.a,{primary:e.name}))}))))})),J=n(126),Q=n(121),Z=n(122);var B=function(){return o.a.createElement("div",{className:"App",style:{paddingLeft:240}},o.a.createElement(J.a,null),o.a.createElement(Q.a,{style:{left:240}},o.a.createElement(Z.a,null,o.a.createElement(b.a,{type:"title",color:"inherit"},"Yahoo! \u30b7\u30e7\u30c3\u30d4\u30f3\u30b0\u30e9\u30f3\u30ad\u30f3\u30b0"))),o.a.createElement(D,null),o.a.createElement("div",{style:{marginTop:64,padding:32}},o.a.createElement(l.a,null,o.a.createElement(u.a,{path:"/all",component:V}),o.a.createElement(u.a,{path:"/category/1",render:function(){return o.a.createElement(p.a,{to:"/all"})}}),o.a.createElement(u.a,{path:"/category/:id",render:function(e){var t=e.match;return o.a.createElement(V,{categoryId:t.params.id})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(59),Y=n.n(F),q=n(30),G=n(27),H=n(57),L=n.n(H),$=n(58),K={categories:[{id:"1",name:"\u3059\u3079\u3066\u306e\u30ab\u30c6\u30b4\u30ea"},{id:"2502",name:"\u30d1\u30bd\u30b3\u30f3\u3001\u5468\u8fba\u6a5f\u5668"},{id:"10002",name:"\u672c\u3001\u96d1\u8a8c\u3001\u30b3\u30df\u30c3\u30af"}]},X=function(){return K},ee=function(e){for(var t=[],n=e.ResultSet.totalResultsReturned,a=0;a<n;a++){var r=e.ResultSet[0].Result[a+""];t.push({code:r.Code,name:r.Name,url:r.Url,imageUrl:r.Image.Medium})}return t},te={categoryId:void 0,ranking:void 0,error:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_REQUEST":return{categoryId:t.payload.categoryId,ranking:void 0,error:!1};case"RECEIVE_DATA":return t.payload.error?Object(q.a)({},e,{error:!1}):Object(q.a)({},e,{ranking:ee(t.payload.response)});default:return e}};var ae,re=Y()(),oe=(ae=re,Object(G.d)(Object(G.c)(Object(q.a)({},a,{router:W.e})),Object(G.a)(L.a,$.a,Object(W.d)(ae))));i.a.render(o.a.createElement(s.a,{store:oe},o.a.createElement(W.a,{history:re},o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.2a36599e.chunk.js.map