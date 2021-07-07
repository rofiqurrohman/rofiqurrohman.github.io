!function(e){function t(t){for(var n,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(t);d.length;)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={3:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=c;o.push([27,1,0,2]),r()}([function(e,t,r){"use strict";var n={KEY:"12345",BASE_IMAGE_URL:function(e){return"https://restaurant-api.dicoding.dev/images/".concat(e,"/")},BASE_URL:"https://restaurant-api.dicoding.dev",CACHE_NAME:"WarungApps-".concat(Math.random().toString(36).substring(2,5)),DATABASE_NAME:"warung-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"warung"};t.a=n},function(e,t,r){"use strict";var n=r(0),a={LIST_WARUNG:"".concat(n.a.BASE_URL,"/list"),DETAIL:function(e){return"".concat(n.a.BASE_URL,"/detail/").concat(e)},REVIEW:"".concat(n.a.BASE_URL,"/review")};function o(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function i(e){o(u,n,a,i,c,"next",e)}function c(e){o(u,n,a,i,c,"throw",e)}i(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o,c,s,f;return t=e,r=null,o=[{key:"listWarung",value:(f=u(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.LIST_WARUNG);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.restaurants);case 7:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)})},{key:"detailWarung",value:(s=u(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.DETAIL(t));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)}))),function(e){return s.apply(this,arguments)})},{key:"sendReview",value:(c=u(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.REVIEW,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":n.a.KEY},body:t});case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})}],r&&i(t.prototype,r),o&&i(t,o),e}();t.a=c},,function(e,t,r){"use strict";var n=r(18),a=r(0);function o(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function i(e){o(u,n,a,i,c,"next",e)}function c(e){o(u,n,a,i,c,"throw",e)}i(void 0)}))}}var i=a.a.DATABASE_NAME,c=a.a.DATABASE_VERSION,s=a.a.OBJECT_STORE_NAME,f=Object(n.a)(i,c,{upgrade:function(e){e.createObjectStore(s,{keyPath:"id"})}}),l={getWarung:function(e){return u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.get(s,e));case 5:case"end":return t.stop()}}),t)})))()},getAllWarungs:function(){return u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return e.abrupt("return",e.sent.getAll(s));case 3:case"end":return e.stop()}}),e)})))()},putWarung:function(e){return u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.put(s,e));case 5:case"end":return t.stop()}}),t)})))()},deleteWarung:function(e){return u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f;case 2:return t.abrupt("return",t.sent.delete(s,e));case 3:case"end":return t.stop()}}),t)})))()}};t.a=l},function(e,t,r){"use strict";t.a=function(e){var t=e.type,r=e.text,n=document.createElement("div");n.classList.add("toast"),n.classList.add(t);var a=document.createElement("p");a.classList.add("t-text"),a.innerHTML+=r,n.appendChild(a);var o=document.querySelector(".toast-container");window.onload=function(){o.appendChild(n)},setTimeout((function(){n.classList.add("active")}),1),setTimeout((function(){n.classList.remove("active"),setTimeout((function(){n.remove()}),350)}),4e3)}},function(e,t,r){"use strict";var n={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(e);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var t=e.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}};t.a=n},,,,,function(e,t,r){"use strict";t.a={init:function(e){var t=this,r=e.button,n=e.drawer,a=e.body;r.addEventListener("click",(function(e){t._toggleDrawer(e,n)})),a.addEventListener("click",(function(e){t._closeDrawer(e,n)}))},_toggleDrawer:function(e,t){e.stopPropagation(),t.classList.toggle("open")},_closeDrawer:function(e,t){e.stopPropagation(),t.classList.remove("open")}}},function(e,t,r){"use strict";var n=r(12),a=r(17),o=r(15),u={"/":n.a,"/detail/:id":a.a,"/favorite":o.a};t.a=u},,function(e,t,r){"use strict";var n=r(3),a=r(2),o=r(4);function u(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){u(o,n,a,i,c,"next",e)}function c(e){u(o,n,a,i,c,"throw",e)}i(void 0)}))}}var c={init:function(e){var t=this;return i(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.likeButtonContainer,a=e.warung,t._likeButtonContainer=n,t._warung=a,r.next=5,t._renderButton();case 5:case"end":return r.stop()}}),r)})))()},_renderButton:function(){var e=this;return i(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e._warung,n=r.id,a=r.name,t.next=3,e._isWarungExist(n);case 3:if(!t.sent){t.next=7;break}e._renderLiked(a),t.next=8;break;case 7:e._renderLike(a);case 8:case"end":return t.stop()}}),t)})))()},_isWarungExist:function(e){return i(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.getWarung(e);case 2:return r=t.sent,t.abrupt("return",!!r);case 4:case"end":return t.stop()}}),t)})))()},_renderLike:function(e){var t=this;this._likeButtonContainer.innerHTML=Object(a.b)(),document.querySelector("#likeButton").addEventListener("click",i(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.a.putWarung(t._warung);case 2:Object(o.a)({type:"success",text:"".concat(e," has been add to favorite")}),t._renderButton();case 4:case"end":return r.stop()}}),r)}))))},_renderLiked:function(e){var t=this;this._likeButtonContainer.innerHTML=Object(a.c)(),document.querySelector("#likeButton").addEventListener("click",i(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.a.deleteWarung(t._warung.id);case 2:Object(o.a)({type:"danger",text:"".concat(e," has been deleted from favorite")}),t._renderButton();case 4:case"end":return r.stop()}}),r)}))))}};t.a=c},function(e,t,r){"use strict";var n=r(1),a=r(4);function o(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c={init:function(e){var t=this,r=e.form;r.addEventListener("submit",(function(e){e.preventDefault(),t.validateDataForm(r)}))},validateDataForm:function(e){var t=this.setDataForm(e),r={status:!1,keys:[]};for(var n in t)""===t[n]&&(r.status=!0,r.keys.push(n));!1===r.status?this.sendData({data:JSON.stringify(t),form:e}):this.errorHandler(r,e)},setDataForm:function(e){var t,r=new FormData(e),n={},a=u(r.keys());try{for(a.s();!(t=a.n()).done;){var o=t.value;n[o]=r.get(o)}}catch(e){a.e(e)}finally{a.f()}return n},errorHandler:function(e,t){t.querySelectorAll("span").forEach((function(e){e.remove()})),e.keys.forEach((function(e){var t=document.querySelector("#".concat(e)),r=document.createElement("span");r.setAttribute("class","input-require"),r.innerText="field ".concat(e," must be filled"),t.after(r)}))},successHandler:function(e){var t=e;t.querySelectorAll("span").forEach((function(e){e.remove()})),t.querySelector("input[type=text]").value="",t.querySelector("textarea").value="",Object(a.a)({type:"success",text:"Review added successfully"})},sendData:function(e){var t,r=this;return(t=regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.data,o=e.form;try{n.a.sendReview(a),r.successHandler(o)}catch(e){console.log(e)}case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var u=t.apply(e,r);function i(e){o(u,n,a,i,c,"next",e)}function c(e){o(u,n,a,i,c,"throw",e)}i(void 0)}))})()}};t.a=c},,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);r(19),r(20),r(24);var n=r(9),a=r(16),o=r.n(a);function u(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}var i=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,o.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){u(o,n,a,i,c,"next",e)}function c(e){u(o,n,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),c=(r(7),r(26),new n.a({button:document.querySelector("#hamburger"),drawer:document.querySelector("#drawer"),content:document.querySelector("#mainContent"),body:document.querySelector("body")}));window.addEventListener("hashchange",(function(){c.renderPage()})),window.addEventListener("load",(function(){c.renderPage(),i()}))}]);