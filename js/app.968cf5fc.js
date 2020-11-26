(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"458f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("bc3a"),i=a.n(n),r=a("2106"),o=a.n(r),c=(a("4989"),a("6cc5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("walk-dog")],1)}),l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid bg-img position-relative\n  d-flex flex-column justify-content-center align-items-center"},[t._m(0),a("div",{staticClass:"input-group w-md-50"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.isStaredZone,expression:"isStaredZone"}],staticClass:"custom-select",class:{"is-invalid":!t.selectStatus},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.isStaredZone=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:""}},[t._v("Zone")]),t._l(t.zoneData,(function(e,s){return a("option",{key:s,domProps:{value:e[1]}},[t._v(t._s(e[0]))])}))],2),t.selectStatus?t._e():a("div",{staticClass:"w-100 bg-danger mt-1 text-white position-absolute",staticStyle:{opacity:"0.75",bottom:"-30px"}},[a("small",[t._v("請至少選取行政區 或 輸入街道名稱，再進行搜尋 !")])]),t.searchStatus?t._e():a("div",{staticClass:"w-100 bg-danger mt-1 text-white position-absolute",staticStyle:{opacity:"0.75",bottom:"-30px"}},[a("small",[t._v("該路段或街道尚未設置寵物便袋箱 或 該行政區查無此街道 !")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.isStaredStreet,expression:"isStaredStreet"}],staticClass:"form-control w-50",class:{"is-invalid":!t.searchStatus},attrs:{type:"text",placeholder:"search for a street name"},domProps:{value:t.isStaredStreet},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchBag(e)},input:function(e){e.target.composing||(t.isStaredStreet=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-dark",on:{click:t.searchBag}},[a("i",{staticClass:"fas fa-search"})])])]),t.bagBoxData.length>0?a("div",{staticClass:"map-modal d-flex flex-column justify-content-center align-items-center"},[a("map-component",{attrs:{"bag-data":t.bagBoxData}}),a("button",{staticClass:"close p-3 mt-3 bg-light rounded-lg",attrs:{type:"button"},on:{click:t.removeMap}},[a("span",[t._v("×")])])],1):t._e(),t._m(1)])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slogan-titel bg-light d-inline-block p-3 text-left mb-5",staticStyle:{opacity:"0.65"}},[a("h6",{staticClass:"mb-0 h5-md"},[t._v(" THE BEST BUDDY IN TAIPEI CITY "),a("i",{staticClass:"fas fa-paw"})]),a("h4",{staticClass:"font-weight-bold h2-md"},[t._v("Always take care of you.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-light alert-dismissible fade show position-absolute",staticStyle:{bottom:"0"}},[a("small",{staticClass:"mr-3"},[t._v("API: "),a("a",{attrs:{target:"_blank",href:"https://data.taipei/#/dataset/detail?id=d338aa80-2aec-4e9d-a7de-a5d980118e32"}},[t._v("台北市資料大平台")])]),a("small",[t._v("Img: "),a("a",{attrs:{target:"_blank",href:"https://unsplash.com/"}},[t._v("unsplash")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],p=(a("99af"),a("4de4"),a("1157")),f=a.n(p),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid map-height bg-light p-2 rounded-sm"},[a("div",{staticStyle:{height:"100%"},attrs:{id:"map"}},[a("div",{staticClass:"position-absolute w-100 p-3",staticStyle:{"z-index":"1000"}},[a("div",{staticClass:"input-group input-group-sm w-90 ml-auto"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.staredStreet,expression:"staredStreet"}],staticClass:"custom-select",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.staredStreet=e.target.multiple?a:a[0]},function(e){return t.getLocationList(t.staredStreet)}]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("選擇街道")]),t._l(t.streetList,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2),a("select",{directives:[{name:"model",rawName:"v-model",value:t.staredLocation,expression:"staredLocation"}],staticClass:"custom-select",class:{"is-invalid":!t.staredLocationStatus},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.staredLocation=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("選擇地點")]),t._l(t.locationList,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e["位置"]))])}))],2),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.showLocation}},[a("i",{staticClass:"fas fa-paw"})])])])])])])},m=[],b=(a("4160"),a("c975"),a("d81d"),a("159b"),a("e11e")),g=a.n(b),v=(a("8243"),a("3ac1"),a("2573"),{name:"walkDog",props:["bagData"],data:function(){return{mapInit:"",bagBoxArr:this.bagData,staredStreet:"",streetList:[],staredLocation:"",staredLocationStatus:!0,locationList:[]}},mounted:function(){var t=g.a.map("map").setView([this.bagBoxArr[0]["緯度"],this.bagBoxArr[0]["經度"]],14);this.mapInit=t;var e=new g.a.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});g.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);for(var a=(new g.a.MarkerClusterGroup).addTo(t),s=0;s<this.bagBoxArr.length;s+=1)a.addLayer(g.a.marker([this.bagBoxArr[s]["緯度"],this.bagBoxArr[s]["經度"]],{icon:e}).bindPopup(this.bagBoxArr[s]["路名"]+this.bagBoxArr[s]["位置"]));t.addLayer(a),this.getStreetList()},methods:{getStreetList:function(){var t=this;this.bagBoxArr.forEach((function(e){-1===t.streetList.indexOf(e["路名"])&&t.streetList.push(e["路名"])}))},getLocationList:function(t){this.staredLocation="",this.locationList=this.bagBoxArr.filter((function(e){return e["路名"]===t}))},showLocation:function(){this.staredLocation?(this.mapInit.setView([this.staredLocation["緯度"],this.staredLocation["經度"]],20),this.staredLocationStatus=!0):this.staredStreet&&!this.staredLocation&&(this.staredLocationStatus=!1)}}}),S=v,y=(a("67c8"),a("2877")),_=Object(y["a"])(S,h,m,!1,null,"e28d4d7e",null),w=_.exports,x={name:"walkDog",components:{mapComponent:w},data:function(){return{api:"",isStaredZone:"",isStaredStreet:"",selectStatus:!0,searchStatus:!0,bagBoxData:[],zoneData:{Shilin:["士林區","0ebbc89e-f392-4f8b-a7a1-c68c07fe2ab5?"],Datong:["大同區","f5127e52-66ee-414b-8c34-ff593555efe0?"],Daan:["大安區","91826c42-9a2f-4939-a24e-87eca0b11899?"],Zhongshan:["中山區","00af3bf2-a1b2-4cb5-90f9-a880683cd245?"],Zhongzheng:["中正區","bee47acb-ace5-4cb9-959a-908e8a9ee38d?"],Neihu:["內湖區","a6daaad2-2c64-4111-805e-d52e56f6eca6?"],Wenshan:["文山區","59d8bf06-2578-47fc-82e8-061fcd8ae2e8?"],Beitou:["北投區","40affeec-1ab7-46c6-b16e-b6501579454b?"],Songshan:["松山區","90390375-1033-4675-9f1e-4387b4c3cb5e?"],Xinyi:["信義區","ae400922-c2ca-4adb-8727-d8d8d50f7880?"],Nangang:["南港區","e96afe5c-99cd-4c86-84cd-f94606cf5f70?"],Wanhua:["萬華區","fe0698c6-747c-40e0-970e-393bb1ec5588?"]}}},methods:{searchBag:function(){this.isStaredZone||this.isStaredStreet?!this.isStaredZone&&this.isStaredStreet?(this.selectStatus=!0,this.api="https://data.taipei/api/v1/dataset/2822f947-7585-4da4-a1cf-f20d1475d4f8?scope=resourceAquire&q=".concat(this.isStaredStreet),this.searchRequest()):(this.selectStatus=!0,this.api="https://data.taipei/api/v1/dataset/".concat(this.isStaredZone,"scope=resourceAquire&q=").concat(this.isStaredStreet),this.searchRequest()):(this.selectStatus=!1,this.searchStatus=!0)},searchRequest:function(){var t=this;this.axios.get(t.api).then((function(e){0===e.data.result.results.length?t.searchStatus=!1:(t.searchStatus=!0,t.bagBoxData=e.data.result.results.filter((function(t){return t["緯度"]>24.9809089&&t["緯度"]<25.2540222&&t["經度"]>121.3922023&&t["經度"]<121.6576136})),f()(".alert").alert("close"))}))},removeMap:function(){this.bagBoxData=[]}}},C=x,L=(a("74ce"),Object(y["a"])(C,u,d,!1,null,"53f39736",null)),k=L.exports,A={name:"App",components:{walkDog:k}},B=A,O=(a("5c0b"),Object(y["a"])(B,c,l,!1,null,null,null)),j=O.exports;s["a"].config.productionTip=!1,s["a"].use(o.a,i.a),new s["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("458f")},"67c8":function(t,e,a){"use strict";a("afcb")},"74ce":function(t,e,a){"use strict";a("9ffa")},"9ffa":function(t,e,a){},afcb:function(t,e,a){}});
//# sourceMappingURL=app.968cf5fc.js.map