(function(t){function e(e){for(var r,o,l=e[0],a=e[1],i=e[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);s&&s(e);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==c[a]&&(r=!1)}r&&(u.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},u=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/kondate/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var s=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(t,e,n,c,u,o){var l=Object(r["k"])("HelloWorld");return Object(r["g"])(),Object(r["c"])(l)}n("b0c0");Object(r["i"])("data-v-254c58e6");var u={key:1};function o(t,e,n,c,o,l){return Object(r["g"])(),Object(r["e"])("div",null,[Object(r["o"])(Object(r["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return o.inputUrl=t}),placeholder:"url here"},null,512),[[r["m"],o.inputUrl]]),Object(r["f"])("button",{onClick:e[1]||(e[1]=function(){return l.addItem&&l.addItem.apply(l,arguments)})},"add url"),Object(r["f"])("table",null,[Object(r["f"])("tbody",null,[(Object(r["g"])(!0),Object(r["e"])(r["a"],null,Object(r["j"])(o.urls,(function(n,c){return Object(r["g"])(),Object(r["e"])("tr",{key:c},[Object(r["f"])("td",null,Object(r["l"])(n),1),Object(r["f"])("td",null,[Object(r["f"])("button",{onClick:e[2]||(e[2]=function(e){return l.deleteItem(t.item)})},"delete")])])})),128))])]),o.urls.length?(Object(r["g"])(),Object(r["e"])("button",{key:0,onClick:e[3]||(e[3]=function(){return l.createList&&l.createList.apply(l,arguments)})},"create kaimono list")):Object(r["d"])("",!0),Object(r["o"])(Object(r["f"])("p",null,"Just a minute, please...",512),[[r["n"],o.isLoading]]),o.results.length?(Object(r["g"])(),Object(r["e"])("table",u,[Object(r["f"])("tbody",null,[(Object(r["g"])(!0),Object(r["e"])(r["a"],null,Object(r["j"])(o.results,(function(t,e){return Object(r["g"])(),Object(r["e"])("tr",{key:e},[Object(r["f"])("td",null,Object(r["l"])(t.name),1),Object(r["f"])("td",null,Object(r["l"])(t.amount),1)])})),128))])])):Object(r["d"])("",!0)])}Object(r["h"])();var l=n("1da1"),a=(n("96cf"),n("a434"),n("2ca0"),n("bc3a")),i=n.n(a),s={name:"HelloWorld",data:function(){return{inputUrl:"",urls:[],results:[],isLoading:!1}},methods:{addItem:function(){this.checkUrl()?(this.urls.unshift(this.inputUrl),this.inputUrl=""):alert("白ごはん.comかYouTubeのURLを入力してください")},deleteItem:function(t){var e=this.urls.indexOf(t);this.urls.splice(e,1)},createList:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("kondate!"),this.isLoading=!0,t.next=4,i.a.post("https://kondate-api.herokuapp.com/test",{urls:this.urls});case 4:e=t.sent,console.log(e.data),this.isLoading=!1,this.results=e.data;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkUrl:function(){return this.inputUrl.startsWith("https://")}}};n("6005");s.render=o,s.__scopeId="data-v-254c58e6";var b=s,d={name:"App",components:{HelloWorld:b}};n("e7d1");d.render=c;var f=d;Object(r["b"])(f).mount("#app")},6005:function(t,e,n){"use strict";n("ebca")},db95:function(t,e,n){},e7d1:function(t,e,n){"use strict";n("db95")},ebca:function(t,e,n){}});
//# sourceMappingURL=app.9907d05a.js.map