(function(e){function t(t){for(var r,c,o=t[0],u=t[1],s=t[2],f=0,l=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&l.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},i={app:0},a=[];function o(e){return u.p+"assets/js/"+({}[e]||e)+"."+{"chunk-124a0778":"7cf71db5","chunk-3e3d59e5":"2b36a1a5","chunk-5fc4bd12":"afe9705b","chunk-a06951f4":"d886cbee","chunk-eff98dc4":"5853ffdd","chunk-081bf6bd":"5ba0b251","chunk-1f3a1f6a":"4d1baa89","chunk-2d213125":"415a7fb8","chunk-2d21a09f":"170edd48","chunk-2d225263":"475f88b8","chunk-c2da6294":"1513556a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-124a0778":1,"chunk-3e3d59e5":1,"chunk-5fc4bd12":1,"chunk-a06951f4":1,"chunk-eff98dc4":1,"chunk-1f3a1f6a":1,"chunk-c2da6294":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-124a0778":"9c5f489f","chunk-3e3d59e5":"9f506c02","chunk-5fc4bd12":"a711c50b","chunk-a06951f4":"0e64c211","chunk-eff98dc4":"3f50a9f5","chunk-081bf6bd":"31d6cfe0","chunk-1f3a1f6a":"fba44b84","chunk-2d213125":"31d6cfe0","chunk-2d21a09f":"31d6cfe0","chunk-2d225263":"31d6cfe0","chunk-c2da6294":"5e7585d1"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===i))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],f=s.getAttribute("data-href");if(f===r||f===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){c[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=o(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={name:"App"},o=a,u=(n("5c0b"),n("2877")),s=Object(u["a"])(o,c,i,!1,null,null,null),f=s.exports,l=n("1da1"),d=n("2909"),p=(n("96cf"),n("4de4"),n("d3b7"),n("7db0"),n("d81d"),n("caad"),n("2532"),n("c975"),n("99af"),n("2f62"));r["a"].use(p["a"]);var _=new p["a"].Store({state:{cities:[],active_city:{},show_cities:[],people:[],active_person:{},show_people:[],regions:[],active_region:{},quotes:[],user_clicked_map:!1,search_map:!1,search_text:"",line_scrolled:!1,modal:!1,graphics:[]},getters:{cityChecker:function(){return function(e,t){return e.region_id===t.region_id&&e.country_id===t.country_id}},active_city:function(e){return e.active_city},cities:function(e){return e.search_map?e.show_cities:e.cities},active_person:function(e){return e.active_person},people:function(e){return e.show_people},regions:function(e){return e.regions},line_scrolled:function(e){return e.line_scrolled},active_region:function(e){return e.active_region},quotes:function(e){return e.quotes},user_clicked_map:function(e){return e.user_clicked_map},search_map:function(e){return e.search_map},search_text:function(e){return e.search_text},modal:function(e){return e.modal},graphics:function(e){return e.graphics}},mutations:{SET_CITIES:function(e,t){e.cities=Object(d["a"])(t),e.show_cities=e.cities},SET_ACTIVE_CITY:function(e,t){e.active_city=t},SET_PEOPLE:function(e,t){e.people=Object(d["a"])(t)},SET_ACTIVE_PERSON:function(e,t){e.active_person=t||{}},SET_REGIONS:function(e,t){e.regions=Object(d["a"])(t)},SET_ACTIVE_REGION:function(e,t){e.active_region=t},SET_CLICK_MAP:function(e,t){e.user_clicked_map=t},SET_SEARCH_ACTIVE:function(e,t){e.search_map=t},SHOW_CITIES:function(e,t){e.show_cities=t},SHOW_PEOPLE:function(e,t){e.show_people=t},SET_SEARCH:function(e,t){e.search_text=t},SET_QUOTES:function(e,t){e.quotes=t},UPDATE_QUOTES:function(e){e.quotes.push(e.quotes.shift())},SCROLL_LINE:function(e,t){e.line_scrolled=t},SET_MODAL:function(e,t){e.modal=t},SET_GRAPHICS:function(e,t){e.graphics=t}},actions:{setActiveCity:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,c,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,c=e.getters,i=e.state,a=e.dispatch,o=i.people.filter((function(e){return t.id===e.city_id})),!(o.length>0)){n.next=10;break}return r("SET_ACTIVE_REGION",c.regions.find((function(e){return c.cityChecker(t,e)}))),r("SET_ACTIVE_CITY",t),r("SET_ACTIVE_PERSON",o[0]),r("SET_SEARCH_ACTIVE",!1),r("SET_CLICK_MAP",!0),n.next=10,a("setBasicShowInfo");case 10:case"end":return n.stop()}}),n)})))()},setBasicShowInfo:function(e){var t=e.commit,n=e.getters,r=e.state;return new Promise((function(e){var c=r.cities.filter(r.active_region.id?function(e){return n.cityChecker(e,r.active_region)}:function(){return!0});t("SHOW_CITIES",c);var i=r.people.filter((function(e){return r.active_city.id?e.city_id===r.active_city.id:!!c.find((function(t){return t.id===e.city_id}))}));t("SHOW_PEOPLE",i),e(!0)}))},setActiveRegion:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,c,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,c=e.dispatch,i=e.state,r("SET_SEARCH_ACTIVE",!1),!t.id){n.next=15;break}if(a=i.cities.filter((function(e){return e.search_region_id===t.id})).map((function(e){return e.id})),o=i.people.filter((function(e){return a.includes(e.city_id)})),!(o.length>0)){n.next=12;break}return r("SET_ACTIVE_REGION",t),r("SET_ACTIVE_CITY",i.cities.filter((function(e){return e.search_region_id===t.id}))[0]),r("SET_ACTIVE_PERSON",o[0]),r("SET_CLICK_MAP",!0),n.next=12,c("setBasicShowInfo");case 12:return n.abrupt("return",o.length>0);case 15:return r("SET_ACTIVE_REGION",{}),r("SET_ACTIVE_CITY",{}),r("SET_ACTIVE_PERSON",{}),r("SET_CLICK_MAP",!1),n.abrupt("return",!1);case 20:case"end":return n.stop()}}),n)})))()},setActivePerson:function(e,t){var n=e.commit,r=e.getters,c=e.state;return new Promise((function(e){n("SET_ACTIVE_PERSON",t),c.search_map&&n("SET_MODAL",!0);var i=c.cities.map((function(e){return e.id})).indexOf(t.city_id);n("SET_ACTIVE_CITY",-1!==i?c.cities[i]:{}),n("SET_ACTIVE_REGION",c.regions.find((function(e){return r.cityChecker(r.active_city,e)}))),n("SET_SEARCH_ACTIVE",!1),n("SET_CLICK_MAP",!0),e(!0)}))},setClicked:function(e,t){var n=e.commit;n("SET_CLICK_MAP",t)},getGraphicsInfo:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("".concat(location.origin,"/api/getGraphics.php"));case 3:if(r=t.sent,t.t0=r.ok,!t.t0){t.next=11;break}return t.t1=n,t.next=9,r.json();case 9:t.t2=t.sent.result,(0,t.t1)("SET_GRAPHICS",t.t2);case 11:return t.next=13,fetch("".concat(location.origin,"/api/getQuotes.php"));case 13:if(c=t.sent,t.t3=c.ok,!t.t3){t.next=21;break}return t.t4=n,t.next=19,c.json();case 19:t.t5=t.sent.result,(0,t.t4)("SET_QUOTES",t.t5);case 21:case"end":return t.stop()}}),t)})))()},getFullInfo:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,c,i,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.next=3,fetch("".concat(location.origin,"/api/getRegions.php"));case 3:if(c=t.sent,t.t0=c.ok,!t.t0){t.next=11;break}return t.t1=n,t.next=9,c.json();case 9:t.t2=t.sent.result,(0,t.t1)("SET_REGIONS",t.t2);case 11:return t.next=13,fetch("".concat(location.origin,"/api/getCities.php"));case 13:if(i=t.sent,t.t3=i.ok,!t.t3){t.next=21;break}return t.t4=n,t.next=19,i.json();case 19:t.t5=t.sent.result,(0,t.t4)("SET_CITIES",t.t5);case 21:return t.next=23,fetch("".concat(location.origin,"/api/getPeople.php"));case 23:if(a=t.sent,t.t6=a.ok,!t.t6){t.next=31;break}return t.t7=n,t.next=29,a.json();case 29:t.t8=t.sent.result,(0,t.t7)("SET_PEOPLE",t.t8);case 31:return r("setBasicShowInfo"),t.next=34,fetch("".concat(location.origin,"/api/getQuotes.php"));case 34:if(o=t.sent,t.t9=o.ok,!t.t9){t.next=42;break}return t.t10=n,t.next=40,o.json();case 40:t.t11=t.sent.result,(0,t.t10)("SET_QUOTES",t.t11);case 42:case"end":return t.stop()}}),t)})))()},getPersonInfo:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,fetch("".concat(location.origin,"/api/getPerson.php?id=").concat(t));case 3:if(c=n.sent,n.t0=c.ok,!n.t0){n.next=11;break}return n.t1=r,n.next=9,c.json();case 9:n.t2=n.sent.result,(0,n.t1)("SET_ACTIVE_PERSON",n.t2);case 11:case"end":return n.stop()}}),n)})))()},searchInfo:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.getters,t.next=3,fetch("".concat(location.origin,"/api/getSearch.php?search=").concat(r.search_text));case 3:return c=t.sent,t.next=6,c.json();case 6:i=t.sent.result,n("SHOW_CITIES",i.cities),n("SHOW_PEOPLE",i.people),n("SET_ACTIVE_REGION",{}),n("SET_ACTIVE_CITY",{}),n("SET_ACTIVE_PERSON",{}),n("SET_CLICK_MAP",!1),n("SET_SEARCH_ACTIVE",r.search_text.length>0);case 14:case"end":return t.stop()}}),t)})))()},updateText:function(e,t){var n=e.commit;n("SET_SEARCH",t.target.value)},getNextQuote:function(e){var t=e.commit;t("UPDATE_QUOTES")},toggleLine:function(e,t){var n=e.commit;n("SCROLL_LINE",t)},toggleModal:function(e,t){var n=e.commit;n("SET_MODAL",t)}}}),h=(n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-wrap"},[n("div",{staticClass:"home-page"},[e._m(0),n("div",{staticClass:"offer"},[e._m(1),n("HomeSlider")],1),n("div",{staticClass:"move-on"},[n("HomeProgress"),n("router-link",{staticClass:"move-on__link",attrs:{to:"people",tag:"a"}},[e._v("Идти дальше")])],1)]),n("div",{staticClass:"backgrounds"},e._l(e.backgrounds,(function(t,r){return n("div",{key:r,staticClass:"background",class:{active:r===e.active_index},style:{backgroundImage:"url('"+t+"')"}})})),0),n("BlockBooks")],1)},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-stat"},[r("a",{attrs:{href:"https://www.gks.ru",target:"_blank"}},[r("img",{attrs:{src:n("76da")}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"offer__image"},[r("img",{attrs:{src:n("9d64")}})])}],E=(n("4795"),{name:"Home",components:{BlockBooks:function(){return n.e("chunk-124a0778").then(n.bind(null,"9872"))},HomeSlider:function(){return n.e("chunk-a06951f4").then(n.bind(null,"6f1b"))},HomeProgress:function(){return n.e("chunk-eff98dc4").then(n.bind(null,"a760"))}},data:function(){return{bg_interval:null,active_index:0}},computed:{backgrounds:function(){return["/assets/images/bg-index.jpg","/assets/images/bg-index2.jpg","/assets/images/bg-index3.jpg"]}},mounted:function(){var e=this;this.$set(this,"bg_interval",setInterval((function(){var t=e.active_index+1===e.backgrounds.length?0:e.active_index+1;e.$set(e,"active_index",t)}),5e3))},beforeDestroy:function(){clearInterval(this.bg_interval),this.$set(this,"bg_interval",null)}}),v=E,b=(n("21bb"),Object(u["a"])(v,g,m,!1,null,null,null)),S=b.exports;r["a"].use(h["a"]);var T=[{path:"/",name:"Home",component:S},{path:"/people",name:"People",props:function(e){return{id:e.query.pid}},component:function(){return n.e("chunk-3e3d59e5").then(n.bind(null,"bea6"))}},{path:"/people/:id",name:"PeopleID",props:!0,component:function(){return n.e("chunk-3e3d59e5").then(n.bind(null,"bea6"))}},{path:"/graphics",name:"Graphics",component:function(){return n.e("chunk-5fc4bd12").then(n.bind(null,"d795"))}}],k=new h["a"]({routes:T,mode:"history"}),C=k,I=n("58ca");r["a"].config.productionTip=!1,r["a"].use(I["a"]),new r["a"]({store:_,router:C,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"76da":function(e,t,n){e.exports=n.p+"assets/img/logo-stat.c8a3efcf.png"},"9c0c":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"assets/img/logo.048bcec7.png"}});
//# sourceMappingURL=app.a2c797a2.js.map