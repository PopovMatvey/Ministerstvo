(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e3d59e5"],{"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),o=Math.floor,i=r("".charAt),s=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,f,d){var p=n+e.length,h=r.length,v=l;return void 0!==f&&(f=a(f),v=u),s(d,v,(function(a,s){var u;switch(i(s,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,p);case"<":u=f[c(s,1,-1)];break;default:var l=+s;if(0===l)return a;if(l>h){var d=o(l/10);return 0===d?a:d<=h?void 0===r[d-1]?i(s,1):r[d-1]+i(s,1):a}u=r[l-1]}return void 0===u?"":u}))}},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),o=n("825a"),i=n("1626"),s=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var r=a(n,e,t);return null!==r&&o(r),r}if("RegExp"===s(e))return a(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),o=n("785a"),i=n("17c2"),s=n("9112"),c=function(e){if(e&&e.forEach!==i)try{s(e,"forEach",i)}catch(t){e.forEach=i}};for(var u in a)a[u]&&c(r[u]&&r[u].prototype);c(o)},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1d1c":function(e,t,n){var r=n("23e7"),a=n("83ab"),o=n("37e8").f;r({target:"Object",stat:!0,forced:Object.defineProperties!==o,sham:!a},{defineProperties:o})},4160:function(e,t,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4a3d":function(e,t,n){e.exports=n.p+"assets/img/burger.679768f2.svg"},"4a67":function(e,t,n){"use strict";n("92dd")},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),o=n("e330"),i=n("d784"),s=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),f=n("50c4"),d=n("577e"),p=n("1d80"),h=n("8aa5"),v=n("dc4a"),b=n("0cb2"),_=n("14c3"),m=n("b622"),g=m("replace"),w=Math.max,O=Math.min,x=o([].concat),k=o([].push),j=o("".indexOf),y=o("".slice),$=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),M=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,n){var o=E?"$":"$0";return[function(e,n){var r=p(this),o=void 0==e?void 0:v(e,g);return o?a(o,e,r,n):a(t,d(r),e,n)},function(e,a){var i=c(this),s=d(e);if("string"==typeof a&&-1===j(a,o)&&-1===j(a,"$<")){var p=n(t,i,s,a);if(p.done)return p.value}var v=u(a);v||(a=d(a));var m=i.global;if(m){var g=i.unicode;i.lastIndex=0}var C=[];while(1){var E=_(i,s);if(null===E)break;if(k(C,E),!m)break;var M=d(E[0]);""===M&&(i.lastIndex=h(s,f(i.lastIndex),g))}for(var P="",S=0,B=0;B<C.length;B++){E=C[B];for(var L=d(E[0]),q=w(O(l(E.index),s.length),0),D=[],A=1;A<E.length;A++)k(D,$(E[A]));var I=E.groups;if(v){var N=x([L],D,q,s);void 0!==I&&k(N,I);var R=d(r(a,void 0,N))}else R=b(L,s,q,D,I,a);q>=S&&(P+=y(s,S,q)+R,S=q+L.length)}return P+y(s,S)}]}),!M||!C||E)},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("4160"),n("159b"),n("dbb4"),n("1d1c"),n("7a82");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"7a82":function(e,t,n){var r=n("23e7"),a=n("83ab"),o=n("9bf2").f;r({target:"Object",stat:!0,forced:Object.defineProperty!==o,sham:!a},{defineProperty:o})},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"92dd":function(e,t,n){},b64b:function(e,t,n){var r=n("23e7"),a=n("7b0b"),o=n("df75"),i=n("d039"),s=i((function(){o(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(e){return o(a(e))}})},bea6:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-wrap"},[r("div",{staticClass:"inner-page custom-scrollbar__inner"},[r("div",{staticClass:"inner-header"},[r("div",{staticClass:"inner-logo",on:{click:e.goHome}},[r("img",{attrs:{src:n("9d64")}}),e._m(0)]),e._m(1),r("button",{staticClass:"burger",on:{click:function(t){e.mobileMenu=!e.mobileMenu}}},[r("img",{attrs:{src:n("4a3d")}})]),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.mobileMenu,expression:"mobileMenu"}],staticClass:"mobile-menu"},[e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7)])]),r("div",{staticClass:"inner-content"},[r("div",{staticClass:"custom-scrollbar__sidebar"},[r("div",{ref:"scroll_sidebar",staticClass:"sidebar"},[e.people_loaded?r("CurrentMan",{on:{modalHandler:function(t){return e.toggleModal(!0)}}}):e._e(),r("div",{staticClass:"sidebar__tab"},[r("p",{staticClass:"sidebar__tab-title"},[e._v("люди")]),r("BlockSearch"),r("ul",{staticClass:"sidebar__tab-list"},e._l(e.show_people,(function(t,n){return r("ListMan",{key:n,attrs:{man:t,isActive:t.id===e.active_person.id}})})),1),r("div",{staticClass:"tab-line tab-line--top"}),r("div",{staticClass:"arrows"},[r("button",{staticClass:"arrows__top",on:{click:e.goUp}}),r("button",{staticClass:"arrows__bottom",on:{click:e.goDown}})])],1),r("BlockCities")],1)]),r("div",{staticClass:"map"},[r("Map"),e.quotes_loaded?r("BlockQuotes"):e._e()],1)])]),r("BlockBooks"),e.people_loaded?r("ModalMan",{directives:[{name:"show",rawName:"v-show",value:e.modal,expression:"modal"}]}):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:e.modal,expression:"modal"}],staticClass:"overlay"})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",[e._v("Люди")]),e._v(" победы ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-stat"},[r("a",{attrs:{href:"https://www.gks.ru",target:"_blank"}},[r("img",{attrs:{src:n("76da")}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"#"}},[e._v(" цифры "),n("span",[e._v("победы")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"#"}},[e._v(" люди "),n("span",[e._v("победы")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"#"}},[e._v(" жизни "),n("span",[e._v("победы")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"#"}},[e._v(" производства "),n("span",[e._v("победы")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"#"}},[e._v(" демография "),n("span",[e._v("победы")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"#"}},[e._v(" заводы "),n("span",[e._v("победы")])])])}],o=n("1da1"),i=n("5530"),s=(n("fb6a"),n("d3b7"),n("3ca3"),n("ddb0"),n("c975"),n("d81d"),n("96cf"),n("2f62")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:e.openModal}},[n("div",{staticClass:"sidebar__image"},[n("div",{staticClass:"sidebar__image-wr"},[n("img",{attrs:{srcset:e.photo,src:e.photo.split(",")[0]},on:{error:e.setPlaceholder}})])]),n("p",{staticClass:"sidebar__name"},[n("a",[e._v(e._s(e.shortName))])])])},u=[],l=(n("b0c0"),n("99af"),n("ac1f"),n("5319"),{name:"CurrentMan",data:function(){return{error:!1}},watch:{active_person:function(){this.$set(this,"error",!1)}},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["active_person"])),{},{shortName:function(){var e=this.active_person.name,t=this.active_person.f_name,n=this.active_person.s_name,r="-"===n;return"".concat(e.length>0?e[0]+".":""," ").concat(t.length>0?r?t:t[0]+".":""," ").concat(r?"":n)},photo:function(){var e=this.active_person.sex?"/assets/images/placeholders/current_pic_wmn.jpg":"/assets/images/placeholders/current_pic_mn.jpg",t=this.active_person.sex?"/assets/images/placeholders/current_pic_wmn@2x.jpg":"/assets/images/placeholders/current_pic_mn@2x.jpg";return this.error?"".concat(e,", ").concat(t," 2x"):this.active_person.photo?this.active_person.photo.replace(/ /g,"%20"):""}}),methods:{openModal:function(){this.$emit("modalHandler")},setPlaceholder:function(){this.$set(this,"error",!0)}}}),f=l,d=n("2877"),p=Object(d["a"])(f,c,u,!1,null,null,null),h=p.exports,v={name:"People",props:{id:String},data:function(){return{mobileMenu:!1,booksOpened:!1,show_people:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["people","active_person","quotes","modal"])),{},{people_loaded:function(){return!!this.active_person.id},quotes_loaded:function(){return this.quotes.length>0}}),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.getFullInfo(),!e.id){t.next=5;break}return t.next=4,e.getPersonInfo(e.id);case 4:e.toggleModal(!0);case 5:case"end":return t.stop()}}),t)})))()},watch:{people:function(){this.$set(this,"show_people",this.people.slice(0,3))},modal:function(){this.modal?document.querySelector("body").classList.add("modal-open"):document.querySelector("body").classList.remove("modal-open")}},components:{Map:function(){return n.e("chunk-1f3a1f6a").then(n.bind(null,"a0be"))},ListMan:function(){return n.e("chunk-2d213125").then(n.bind(null,"aab1"))},CurrentMan:h,ModalMan:function(){return n.e("chunk-081bf6bd").then(n.bind(null,"2fcc"))},BlockBooks:function(){return n.e("chunk-124a0778").then(n.bind(null,"9872"))},BlockCities:function(){return n.e("chunk-2d21a09f").then(n.bind(null,"ba8b"))},BlockQuotes:function(){return n.e("chunk-c2da6294").then(n.bind(null,"5e2a"))},BlockSearch:function(){return n.e("chunk-2d225263").then(n.bind(null,"e2bb"))}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["setActivePerson","getFullInfo","getPersonInfo","toggleLine","toggleModal"])),{},{hideLine:function(e){this.toggleLine(e>0)},goHome:function(){this.$router.push("/")},goUp:function(){var e=this.active_person.id?this.people.map((function(e){return e.id})).indexOf(this.active_person.id)-1:0,t=this.show_people.map((function(e){return e.id})).indexOf(this.active_person.id);e=e<0?this.people.length-1:e,0===t&&(this.show_people.unshift(this.people[e]),this.show_people.pop()),this.setActivePerson(this.people[e])},goDown:function(){var e=this.active_person.id?this.people.map((function(e){return e.id})).indexOf(this.active_person.id)+1:0,t=this.show_people.map((function(e){return e.id})).indexOf(this.active_person.id);e=e>this.people.length-1?0:e,t===this.show_people.length-1&&(this.show_people.push(this.people[e]),this.show_people.shift()),this.setActivePerson(this.people[e])}}),mounted:function(){var e=this,t=window.Scrollbar.init(document.querySelector(".custom-scrollbar__sidebar"),{alwaysShowTracks:!0});window.Scrollbar.init(document.querySelector(".custom-scrollbar__inner"),{continuousScrolling:!1}),t.addListener((function(t){e.hideLine(t.offset.y)}))}},b=v,_=(n("4a67"),Object(d["a"])(b,r,a,!1,null,"289145b3",null));t["default"]=_.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),o=n("9263"),i=n("d039"),s=n("b622"),c=n("9112"),u=s("species"),l=RegExp.prototype;e.exports=function(e,t,n,f){var d=s(e),p=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=p&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!p||!h||n){var v=r(/./[d]),b=t(d,""[e],(function(e,t,n,a,i){var s=r(e),c=t.exec;return c===o||c===l.exec?p&&!i?{done:!0,value:v(t,n,a)}:{done:!0,value:s(n,t,a)}:{done:!1}}));a(String.prototype,e,b[0]),a(l,d,b[1])}f&&c(l[d],"sham",!0)}},dbb4:function(e,t,n){var r=n("23e7"),a=n("83ab"),o=n("56ef"),i=n("fc6a"),s=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,n,r=i(e),a=s.f,u=o(r),l={},f=0;while(u.length>f)n=a(r,t=u[f++]),void 0!==n&&c(l,t,n);return l}})},e439:function(e,t,n){var r=n("23e7"),a=n("d039"),o=n("fc6a"),i=n("06cf").f,s=n("83ab"),c=a((function(){i(1)})),u=!s||c;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})}}]);
//# sourceMappingURL=chunk-3e3d59e5.2b36a1a5.js.map