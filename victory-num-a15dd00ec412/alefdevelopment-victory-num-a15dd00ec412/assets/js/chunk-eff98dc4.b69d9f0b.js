(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eff98dc4"],{"268e":function(e,t,s){},"89e0":function(e,t,s){"use strict";var i=s("268e"),r=s.n(i);r.a},a760:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"progress-bar"},[s("span",{class:{active:e.active}})])},r=[],n={name:"HomeProgress",data(){return{active:!1,timer:null}},mounted(){setTimeout(()=>{this.$set(this,"active",!0),this.$set(this,"timer",setTimeout(()=>{this.$router.push("/people")},11e3))},0)},beforeDestroy(){this.$set(this,"active",!1),clearTimeout(this.timer),this.$set(this,"timer",null)}},a=n,u=(s("89e0"),s("2877")),c=Object(u["a"])(a,i,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-eff98dc4.b69d9f0b.js.map