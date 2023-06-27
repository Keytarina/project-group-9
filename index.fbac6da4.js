var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire7951;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7951=i),i("014TN"),i("iO6Mx"),i("70IEE");var s=i("014TN");const r=e=>'<h1 class="best-sellers-header">Best Sellers <span class="best-sellers-accent">Books</span></h1>'.concat([...e].map((e=>{const{list_name:t,books:n}=e;return`<div class="book-list-wrapper"><h2 class="best-sellers-title">${t}</h2>\n     <ul class="best-sellers-list">${n.map((e=>{const{_id:t,author:n,book_image:i,title:s}=e;return`<li class="best-sellers-list-item">\n              <div class="best-sellers-thumb"><img class="best-sellers-image" src=${i} alt=${s} data-id-img=${t}/><div class="book-thumb-overlay"><p class="book-overlay-text">quick view</p></div></div>\n              <div class="book-description-thumb"><h3 class="book-title">${s.length>18?s.slice(0,18)+"...":s}</h3>\n              <p class="book-description">${n}</p></div>\n          </li>`})).join("")}</ul><button class="see-more-btn" type="button">See More</button></div>`})).join("")),o=e=>{let t;const n=[...e].map((e=>{const{_id:n,author:i,book_image:s,title:r,list_name:o}=e;return t=o,`<li class="book-category-list-item">\n            <div class="best-sellers-thumb"><img class="best-sellers-image" src=${s} alt=${r} data-id-img=${n}/><div class="book-thumb-overlay"><p class="book-overlay-text">quick view</p></div></div>\n            <div class="book-description-thumb"><h3 class="book-title">${r.length>18?r.slice(0,18)+"...":r}</h3>\n            <p class="book-description">${i}</p></div>\n        </li>`})).join("");return t=t.split(" ").map(((e,i,s)=>{if(s.indexOf(e)+1===s.length)return`<h1 class="best-sellers-header">${t.split(" ").slice(0,i).join(" ")}<span class="best-sellers-accent"> ${e}</span></h1><ul class="book-category-list">${n}</ul>`})),t.join("")},a=document.querySelector("#container-best"),c=()=>a.innerHTML="";a.innerHTML||(async()=>{try{const e=await(0,s.fetchTopBooks)(),t=r(e);a.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();s=i("014TN");const u=document.querySelector(".categories-item"),l=document.querySelector(".categories-item");let h=document.getElementsByClassName("categories-list");const d=document.querySelector("#container-best");l.addEventListener("click",(function(e){h===document.getElementsByClassName("categories-list")&&(h=e.target);return h.classList.remove("active"),h=e.target,h.classList.add("active"),h})),(0,s.fetchBooksCategoryList)().then((e=>{const t=e.map((({list_name:e})=>`<li class="categories-list" id=${e}>${e}</li>`)).join("");u.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e))),l.addEventListener("click",(async function(e){if("LI"!==e.target.nodeName&&"All categories"===e.target.textContent)return;try{const t=await(0,s.fetchBooksByCategory)(e.target.textContent),n=o(t);c(),d.insertAdjacentHTML("beforeend",n)}catch(e){console.log(e)}})),l.addEventListener("click",(async function(e){if("All categories"===e.target.textContent)try{const e=await(0,s.fetchTopBooks)(),t=r(e);c(),d.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})),i("b11DO");s=i("014TN");var f,p,g,m=i("9EgcF"),y=f={};function v(){throw new Error("setTimeout has not been defined")}function w(){throw new Error("clearTimeout has not been defined")}function b(e){if(p===setTimeout)return setTimeout(e,0);if((p===v||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}!function(){try{p="function"==typeof setTimeout?setTimeout:v}catch(e){p=v}try{g="function"==typeof clearTimeout?clearTimeout:w}catch(e){g=w}}();var E,T=[],I=!1,_=-1;function S(){I&&E&&(I=!1,E.length?T=E.concat(T):_=-1,T.length&&k())}function k(){if(!I){var e=b(S);I=!0;for(var t=T.length;t;){for(E=T,T=[];++_<t;)E&&E[_].run();_=-1,t=T.length}E=null,I=!1,function(e){if(g===clearTimeout)return clearTimeout(e);if((g===w||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(e);try{g(e)}catch(t){try{return g.call(null,e)}catch(t){return g.call(this,e)}}}(e)}}function C(e,t){this.fun=e,this.array=t}function A(){}y.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];T.push(new C(e,t)),1!==T.length||I||b(k)},C.prototype.run=function(){this.fun.apply(null,this.array)},y.title="browser",y.browser=!0,y.env={},y.argv=[],y.version="",y.versions={},y.on=A,y.addListener=A,y.once=A,y.off=A,y.removeListener=A,y.removeAllListeners=A,y.emit=A,y.prependListener=A,y.prependOnceListener=A,y.listeners=function(e){return[]},y.binding=function(e){throw new Error("process.binding is not supported")},y.cwd=function(){return"/"},y.chdir=function(e){throw new Error("process.chdir is not supported")},y.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},R={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=s>>2,l=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(N(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new D;const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O=function(e){return function(e){const t=N(e);return R.encodeByteArray(t,!0)}(e).replace(/\./g,"")},L=function(e){try{return R.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,M=()=>{try{return P()||(()=>{if(void 0===f||void 0===f.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&L(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},x=e=>{var t,n;return null===(n=null===(t=M())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},U=e=>{const t=x(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},F=()=>{var e;return null===(e=M())||void 0===e?void 0:e.config},V=e=>{var t;return null===(t=M())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[O(JSON.stringify({alg:"none",type:"JWT"})),O(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function $(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function q(){const e=z();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function H(){try{return"object"==typeof indexedDB}catch(e){return!1}}class K extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(G,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new K(i,o,n)}}const G=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function J(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Y(n)&&Y(r)){if(!J(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Y(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Z(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ee(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){const n=new ne(e,t);return n.subscribe.bind(n)}class ne{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ie),void 0===i.error&&(i.error=ie),void 0===i.complete&&(i.complete=ie);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ie(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e){return e&&e._delegate?e._delegate:e}class re{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new B;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ae{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=[];var ue,le;(le=ue||(ue={}))[le.DEBUG=0]="DEBUG",le[le.VERBOSE=1]="VERBOSE",le[le.INFO=2]="INFO",le[le.WARN=3]="WARN",le[le.ERROR=4]="ERROR",le[le.SILENT=5]="SILENT";const he={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},de=ue.INFO,fe={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},pe=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=fe[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class ge{constructor(e){this.name=e,this._logLevel=de,this._logHandler=pe,this._userLogHandler=null,ce.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?he[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}let me,ye;const ve=new WeakMap,we=new WeakMap,be=new WeakMap,Ee=new WeakMap,Te=new WeakMap;let Ie={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return we.get(e);if("objectStoreNames"===t)return e.objectStoreNames||be.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ke(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function _e(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ye||(ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ce(this),t),ke(ve.get(this))}:function(...t){return ke(e.apply(Ce(this),t))}:function(t,...n){const i=e.call(Ce(this),t,...n);return be.set(i,t.sort?t.sort():[t]),ke(i)}}function Se(e){return"function"==typeof e?_e(e):(e instanceof IDBTransaction&&function(e){if(we.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));we.set(e,t)}(e),t=e,(me||(me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ie):e);var t}function ke(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(ke(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ve.set(t,e)})).catch((()=>{})),Te.set(t,e),t}(e);if(Ee.has(e))return Ee.get(e);const t=Se(e);return t!==e&&(Ee.set(e,t),Te.set(t,e)),t}const Ce=e=>Te.get(e);function Ae(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=ke(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(ke(o.result),e.oldVersion,e.newVersion,ke(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ne=["get","getKey","getAll","getAllKeys","count"],Re=["put","add","delete","clear"],De=new Map;function Oe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(De.get(t))return De.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Re.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Ne.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return De.set(t,r),r}Ie=(e=>({...e,get:(t,n,i)=>Oe(t,n)||e.get(t,n,i),has:(t,n)=>!!Oe(t,n)||e.has(t,n)}))(Ie);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Pe=new ge("@firebase/app"),Me={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},xe=new Map,Ue=new Map;function Fe(e,t){try{e.container.addComponent(t)}catch(n){Pe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ve(e){const t=e.name;if(Ue.has(t))return Pe.debug(`There were multiple attempts to register component ${t}.`),!1;Ue.set(t,e);for(const t of xe.values())Fe(t,e);return!0}function Be(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const je=new W("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new re("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw je.create("bad-app-name",{appName:String(s)});if(n||(n=F()),!n)throw je.create("no-options");const r=xe.get(s);if(r){if(J(n,r.options)&&J(i,r.config))return r;throw je.create("duplicate-app",{appName:s})}const o=new ae(s);for(const e of Ue.values())o.addComponent(e);const a=new ze(n,i,o);return xe.set(s,a),a}function qe(e="[DEFAULT]"){const t=xe.get(e);if(!t&&"[DEFAULT]"===e&&F())return $e();if(!t)throw je.create("no-app",{appName:e});return t}function He(e,t,n){var i;let s=null!==(i=Me[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Pe.warn(e.join(" "))}Ve(new re(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Ke=null;function We(){return Ke||(Ke=Ae("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw je.create("idb-open",{originalErrorMessage:e.message})}))),Ke}async function Ge(e,t){try{const n=(await We()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,Qe(e)),await n.done}catch(e){if(e instanceof K)Pe.warn(e.message);else{const t=je.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Pe.warn(t.message)}}}function Qe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ye();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ye(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Ze(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ze(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=O(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ye(){return(new Date).toISOString().substring(0,10)}class Xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!H()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await We();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Qe(e))}catch(e){if(e instanceof K)Pe.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Pe.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ge(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ge(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ze(e){return O(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;et="",Ve(new re("platform-logger",(e=>new Le(e)),"PRIVATE")),Ve(new re("heartbeat",(e=>new Je(e)),"PRIVATE")),He("@firebase/app","0.9.13",et),He("@firebase/app","0.9.13","esm2017"),He("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
He("firebase","9.23.0","app");function tt(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function nt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const it=nt,st=new W("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rt=new ge("@firebase/auth");function ot(e,...t){rt.logLevel<=ue.ERROR&&rt.error(`Auth (9.23.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,...t){throw lt(e,...t)}function ct(e,...t){return lt(e,...t)}function ut(e,t,n){const i=Object.assign(Object.assign({},it()),{[t]:n});return new W("auth","Firebase",i).create(t,{appName:e.name})}function lt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return st.create(e,...t)}function ht(e,t,...n){if(!e)throw lt(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ot(t),new Error(t)}function ft(e,t){e||dt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function gt(){return"http:"===mt()||"https:"===mt()}function mt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(gt()||$()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return yt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,t){ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Tt=new vt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _t(e,t,n,i,s={}){return St(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=X(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),bt.fetch()(Ct(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function St(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Et),t);try{const t=new At(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Nt(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Nt(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Nt(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw Nt(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ut(e,a,o);at(e,a)}}catch(t){if(t instanceof K)throw t;at(e,"network-request-failed",{message:String(t)})}}async function kt(e,t,n,i,s={}){const r=await _t(e,t,n,i,s);return"mfaPendingCredential"in r&&at(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Ct(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?wt(e.config,s):`${e.config.apiScheme}://${s}`}class At{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ct(this.auth,"network-request-failed"))),Tt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ct(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e){return 1e3*Number(e)}function Ot(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ot("JWT malformed, contained fewer than 3 sections"),null;try{const e=L(n);return e?JSON.parse(e):(ot("Failed to decode base64 JWT payload"),null)}catch(e){return ot("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof K&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Pt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rt(this.lastLoginAt),this.creationTime=Rt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Lt(e,async function(e,t){return _t(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));ht(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=tt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Mt(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ht(e.idToken,"internal-error"),ht(void 0!==e.idToken,"internal-error"),ht(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ot(e);return ht(t,"internal-error"),ht(void 0!==t.exp,"internal-error"),ht(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ht(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await St(e,{},(async()=>{const n=X({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=Ct(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",bt.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new Ut;return n&&(ht("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(ht("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(ht("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ut,this.toJSON())}_performRefresh(){return dt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){ht("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Vt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=tt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Lt(this,this.stsTokenManager.getToken(this.auth,e));return ht(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=se(e),i=await n.getIdToken(t),s=Ot(i);ht(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Rt(Dt(s.auth_time)),issuedAtTime:Rt(Dt(s.iat)),expirationTime:Rt(Dt(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=se(e);await xt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ht(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ht(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await xt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lt(this,async function(e,t){return _t(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;ht(v&&T,e,"internal-error");const I=Ut.fromJSON(this.name,T);ht("string"==typeof v,e,"internal-error"),Ft(l,e.name),Ft(h,e.name),ht("boolean"==typeof w,e,"internal-error"),ht("boolean"==typeof b,e,"internal-error"),Ft(d,e.name),Ft(f,e.name),Ft(p,e.name),Ft(g,e.name),Ft(m,e.name),Ft(y,e.name);const _=new Vt({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ut;i.updateFromServerResponse(t);const s=new Vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await xt(s),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Map;function jt(e){ft(e instanceof Function,"Expected a class definition");let t=Bt.get(e);return t?(ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bt.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zt.type="NONE";const $t=zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){return`firebase:${e}:${t}:${n}`}class Ht{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=qt(this.userKey,i.apiKey,s),this.fullPersistenceKey=qt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ht(jt($t),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||jt($t);const r=qt(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=Vt._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Ht(s,e,n)):new Ht(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Jt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xt(t))return"Blackberry";if(Zt(t))return"Webos";if(Gt(t))return"Safari";if((t.includes("chrome/")||Qt(t))&&!t.includes("edge/"))return"Chrome";if(Yt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Wt(e=z()){return/firefox\//i.test(e)}function Gt(e=z()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qt(e=z()){return/crios\//i.test(e)}function Jt(e=z()){return/iemobile/i.test(e)}function Yt(e=z()){return/android/i.test(e)}function Xt(e=z()){return/blackberry/i.test(e)}function Zt(e=z()){return/webos/i.test(e)}function en(e=z()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tn(){return q()&&10===document.documentMode}function nn(e=z()){return en(e)||Yt(e)||Zt(e)||Xt(e)||/windows phone/i.test(e)||Jt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e,t=[]){let n;switch(e){case"Browser":n=Kt(z());break;case"Worker":n=`${Kt(z())}-${e}`;break;default:n=e}return`${n}/JsCore/9.23.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return _t(e,"GET","/v2/recaptchaConfig",It(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e){return void 0!==e&&void 0!==e.enterprise}class an{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=ct("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function un(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ln{constructor(e){this.type="recaptcha-enterprise",this.auth=pn(e)}async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;on(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{rn(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new an(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&on(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));cn("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function hn(e,t,n,i=!1){const s=new ln(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gn(this),this.idTokenSubscription=new gn(this),this.beforeStateQueue=new dn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=st,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jt(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ht(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?se(e):null;return t&&ht(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ht(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(jt(e))}))}async initializeRecaptchaConfig(){const e=await rn(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new an(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new ln(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new W("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jt(e)||this._popupRedirectResolver;ht(t,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return ht(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ht(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){rt.logLevel<=ue.WARN&&rt.warn(`Auth (9.23.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function pn(e){return se(e)}class gn{constructor(e){this.auth=e,this.observer=null,this.addObserver=te((e=>this.observer=e))}get next(){return ht(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t,n){const i=pn(e);ht(i._canInitEmulator,i,"emulator-config-failed"),ht(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=yn(t),{host:o,port:a}=function(e){const t=yn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:vn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:vn(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function yn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function vn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class wn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t){return _t(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function En(e,t){return kt(e,"POST","/v1/accounts:signInWithPassword",It(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn extends wn{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Tn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Tn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await hn(e,n,"signInWithPassword");return En(e,t)}return En(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await hn(e,n,"signInWithPassword");return En(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return kt(e,"POST","/v1/accounts:signInWithEmailLink",It(e,t))}(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return bn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return kt(e,"POST","/v1/accounts:signInWithEmailLink",It(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t){return kt(e,"POST","/v1/accounts:signInWithIdp",It(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends wn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=tt(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new _n(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return In(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,In(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=X(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends wn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new kn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new kn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return kt(e,"POST","/v1/accounts:signInWithPhoneNumber",It(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await kt(e,"POST","/v1/accounts:signInWithPhoneNumber",It(e,t));if(n.temporaryProof)throw Nt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return kt(e,"POST","/v1/accounts:signInWithPhoneNumber",It(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Sn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new kn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){var t,n,i,s,r,o;const a=Z(ee(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ht(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Z(ee(e)).link,n=t?Z(ee(t)).deep_link_id:null,i=Z(ee(e)).deep_link_id;return(i?Z(ee(i)).link:null)||i||n||t||e}(e);try{return new Cn(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,t){return Tn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Cn.parseLink(t);return ht(n,"argument-error"),Tn._fromEmailAndCode(e,n.code,n.tenantId)}}An.PROVIDER_ID="password",An.EMAIL_PASSWORD_SIGN_IN_METHOD="password",An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Nn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn extends Rn{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch(e){return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Dn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On extends Rn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return On.credential(t,n)}catch(e){return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com",On.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends Rn{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch(e){return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com",Ln.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn extends Rn{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pn.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mn(e,t){return kt(e,"POST","/v1/accounts:signUp",It(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.TWITTER_SIGN_IN_METHOD="twitter.com",Pn.PROVIDER_ID="twitter.com";class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Vt._fromIdTokenResponse(e,n,i),r=Un(n);return new xn({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Un(n);return new xn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Un(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn extends K{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Fn.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Fn(e,t,n,i)}}function Vn(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Fn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e,t,n=!1){const i=await Lt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xn._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jn(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Lt(e,Vn(i,s,t,e),n);ht(r.idToken,i,"internal-error");const o=Ot(r.idToken);ht(o,i,"internal-error");const{sub:a}=o;return ht(e.uid===a,i,"user-mismatch"),xn._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&at(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t,n=!1){const i="signIn",s=await Vn(e,i,t),r=await xn._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function $n(e,t){return zn(pn(e),t)}async function qn(e,t,n){var i;const s=pn(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await hn(s,r,"signUpPassword");o=Mn(s,e)}else o=Mn(s,r).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await hn(s,r,"signUpPassword");return Mn(s,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await xn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Hn(e,t,n){return $n(se(e),An.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Kn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=z();return Gt(e)||en(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=nn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);tn()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wn.type="LOCAL";const Gn=Wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Kn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qn.type="SESSION";const Jn=Qn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Yn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.receivers=[];class Zn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=Xn("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(){return void 0!==ei().WorkerGlobalScope&&"function"==typeof ei().importScripts}class ni{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ii(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function si(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ni(e).toPromise()}(),t(await si()))}))}))}async function ri(e,t,n){const i=ii(e,!0).put({fbase_key:t,value:n});return new ni(i).toPromise()}function oi(e,t){const n=ii(e,!0).delete(t);return new ni(n).toPromise()}class ai{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await si()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ti()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yn._getInstance(ti()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Zn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await si();return await ri(e,"__sak","1"),await oi(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ri(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ii(e,!1).get(t),i=await new ni(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>oi(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ii(e,!1).getAll();return new ni(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ai.type="LOCAL";const ci=ai;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
un("rcb"),new vt(3e4,6e4);async function ui(e,t,n){var i;const s=await n.verify();try{let r;if(ht("string"==typeof s,e,"argument-error"),ht("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){ht("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return _t(e,"POST","/v2/accounts/mfaEnrollment:start",It(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{ht("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;ht(n,e,"missing-multi-factor-info");const o=await function(e,t){return _t(e,"POST","/v2/accounts/mfaSignIn:start",It(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return _t(e,"POST","/v1/accounts:sendVerificationCode",It(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(e){this.providerId=li.PROVIDER_ID,this.auth=pn(e)}verifyPhoneNumber(e,t){return ui(this.auth,e,se(t))}static credential(e,t){return kn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return li.credentialFromTaggedObject(t)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?kn._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hi(e,t){return t?jt(t):(ht(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li.PROVIDER_ID="phone",li.PHONE_SIGN_IN_METHOD="phone";class di extends wn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fi(e){return zn(e.auth,new di(e),e.bypassAuthState)}function pi(e){const{auth:t,user:n}=e;return ht(n,t,"internal-error"),jn(n,new di(e),e.bypassAuthState)}async function gi(e){const{auth:t,user:n}=e;return ht(n,t,"internal-error"),Bn(n,new di(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fi;case"linkViaPopup":case"linkViaRedirect":return gi;case"reauthViaPopup":case"reauthViaRedirect":return pi;default:at(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new vt(2e3,1e4);class vi extends mi{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ht(e,this.auth,"internal-error"),e}async onExecution(){ft(1===this.filter.length,"Popup operations only handle one event");const e=Xn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ct(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,yi.get())};e()}}vi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wi=new Map;class bi extends mi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ii(t),i=Ti(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ei(e,t){wi.set(e._key(),t)}function Ti(e){return jt(e._redirectPersistence)}function Ii(e){return qt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(e,t,n=!1){const i=pn(e),s=hi(i,t),r=new bi(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Si{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ci(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ci(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ki(e))}saveEventToCache(e){this.cachedEventUids.add(ki(e)),this.lastProcessedEventTime=Date.now()}}function ki(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ci({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ai=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ni=/^https?/;async function Ri(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return _t(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Di(e))return}catch(e){}at(e,"unauthorized-domain")}function Di(e){const t=pt(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Ni.test(n))return!1;if(Ai.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new vt(3e4,6e4);function Li(){const e=ei().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Pi=null;function Mi(e){return Pi=Pi||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Li(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Li(),n(ct(e,"network-request-failed"))},timeout:Oi.get()})}if(null===(s=null===(i=ei().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=ei().gapi)||void 0===r?void 0:r.load)){const t=un("iframefcb");return ei()[t]=()=>{gapi.load?o():n(ct(e,"network-request-failed"))},cn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Pi=null,e}))}(e),Pi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new vt(5e3,15e3),Ui={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vi(e){const t=e.config;ht(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.23.0"},s=Fi.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${X(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function zi(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Bi),{width:i.toString(),height:s.toString(),top:r,left:o}),u=z().toLowerCase();n&&(a=Qt(u)?"_blank":n),Wt(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=z()){var t;return en(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new ji(null);const h=window.open(t||"",a,l);ht(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ji(h)}const $i=encodeURIComponent("fac");async function qi(e,t,n,i,s,r){ht(e.config.authDomain,e,"auth-domain-config-required"),ht(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.23.0",eventId:s};if(t instanceof Nn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Q(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Rn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),u=c?`#${$i}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?wt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${X(a).slice(1)}${u}`}const Hi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jn,this._completeRedirectFn=_i,this._overrideRedirectResult=Ei}async _openPopup(e,t,n,i){var s;ft(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return zi(e,await qi(e,t,n,pt(),i),Xn())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){ei().location.href=e}(await qi(e,t,n,pt(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ft(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Mi(e),n=ei().gapi;return ht(n,e,"internal-error"),t.open({where:document.body,url:Vi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ui,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=ct(e,"network-request-failed"),r=ei().setTimeout((()=>{i(s)}),xi.get());function o(){ei().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Si(e);return t.register("authEvent",(t=>{ht(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),at(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ri(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nn()||Gt()||en()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ht(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wi=V("authIdTokenMaxAge")||300;let Gi=null;var Qi;Qi="Browser",Ve(new re("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;ht(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:Qi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sn(Qi)},c=new fn(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(jt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ve(new re("auth-internal",(e=>{const t=pn(e.getProvider("auth").getImmediate());return new Ki(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),He("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Qi)),He("@firebase/auth","0.23.2","esm2017");var Ji,Yi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},Xi={},Zi=Zi||{},es=Yi||self;function ts(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function ns(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var is="closure_uid_"+(1e9*Math.random()>>>0),ss=0;function rs(e,t,n){return e.call.apply(e.bind,arguments)}function os(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function as(e,t,n){return(as=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rs:os).apply(null,arguments)}function cs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function us(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function ls(){this.s=this.s,this.o=this.o}ls.prototype.s=!1,ls.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,is)&&e[is]||(e[is]=++ss))},ls.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hs=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ds(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function fs(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(ts(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function ps(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ps.prototype.h=function(){this.defaultPrevented=!0};var gs=function(){if(!es.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{es.addEventListener("test",(()=>{}),t),es.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function ms(e){return/^[\s\xa0]*$/.test(e)}function ys(){var e=es.navigator;return e&&(e=e.userAgent)?e:""}function vs(e){return-1!=ys().indexOf(e)}function ws(e){return ws[" "](e),e}ws[" "]=function(){};var bs,Es,Ts,Is=vs("Opera"),_s=vs("Trident")||vs("MSIE"),Ss=vs("Edge"),ks=Ss||_s,Cs=vs("Gecko")&&!(-1!=ys().toLowerCase().indexOf("webkit")&&!vs("Edge"))&&!(vs("Trident")||vs("MSIE"))&&!vs("Edge"),As=-1!=ys().toLowerCase().indexOf("webkit")&&!vs("Edge");function Ns(){var e=es.document;return e?e.documentMode:void 0}e:{var Rs="",Ds=(Es=ys(),Cs?/rv:([^\);]+)(\)|;)/.exec(Es):Ss?/Edge\/([\d\.]+)/.exec(Es):_s?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Es):As?/WebKit\/(\S+)/.exec(Es):Is?/(?:Version)[ \/]?(\S+)/.exec(Es):void 0);if(Ds&&(Rs=Ds?Ds[1]:""),_s){var Os=Ns();if(null!=Os&&Os>parseFloat(Rs)){bs=String(Os);break e}}bs=Rs}if(es.document&&_s){var Ls=Ns();Ts=Ls||(parseInt(bs,10)||void 0)}else Ts=void 0;var Ps=Ts;function Ms(e,t){if(ps.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Cs){e:{try{ws(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:xs[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ms.$.h.call(this)}}us(Ms,ps);var xs={2:"touch",3:"pen",4:"mouse"};Ms.prototype.h=function(){Ms.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Us="closure_listenable_"+(1e6*Math.random()|0),Fs=0;function Vs(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Fs,this.fa=this.ia=!1}function Bs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function js(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function zs(e){const t={};for(const n in e)t[n]=e[n];return t}const $s="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qs(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<$s.length;t++)n=$s[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Hs(e){this.src=e,this.g={},this.h=0}function Ks(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=hs(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Bs(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ws(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}Hs.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=Ws(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Vs(t,this.src,r,!!i,s)).ia=n,e.push(t)),t};var Gs="closure_lm_"+(1e6*Math.random()|0),Qs={};function Js(e,t,n,i,s){if(i&&i.once)return Xs(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Js(e,t[r],n,i,s);return null}return n=rr(n),e&&e[Us]?e.O(t,n,ns(i)?!!i.capture:!!i,s):Ys(e,t,n,!1,i,s)}function Ys(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=ns(s)?!!s.capture:!!s,a=ir(e);if(a||(e[Gs]=a=new Hs(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=nr;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)gs||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(tr(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Xs(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Xs(e,t[r],n,i,s);return null}return n=rr(n),e&&e[Us]?e.P(t,n,ns(i)?!!i.capture:!!i,s):Ys(e,t,n,!0,i,s)}function Zs(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Zs(e,t[r],n,i,s);else i=ns(i)?!!i.capture:!!i,n=rr(n),e&&e[Us]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ws(r=e.g[t],n,i,s))&&(Bs(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=ir(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ws(t,n,i,s)),(n=-1<e?t[e]:null)&&er(n))}function er(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Us])Ks(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(tr(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ir(t))?(Ks(n,e),0==n.h&&(n.src=null,t[Gs]=null)):Bs(e)}}}function tr(e){return e in Qs?Qs[e]:Qs[e]="on"+e}function nr(e,t){if(e.fa)e=!0;else{t=new Ms(t,this);var n=e.listener,i=e.la||e.src;e.ia&&er(e),e=n.call(i,t)}return e}function ir(e){return(e=e[Gs])instanceof Hs?e:null}var sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function rr(e){return"function"==typeof e?e:(e[sr]||(e[sr]=function(t){return e.handleEvent(t)}),e[sr])}function or(){ls.call(this),this.i=new Hs(this),this.S=this,this.J=null}function ar(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new ps(t,e);else if(t instanceof ps)t.target=t.target||e;else{var s=t;qs(t=new ps(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=cr(o,i,!0,t)&&s}if(s=cr(o=t.g=e,i,!0,t)&&s,s=cr(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=cr(o=t.g=n[r],i,!1,t)&&s}function cr(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ks(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}us(or,ls),or.prototype[Us]=!0,or.prototype.removeEventListener=function(e,t,n,i){Zs(this,e,t,n,i)},or.prototype.N=function(){if(or.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Bs(n[i]);delete t.g[e],t.h--}}this.J=null},or.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},or.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var ur=es.JSON.stringify;function lr(){var e=yr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var hr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new dr),(e=>e.reset()));class dr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function fr(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function pr(e){es.setTimeout((()=>{throw e}),0)}let gr,mr=!1,yr=new class{constructor(){this.h=this.g=null}add(e,t){const n=hr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},vr=()=>{const e=es.Promise.resolve(void 0);gr=()=>{e.then(wr)}};var wr=()=>{for(var e;e=lr();){try{e.h.call(e.g)}catch(e){pr(e)}var t=hr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}mr=!1};function br(e,t){or.call(this),this.h=e||1,this.g=t||es,this.j=as(this.qb,this),this.l=Date.now()}function Er(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Tr(e,t,n){if("function"==typeof e)n&&(e=as(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=as(e.handleEvent,e)}return 2147483647<Number(t)?-1:es.setTimeout(e,t||0)}function Ir(e){e.g=Tr((()=>{e.g=null,e.i&&(e.i=!1,Ir(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}us(br,or),(Ji=br.prototype).ga=!1,Ji.T=null,Ji.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ar(this,"tick"),this.ga&&(Er(this),this.start()))}},Ji.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ji.N=function(){br.$.N.call(this),Er(this),delete this.g};class _r extends ls{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ir(this)}N(){super.N(),this.g&&(es.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(e){ls.call(this),this.h=e,this.g={}}us(Sr,ls);var kr=[];function Cr(e,t,n,i){Array.isArray(n)||(n&&(kr[0]=n.toString()),n=kr);for(var s=0;s<n.length;s++){var r=Js(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ar(e){js(e.g,(function(e,t){this.g.hasOwnProperty(t)&&er(e)}),e),e.g={}}function Nr(){this.g=!0}function Rr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return ur(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Sr.prototype.N=function(){Sr.$.N.call(this),Ar(this)},Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Nr.prototype.Ea=function(){this.g=!1},Nr.prototype.info=function(){};var Dr={},Or=null;function Lr(){return Or=Or||new or}function Pr(e){ps.call(this,Dr.Ta,e)}function Mr(e){const t=Lr();ar(t,new Pr(t))}function xr(e,t){ps.call(this,Dr.STAT_EVENT,e),this.stat=t}function Ur(e){const t=Lr();ar(t,new xr(t,e))}function Fr(e,t){ps.call(this,Dr.Ua,e),this.size=t}function Vr(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return es.setTimeout((function(){e()}),t)}Dr.Ta="serverreachability",us(Pr,ps),Dr.STAT_EVENT="statevent",us(xr,ps),Dr.Ua="timingevent",us(Fr,ps);var Br={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zr(){}function $r(e){return e.h||(e.h=e.i())}function qr(){}zr.prototype.h=null;var Hr,Kr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wr(){ps.call(this,"d")}function Gr(){ps.call(this,"c")}function Qr(){}function Jr(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Sr(this),this.P=Xr,e=ks?125:void 0,this.V=new br(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yr}function Yr(){this.i=null,this.g="",this.h=!1}us(Wr,ps),us(Gr,ps),us(Qr,zr),Qr.prototype.g=function(){return new XMLHttpRequest},Qr.prototype.i=function(){return{}},Hr=new Qr;var Xr=45e3,Zr={},eo={};function to(e,t,n){e.L=1,e.v=Eo(mo(t)),e.s=n,e.S=!0,no(e,null)}function no(e,t){e.G=Date.now(),oo(e),e.A=mo(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Po(n.i,"t",i),e.C=0,n=e.l.J,e.h=new Yr,e.g=Oa(e.l,n?t:null,!e.s),0<e.O&&(e.M=new _r(as(e.Pa,e,e.g),e.O)),Cr(e.U,e.g,"readystatechange",e.nb),t=e.I?zs(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Mr(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function io(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function so(e,t,n){let i,s=!0;for(;!e.J&&e.C<n.length;){if(i=ro(e,n),i==eo){4==t&&(e.o=4,Ur(14),s=!1),Rr(e.j,e.m,null,"[Incomplete Response]");break}if(i==Zr){e.o=4,Ur(15),Rr(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Rr(e.j,e.m,i,null),ho(e,i)}io(e)&&i!=eo&&i!=Zr&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ur(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),_a(t),t.M=!0,Ur(11))):(Rr(e.j,e.m,n,"[Invalid Chunked Response]"),lo(e),uo(e))}function ro(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?eo:(n=Number(t.substring(n,i)),isNaN(n)?Zr:(i+=1)+n>t.length?eo:(t=t.slice(i,i+n),e.C=i+n,t))}function oo(e){e.Y=Date.now()+e.P,ao(e,e.P)}function ao(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Vr(as(e.lb,e),t)}function co(e){e.B&&(es.clearTimeout(e.B),e.B=null)}function uo(e){0==e.l.H||e.J||Ca(e.l,e)}function lo(e){co(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Er(e.V),Ar(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ho(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Bo(n.i,e)))if(!e.K&&Bo(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ka(n),ma(n)}Ia(n),Ur(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=Vr(as(n.ib,n),6e3));if(1>=Vo(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Na(n,11)}else if((e.K||n.g==e)&&ka(n),!ms(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const s=u[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.i;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(jo(r,r.h),r.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,bo(i.I,i.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=Da(i,i.J?i.pa:null,i.Y),o.K){zo(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(co(a),oo(a)),i.g=o}else Ta(i);0<n.j.length&&va(n)}else"stop"!=u[0]&&"close"!=u[0]||Na(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Na(n,7):ga(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Mr()}catch(e){}}function fo(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ts(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(ts(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(ts(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(Ji=Jr.prototype).setTimeout=function(e){this.P=e},Ji.nb=function(e){e=e.target;const t=this.M;t&&3==ua(e)?t.l():this.Pa(e)},Ji.Pa=function(e){try{if(e==this.g)e:{const l=ua(this.g);var t=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||ks||this.g&&(this.h.h||this.g.ja()||la(this.g)))){this.J||4!=l||7==t||Mr(),co(this);var n=this.g.da();this.ca=n;t:if(io(this)){var i=la(this.g);e="";var s=i.length,r=4==ua(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){lo(this),uo(this);var o="";break t}this.h.i=new es.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ms(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ur(12),lo(this),uo(this);break e}Rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ho(this,n)}this.S?(so(this,l,o),ks&&this.i&&3==l&&(Cr(this.U,this.V,"tick",this.mb),this.V.start())):(Rr(this.j,this.m,o,null),ho(this,o)),4==l&&lo(this),this.i&&!this.J&&(4==l?Ca(this.l,this):(this.i=!1,oo(this)))}else(function(e){const t={};e=(e.g&&2<=ua(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(ms(e[i]))continue;var n=fr(e[i]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ur(12)):(this.o=0,Ur(13)),lo(this),uo(this)}}}catch(e){}},Ji.mb=function(){if(this.g){var e=ua(this.g),t=this.g.ja();this.C<t.length&&(co(this),so(this,e,t),this.i&&4!=e&&oo(this))}},Ji.cancel=function(){this.J=!0,lo(this)},Ji.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Mr(),Ur(17)),lo(this),this.o=2,uo(this)):ao(this,this.Y-e)};var po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function go(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof go){this.h=e.h,yo(this,e.j),this.s=e.s,this.g=e.g,vo(this,e.m),this.l=e.l;var t=e.i,n=new Ro;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),wo(this,n),this.o=e.o}else e&&(t=String(e).match(po))?(this.h=!1,yo(this,t[1]||"",!0),this.s=To(t[2]||""),this.g=To(t[3]||"",!0),vo(this,t[4]),this.l=To(t[5]||"",!0),wo(this,t[6]||"",!0),this.o=To(t[7]||"")):(this.h=!1,this.i=new Ro(null,this.h))}function mo(e){return new go(e)}function yo(e,t,n){e.j=n?To(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function vo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wo(e,t,n){t instanceof Ro?(e.i=t,function(e,t){t&&!e.j&&(Do(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Oo(this,t),Po(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Io(t,Ao)),e.i=new Ro(t,e.h))}function bo(e,t,n){e.i.set(t,n)}function Eo(e){return bo(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function To(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Io(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,_o),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function _o(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}go.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Io(t,So,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Io(t,So,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Io(n,"/"==n.charAt(0)?Co:ko,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Io(n,No)),e.join("")};var So=/[#\/\?@]/g,ko=/[#\?:]/g,Co=/[#\?]/g,Ao=/[#\?@]/g,No=/#/g;function Ro(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Do(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Oo(e,t){Do(e),t=Mo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Lo(e,t){return Do(e),t=Mo(e,t),e.g.has(t)}function Po(e,t,n){Oo(e,t),0<n.length&&(e.i=null,e.g.set(Mo(e,t),ds(n)),e.h+=n.length)}function Mo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Ji=Ro.prototype).add=function(e,t){Do(this),this.i=null,e=Mo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Ji.forEach=function(e,t){Do(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},Ji.ta=function(){Do(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},Ji.Z=function(e){Do(this);let t=[];if("string"==typeof e)Lo(this,e)&&(t=t.concat(this.g.get(Mo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Ji.set=function(e,t){return Do(this),this.i=null,Lo(this,e=Mo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Ji.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Ji.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function xo(e){this.l=e||Uo,es.PerformanceNavigationTiming?e=0<(e=es.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(es.g&&es.g.Ka&&es.g.Ka()&&es.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Uo=10;function Fo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Vo(e){return e.h?1:e.g?e.g.size:0}function Bo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function jo(e,t){e.g?e.g.add(t):e.h=t}function zo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function $o(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ds(e.i)}xo.prototype.cancel=function(){if(this.i=$o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};function qo(){this.g=new class{stringify(e){return es.JSON.stringify(e,void 0)}parse(e){return es.JSON.parse(e,void 0)}}}function Ho(e,t,n){const i=n||"";try{fo(e,(function(e,n){let s=e;ns(e)&&(s=ur(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Ko(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function Wo(e){this.l=e.fc||null,this.j=e.ob||!1}function Go(e,t){or.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}us(Wo,zr),Wo.prototype.g=function(){return new Go(this.l,this.j)},Wo.prototype.i=function(e){return function(){return e}}({}),us(Go,or);var Qo=0;function Jo(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Yo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xo(e)}function Xo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Ji=Go.prototype).open=function(e,t){if(this.readyState!=Qo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xo(this)},Ji.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||es).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Ji.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Yo(this)),this.readyState=Qo},Ji.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xo(this)),this.g&&(this.readyState=3,Xo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==es.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jo(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Ji.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Yo(this):Xo(this),3==this.readyState&&Jo(this)}},Ji.Za=function(e){this.g&&(this.response=this.responseText=e,Yo(this))},Ji.Ya=function(e){this.g&&(this.response=e,Yo(this))},Ji.ka=function(){this.g&&Yo(this)},Ji.setRequestHeader=function(e,t){this.v.append(e,t)},Ji.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Ji.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Zo=es.JSON.parse;function ea(e){or.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ta,this.L=this.M=!1}us(ea,or);var ta="",na=/^https?$/i,ia=["POST","PUT"];function sa(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ra(e),aa(e)}function ra(e){e.F||(e.F=!0,ar(e,"complete"),ar(e,"error"))}function oa(e){if(e.h&&void 0!==Zi&&(!e.C[1]||4!=ua(e)||2!=e.da()))if(e.v&&4==ua(e))Tr(e.La,0,e);else if(ar(e,"readystatechange"),4==ua(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var s=String(e.I).match(po)[1]||null;!s&&es.self&&es.self.location&&(s=es.self.location.protocol.slice(0,-1)),i=!na.test(s?s.toLowerCase():"")}n=i}if(n)ar(e,"complete"),ar(e,"success");else{e.m=6;try{var r=2<ua(e)?e.g.statusText:""}catch(e){r=""}e.j=r+" ["+e.da()+"]",ra(e)}}finally{aa(e)}}}function aa(e,t){if(e.g){ca(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ar(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function ca(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(es.clearTimeout(e.A),e.A=null)}function ua(e){return e.g?e.g.readyState:0}function la(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ta:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ha(e){let t="";return js(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function da(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ha(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):bo(e,t,n))}function fa(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function pa(e){this.Ga=0,this.j=[],this.l=new Nr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fa("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fa("baseRetryDelayMs",5e3,e),this.hb=fa("retryDelaySeedMs",1e4,e),this.eb=fa("forwardChannelMaxRetries",2,e),this.xa=fa("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new xo(e&&e.concurrentRequestLimit),this.Ja=new qo,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ga(e){if(ya(e),3==e.H){var t=e.W++,n=mo(e.I);if(bo(n,"SID",e.K),bo(n,"RID",t),bo(n,"TYPE","terminate"),ba(e,n),(t=new Jr(e,e.l,t)).L=2,t.v=Eo(mo(n)),n=!1,es.navigator&&es.navigator.sendBeacon)try{n=es.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&es.Image&&((new Image).src=t.v,n=!0),n||(t.g=Oa(t.l,null),t.g.ha(t.v)),t.G=Date.now(),oo(t)}Ra(e)}function ma(e){e.g&&(_a(e),e.g.cancel(),e.g=null)}function ya(e){ma(e),e.u&&(es.clearTimeout(e.u),e.u=null),ka(e),e.i.cancel(),e.m&&("number"==typeof e.m&&es.clearTimeout(e.m),e.m=null)}function va(e){if(!Fo(e.i)&&!e.m){e.m=!0;var t=e.Na;gr||vr(),mr||(gr(),mr=!0),yr.add(t,e),e.C=0}}function wa(e,t){var n;n=t?t.m:e.W++;const i=mo(e.I);bo(i,"SID",e.K),bo(i,"RID",n),bo(i,"AID",e.V),ba(e,i),e.o&&e.s&&da(i,e.o,e.s),n=new Jr(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ea(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),jo(e.i,n),to(n,i,t)}function ba(e,t){e.na&&js(e.na,(function(e,n){bo(t,n,e)})),e.h&&fo({},(function(e,n){bo(t,n,e)}))}function Ea(e,t,n){n=Math.min(e.j.length,n);var i=e.h?as(e.h.Va,e.h,e):null;e:{var s=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].g;const a=s[o].map;if(n-=t,0>n)t=Math.max(0,s[o].g-100),r=!1;else try{Ho(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function Ta(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;gr||vr(),mr||(gr(),mr=!0),yr.add(t,e),e.A=0}}function Ia(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Vr(as(e.Ma,e),Aa(e,e.A)),e.A++,!0)}function _a(e){null!=e.B&&(es.clearTimeout(e.B),e.B=null)}function Sa(e){e.g=new Jr(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=mo(e.wa);bo(t,"RID","rpc"),bo(t,"SID",e.K),bo(t,"AID",e.V),bo(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&bo(t,"TO",e.qa),bo(t,"TYPE","xmlhttp"),ba(e,t),e.o&&e.s&&da(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Eo(mo(t)),n.s=null,n.S=!0,no(n,e)}function ka(e){null!=e.v&&(es.clearTimeout(e.v),e.v=null)}function Ca(e,t){var n=null;if(e.g==t){ka(e),_a(e),e.g=null;var i=2}else{if(!Bo(e.i,t))return;n=t.F,zo(e.i,t),i=1}if(0!=e.H)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;ar(i=Lr(),new Fr(i,n)),va(e)}else Ta(e);else if(3==(s=t.o)||0==s&&0<t.ca||!(1==i&&function(e,t){return!(Vo(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Vr(as(e.Na,e,t),Aa(e,e.C)),e.C++,0)))}(e,t)||2==i&&Ia(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Na(e,5);break;case 4:Na(e,10);break;case 3:Na(e,6);break;default:Na(e,2)}}function Aa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Na(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=as(e.pb,e);n||(n=new go("//www.google.com/images/cleardot.gif"),es.location&&"http"==es.location.protocol||yo(n,"https"),Eo(n)),function(e,t){const n=new Nr;if(es.Image){const i=new Image;i.onload=cs(Ko,n,i,"TestLoadImage: loaded",!0,t),i.onerror=cs(Ko,n,i,"TestLoadImage: error",!1,t),i.onabort=cs(Ko,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=cs(Ko,n,i,"TestLoadImage: timeout",!1,t),es.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Ur(2);e.H=0,e.h&&e.h.za(t),Ra(e),ya(e)}function Ra(e){if(e.H=0,e.ma=[],e.h){const t=$o(e.i);0==t.length&&0==e.j.length||(fs(e.ma,t),fs(e.ma,e.j),e.i.i.length=0,ds(e.j),e.j.length=0),e.h.ya()}}function Da(e,t,n){var i=n instanceof go?mo(n):new go(n);if(""!=i.g)t&&(i.g=t+"."+i.g),vo(i,i.m);else{var s=es.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new go(null);i&&yo(r,i),t&&(r.g=t),s&&vo(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&bo(i,n,t),bo(i,"VER",e.ra),ba(e,i),i}function Oa(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new ea(new Wo({ob:!0})):new ea(e.va)).Oa(e.J),t}function La(){}function Pa(){if(_s&&!(10<=Number(Ps)))throw Error("Environmental error: no available transport.")}function Ma(e,t){or.call(this),this.g=new pa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ms(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ms(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Fa(this)}function xa(e){Wr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ua(){Gr.call(this),this.status=1}function Fa(e){this.g=e}function Va(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ba(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(t^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}function ja(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=0|e[s];i&&r==t||(n[s]=r,i=!1)}this.g=n}(Ji=ea.prototype).Oa=function(e){this.M=e},Ji.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hr.g(),this.C=this.u?$r(this.u):$r(Hr),this.g.onreadystatechange=as(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void sa(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=es.FormData&&e instanceof es.FormData,!(0<=hs(ia,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ca(this),0<this.B&&((this.L=function(e){return _s&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=as(this.ua,this)):this.A=Tr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){sa(this,e)}},Ji.ua=function(){void 0!==Zi&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ar(this,"timeout"),this.abort(8))},Ji.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ar(this,"complete"),ar(this,"abort"),aa(this))},Ji.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aa(this,!0)),ea.$.N.call(this)},Ji.La=function(){this.s||(this.G||this.v||this.l?oa(this):this.kb())},Ji.kb=function(){oa(this)},Ji.isActive=function(){return!!this.g},Ji.da=function(){try{return 2<ua(this)?this.g.status:-1}catch(e){return-1}},Ji.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Ji.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Zo(t)}},Ji.Ia=function(){return this.m},Ji.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ji=pa.prototype).ra=8,Ji.H=1,Ji.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Jr(this,this.l,e);let r=this.s;if(this.U&&(r?(r=zs(r),qs(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ea(this,s,t),bo(n=mo(this.I),"RID",e),bo(n,"CVER",22),this.F&&bo(n,"X-HTTP-Session-Id",this.F),ba(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(ha(r)))+"&"+t:this.o&&da(n,this.o,r)),jo(this.i,s),this.bb&&bo(n,"TYPE","init"),this.P?(bo(n,"$req",t),bo(n,"SID","null"),s.aa=!0,to(s,n,null)):to(s,n,t),this.H=2}}else 3==this.H&&(e?wa(this,e):0==this.j.length||Fo(this.i)||wa(this))},Ji.Ma=function(){if(this.u=null,Sa(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Vr(as(this.jb,this),e)}},Ji.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ur(10),ma(this),Sa(this))},Ji.ib=function(){null!=this.v&&(this.v=null,ma(this),Ia(this),Ur(19))},Ji.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ur(2)):(this.l.info("Failed to ping google.com"),Ur(1))},Ji.isActive=function(){return!!this.h&&this.h.isActive(this)},(Ji=La.prototype).Ba=function(){},Ji.Aa=function(){},Ji.za=function(){},Ji.ya=function(){},Ji.isActive=function(){return!0},Ji.Va=function(){},Pa.prototype.g=function(e,t){return new Ma(e,t)},us(Ma,or),Ma.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ur(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Da(e,null,e.Y),va(e)},Ma.prototype.close=function(){ga(this.g)},Ma.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ur(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&va(t)},Ma.prototype.N=function(){this.g.h=null,delete this.j,ga(this.g),delete this.g,Ma.$.N.call(this)},us(xa,Wr),us(Ua,Gr),us(Fa,La),Fa.prototype.Ba=function(){ar(this.g,"a")},Fa.prototype.Aa=function(e){ar(this.g,new xa(e))},Fa.prototype.za=function(e){ar(this.g,new Ua)},Fa.prototype.ya=function(){ar(this.g,"b")},us(Va,(function(){this.blockSize=-1})),Va.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Va.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(0==s)for(;r<=n;)Ba(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Ba(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Ba(this,i),s=0;break}}this.h=s,this.i+=t},Va.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var za={};function $a(e){return-128<=e&&128>e?function(e,t){var n=za;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new ja([0|e],0>e?-1:0)})):new ja([0|e],0>e?-1:0)}function qa(e){if(isNaN(e)||!isFinite(e))return Ka;if(0>e)return Ya(qa(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Ha;return new ja(t,0)}var Ha=4294967296,Ka=$a(0),Wa=$a(1),Ga=$a(16777216);function Qa(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Ja(e){return-1==e.h}function Ya(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new ja(n,~e.h).add(Wa)}function Xa(e,t){return e.add(Ya(t))}function Za(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ec(e,t){this.g=e,this.h=t}function tc(e,t){if(Qa(t))throw Error("division by zero");if(Qa(e))return new ec(Ka,Ka);if(Ja(e))return t=tc(Ya(e),t),new ec(Ya(t.g),Ya(t.h));if(Ja(t))return t=tc(e,Ya(t)),new ec(Ya(t.g),t.h);if(30<e.g.length){if(Ja(e)||Ja(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Wa,i=t;0>=i.X(e);)n=nc(n),i=nc(i);var s=ic(n,1),r=ic(i,1);for(i=ic(i,2),n=ic(n,2);!Qa(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=ic(i,1),n=ic(n,1)}return t=Xa(e,s.R(t)),new ec(s,t)}for(s=Ka;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=qa(n)).R(t);Ja(o)||0<o.X(e);)o=(r=qa(n-=i)).R(t);Qa(r)&&(r=Wa),s=s.add(r),e=Xa(e,o)}return new ec(s,e)}function nc(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new ja(n,e.h)}function ic(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new ja(s,e.h)}(Ji=ja.prototype).ea=function(){if(Ja(this))return-Ya(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Ha+i)*t,t*=Ha}return e},Ji.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Qa(this))return"0";if(Ja(this))return"-"+Ya(this).toString(e);for(var t=qa(Math.pow(e,6)),n=this,i="";;){var s=tc(n,t).g,r=((0<(n=Xa(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Qa(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},Ji.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Ji.X=function(e){return Ja(e=Xa(this,e))?-1:Qa(e)?0:1},Ji.abs=function(){return Ja(this)?Ya(this):this},Ji.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(65535&this.D(s))+(65535&e.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ja(n,-2147483648&n[n.length-1]?-1:0)},Ji.R=function(e){if(Qa(this)||Qa(e))return Ka;if(Ja(this))return Ja(e)?Ya(this).R(Ya(e)):Ya(Ya(this).R(e));if(Ja(e))return Ya(this.R(Ya(e)));if(0>this.X(Ga)&&0>e.X(Ga))return qa(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=e.D(s)>>>16,c=65535&e.D(s);n[2*i+2*s]+=o*c,Za(n,2*i+2*s),n[2*i+2*s+1]+=r*c,Za(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Za(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Za(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new ja(n,0)},Ji.gb=function(e){return tc(this,e).h},Ji.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new ja(n,this.h&e.h)},Ji.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new ja(n,this.h|e.h)},Ji.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new ja(n,this.h^e.h)},Pa.prototype.createWebChannel=Pa.prototype.g,Ma.prototype.send=Ma.prototype.u,Ma.prototype.open=Ma.prototype.m,Ma.prototype.close=Ma.prototype.close,Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,jr.COMPLETE="complete",qr.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",or.prototype.listen=or.prototype.O,ea.prototype.listenOnce=ea.prototype.P,ea.prototype.getLastError=ea.prototype.Sa,ea.prototype.getLastErrorCode=ea.prototype.Ia,ea.prototype.getStatus=ea.prototype.da,ea.prototype.getResponseJson=ea.prototype.Wa,ea.prototype.getResponseText=ea.prototype.ja,ea.prototype.send=ea.prototype.ha,ea.prototype.setWithCredentials=ea.prototype.Oa,Va.prototype.digest=Va.prototype.l,Va.prototype.reset=Va.prototype.reset,Va.prototype.update=Va.prototype.j,ja.prototype.add=ja.prototype.add,ja.prototype.multiply=ja.prototype.R,ja.prototype.modulo=ja.prototype.gb,ja.prototype.compare=ja.prototype.X,ja.prototype.toNumber=ja.prototype.ea,ja.prototype.toString=ja.prototype.toString,ja.prototype.getBits=ja.prototype.D,ja.fromNumber=qa,ja.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Ya(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=qa(Math.pow(n,8)),s=Ka,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=qa(Math.pow(n,o)),s=s.R(o).add(qa(a))):s=(s=s.R(i)).add(qa(a))}return s};var sc=Xi.createWebChannelTransport=function(){return new Pa},rc=Xi.getStatEventTarget=function(){return Lr()},oc=Xi.ErrorCode=Br,ac=Xi.EventType=jr,cc=Xi.Event=Dr,uc=Xi.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},lc=Xi.FetchXmlHttpFactory=Wo,hc=Xi.WebChannel=qr,dc=Xi.XhrIo=ea,fc=Xi.Md5=Va,pc=Xi.Integer=ja;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gc.UNAUTHENTICATED=new gc(null),gc.GOOGLE_CREDENTIALS=new gc("google-credentials-uid"),gc.FIRST_PARTY=new gc("first-party-uid"),gc.MOCK_USER=new gc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let mc="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new ge("@firebase/firestore");function vc(){return yc.logLevel}function wc(e,...t){if(yc.logLevel<=ue.DEBUG){const n=t.map(Tc);yc.debug(`Firestore (${mc}): ${e}`,...n)}}function bc(e,...t){if(yc.logLevel<=ue.ERROR){const n=t.map(Tc);yc.error(`Firestore (${mc}): ${e}`,...n)}}function Ec(e,...t){if(yc.logLevel<=ue.WARN){const n=t.map(Tc);yc.warn(`Firestore (${mc}): ${e}`,...n)}}function Tc(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e="Unexpected state"){const t=`FIRESTORE (${mc}) INTERNAL ASSERTION FAILED: `+e;throw bc(t),new Error(t)}function _c(e,t){e||Ic()}function Sc(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Cc extends K{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gc.UNAUTHENTICATED)))}shutdown(){}}class Dc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Oc{constructor(e){this.t=e,this.currentUser=gc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Ac;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ac,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{wc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(wc("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ac)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(wc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_c("string"==typeof t.accessToken),new Nc(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _c(null===e||"string"==typeof e),new gc(e)}}class Lc{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=gc.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Pc{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Lc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(gc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Mc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xc{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&wc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,wc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{wc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):wc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(_c("string"==typeof e.token),this.T=e.token,new Mc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Uc(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Vc(e,t){return e<t?-1:e>t?1:0}function Bc(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jc{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Cc(kc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Cc(kc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Cc(kc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Cc(kc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return jc.fromMillis(Date.now())}static fromDate(e){return jc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new jc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Vc(this.nanoseconds,e.nanoseconds):Vc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.timestamp=e}static fromTimestamp(e){return new zc(e)}static min(){return new zc(new jc(0,0))}static max(){return new zc(new jc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ic(),void 0===n?n=e.length-t:n>e.length-t&&Ic(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===$c.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $c?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class qc extends $c{construct(e,t,n){return new qc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Cc(kc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new qc(t)}static emptyPath(){return new qc([])}}const Hc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kc extends $c{construct(e,t,n){return new Kc(e,t,n)}static isValidIdentifier(e){return Hc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Kc(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Cc(kc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Cc(kc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Cc(kc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new Cc(kc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kc(t)}static emptyPath(){return new Kc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.path=e}static fromPath(e){return new Wc(qc.fromString(e))}static fromName(e){return new Wc(qc.fromString(e).popFirst(5))}static empty(){return new Wc(qc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===qc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return qc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wc(new qc(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}Gc.UNKNOWN_ID=-1;function Qc(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=zc.fromTimestamp(1e9===i?new jc(n+1,0):new jc(n,i));return new Yc(s,Wc.empty(),t)}function Jc(e){return new Yc(e.readTime,e.key,-1)}class Yc{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Yc(zc.min(),Wc.empty(),-1)}static max(){return new Yc(zc.max(),Wc.empty(),-1)}}function Xc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Wc.comparator(e.documentKey,t.documentKey),0!==n?n:Vc(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(e){if(e.code!==kc.FAILED_PRECONDITION||e.message!==Zc)throw e;wc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ic(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new nu(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof nu?t:nu.resolve(t)}catch(e){return nu.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):nu.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):nu.reject(t)}static resolve(e){return new nu(((t,n)=>{t(e)}))}static reject(e){return new nu(((t,n)=>{n(e)}))}static waitFor(e){return new nu(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=nu.resolve(!1);for(const n of e)t=t.next((e=>e?nu.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new nu(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{r[c]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new nu(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ru(e){return null==e}function ou(e){return 0===e&&1/e==-1/0}function au(e){return"number"==typeof e&&Number.isInteger(e)&&!ou(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */su.ct=-1;const cu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],uu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lu=uu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function du(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function fu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t){this.comparator=e,this.root=t||mu.EMPTY}insert(e,t){return new pu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mu.BLACK,null,null))}remove(e){return new pu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}}class gu{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mu{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:mu.RED,this.left=null!=i?i:mu.EMPTY,this.right=null!=s?s:mu.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new mu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return mu.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ic();if(this.right.isRed())throw Ic();const e=this.left.check();if(e!==this.right.check())throw Ic();return e+(this.isRed()?0:1)}}mu.EMPTY=null,mu.RED=!0,mu.BLACK=!1,mu.EMPTY=new class{constructor(){this.size=0}get key(){throw Ic()}get value(){throw Ic()}get color(){throw Ic()}get left(){throw Ic()}get right(){throw Ic()}copy(e,t,n,i,s){return this}insert(e,t,n){return new mu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(e){this.comparator=e,this.data=new pu(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vu(this.data.getIterator())}getIteratorFrom(e){return new vu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof yu))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yu(this.comparator);return t.data=e,t}}class vu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(e){this.fields=e,e.sort(Kc.comparator)}static empty(){return new wu([])}unionWith(e){let t=new yu(Kc.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new wu(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new bu("Invalid base64 string: "+e):e}}(e);return new Eu(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Eu(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Vc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Eu.EMPTY_BYTE_STRING=new Eu("");const Tu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Iu(e){if(_c(!!e),"string"==typeof e){let t=0;const n=Tu.exec(e);if(_c(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:_u(e.seconds),nanos:_u(e.nanos)}}function _u(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Su(e){return"string"==typeof e?Eu.fromBase64String(e):Eu.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Cu(e){const t=e.mapValue.fields.__previous_value__;return ku(t)?Cu(t):t}function Au(e){const t=Iu(e.mapValue.fields.__local_write_time__.timestampValue);return new jc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,n,i,s,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Ru{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ru("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ru&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ou(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ku(e)?4:Hu(e)?9007199254740991:10:Ic()}function Lu(e,t){if(e===t)return!0;const n=Ou(e);if(n!==Ou(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Au(e).isEqual(Au(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Iu(e.timestampValue),i=Iu(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,Su(e.bytesValue).isEqual(Su(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return _u(e.geoPointValue.latitude)===_u(t.geoPointValue.latitude)&&_u(e.geoPointValue.longitude)===_u(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return _u(e.integerValue)===_u(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=_u(e.doubleValue),i=_u(t.doubleValue);return n===i?ou(n)===ou(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Bc(e.arrayValue.values||[],t.arrayValue.values||[],Lu);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(hu(n)!==hu(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Lu(n[e],i[e])))return!1;return!0}(e,t);default:return Ic()}var i}function Pu(e,t){return void 0!==(e.values||[]).find((e=>Lu(e,t)))}function Mu(e,t){if(e===t)return 0;const n=Ou(e),i=Ou(t);if(n!==i)return Vc(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Vc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=_u(e.integerValue||e.doubleValue),i=_u(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return xu(e.timestampValue,t.timestampValue);case 4:return xu(Au(e),Au(t));case 5:return Vc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Su(e),i=Su(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Vc(n[e],i[e]);if(0!==t)return t}return Vc(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Vc(_u(e.latitude),_u(t.latitude));return 0!==n?n:Vc(_u(e.longitude),_u(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Mu(n[e],i[e]);if(t)return t}return Vc(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Du.mapValue&&t===Du.mapValue)return 0;if(e===Du.mapValue)return 1;if(t===Du.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=Vc(i[e],r[e]);if(0!==t)return t;const o=Mu(n[i[e]],s[r[e]]);if(0!==o)return o}return Vc(i.length,r.length)}(e.mapValue,t.mapValue);default:throw Ic()}}function xu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Vc(e,t);const n=Iu(e),i=Iu(t),s=Vc(n.seconds,i.seconds);return 0!==s?s:Vc(n.nanos,i.nanos)}function Uu(e){return Fu(e)}function Fu(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Iu(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Su(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Wc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Fu(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Fu(e.fields[s])}`;return n+"}"}(e.mapValue):Ic()}function Vu(e){return!!e&&"integerValue"in e}function Bu(e){return!!e&&"arrayValue"in e}function ju(e){return!!e&&"nullValue"in e}function zu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function $u(e){return!!e&&"mapValue"in e}function qu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return du(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=qu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Hu(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku{constructor(e){this.value=e}static empty(){return new Ku({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!$u(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qu(t)}setAll(e){let t=Kc.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=qu(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());$u(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Lu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];$u(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){du(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Ku(qu(this.value))}}function Wu(e){const t=[];return du(e.fields,((e,n)=>{const i=new Kc([e]);if($u(n)){const e=Wu(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new wu(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gu{constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Gu(e,0,zc.min(),zc.min(),zc.min(),Ku.empty(),0)}static newFoundDocument(e,t,n,i){return new Gu(e,1,t,zc.min(),n,i,0)}static newNoDocument(e,t){return new Gu(e,2,t,zc.min(),zc.min(),Ku.empty(),0)}static newUnknownDocument(e,t){return new Gu(e,3,t,zc.min(),zc.min(),Ku.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(zc.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ku.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ku.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=zc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Gu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.position=e,this.inclusive=t}}function Ju(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?Wc.comparator(Wc.fromName(o.referenceValue),n.key):Mu(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Yu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Lu(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{}class tl extends el{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ul(e,t,n):"array-contains"===t?new fl(e,n):"in"===t?new pl(e,n):"not-in"===t?new gl(e,n):"array-contains-any"===t?new ml(e,n):new tl(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ll(e,n):new hl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Mu(t,this.value)):null!==t&&Ou(this.value)===Ou(t)&&this.matchesComparison(Mu(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ic()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nl extends el{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new nl(e,t)}matches(e){return il(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function il(e){return"and"===e.op}function sl(e){return rl(e)&&il(e)}function rl(e){for(const t of e.filters)if(t instanceof nl)return!1;return!0}function ol(e){if(e instanceof tl)return e.field.canonicalString()+e.op.toString()+Uu(e.value);if(sl(e))return e.filters.map((e=>ol(e))).join(",");{const t=e.filters.map((e=>ol(e))).join(",");return`${e.op}(${t})`}}function al(e,t){return e instanceof tl?(n=e,(i=t)instanceof tl&&n.op===i.op&&n.field.isEqual(i.field)&&Lu(n.value,i.value)):e instanceof nl?function(e,t){return t instanceof nl&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&al(n,t.filters[i])),!0)}(e,t):void Ic();var n,i}function cl(e){return e instanceof tl?`${(t=e).field.canonicalString()} ${t.op} ${Uu(t.value)}`:e instanceof nl?function(e){return e.op.toString()+" {"+e.getFilters().map(cl).join(" ,")+"}"}(e):"Filter";var t}class ul extends tl{constructor(e,t,n){super(e,t,n),this.key=Wc.fromName(n.referenceValue)}matches(e){const t=Wc.comparator(e.key,this.key);return this.matchesComparison(t)}}class ll extends tl{constructor(e,t){super(e,"in",t),this.keys=dl("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hl extends tl{constructor(e,t){super(e,"not-in",t),this.keys=dl("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function dl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Wc.fromName(e.referenceValue)))}class fl extends tl{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bu(t)&&Pu(t.arrayValue,this.value)}}class pl extends tl{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Pu(this.value.arrayValue,t)}}class gl extends tl{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Pu(this.value.arrayValue,t)}}class ml extends tl{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Pu(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.dt=null}}function vl(e,t=null,n=[],i=[],s=null,r=null,o=null){return new yl(e,t,n,i,s,r,o)}function wl(e){const t=Sc(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>ol(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),ru(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Uu(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Uu(e))).join(",")),t.dt=e}return t.dt}function bl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Zu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!al(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Yu(e.startAt,t.startAt)&&Yu(e.endAt,t.endAt)}function El(e){return Wc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Il(e,t,n,i,s,r,o,a){return new Tl(e,t,n,i,s,r,o,a)}function _l(e){return new Tl(e)}function Sl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function kl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Cl(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Al(e){return null!==e.collectionGroup}function Nl(e){const t=Sc(e);if(null===t.wt){t.wt=[];const e=Cl(t),n=kl(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Xu(e)),t.wt.push(new Xu(Kc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Xu(Kc.keyField(),e))}}}return t.wt}function Rl(e){const t=Sc(e);if(!t._t)if("F"===t.limitType)t._t=vl(t.path,t.collectionGroup,Nl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Nl(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Xu(n.field,t))}const n=t.endAt?new Qu(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Qu(t.startAt.position,t.startAt.inclusive):null;t._t=vl(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function Dl(e,t,n){return new Tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ol(e,t){return bl(Rl(e),Rl(t))&&e.limitType===t.limitType}function Ll(e){return`${wl(Rl(e))}|lt:${e.limitType}`}function Pl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>cl(e))).join(", ")}]`),ru(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Uu(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Uu(e))).join(",")),`Target(${t})`}(Rl(e))}; limitType=${e.limitType})`}function Ml(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Wc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Nl(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=Ju(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,Nl(n),i)||n.endAt&&!function(e,t,n){const i=Ju(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,Nl(n),i)));var n,i}function xl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ul(e){return(t,n)=>{let i=!1;for(const s of Nl(e)){const e=Fl(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Fl(e,t,n){const i=e.field.isKeyField()?Wc.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Mu(i,s):Ic()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ic()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){du(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return fu(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new pu(Wc.comparator);function jl(){return Bl}const zl=new pu(Wc.comparator);function $l(...e){let t=zl;for(const n of e)t=t.insert(n.key,n);return t}function ql(e){let t=zl;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Hl(){return Wl()}function Kl(){return Wl()}function Wl(){return new Vl((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Gl=new pu(Wc.comparator),Ql=new yu(Wc.comparator);function Jl(...e){let t=Ql;for(const n of e)t=t.add(n);return t}const Yl=new yu(Vc);function Xl(){return Yl}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(t)?"-0":t}}function eh(e){return{integerValue:""+e}}function th(e,t){return au(t)?eh(t):Zl(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this._=void 0}}function ih(e,t,n){return e instanceof oh?ah(e,t):e instanceof ch?uh(e,t):n}function sh(e,t){var n,i;return e instanceof lh?Vu(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class rh extends nh{}class oh extends nh{constructor(e){super(),this.elements=e}}function ah(e,t){const n=dh(t);for(const t of e.elements)n.some((e=>Lu(e,t)))||n.push(t);return{arrayValue:{values:n}}}class ch extends nh{constructor(e){super(),this.elements=e}}function uh(e,t){let n=dh(t);for(const t of e.elements)n=n.filter((e=>!Lu(e,t)));return{arrayValue:{values:n}}}class lh extends nh{constructor(e,t){super(),this.serializer=e,this.gt=t}}function hh(e){return _u(e.integerValue||e.doubleValue)}function dh(e){return Bu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.field=e,this.transform=t}}class ph{constructor(e,t){this.version=e,this.transformResults=t}}class gh{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gh}static exists(e){return new gh(void 0,e)}static updateTime(e){return new gh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class yh{}function vh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ah(e.key,gh.none()):new Ih(e.key,e.data,gh.none());{const n=e.data,i=Ku.empty();let s=new yu(Kc.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new _h(e.key,i,new wu(s.toArray()),gh.none())}}function wh(e,t,n){var i;e instanceof Ih?function(e,t,n){const i=e.value.clone(),s=kh(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof _h?function(e,t,n){if(!mh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=kh(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Sh(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function bh(e,t,n,i){return e instanceof Ih?function(e,t,n,i){if(!mh(e.precondition,t))return n;const s=e.value.clone(),r=Ch(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof _h?function(e,t,n,i){if(!mh(e.precondition,t))return n;const s=Ch(e.fieldTransforms,i,t),r=t.data;return r.setAll(Sh(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(s=t,r=n,mh(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function Eh(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=sh(i.transform,e||null);null!=s&&(null===n&&(n=Ku.empty()),n.set(i.field,s))}return n||null}function Th(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Bc(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof oh&&i instanceof oh||n instanceof ch&&i instanceof ch?Bc(n.elements,i.elements,Lu):n instanceof lh&&i instanceof lh?Lu(n.gt,i.gt):n instanceof rh&&i instanceof rh);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class Ih extends yh{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _h extends yh{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function kh(e,t,n){const i=new Map;_c(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,ih(o,a,n[s]))}return i}function Ch(e,t,n){const i=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);i.set(a.field,(r=c,o=t,(s=e)instanceof rh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ku(t)&&(t=Cu(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof oh?ah(s,r):s instanceof ch?uh(s,r):function(e,t){const n=sh(e,t),i=hh(n)+hh(e.gt);return Vu(n)&&Vu(e.gt)?eh(i):Zl(e.serializer,i)}(s,r)))}var s,r,o;return i}class Ah extends yh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nh extends yh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&wh(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=bh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=bh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Kl();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=vh(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(zc.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Jl())}isEqual(e){return this.batchId===e.batchId&&Bc(this.mutations,e.mutations,((e,t)=>Th(e,t)))&&Bc(this.baseMutations,e.baseMutations,((e,t)=>Th(e,t)))}}class Dh{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){_c(e.mutations.length===n.length);let i=Gl;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Dh(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lh{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ph,Mh;function xh(e){switch(e){default:return Ic();case kc.CANCELLED:case kc.UNKNOWN:case kc.DEADLINE_EXCEEDED:case kc.RESOURCE_EXHAUSTED:case kc.INTERNAL:case kc.UNAVAILABLE:case kc.UNAUTHENTICATED:return!1;case kc.INVALID_ARGUMENT:case kc.NOT_FOUND:case kc.ALREADY_EXISTS:case kc.PERMISSION_DENIED:case kc.FAILED_PRECONDITION:case kc.ABORTED:case kc.OUT_OF_RANGE:case kc.UNIMPLEMENTED:case kc.DATA_LOSS:return!0}}function Uh(e){if(void 0===e)return bc("GRPC error has no .code"),kc.UNKNOWN;switch(e){case Ph.OK:return kc.OK;case Ph.CANCELLED:return kc.CANCELLED;case Ph.UNKNOWN:return kc.UNKNOWN;case Ph.DEADLINE_EXCEEDED:return kc.DEADLINE_EXCEEDED;case Ph.RESOURCE_EXHAUSTED:return kc.RESOURCE_EXHAUSTED;case Ph.INTERNAL:return kc.INTERNAL;case Ph.UNAVAILABLE:return kc.UNAVAILABLE;case Ph.UNAUTHENTICATED:return kc.UNAUTHENTICATED;case Ph.INVALID_ARGUMENT:return kc.INVALID_ARGUMENT;case Ph.NOT_FOUND:return kc.NOT_FOUND;case Ph.ALREADY_EXISTS:return kc.ALREADY_EXISTS;case Ph.PERMISSION_DENIED:return kc.PERMISSION_DENIED;case Ph.FAILED_PRECONDITION:return kc.FAILED_PRECONDITION;case Ph.ABORTED:return kc.ABORTED;case Ph.OUT_OF_RANGE:return kc.OUT_OF_RANGE;case Ph.UNIMPLEMENTED:return kc.UNIMPLEMENTED;case Ph.DATA_LOSS:return kc.DATA_LOSS;default:return Ic()}}(Mh=Ph||(Ph={}))[Mh.OK=0]="OK",Mh[Mh.CANCELLED=1]="CANCELLED",Mh[Mh.UNKNOWN=2]="UNKNOWN",Mh[Mh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mh[Mh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mh[Mh.NOT_FOUND=5]="NOT_FOUND",Mh[Mh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mh[Mh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mh[Mh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mh[Mh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mh[Mh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mh[Mh.ABORTED=10]="ABORTED",Mh[Mh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mh[Mh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mh[Mh.INTERNAL=13]="INTERNAL",Mh[Mh.UNAVAILABLE=14]="UNAVAILABLE",Mh[Mh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Vh}static getOrCreateInstance(){return null===Vh&&(Vh=new Fh),Vh}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Vh=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new pc([4294967295,4294967295],0);function zh(e){const t=Bh().encode(e),n=new fc;return n.update(t),new Uint8Array(n.digest())}function $h(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new pc([n,i],0),new pc([s,r],0)]}class qh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Hh(`Invalid padding: ${t}`);if(n<0)throw new Hh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Hh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Hh(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=pc.fromNumber(this.It)}Et(e,t,n){let i=e.add(t.multiply(pc.fromNumber(n)));return 1===i.compare(jh)&&(i=new pc([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=zh(e),[n,i]=$h(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),r=new qh(s,i,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.It)return;const t=zh(e),[n,i]=$h(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Hh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Wh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Kh(zc.min(),i,new pu(Vc),jl(),Jl())}}class Wh{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Wh(n,t,Jl(),Jl(),Jl())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t,n,i){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=i}}class Qh{constructor(e,t){this.targetId=e,this.Vt=t}}class Jh{constructor(e,t,n=Eu.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Yh{constructor(){this.St=0,this.Dt=ed(),this.Ct=Eu.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Jl(),t=Jl(),n=Jl();return this.Dt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Ic()}})),new Wh(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=ed()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Xh{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=jl(),this.zt=Zh(),this.Wt=new pu(Vc)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:Ic()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,i=e.Vt.count,s=this.se(n);if(s){const r=s.target;if(El(r))if(0===i){const e=new Wc(r.path);this.Yt(n,e,Gu.newNoDocument(e,zc.min()))}else _c(1===i);else{const s=this.ie(n);if(s!==i){const i=this.re(e,s);if(0!==i){this.ee(n);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Fh.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var i,s,r,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(i=null==l?void 0:l.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(r=null===(s=null==l?void 0:l.bits)||void 0===s?void 0:s.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}(i,s,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:i}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=n;let a,c;try{a=Su(s).toUint8Array()}catch(e){if(e instanceof bu)return Ec("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new qh(a,r,o)}catch(e){return Ec(e instanceof Hh?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:i!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const s=this.Gt.ue(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.vt(r)||(this.Yt(e,n,null),i++)})),i}ce(e){const t=new Map;this.Qt.forEach(((n,i)=>{const s=this.se(i);if(s){if(n.current&&El(s.target)){const t=new Wc(s.target.path);null!==this.jt.get(t)||this.ae(i,t)||this.Yt(i,t,Gu.newNoDocument(t,e))}n.Mt&&(t.set(i,n.Ot()),n.Ft())}}));let n=Jl();this.zt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const i=new Kh(e,t,this.Wt,this.jt,n);return this.jt=jl(),this.zt=Zh(),this.Wt=new pu(Vc),i}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Yh,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new yu(Vc),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||wc("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Yh),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Zh(){return new pu(Wc.comparator)}function ed(){return new pu(Wc.comparator)}const td={asc:"ASCENDING",desc:"DESCENDING"},nd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},id={and:"AND",or:"OR"};class sd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rd(e,t){return e.useProto3Json||ru(t)?t:{value:t}}function od(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ad(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function cd(e,t){return od(e,t.toTimestamp())}function ud(e){return _c(!!e),zc.fromTimestamp(function(e){const t=Iu(e);return new jc(t.seconds,t.nanos)}(e))}function ld(e,t){return(n=e,new qc(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function hd(e){const t=qc.fromString(e);return _c(Rd(t)),t}function dd(e,t){return ld(e.databaseId,t.path)}function fd(e,t){const n=hd(t);if(n.get(1)!==e.databaseId.projectId)throw new Cc(kc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Cc(kc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Wc(yd(n))}function pd(e,t){return ld(e.databaseId,t)}function gd(e){const t=hd(e);return 4===t.length?qc.emptyPath():yd(t)}function md(e){return new qc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yd(e){return _c(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function vd(e,t,n){return{name:dd(e,t),fields:n.value.mapValue.fields}}function wd(e,t){let n;if(t instanceof Ih)n={update:vd(e,t.key,t.value)};else if(t instanceof Ah)n={delete:dd(e,t.key)};else if(t instanceof _h)n={update:vd(e,t.key,t.data),updateMask:Nd(t.fieldMask)};else{if(!(t instanceof Nh))return Ic();n={verify:dd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof rh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof oh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ch)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof lh)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Ic()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:cd(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Ic())),n;var i,s}function bd(e,t){return{documents:[pd(e,t.path)]}}function Ed(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=pd(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=pd(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0!==e.length)return Ad(nl.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>{return{field:kd((t=e).field),direction:_d(t.dir)};var t}))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=rd(e,t.limit);var a,c;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt={before:!(c=t.endAt).inclusive,values:c.position}),n}function Td(e){let t=gd(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){_c(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=Id(e);return t instanceof nl&&sl(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Xu(Cd((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ru(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Qu(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Qu(n,t)}(n.endAt)),Il(t,s,o,r,a,"F",c,u)}function Id(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Cd(e.unaryFilter.field);return tl.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Cd(e.unaryFilter.field);return tl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cd(e.unaryFilter.field);return tl.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Cd(e.unaryFilter.field);return tl.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ic()}}(e):void 0!==e.fieldFilter?(n=e,tl.create(Cd(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ic()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,nl.create(t.compositeFilter.filters.map((e=>Id(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ic()}}(t.compositeFilter.op))):Ic();var t,n}function _d(e){return td[e]}function Sd(e){return nd[e]}function kd(e){return{fieldPath:e.canonicalString()}}function Cd(e){return Kc.fromServerFormat(e.fieldPath)}function Ad(e){return e instanceof tl?function(e){if("=="===e.op){if(zu(e.value))return{unaryFilter:{field:kd(e.field),op:"IS_NAN"}};if(ju(e.value))return{unaryFilter:{field:kd(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(zu(e.value))return{unaryFilter:{field:kd(e.field),op:"IS_NOT_NAN"}};if(ju(e.value))return{unaryFilter:{field:kd(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kd(e.field),op:Sd(e.op),value:e.value}}}(e):e instanceof nl?function(e){const t=e.getFilters().map((e=>Ad(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,id[n]),filters:t}};var n}(e):Ic()}function Nd(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Rd(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t,n,i,s=zc.min(),r=zc.min(),o=Eu.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Dd(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dd(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.fe=e}}function Ld(e){const t=Td({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Dl(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(_u(e.integerValue));else if("doubleValue"in e){const n=_u(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),ou(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Su(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Hu(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):Ic()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),Wc.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Pd.Ve=new Pd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Md{constructor(){this.rn=new xd}addToCollectionParentIndex(e,t){return this.rn.add(t),nu.resolve()}getCollectionParents(e,t){return nu.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return nu.resolve()}deleteFieldIndex(e,t){return nu.resolve()}getDocumentsMatchingTarget(e,t){return nu.resolve(null)}getIndexType(e,t){return nu.resolve(0)}getFieldIndexes(e,t){return nu.resolve([])}getNextCollectionGroupToUpdate(e){return nu.resolve(null)}getMinOffset(e,t){return nu.resolve(Yc.min())}getMinOffsetFromCollectionGroup(e,t){return nu.resolve(Yc.min())}updateCollectionGroup(e,t,n){return nu.resolve()}updateIndexEntries(e,t){return nu.resolve()}}class xd{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new yu(qc.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new yu(qc.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ud{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ud(e,Ud.DEFAULT_COLLECTION_PERCENTILE,Ud.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ud.DEFAULT_COLLECTION_PERCENTILE=10,Ud.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ud.DEFAULT=new Ud(41943040,Ud.DEFAULT_COLLECTION_PERCENTILE,Ud.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ud.DISABLED=new Ud(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fd{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Fd(0)}static Mn(){return new Fd(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vd{constructor(){this.changes=new Vl((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?nu.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&bh(n.mutation,e,wu.empty(),jc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Jl()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Jl()){const i=Hl();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=$l();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Hl();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Jl())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=jl();const r=Wl(),o=Wl();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof _h)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),bh(o.mutation,t,o.mutation.getFieldMask(),jc.now())):r.set(t.key,wu.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Bd(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Wl();let i=new pu(((e,t)=>e-t)),s=Jl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||wu.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||Jl()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=Kl();c.forEach((e=>{if(!s.has(e)){const i=vh(t.get(e),n.get(e));null!==i&&u.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,u))}return nu.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,Wc.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Al(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):nu.resolve(Hl());let o=-1,a=s;return r.next((t=>nu.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?nu.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Jl()))).next((e=>({batchId:o,changes:ql(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Wc(t)).next((e=>{let t=$l();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=$l();return this.indexManager.getCollectionParents(e,i).next((r=>nu.forEach(r,(r=>{const o=(a=t,c=r.child(i),new Tl(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,Gu.newInvalidDocument(i)))}));let n=$l();return e.forEach(((e,s)=>{const r=i.get(e);void 0!==r&&bh(r.mutation,s,wu.empty(),jc.now()),Ml(t,s)&&(n=n.insert(e,s))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return nu.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:ud(n.createTime)}),nu.resolve()}getNamedQuery(e,t){return nu.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:(n=t).name,query:Ld(n.bundledQuery),readTime:ud(n.readTime)}),nu.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.overlays=new pu(Wc.comparator),this.ls=new Map}getOverlay(e,t){return nu.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Hl();return nu.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.we(e,t,i)})),nu.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),nu.resolve()}getOverlaysForCollection(e,t,n){const i=Hl(),s=t.length+1,r=new Wc(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return nu.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new pu(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Hl(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Hl(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return nu.resolve(o)}we(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Oh(t,n));let s=this.ls.get(t);void 0===s&&(s=Jl(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.fs=new yu(Hd.ds),this.ws=new yu(Hd._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Hd(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new Hd(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Wc(new qc([])),n=new Hd(t,e),i=new Hd(t,e+1),s=[];return this.ws.forEachInRange([n,i],(e=>{this.ys(e),s.push(e.key)})),s}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Wc(new qc([])),n=new Hd(t,e),i=new Hd(t,e+1);let s=Jl();return this.ws.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Hd(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Hd{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Wc.comparator(e.key,t.key)||Vc(e.As,t.As)}static _s(e,t){return Vc(e.As,t.As)||Wc.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new yu(Hd.ds)}checkEmpty(e){return nu.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Rh(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.Rs=this.Rs.add(new Hd(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return nu.resolve(r)}lookupMutationBatch(e,t){return nu.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.bs(n),s=i<0?0:i;return nu.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return nu.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return nu.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Hd(t,0),i=new Hd(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,i],(e=>{const t=this.Ps(e.As);s.push(t)})),nu.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new yu(Vc);return t.forEach((e=>{const t=new Hd(e,0),i=new Hd(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,i],(e=>{n=n.add(e.As)}))})),nu.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;Wc.isDocumentKey(s)||(s=s.child(""));const r=new Hd(new Wc(s),0);let o=new yu(Vc);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.As)),!0)}),r),nu.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){_c(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return nu.forEach(t.mutations,(i=>{const s=new Hd(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new Hd(t,0),i=this.Rs.firstAfterOrEqual(n);return nu.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,nu.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.Ds=e,this.docs=new pu(Wc.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return nu.resolve(n?n.document.mutableCopy():Gu.newInvalidDocument(t))}getEntries(e,t){let n=jl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Gu.newInvalidDocument(e))})),nu.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=jl();const r=t.path,o=new Wc(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||Xc(Jc(o),n)<=0||(i.has(o.key)||Ml(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return nu.resolve(s)}getAllFromCollectionGroup(e,t,n,i){Ic()}Cs(e,t){return nu.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Gd(this)}getSize(e){return nu.resolve(this.size)}}class Gd extends Vd{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(n)})),nu.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.persistence=e,this.xs=new Vl((e=>wl(e)),bl),this.lastRemoteSnapshotVersion=zc.min(),this.highestTargetId=0,this.Ns=0,this.ks=new qd,this.targetCount=0,this.Ms=Fd.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),nu.resolve()}getLastRemoteSnapshotVersion(e){return nu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return nu.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),nu.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),nu.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Fd(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,nu.resolve()}updateTargetData(e,t){return this.Fn(t),nu.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,nu.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),nu.waitFor(s).next((()=>i))}getTargetCount(e){return nu.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return nu.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),nu.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),nu.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),nu.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return nu.resolve(n)}containsKey(e,t){return nu.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.$s={},this.overlays={},this.Os=new su(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Qd(this),this.indexManager=new Md,this.remoteDocumentCache=new Wd((e=>this.referenceDelegate.Ls(e))),this.serializer=new Od(t),this.qs=new zd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $d,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Kd(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){wc("MemoryPersistence","Starting transaction:",e);const i=new Yd(this.Os.next());return this.referenceDelegate.Us(),n(i).next((e=>this.referenceDelegate.Ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gs(e,t){return nu.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Yd extends eu{constructor(e){super(),this.currentSequenceNumber=e}}class Xd{constructor(e){this.persistence=e,this.Qs=new qd,this.js=null}static zs(e){return new Xd(e)}get Ws(){if(this.js)return this.js;throw Ic()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),nu.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),nu.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),nu.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nu.forEach(this.Ws,(n=>{const i=Wc.fromPath(n);return this.Hs(e,i).next((e=>{e||t.removeEntry(i,zc.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return nu.or([()=>nu.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zd{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=i}static Li(e,t){let n=Jl(),i=Jl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new Zd(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ki(e,t).next((s=>s||this.Gi(e,t,i,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Sl(t))return nu.resolve(null);let n=Rl(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Dl(t,null,"F"),n=Rl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=Jl(...i);return this.Ui.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.ji(t,i);return this.zi(t,r,s,n.readTime)?this.Ki(e,Dl(t,null,"F")):this.Wi(e,r,t,n)}))))})))))}Gi(e,t,n,i){return Sl(t)||i.isEqual(zc.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((s=>{const r=this.ji(t,s);return this.zi(t,r,n,i)?this.Qi(e,t):(vc()<=ue.DEBUG&&wc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pl(t)),this.Wi(e,r,t,Qc(i,-1)))}))}ji(e,t){let n=new yu(Ul(e));return t.forEach(((t,i)=>{Ml(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return vc()<=ue.DEBUG&&wc("QueryEngine","Using full collection scan to execute query:",Pl(t)),this.Ui.getDocumentsMatchingQuery(e,t,Yc.min())}Wi(e,t,n,i){return this.Ui.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new pu(Vc),this.Yi=new Vl((e=>wl(e)),bl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jd(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function nf(e,t,n,i){return new tf(e,t,n,i)}async function sf(e,t){const n=Sc(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=Jl();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function rf(e){const t=Sc(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function of(e,t,n){let i=Jl(),s=Jl();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=jl();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(zc.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):wc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:i,sr:s}}))}function af(e,t){const n=Sc(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function cf(e,t){const n=Sc(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Bs.getTargetData(e,t).next((s=>s?(i=s,nu.resolve(i)):n.Bs.allocateTargetId(e).next((s=>(i=new Dd(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function uf(e,t,n){const i=Sc(e),s=i.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!iu(e))throw e;wc("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(s.target)}function lf(e,t,n){const i=Sc(e);let s=zc.min(),r=Jl();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Sc(e),s=i.Yi.get(n);return void 0!==s?nu.resolve(i.Ji.get(s)):i.Bs.getTargetData(t,n)}(i,e,Rl(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?s:zc.min(),n?r:Jl()))).next((e=>(hf(i,xl(t),e),{documents:e,ir:r})))))}function hf(e,t,n){let i=e.Xi.get(t)||zc.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Xi.set(t,i)}class df{constructor(){this.activeTargetIds=Xl()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ff{constructor(){this.Hr=new df,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new df,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){wc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){wc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf=null;function yf(){return null===mf?mf=268435456+Math.round(2147483648*Math.random()):mf++,"0x"+mf.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const vf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,i,s){const r=yf(),o=this.To(e,t);wc("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.Eo(a,i,s),this.Ao(e,o,a,n).then((t=>(wc("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw Ec("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,s,r){return this.Io(e,t,n,i,s)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+mc,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=vf[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,i){const s=yf();return new Promise(((r,o)=>{const a=new dc;a.setWithCredentials(!0),a.listenOnce(ac.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case oc.NO_ERROR:const t=a.getResponseJson();wc("WebChannelConnection",`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case oc.TIMEOUT:wc("WebChannelConnection",`RPC '${e}' ${s} timed out`),o(new Cc(kc.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const n=a.getStatus();if(wc("WebChannelConnection",`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(kc).indexOf(t)>=0?t:kc.UNKNOWN}(t.status);o(new Cc(e,t.message))}else o(new Cc(kc.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Cc(kc.UNAVAILABLE,"Connection failed."));break;default:Ic()}}finally{wc("WebChannelConnection",`RPC '${e}' ${s} completed.`)}}));const c=JSON.stringify(i);wc("WebChannelConnection",`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const i=yf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=sc(),o=rc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new lc({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=s.join("");wc("WebChannelConnection",`Creating RPC '${e}' stream ${i}: ${u}`,a);const l=r.createWebChannel(u,a);let h=!1,d=!1;const f=new wf({ro:t=>{d?wc("WebChannelConnection",`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(wc("WebChannelConnection",`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),wc("WebChannelConnection",`RPC '${e}' stream ${i} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,hc.EventType.OPEN,(()=>{d||wc("WebChannelConnection",`RPC '${e}' stream ${i} transport opened.`)})),p(l,hc.EventType.CLOSE,(()=>{d||(d=!0,wc("WebChannelConnection",`RPC '${e}' stream ${i} transport closed`),f.wo())})),p(l,hc.EventType.ERROR,(t=>{d||(d=!0,Ec("WebChannelConnection",`RPC '${e}' stream ${i} transport errored:`,t),f.wo(new Cc(kc.UNAVAILABLE,"The operation could not be completed")))})),p(l,hc.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];_c(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){wc("WebChannelConnection",`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Ph[e];if(void 0!==t)return Uh(t)}(t),s=o.message;void 0===n&&(n=kc.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new Cc(n,s)),l.close()}else wc("WebChannelConnection",`RPC '${e}' stream ${i} received:`,s),f._o(s)}})),p(o,cc.STAT_EVENT,(t=>{t.stat===uc.PROXY?wc("WebChannelConnection",`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===uc.NOPROXY&&wc("WebChannelConnection",`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(e){return new sd(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-n);i>0&&wc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,n,i,s,r,o,a){this.ii=e,this.$o=n,this.Oo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new If(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===kc.RESOURCE_EXHAUSTED?(bc(t.toString()),bc("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===kc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new Cc(kc.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return wc("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(wc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sf extends _f{constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Ic(),r=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(_c(void 0===t||"string"==typeof t),Eu.fromBase64String(t||"")):(_c(void 0===t||t instanceof Uint8Array),Eu.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?kc.UNKNOWN:Uh(e.code);return new Cc(t,e.message||"")}(a);n=new Jh(s,r,o,c||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=fd(e,i.document.name),r=ud(i.document.updateTime),o=i.document.createTime?ud(i.document.createTime):zc.min(),a=new Ku({mapValue:{fields:i.document.fields}}),c=Gu.newFoundDocument(s,r,o,a),u=i.targetIds||[],l=i.removedTargetIds||[];n=new Gh(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=fd(e,i.document),r=i.readTime?ud(i.readTime):zc.min(),o=Gu.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Gh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=fd(e,i.document),r=i.removedTargetIds||[];n=new Gh([],r,s,null)}else{if(!("filter"in t))return Ic();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,r=new Lh(i,s),o=e.targetId;n=new Qh(o,r)}}var i;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return zc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?zc.min():t.readTime?ud(t.readTime):zc.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=md(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=El(i)?{documents:bd(e,i)}:{query:Ed(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ad(e,t.resumeToken);const i=rd(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(zc.min())>0){n.readTime=od(e,t.snapshotVersion.toTimestamp());const i=rd(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ic()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=md(this.serializer),t.removeTarget=e,this.Wo(t)}}class kf extends _f{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(_c(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(_c(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?ud(e.updateTime):ud(t);return n.isEqual(zc.min())&&(n=ud(t)),new ph(n,e.transformResults||[])}(e,n)))):[]),s=ud(e.commitTime);return this.listener.cu(s,i)}var t,n;return _c(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=md(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>wd(this.serializer,e)))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new Cc(kc.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Io(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===kc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Cc(kc.UNKNOWN,e.toString())}))}vo(e,t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.vo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===kc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Cc(kc.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class Af{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(bc(t),this.mu=!1):wc("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Ff(this)&&(wc("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Sc(e);t.vu.add(4),await Df(t),t.bu.set("Unknown"),t.vu.delete(4),await Rf(t)}(this))}))})),this.bu=new Af(n,i)}}async function Rf(e){if(Ff(e))for(const t of e.Ru)await t(!0)}async function Df(e){for(const t of e.Ru)await t(!1)}function Of(e,t){const n=Sc(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Uf(n)?xf(n):np(n).Ko()&&Pf(n,t))}function Lf(e,t){const n=Sc(e),i=np(n);n.Au.delete(t),i.Ko()&&Mf(n,t),0===n.Au.size&&(i.Ko()?i.jo():Ff(n)&&n.bu.set("Unknown"))}function Pf(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(zc.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}np(e).su(t)}function Mf(e,t){e.Vu.qt(t),np(e).iu(t)}function xf(e){e.Vu=new Xh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),np(e).start(),e.bu.gu()}function Uf(e){return Ff(e)&&!np(e).Uo()&&e.Au.size>0}function Ff(e){return 0===Sc(e).vu.size}function Vf(e){e.Vu=void 0}async function Bf(e){e.Au.forEach(((t,n)=>{Pf(e,t)}))}async function jf(e,t){Vf(e),Uf(e)?(e.bu.Iu(t),xf(e)):e.bu.set("Unknown")}async function zf(e,t,n){if(e.bu.set("Online"),t instanceof Jh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Au.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Au.delete(i),e.Vu.removeTarget(i))}(e,t)}catch(n){wc("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await $f(e,n)}else if(t instanceof Gh?e.Vu.Ht(t):t instanceof Qh?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(zc.min()))try{const t=await rf(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Au.get(i);s&&e.Au.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.Au.get(t);if(!i)return;e.Au.set(t,i.withResumeToken(Eu.EMPTY_BYTE_STRING,i.snapshotVersion)),Mf(e,t);const s=new Dd(i.target,t,n,i.sequenceNumber);Pf(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){wc("RemoteStore","Failed to raise snapshot:",t),await $f(e,t)}}async function $f(e,t,n){if(!iu(t))throw t;e.vu.add(1),await Df(e),e.bu.set("Offline"),n||(n=()=>rf(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{wc("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Rf(e)}))}function qf(e,t){return t().catch((n=>$f(e,n,t)))}async function Hf(e){const t=Sc(e),n=ip(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Kf(t);)try{const e=await af(t.localStore,i);if(null===e){0===t.Eu.length&&n.jo();break}i=e.batchId,Wf(t,e)}catch(e){await $f(t,e)}Gf(t)&&Qf(t)}function Kf(e){return Ff(e)&&e.Eu.length<10}function Wf(e,t){e.Eu.push(t);const n=ip(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Gf(e){return Ff(e)&&!ip(e).Uo()&&e.Eu.length>0}function Qf(e){ip(e).start()}async function Jf(e){ip(e).hu()}async function Yf(e){const t=ip(e);for(const n of e.Eu)t.uu(n.mutations)}async function Xf(e,t,n){const i=e.Eu.shift(),s=Dh.from(i,t,n);await qf(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Hf(e)}async function Zf(e,t){t&&ip(e).ou&&await async function(e,t){if(xh(n=t.code)&&n!==kc.ABORTED){const n=e.Eu.shift();ip(e).Qo(),await qf(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Hf(e)}var n}(e,t),Gf(e)&&Qf(e)}async function ep(e,t){const n=Sc(e);n.asyncQueue.verifyOperationInProgress(),wc("RemoteStore","RemoteStore received new credentials");const i=Ff(n);n.vu.add(3),await Df(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Rf(n)}async function tp(e,t){const n=Sc(e);t?(n.vu.delete(2),await Rf(n)):t||(n.vu.add(2),await Df(n),n.bu.set("Unknown"))}function np(e){return e.Su||(e.Su=function(e,t,n){const i=Sc(e);return i.fu(),new Sf(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Bf.bind(null,e),ao:jf.bind(null,e),nu:zf.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Uf(e)?xf(e):e.bu.set("Unknown")):(await e.Su.stop(),Vf(e))}))),e.Su}function ip(e){return e.Du||(e.Du=function(e,t,n){const i=Sc(e);return i.fu(),new kf(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Jf.bind(null,e),ao:Zf.bind(null,e),au:Yf.bind(null,e),cu:Xf.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Hf(e)):(await e.Du.stop(),e.Eu.length>0&&(wc("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sp{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ac,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new sp(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Cc(kc.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(e,t){if(bc("AsyncQueue",`${t}: ${e}`),iu(e))return new Cc(kc.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Wc.comparator(t.key,n.key):(e,t)=>Wc.comparator(e.key,t.key),this.keyedMap=$l(),this.sortedSet=new pu(this.comparator)}static emptySet(e){return new op(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof op))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new op;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.Cu=new pu(Wc.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):Ic():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class cp{constructor(e,t,n,i,s,r,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new cp(e,t,op.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.Nu=void 0,this.listeners=[]}}class lp{constructor(){this.queries=new Vl((e=>Ll(e)),Ol),this.onlineState="Unknown",this.ku=new Set}}async function hp(e,t){const n=Sc(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new up),s)try{r.Nu=await n.onListen(i)}catch(e){const n=rp(e,`Initialization of query '${Pl(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&gp(n)}async function dp(e,t){const n=Sc(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function fp(e,t){const n=Sc(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.$u(e)&&(i=!0);s.Nu=e}}i&&gp(n)}function pp(e,t,n){const i=Sc(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function gp(e){e.ku.forEach((e=>{e.next()}))}class mp{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new cp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=cp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yp{constructor(e){this.key=e}}class vp{constructor(e){this.key=e}}class wp{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Jl(),this.mutatedKeys=Jl(),this.tc=Ul(e),this.ec=new op(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new ap,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const u=i.get(e),l=Ml(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(r=r.add(l),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ec:r,ic:n,zi:o,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ic()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const r=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==s.length||a?{snapshot:new cp(this.query,e.ec,i,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ap,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Jl(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new vp(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new yp(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Jl();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return cp.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class bp{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ep{constructor(e){this.key=e,this.fc=!1}}class Tp{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Vl((e=>Ll(e)),Ol),this._c=new Map,this.mc=new Set,this.gc=new pu(Wc.comparator),this.yc=new Map,this.Ic=new qd,this.Tc={},this.Ec=new Map,this.Ac=Fd.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Ip(e,t){const n=jp(e);let i,s;const r=n.wc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const e=await cf(n.localStore,Rl(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await _p(n,t,i,"current"===r,e.resumeToken),n.isPrimaryClient&&Of(n.remoteStore,e)}return s}async function _p(e,t,n,i,s){e.Rc=(t,n,i)=>async function(e,t,n,i){let s=t.view.sc(n);s.zi&&(s=await lf(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return Mp(e,t.targetId,o.cc),o.snapshot}(e,t,n,i);const r=await lf(e.localStore,t,!0),o=new wp(t,r.ir),a=o.sc(r.documents),c=Wh.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),u=o.applyChanges(a,e.isPrimaryClient,c);Mp(e,n,u.cc);const l=new bp(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function Sp(e,t){const n=Sc(e),i=n.wc.get(t),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter((e=>!Ol(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await uf(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Lf(n.remoteStore,i.targetId),Lp(n,i.targetId)})).catch(tu)):(Lp(n,i.targetId),await uf(n.localStore,i.targetId,!0))}async function kp(e,t){const n=Sc(e);try{const e=await function(e,t){const n=Sc(e),i=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const o=[];t.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,r.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var l,h,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(Eu.EMPTY_BYTE_STRING,zc.min()).withLastLimboFreeSnapshotVersion(zc.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,i)),s=s.insert(a,u),h=u,d=r,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(e,u))}));let a=jl(),c=Jl();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(of(e,r,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!i.isEqual(zc.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return nu.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.yc.get(t);i&&(_c(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.fc=!0:e.modifiedDocuments.size>0?_c(i.fc):e.removedDocuments.size>0&&(_c(i.fc),i.fc=!1))})),await Fp(n,e,t)}catch(e){await tu(e)}}function Cp(e,t,n){const i=Sc(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wc.forEach(((n,i)=>{const s=i.view.Mu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Sc(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(i=!0)})),i&&gp(n)}(i.eventManager,t),e.length&&i.dc.nu(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Ap(e,t,n){const i=Sc(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.yc.get(t),r=s&&s.key;if(r){let e=new pu(Wc.comparator);e=e.insert(r,Gu.newNoDocument(r,zc.min()));const n=Jl().add(r),s=new Kh(zc.min(),new Map,new pu(Vc),e,n);await kp(i,s),i.gc=i.gc.remove(r),i.yc.delete(t),Up(i)}else await uf(i.localStore,t,!1).then((()=>Lp(i,t,n))).catch(tu)}async function Np(e,t){const n=Sc(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Sc(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=nu.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);_c(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Jl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Op(n,i,null),Dp(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Fp(n,e)}catch(e){await tu(e)}}async function Rp(e,t,n){const i=Sc(e);try{const e=await function(e,t){const n=Sc(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(_c(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Op(i,t,n),Dp(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Fp(i,e)}catch(e){await tu(e)}}function Dp(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Op(e,t,n){const i=Sc(e);let s=i.Tc[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Tc[i.currentUser.toKey()]=s}}function Lp(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.wc.delete(i),n&&e.dc.Pc(i,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Pp(e,t)}))}function Pp(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Lf(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Up(e))}function Mp(e,t,n){for(const i of n)i instanceof yp?(e.Ic.addReference(i.key,t),xp(e,i)):i instanceof vp?(wc("SyncEngine","Document no longer in limbo: "+i.key),e.Ic.removeReference(i.key,t),e.Ic.containsKey(i.key)||Pp(e,i.key)):Ic()}function xp(e,t){const n=t.key,i=n.path.canonicalString();e.gc.get(n)||e.mc.has(i)||(wc("SyncEngine","New document in limbo: "+n),e.mc.add(i),Up(e))}function Up(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Wc(qc.fromString(t)),i=e.Ac.next();e.yc.set(i,new Ep(n)),e.gc=e.gc.insert(n,i),Of(e.remoteStore,new Dd(Rl(_l(n.path)),i,"TargetPurposeLimboResolution",su.ct))}}async function Fp(e,t,n){const i=Sc(e),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach(((e,a)=>{o.push(i.Rc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=Zd.Li(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.dc.nu(s),await async function(e,t){const n=Sc(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>nu.forEach(t,(t=>nu.forEach(t.Fi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>nu.forEach(t.Bi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!iu(e))throw e;wc("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,s)}}}(i.localStore,r))}async function Vp(e,t){const n=Sc(e);if(!n.currentUser.isEqual(t)){wc("SyncEngine","User change. New user:",t.toKey());const e=await sf(n.localStore,t);n.currentUser=t,(i=n).Ec.forEach((e=>{e.forEach((e=>{e.reject(new Cc(kc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Ec.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Fp(n,e.er)}var i}function Bp(e,t){const n=Sc(e),i=n.yc.get(t);if(i&&i.fc)return Jl().add(i.key);{let e=Jl();const i=n._c.get(t);if(!i)return e;for(const t of i){const i=n.wc.get(t);e=e.unionWith(i.view.nc)}return e}}function jp(e){const t=Sc(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=kp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ap.bind(null,t),t.dc.nu=fp.bind(null,t.eventManager),t.dc.Pc=pp.bind(null,t.eventManager),t}function zp(e){const t=Sc(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Np.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rp.bind(null,t),t}class $p{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return nf(this.persistence,new ef,e.initialUser,this.serializer)}createPersistence(e){return new Jd(Xd.zs,this.serializer)}createSharedClientState(e){return new ff}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Cp(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vp.bind(null,this.syncEngine),await tp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lp}createDatastore(e){const t=Tf(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new bf(i));var i,s,r;return s=e.authCredentials,r=e.appCheckCredentials,new Cf(s,r,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Cp(this.syncEngine,e,0),r=gf.D()?new gf:new pf,new Nf(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new Tp(e,t,n,i,s,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Sc(e);wc("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Df(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):bc("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kp{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=gc.UNAUTHENTICATED,this.clientId=Fc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{wc("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(wc("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Cc(kc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ac;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=rp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wp(e,t){e.asyncQueue.verifyOperationInProgress(),wc("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await sf(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Gp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jp(e);wc("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>ep(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ep(t.remoteStore,n))),e._onlineComponents=t}function Qp(e){return"FirebaseError"===e.name?e.code===kc.FAILED_PRECONDITION||e.code===kc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Jp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){wc("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wp(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Qp(n))throw n;Ec("Error using user provided cache. Falling back to memory cache: "+n),await Wp(e,new $p)}}else wc("FirestoreClient","Using default OfflineComponentProvider"),await Wp(e,new $p);return e._offlineComponents}async function Yp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(wc("FirestoreClient","Using user provided OnlineComponentProvider"),await Gp(e,e._uninitializedComponentsProvider._online)):(wc("FirestoreClient","Using default OnlineComponentProvider"),await Gp(e,new qp))),e._onlineComponents}function Xp(e){return Yp(e).then((e=>e.syncEngine))}async function Zp(e){const t=await Yp(e),n=t.eventManager;return n.onListen=Ip.bind(null,t.syncEngine),n.onUnlisten=Sp.bind(null,t.syncEngine),n}function eg(e,t,n={}){const i=new Ac;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Hp({next:r=>{t.enqueueAndForget((()=>dp(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Cc(kc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Cc(kc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new mp(_l(n.path),r,{includeMetadataChanges:!0,Ku:!0});return hp(e,o)}(await Zp(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tg(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ng=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(e,t,n){if(!n)throw new Cc(kc.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sg(e){if(!Wc.isDocumentKey(e))throw new Cc(kc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ic()}function og(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Cc(kc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rg(e);throw new Cc(kc.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ag{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Cc(kc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Cc(kc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new Cc(kc.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tg(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Cc(kc.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Cc(kc.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Cc(kc.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cg{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ag({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Cc(kc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Cc(kc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ag(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Rc;switch(e.type){case"firstParty":return new Pc(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Cc(kc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ng.get(e);t&&(wc("ComponentProvider","Removing Datastore"),ng.delete(e),t.terminate())}(this),Promise.resolve()}}function ug(e,t,n,i={}){var s;const r=(e=og(e,cg))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&Ec("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=gc.MOCK_USER;else{t=j(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Cc(kc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new gc(r)}e._authCredentials=new Dc(new Nc(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lg(this.firestore,e,this._key)}}class hg{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hg(this.firestore,e,this._query)}}class dg extends hg{constructor(e,t,n){super(e,t,_l(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lg(this.firestore,null,new Wc(e))}withConverter(e){return new dg(this.firestore,e,this._path)}}function fg(e,t,...n){if(e=se(e),1===arguments.length&&(t=Fc.A()),ig("doc","path",t),e instanceof cg){const i=qc.fromString(t,...n);return sg(i),new lg(e,null,new Wc(i))}{if(!(e instanceof lg||e instanceof dg))throw new Cc(kc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(qc.fromString(t,...n));return sg(i),new lg(e.firestore,e instanceof dg?e.converter:null,new Wc(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pg{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new If(this,"async_queue_retry"),this.Xc=()=>{const e=Ef();e&&wc("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Ef();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ef();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Ac;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!iu(e))throw e;wc("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;throw bc("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=sp.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(i),i}Zc(){this.Wc&&Ic()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class gg extends cg{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new pg,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yg(this),this._firestoreClient.terminate()}}function mg(e){return e._firestoreClient||yg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function yg(e){var t,n,i;const s=e._freezeSettings(),r=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new Nu(o,a,c,(u=s).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,tg(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;e._firestoreClient=new Kp(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vg{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vg(Eu.fromBase64String(e))}catch(e){throw new Cc(kc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new vg(Eu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Cc(kc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bg{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Cc(kc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Cc(kc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Vc(this._lat,e._lat)||Vc(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=/^__.*__$/;class Ig{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new _h(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ih(e,this.data,t,this.fieldTransforms)}}class _g{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new _h(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ic()}}class kg{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new kg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.fa(e),i}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return $g(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Sg(this.ca)&&Tg.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Cg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Tf(e)}ya(e,t,n,i=!1){return new kg({ca:e,methodName:t,ga:n,path:Kc.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ag(e){const t=e._freezeSettings(),n=Tf(e._databaseId);return new Cg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ng(e,t,n,i,s,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,s);Vg("Data must be an object, but it was:",o,i);const a=Ug(i,o);let c,u;if(r.merge)c=new wu(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Bg(t,i,n);if(!o.contains(s))throw new Cc(kc.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);qg(e,s)||e.push(s)}c=new wu(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Ig(new Ku(a),c,u)}class Rg extends bg{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rg}}function Dg(e,t,n){return new kg({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Og extends bg{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Dg(this,e,!0),n=this.pa.map((e=>xg(e,t))),i=new oh(n);return new fh(e.path,i)}isEqual(e){return this===e}}class Lg extends bg{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Dg(this,e,!0),n=this.pa.map((e=>xg(e,t))),i=new ch(n);return new fh(e.path,i)}isEqual(e){return this===e}}function Pg(e,t,n,i){const s=e.ya(1,t,n);Vg("Data must be an object, but it was:",s,i);const r=[],o=Ku.empty();du(i,((e,i)=>{const a=zg(t,e,n);i=se(i);const c=s.da(a);if(i instanceof Rg)r.push(a);else{const e=xg(i,c);null!=e&&(r.push(a),o.set(a,e))}}));const a=new wu(r);return new _g(o,a,s.fieldTransforms)}function Mg(e,t,n,i,s,r){const o=e.ya(1,t,n),a=[Bg(t,i,n)],c=[s];if(r.length%2!=0)throw new Cc(kc.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<r.length;e+=2)a.push(Bg(t,r[e])),c.push(r[e+1]);const u=[],l=Ku.empty();for(let e=a.length-1;e>=0;--e)if(!qg(u,a[e])){const t=a[e];let n=c[e];n=se(n);const i=o.da(t);if(n instanceof Rg)u.push(t);else{const e=xg(n,i);null!=e&&(u.push(t),l.set(t,e))}}const h=new wu(u);return new _g(l,h,o.fieldTransforms)}function xg(e,t){if(Fg(e=se(e)))return Vg("Unsupported field value:",t,e),Ug(e,t);if(e instanceof bg)return function(e,t){if(!Sg(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=xg(s,t.wa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=se(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return th(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=jc.fromDate(e);return{timestampValue:od(t.serializer,n)}}if(e instanceof jc){const n=new jc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:od(t.serializer,n)}}if(e instanceof Eg)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof vg)return{bytesValue:ad(t.serializer,e._byteString)};if(e instanceof lg){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ld(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${rg(e)}`)}(e,t)}function Ug(e,t){const n={};return fu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):du(e,((e,i)=>{const s=xg(i,t.ha(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Fg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof jc||e instanceof Eg||e instanceof vg||e instanceof lg||e instanceof bg)}function Vg(e,t,n){if(!Fg(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=rg(n);throw"an object"===i?t._a(e+" a custom object"):t._a(e+" "+i)}var i}function Bg(e,t,n){if((t=se(t))instanceof wg)return t._internalPath;if("string"==typeof t)return zg(e,t);throw $g("Field path arguments must be of type string or ",e,!1,void 0,n)}const jg=new RegExp("[~\\*/\\[\\]]");function zg(e,t,n){if(t.search(jg)>=0)throw $g(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new wg(...t.split("."))._internalPath}catch(i){throw $g(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function $g(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Cc(kc.INVALID_ARGUMENT,a+e+c)}function qg(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Kg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wg("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Kg extends Hg{data(){return super.data()}}function Wg(e,t){return"string"==typeof t?zg(e,t):t instanceof wg?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{convertValue(e,t="none"){switch(Ou(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _u(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Su(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ic()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return du(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Eg(_u(e.latitude),_u(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cu(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Au(e));default:return null}}convertTimestamp(e){const t=Iu(e);return new jc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=qc.fromString(e);_c(Rd(n));const i=new Ru(n.get(1),n.get(3)),s=new Wc(n.popFirst(5));return i.isEqual(t)||bc(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yg extends Hg{constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Wg("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Xg extends Yg{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zg(e){e=og(e,lg);const t=og(e.firestore,gg);return eg(mg(t),e._key).then((n=>sm(t,e,n)))}class em extends Gg{constructor(e){super(),this.firestore=e}convertBytes(e){return new vg(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lg(this.firestore,null,t)}}function tm(e,t,n){e=og(e,lg);const i=og(e.firestore,gg),s=Qg(e.converter,t,n);return im(i,[Ng(Ag(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,gh.none())])}function nm(e,t,n,...i){e=og(e,lg);const s=og(e.firestore,gg),r=Ag(s);let o;return o="string"==typeof(t=se(t))||t instanceof wg?Mg(r,"updateDoc",e._key,t,n,i):Pg(r,"updateDoc",e._key,t),im(s,[o.toMutation(e._key,gh.exists(!0))])}function im(e,t){return function(e,t){const n=new Ac;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=zp(e);try{const e=await function(e,t){const n=Sc(e),i=jc.now(),s=t.reduce(((e,t)=>e.add(t.key)),Jl());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=jl(),c=Jl();return n.Zi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=Eh(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new _h(e.key,t,Wu(t.value.mapValue),gh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ql(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Tc[e.currentUser.toKey()];i||(i=new pu(Vc)),i=i.insert(t,n),e.Tc[e.currentUser.toKey()]=i}(i,e.batchId,n),await Fp(i,e.changes),await Hf(i.remoteStore)}catch(e){const t=rp(e,"Failed to persist write");n.reject(t)}}(await Xp(e),t,n))),n.promise}(mg(e),t)}function sm(e,t,n){const i=n.docs.get(t._key),s=new em(e);return new Yg(e,s,t._key,i,new Jg(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(...e){return new Og("arrayUnion",e)}function om(...e){return new Lg("arrayRemove",e)}!function(e,t=!0){mc="9.23.0",Ve(new re("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new gg(new Oc(e.getProvider("auth-internal")),new xc(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Cc(kc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ru(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),He("@firebase/firestore","3.13.0",e),He("@firebase/firestore","3.13.0","esm2017")}();const am={buttonSwitch:document.querySelector("#toggle-button"),headerNav:document.querySelector("#header-nav"),authorizationWindowInput:document.querySelectorAll(".authorization-window-input"),authorizationWindowSubmitButton:document.querySelector(".authorization-window-submit-button"),authorizationWindowForm:document.querySelector(".authorization-window-form"),openAuthorizationBtn:document.querySelector("[data-authorization-open]"),closeAuthorizationBtn:document.querySelector("[data-authorization-close]"),authorization:document.querySelector("[data-authorization]"),signUpButton:document.querySelector(".sign-up"),signInButton:document.querySelector(".sign-in"),btnLogin:document.querySelector(".btn-login"),btnSigned:document.querySelector(".btn-signed"),btnLogout:document.querySelector(".btn-logout"),authorizationWindow:document.querySelector(".authorization-window"),authorizationWindowCloseButtonIcon:document.querySelector(".authorization-window-close-button-icon"),authorizationWindowIcon:document.querySelectorAll(".authorization-window-icon"),headerList:document.querySelector(".header-list"),inputName:document.querySelector("#name")};""!==localStorage.getItem("user-id")&&(am.btnSigned.textContent=localStorage.getItem("user-name"),am.btnLogin.classList.add("visually-hidden"),am.btnSigned.classList.remove("visually-hidden"),am.headerNav.classList.remove("visually-hidden"));let cm="";"dark"===localStorage.theme&&(am.authorizationWindow.classList.add("dark"),am.authorizationWindowInput.forEach((e=>{e.classList.add("dark")})),am.authorizationWindowCloseButtonIcon.classList.add("dark"),am.authorizationWindowIcon.forEach((e=>{e.classList.add("dark")})),am.authorizationWindowSubmitButton.classList.add("dark"),am.signUpButton.classList.add("dark"),am.signInButton.classList.add("dark")),am.buttonSwitch.addEventListener("click",(()=>{am.authorizationWindow.classList.toggle("dark"),am.authorizationWindowInput.forEach((e=>{e.classList.toggle("dark")})),am.authorizationWindowCloseButtonIcon.classList.toggle("dark"),am.authorizationWindowIcon.forEach((e=>{e.classList.toggle("dark")})),am.authorizationWindowSubmitButton.classList.toggle("dark"),am.signUpButton.classList.toggle("dark"),am.signInButton.classList.toggle("dark")})),(()=>{function e(){const e="true"===am.openAuthorizationBtn.getAttribute("aria-expanded")||!1;am.openAuthorizationBtn.setAttribute("aria-expanded",!e),am.authorization.classList.toggle("is-hidden"),e?(document.body.style.overflow="scroll",am.authorizationWindowForm.reset()):document.body.style.overflow="hidden"}am.openAuthorizationBtn.addEventListener("click",e),am.closeAuthorizationBtn.addEventListener("click",e)})();const um=$e({apiKey:"AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms",authDomain:"js-firebase-auth-cb2eb.firebaseapp.com",projectId:"js-firebase-auth-cb2eb",storageBucket:"js-firebase-auth-cb2eb.appspot.com",messagingSenderId:"233176764690",appId:"1:233176764690:web:5fcced0357c9421e88e3cb"});am.signUpButton.addEventListener("click",(()=>{am.authorizationWindowSubmitButton.textContent="sign up",am.signUpButton.classList.add("curr"),am.signInButton.classList.remove("curr"),am.inputName.disabled=!1,am.inputName.style.display="block"})),am.signInButton.addEventListener("click",(()=>{am.authorizationWindowSubmitButton.textContent="sign in",am.signUpButton.classList.remove("curr"),am.signInButton.classList.add("curr"),am.inputName.disabled=!0,am.inputName.style.display="none",am.authorizationWindowForm.elements.name.value=""}));const lm=function(e=qe()){const t=Be(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Be(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(J(n.getOptions(),null!=t?t:{}))return e;at(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Hi,persistence:[ci,Gn,Jn]}),i=V("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Wi)return;const i=null==t?void 0:t.token;Gi!==i&&(Gi=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){se(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){se(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=x("auth");return r&&mn(n,`http://${r}`),n}(um);am.authorizationWindowForm.addEventListener("submit",(e=>{e.preventDefault(),"sign up"===am.authorizationWindowSubmitButton.textContent.trim().toLowerCase()?function(){const e=`${am.authorizationWindowForm.elements.name.value}`,t=`${am.authorizationWindowForm.elements.email.value}`,n=`${am.authorizationWindowForm.elements.password.value}`;try{qn(lm,t,n).then((n=>{user=n.user,cm=user.uid,am.btnLogin.classList.add("visually-hidden"),am.btnSigned.classList.remove("visually-hidden"),am.btnSigned.textContent=e,am.authorization.classList.toggle("is-hidden"),am.authorizationWindowForm.reset(),document.body.style.overflow="scroll",m.Notify.success(`User ${e} with email address ${t} successfully created!`),async function(e){try{await tm(fg(hm,"books",`${cm}`),{name:e}).then((()=>{})).catch((e=>{console.log(`I got an error! ${e}`)}))}catch(e){console.log(`I got an error! ${e}`)}}(e),localStorage.setItem("user-name",`${e}`),localStorage.setItem("user-id",`${cm}`),am.headerNav.classList.remove("visually-hidden")})).catch((e=>{const n=e.code,i=e.message;console.log(n),console.log(i),"auth/wrong-password"===n?m.Notify.failure("Wrong password."):"auth/email-already-in-use"===n?m.Notify.failure(`User with this email ${t} already in use.`):m.Notify.failure(`${i}`),console.log(e)}))}catch(n){console.log(n),m.Notify.failure(`User ${e} with email address ${t} failed created!`)}}():function(){const e=`${am.authorizationWindowForm.elements.email.value}`,t=`${am.authorizationWindowForm.elements.password.value}`;if(e.length<4)return void m.Notify.failure("User email address is wrong! Please enter an email address.");if(t.length<4)return void m.Notify.failure("User password is wrong! Please enter a password.");try{Hn(lm,e,t).then((t=>{user=t.user,console.log(user),cm=user.uid,am.btnLogin.classList.add("visually-hidden"),am.btnSigned.classList.remove("visually-hidden"),am.btnSigned.textContent=name,am.authorization.classList.toggle("is-hidden"),document.body.style.overflow="scroll",am.authorizationWindowForm.reset(),m.Notify.success(`User with email address ${e} successfully SIGNED!`),localStorage.setItem("user-id",`${cm}`),am.headerNav.classList.remove("visually-hidden"),async function(e){const t=await Zg(fg(hm,"books",`${e}`));if(t.exists())return t.data().name;console.log("No such document!")}(cm).then((e=>{console.log(e),localStorage.setItem("user-name",`${e}`),am.btnSigned.textContent=`${e}`})).catch((e=>{console.log(e.message)}))})).catch((e=>{const t=e.code,n=e.message;console.log(n),"auth/wrong-password"===t?m.Notify.failure("Wrong password!"):m.Notify.failure(`${n}`),console.log(e)}))}catch(t){console.log(t),m.Notify.failure(`User ${name} with email address ${e} failed SIGNED!`)}}()})),am.btnLogout.addEventListener("click",(function(){try{lm.signOut().then((()=>{am.btnLogin.classList.remove("visually-hidden"),am.btnSigned.classList.add("visually-hidden"),am.btnLogout.classList.add("visually-hidden"),user="",m.Notify.success(`User ${am.btnSigned.textContent} successfully SIGNED OUT!`),document.location.replace("../index.html"),am.headerNav.classList.add("visually-hidden"),localStorage.setItem("user-name",""),localStorage.setItem("user-id","")})).catch((e=>{console.log(e),m.Notify.failure(`User ${am.btnSigned.textContent} with email address ${email} failed SIGNED OUT!`)}))}catch(e){console.log(e),m.Notify.failure(`User ${am.btnSigned.textContent} with email address ${email} failed SIGNED OUT!`)}})),am.btnSigned.addEventListener("click",(()=>{am.btnLogout.classList.toggle("visually-hidden")})),window.addEventListener("beforeunload",(()=>{try{lm.signOut().then((e=>{})).catch((e=>{console.log(e)}))}catch(e){console.log(e)}})),window.addEventListener("load",(()=>{lm.onAuthStateChanged((function(e){}))}));const hm=function(e,t){const n="string"==typeof e?e:t||"(default)",i=Be("object"==typeof e?e:qe(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=U("firestore");e&&ug(i,...e)}return i}(um);async function dm(e,t){await nm(fg(hm,"books",`${t}`),{id_book:rm(e)}).catch((e=>{console.log(e.message)}))}async function fm(e,t){await nm(fg(hm,"books",`${t}`),{id_book:om(e)}).catch((e=>{console.log(e.message)}))}const pm=document.querySelector(".modal"),gm=document.querySelector(".modal-card"),mm=document.getElementById("container-best"),ym=document.querySelector(".modal-window-text"),vm=document.querySelector(".cls-button"),wm=document.querySelector("[data-modal-backdrop]");let bm=[];function Em(e){if("Escape"===e.code)return Im(),Sm()}function Tm(e){if("BUTTON"===e.currentTarget.nodeName)return Im(),Sm()}function Im(){vm.removeEventListener("click",Tm,{once:"true"}),document.removeEventListener("keydown",Em,{once:"true"}),wm.removeEventListener("click",_m)}function _m(e){if(e.target===wm)return Im(),Sm()}function Sm(){pm.classList.toggle("is-hidden"),wm.classList.toggle("is-hidden"),document.body.classList.toggle("stop-scrolling")}function km(){if(!JSON.parse(localStorage.getItem("id")))return bm=[],localStorage.setItem("id",JSON.stringify(bm))}function Cm(e){const t=e.target.dataset.id;!function(e,t){if(km(),changeStatus(e,t),bm.includes(e))t.target.dataset.modalSubmit="del"}(t,e),"add"===e.target.dataset.modalSubmit?(!function(e){if(!JSON.parse(localStorage.getItem("id")))return bm=[],bm.push(e),localStorage.setItem("id",JSON.stringify(bm));bm=JSON.parse(localStorage.getItem("id")),bm.includes(e)?console.log("this book already in a busket"):(bm.push(e),localStorage.setItem("id",JSON.stringify(bm)))}(t),dm(t),e.target.textContent="remove from the shopping list",ym.textContent='Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',ym.classList.remove("is-hidden"),e.target.dataset.modalSubmit="del"):(!function(e){if(km(),bm=JSON.parse(localStorage.getItem("id")),bm.includes(e)){const t=bm.indexOf(e);bm.splice(t,1),localStorage.setItem("id",JSON.stringify(bm))}}(t),fm(t),e.target.textContent="add to shopping list",ym.classList.add("is-hidden"),e.target.dataset.modalSubmit="add")}km(),mm.addEventListener("click",(function(e){if("IMG"===e.target.nodeName){const t=e.target.dataset.idImg;Sm(),async function(e){try{!function(e,t){let{title:n,author:i,book_image:s="./image/shopping/dummy-book-tr.png",description:r,buy_links:o}=e;const a=o;let c="https://www.amazon.com",u="https://books.apple.com",l="https://bookshop.org";c=a[0].url,u=a[1].url,l=a[4].url,0===r.trim().length&&(r="Description is not available for that book");let h="";h=function({id:e,title:t,author:n,book_image:i,description:s,amazonUrl:r,appleUrl:o,bookShopUrl:a}){return`\n  <div class="modal-window">\n    <div class="picture">\n      <img class="card-img" src="${i}" alt="${s}" />\n    </div>\n    <div class="info">\n      <h1 class="titles">${t}</h1>\n      <h2 class="authors">${n}</h2>\n      <p class="descriptions">${s}</p>\n      <ul class="icons">\n        <li class="icon-link">\n          <a\n                    class="shopping-card-shop-link"\n                    href="${r}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Amazon link"\n                    ><img\n                      width="62"\n                      class="shopping-card-link-icon shopping-card-link-amazon"\n                      src="./shop-amazon-62x19px.a7ec3af8.png"\n                      alt="Amazon" loading="lazy"\n                    />\n                  </a>\n                </li>\n                <li class="icon-link">\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${o}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Apple Books link"\n                  >\n                    <img\n                      width="32"\n                      height="32"\n                      class="shopping-card-link-icon"\n                      src="./shop-read-33x32px.a9f158e0.png"\n                      alt="Apple Books" loading="lazy"\n                    />\n                  </a></li>\n                <li class="icon-link">\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${a}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="BookShop link"\n                  >\n                    <img\n                      width="38"\n                      height="36"\n                      class="shopping-card-link-icon shopping-card-link-shopbook"\n                      src="./shop-book-shop-38x36px.eb5fbc1e.png"\n                      alt="BookShop" loading="lazy"\n                    />\n                  </a>\n        </li>\n      </ul>\n    </div>\n    <button\n    class="btn-action button pointer"\n    data-modal-submit="add" data-id=${e}\n    type="button">add to shopping list</button>\n  </div>`}({id:t,title:n,author:i,book_image:s,description:r,amazonUrl:c,appleUrl:u,bookShopUrl:l}),gm.innerHTML="",gm.insertAdjacentHTML("afterbegin",h)}(await(0,s.fetchBookById)(e),e);gm.firstElementChild.lastElementChild.addEventListener("click",Cm),function(e){km(),bm=JSON.parse(localStorage.getItem("id")),bm.includes(e)&&(gm.firstElementChild.lastElementChild.textContent="remove from the shopping list",ym.textContent="This book is already in your cart",ym.classList.remove("is-hidden"))}(e)}catch(e){console.log(e)}}(t),document.addEventListener("keydown",Em,{once:"true"}),vm.addEventListener("click",Tm,{once:"true"}),wm.addEventListener("click",_m)}}));s=i("014TN");const Am=document.querySelector("#container-best");document.querySelector(".see-more-btn");Am.addEventListener("click",(e=>{if("BUTTON"===e.target.nodeName){console.log(e.target.parentNode.firstChild.textContent);const t=e.target.parentNode.firstChild.textContent;c(),async function(e){try{c();const t=await(0,s.fetchBooksByCategory)(e),n=o(t);Am.insertAdjacentHTML("beforeend",n)}catch(e){console.log(e)}}(t)}}));const Nm=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){window.onscroll=()=>{window.scrollY>700?Nm.classList.remove("scroll-up_hide"):window.scrollY<700&&Nm.classList.add("scroll-up_hide")}})),Nm.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.fbac6da4.js.map
