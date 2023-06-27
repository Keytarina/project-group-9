var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequire7951;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,i.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequire7951=i),i("014TN"),i("iO6Mx"),i("70IEE");var s=i("014TN");const r=t=>'<h1 class="best-sellers-header">Best Sellers <span class="best-sellers-accent">Books</span></h1>'.concat([...t].map((t=>{const{list_name:e,books:n}=t;return`<div class="book-list-wrapper"><h2 class="best-sellers-title">${e}</h2>\n     <ul class="best-sellers-list">${n.map((t=>{const{_id:e,author:n,book_image:i,title:s}=t;return`<li class="best-sellers-list-item">\n              <div class="best-sellers-thumb"><img class="best-sellers-image" src=${i} alt=${s} data-id-img=${e}/><div class="book-thumb-overlay"><p class="book-overlay-text">quick view</p></div></div>\n              <div class="book-description-thumb"><h3 class="book-title">${s.length>18?s.slice(0,18)+"...":s}</h3>\n              <p class="book-description">${n}</p></div>\n          </li>`})).join("")}</ul><button class="see-more-btn" type="button">See More</button></div>`})).join("")),o=t=>{let e;const n=[...t].map((t=>{const{_id:n,author:i,book_image:s,title:r,list_name:o}=t;return e=o,`<li class="book-category-list-item">\n            <div class="best-sellers-thumb"><img class="best-sellers-image" src=${s} alt=${r} data-id-img=${n}/><div class="book-thumb-overlay"><p class="book-overlay-text">quick view</p></div></div>\n            <div class="book-description-thumb"><h3 class="book-title">${r.length>18?r.slice(0,18)+"...":r}</h3>\n            <p class="book-description">${i}</p></div>\n        </li>`})).join("");return e=e.split(" ").map(((t,i,s)=>{if(s.indexOf(t)+1===s.length)return`<h1 class="best-sellers-header">${e.split(" ").slice(0,i).join(" ")}<span class="best-sellers-accent"> ${t}</span></h1><ul class="book-category-list">${n}</ul>`})),e.join("")},a=document.querySelector("#container-best"),c=()=>a.innerHTML="";a.innerHTML||(async()=>{try{const t=await(0,s.fetchTopBooks)(),e=r(t);a.insertAdjacentHTML("beforeend",e)}catch(t){console.log(t)}})();s=i("014TN");const l=document.querySelector(".categories-item"),u=document.querySelector(".categories-item");let h=document.getElementsByClassName("categories-list");const d=document.querySelector("#container-best");u.addEventListener("click",(function(t){h===document.getElementsByClassName("categories-list")&&(h=t.target);return h.classList.remove("active"),h=t.target,h.classList.add("active"),h})),(0,s.fetchBooksCategoryList)().then((t=>{const e=t.map((({list_name:t})=>`<li class="categories-list" id=${t}>${t}</li>`)).join("");l.insertAdjacentHTML("beforeend",e)})).catch((t=>console.log(t))),u.addEventListener("click",(async function(t){if("LI"!==t.target.nodeName&&"All categories"===t.target.textContent)return;try{const e=await(0,s.fetchBooksByCategory)(t.target.textContent),n=o(e);c(),d.insertAdjacentHTML("beforeend",n)}catch(t){console.log(t)}})),u.addEventListener("click",(async function(t){if("All categories"===t.target.textContent)try{const t=await(0,s.fetchTopBooks)(),e=r(t);c(),d.insertAdjacentHTML("beforeend",e)}catch(t){console.log(t)}})),i("b11DO");s=i("014TN");const f=document.querySelector(".modal"),p=document.querySelector(".modal-card"),m=document.getElementById("container-best"),g=document.querySelector(".modal-window-text"),y=document.querySelector(".cls-button"),v=document.querySelector("[data-modal-backdrop]");let w=[];function b(t){if("Escape"===t.code)return I(),_()}function E(t){if("BUTTON"===t.currentTarget.nodeName)return I(),_()}function I(){y.removeEventListener("click",E,{once:"true"}),p.removeEventListener("click",S),document.removeEventListener("keydown",b,{once:"true"}),v.removeEventListener("click",T)}function T(t){if(t.target===v)return I(),_()}function _(){f.classList.toggle("is-hidden"),v.classList.toggle("is-hidden"),document.body.classList.toggle("stop-scrolling")}function k(){if(!JSON.parse(localStorage.getItem("id")))return w=[],localStorage.setItem("id",JSON.stringify(w))}function S(t){if(t.target.classList.contains("btn-action")){const e=t.target.dataset.id;!function(t,e){if(k(),w.includes(t))e.target.dataset.modalSubmit="del"}(e,t),"add"===t.target.dataset.modalSubmit?(!function(t){if(!JSON.parse(localStorage.getItem("id")))return w=[],w.push(t),localStorage.setItem("id",JSON.stringify(w));w=JSON.parse(localStorage.getItem("id")),w.includes(t)?console.log("this book already in a busket"):(w.push(t),localStorage.setItem("id",JSON.stringify(w)))}(e),t.target.textContent="remove from the shopping list",g.textContent='Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',g.classList.remove("is-hidden"),t.target.dataset.modalSubmit="del"):(!function(t){if(k(),w=JSON.parse(localStorage.getItem("id")),w.includes(t)){const e=w.indexOf(t);w.splice(e,1),localStorage.setItem("id",JSON.stringify(w))}}(e),t.target.textContent="add to shopping list",g.classList.add("is-hidden"),t.target.dataset.modalSubmit="add")}}k(),m.addEventListener("click",(function(t){if("IMG"===t.target.nodeName){const n=t.target.dataset.idImg;_(),async function(t){try{!function(t,e){let{title:n,author:i,book_image:s="./image/shopping/dummy-book-tr.png",description:r,buy_links:o}=t;const a=o;let c="https://www.amazon.com",l="https://books.apple.com",u="https://bookshop.org";c=a[0].url,l=a[1].url,u=a[4].url,0===r.trim().length&&(r="Description is not available for that book");let h="";h=function({id:t,title:e,author:n,book_image:i,description:s,amazonUrl:r,appleUrl:o,bookShopUrl:a}){return`\n  <div class="modal-window">\n    <div class="picture">\n      <img class="card-img" src="${i}" alt="${s}" />\n    </div>\n    <div class="info">\n      <h1 class="titles">${e}</h1>\n      <h2 class="authors">${n}</h2>\n      <p class="descriptions">${s}</p>\n      <ul class="icons">\n        <li class="icon-link">\n          <a\n                    class="shopping-card-shop-link"\n                    href="${r}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Amazon link"\n                    ><img\n                      width="62"\n                      class="shopping-card-link-icon shopping-card-link-amazon"\n                      src="./shop-amazon-62x19px.a7ec3af8.png"\n                      alt="Amazon" loading="lazy"\n                    />\n                  </a>\n                </li>\n                <li class="icon-link">\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${o}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Apple Books link"\n                  >\n                    <img\n                      width="32"\n                      height="32"\n                      class="shopping-card-link-icon"\n                      src="./shop-read-33x32px.a9f158e0.png"\n                      alt="Apple Books" loading="lazy"\n                    />\n                  </a></li>\n                <li class="icon-link">\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${a}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="BookShop link"\n                  >\n                    <img\n                      width="38"\n                      height="36"\n                      class="shopping-card-link-icon shopping-card-link-shopbook"\n                      src="./shop-book-shop-38x36px.eb5fbc1e.png"\n                      alt="BookShop" loading="lazy"\n                    />\n                  </a>\n        </li>\n      </ul>\n    </div>\n    <button\n    class="btn-action button pointer"\n    data-modal-submit="add" data-id=${t}\n    type="button">add to shopping list</button>\n  </div>`}({id:e,title:n,author:i,book_image:s,description:r,amazonUrl:c,appleUrl:l,bookShopUrl:u}),p.innerHTML="",p.insertAdjacentHTML("afterbegin",h)}(await(0,s.fetchBookById)(t),t)}catch(t){console.log(t)}}(n),e=n,k(),w=JSON.parse(localStorage.getItem("id")),w.includes(e)&&(g.textContent="This book is already in your cart",g.classList.remove("is-hidden")),p.addEventListener("click",S),document.addEventListener("keydown",b,{once:"true"}),y.addEventListener("click",E,{once:"true"}),v.addEventListener("click",T)}var e}));var C,N,A={};C=void 0!==t?t:"undefined"!=typeof window?window:A,N=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",s="Warning",r="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=l(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!c("body"))return!1;e||f.Notify.init({});var m=l(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),e=l(!0,e,g)}var y,v,w=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(v=t.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=l(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(o.wrapID)||t.document.createElement("div");if(b.id=o.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var E=t.document.getElementById(o.overlayID)||t.document.createElement("div");E.id=o.overlayID,E.style.width="100%",E.style.height="100%",E.style.position="fixed",E.style.zIndex=e.zindex-1,E.style.left=0,E.style.top=0,E.style.right=0,E.style.bottom=0,E.style.background=w.backOverlayColor||e.backOverlayColor,E.className=e.cssAnimation?"nx-with-animation":"",E.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(o.overlayID)||t.document.body.appendChild(E)}t.document.getElementById(o.wrapID)||t.document.body.appendChild(b);var I=t.document.createElement("div");I.id=e.ID+"-"+h,I.className=e.className+" "+w.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),I.style.fontSize=e.fontSize,I.style.color=w.textColor,I.style.background=w.background,I.style.borderRadius=e.borderRadius,I.style.pointerEvents="all",e.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(I.style.animationDuration=e.cssAnimationDuration+"ms");var T="";if(e.closeButton&&"function"!=typeof d&&(T='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)I.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?T:"");else{var _="";a===n?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===s?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),I.innerHTML=_+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?T:"")}else I.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?T:"");if("left-bottom"===e.position||"right-bottom"===e.position){var k=t.document.getElementById(o.wrapID);k.insertBefore(I,k.firstChild)}else t.document.getElementById(o.wrapID).appendChild(I);var S=t.document.getElementById(I.id);if(S){var C,N,A=function(){S.classList.add("nx-remove");var e=t.document.getElementById(o.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},x=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(o.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(N)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(I.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var t=setTimeout((function(){x(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof d&&d(),A();var t=setTimeout((function(){x(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var D=function(){C=setTimeout((function(){A()}),e.timeout),N=setTimeout((function(){x()}),e.timeout+e.cssAnimationDuration)};D(),e.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(C),clearTimeout(N)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),D()})))}}if(e.showOnlyTheLastOne&&h>0)for(var R=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),O=0;O<R.length;O++){var L=R[O];null!==L.parentNode&&L.parentNode.removeChild(L)}e=l(!0,e,m)},f={Notify:{init:function(n){e=l(!0,o,n),function(e,n){if(!c("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=l(!0,e,t)},success:function(t,e,i){d(n,t,e,i)},failure:function(t,e,n){d(i,t,e,n)},warning:function(t,e,n){d(s,t,e,n)},info:function(t,e,n){d(r,t,e,n)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return N(C)})):"object"==typeof A?A=N(C):C.Notiflix=N(C);var x,D,R,O=x={};function L(){throw new Error("setTimeout has not been defined")}function P(){throw new Error("clearTimeout has not been defined")}function M(t){if(D===setTimeout)return setTimeout(t,0);if((D===L||!D)&&setTimeout)return D=setTimeout,setTimeout(t,0);try{return D(t,0)}catch(e){try{return D.call(null,t,0)}catch(e){return D.call(this,t,0)}}}!function(){try{D="function"==typeof setTimeout?setTimeout:L}catch(t){D=L}try{R="function"==typeof clearTimeout?clearTimeout:P}catch(t){R=P}}();var U,F=[],V=!1,B=-1;function j(){V&&U&&(V=!1,U.length?F=U.concat(F):B=-1,F.length&&z())}function z(){if(!V){var t=M(j);V=!0;for(var e=F.length;e;){for(U=F,F=[];++B<e;)U&&U[B].run();B=-1,e=F.length}U=null,V=!1,function(t){if(R===clearTimeout)return clearTimeout(t);if((R===P||!R)&&clearTimeout)return R=clearTimeout,clearTimeout(t);try{R(t)}catch(e){try{return R.call(null,t)}catch(e){return R.call(this,t)}}}(t)}}function $(t,e){this.fun=t,this.array=e}function q(){}O.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];F.push(new $(t,e)),1!==F.length||V||M(z)},$.prototype.run=function(){this.fun.apply(null,this.array)},O.title="browser",O.browser=!0,O.env={},O.argv=[],O.version="",O.versions={},O.on=q,O.addListener=q,O.once=q,O.off=q,O.removeListener=q,O.removeAllListeners=q,O.emit=q,O.prependListener=q,O.prependOnceListener=q,O.listeners=function(t){return[]},O.binding=function(t){throw new Error("process.binding is not supported")},O.cwd=function(){return"/"},O.chdir=function(t){throw new Error("process.chdir is not supported")},O.umask=function(){return 0};
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
const W=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},H={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw new K;const c=s<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class K extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G=function(t){return function(t){const e=W(t);return H.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Q=function(t){try{return H.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const J=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Y=()=>{try{return J()||(()=>{if(void 0===x||void 0===x.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Q(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},X=t=>{var e,n;return null===(n=null===(e=Y())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},Z=t=>{const e=X(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},tt=()=>{var t;return null===(t=Y())||void 0===t?void 0:t.config},et=t=>{var e;return null===(e=Y())||void 0===e?void 0:e[`_${t}`]};
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
class nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function it(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[G(JSON.stringify({alg:"none",type:"JWT"})),G(JSON.stringify(r)),""].join(".")}
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
 */function st(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function rt(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function ot(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function at(){try{return"object"==typeof indexedDB}catch(t){return!1}}class ct extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lt.prototype.create)}}class lt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(ut,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new ct(i,o,n)}}const ut=/\{\$([^}]+)}/g;
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
 */function ht(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(ft(n)&&ft(r)){if(!dt(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function ft(t){return null!==t&&"object"==typeof t}
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
function pt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function mt(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function gt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function yt(t,e){const n=new vt(t,e);return n.subscribe.bind(n)}class vt{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=wt),void 0===i.error&&(i.error=wt),void 0===i.complete&&(i.complete=wt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function wt(){}
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
function bt(t){return t&&t._delegate?t._delegate:t}class Et{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
class It{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new nt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Tt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new It(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */const _t=[];var kt,St;(St=kt||(kt={}))[St.DEBUG=0]="DEBUG",St[St.VERBOSE=1]="VERBOSE",St[St.INFO=2]="INFO",St[St.WARN=3]="WARN",St[St.ERROR=4]="ERROR",St[St.SILENT=5]="SILENT";const Ct={debug:kt.DEBUG,verbose:kt.VERBOSE,info:kt.INFO,warn:kt.WARN,error:kt.ERROR,silent:kt.SILENT},Nt=kt.INFO,At={[kt.DEBUG]:"log",[kt.VERBOSE]:"log",[kt.INFO]:"info",[kt.WARN]:"warn",[kt.ERROR]:"error"},xt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=At[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class Dt{constructor(t){this.name=t,this._logLevel=Nt,this._logHandler=xt,this._userLogHandler=null,_t.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in kt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Ct[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,kt.DEBUG,...t),this._logHandler(this,kt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,kt.VERBOSE,...t),this._logHandler(this,kt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,kt.INFO,...t),this._logHandler(this,kt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,kt.WARN,...t),this._logHandler(this,kt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,kt.ERROR,...t),this._logHandler(this,kt.ERROR,...t)}}let Rt,Ot;const Lt=new WeakMap,Pt=new WeakMap,Mt=new WeakMap,Ut=new WeakMap,Ft=new WeakMap;let Vt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Pt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Mt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Bt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ot||(Ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply($t(this),e),zt(Lt.get(this))}:function(...e){return zt(t.apply($t(this),e))}:function(e,...n){const i=t.call($t(this),e,...n);return Mt.set(i,e.sort?e.sort():[e]),zt(i)}}function jt(t){return"function"==typeof t?Bt(t):(t instanceof IDBTransaction&&function(t){if(Pt.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));Pt.set(t,e)}(t),e=t,(Rt||(Rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,Vt):t);var e}function zt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(zt(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&Lt.set(e,t)})).catch((()=>{})),Ft.set(e,t),e}(t);if(Ut.has(t))return Ut.get(t);const e=jt(t);return e!==t&&(Ut.set(t,e),Ft.set(e,t)),e}const $t=t=>Ft.get(t);function qt(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=zt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(zt(o.result),t.oldVersion,t.newVersion,zt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Wt=["get","getKey","getAll","getAllKeys","count"],Ht=["put","add","delete","clear"],Kt=new Map;function Gt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Kt.get(e))return Kt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ht.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Wt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return Kt.set(e,r),r}Vt=(t=>({...t,get:(e,n,i)=>Gt(e,n)||t.get(e,n,i),has:(e,n)=>!!Gt(e,n)||t.has(e,n)}))(Vt);
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
class Qt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Jt=new Dt("@firebase/app"),Yt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Xt=new Map,Zt=new Map;function te(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ee(t){const e=t.name;if(Zt.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Zt.set(e,t);for(const e of Xt.values())te(e,t);return!0}function ne(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const ie=new lt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class se{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Et("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}
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
 */function re(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw ie.create("bad-app-name",{appName:String(s)});if(n||(n=tt()),!n)throw ie.create("no-options");const r=Xt.get(s);if(r){if(dt(n,r.options)&&dt(i,r.config))return r;throw ie.create("duplicate-app",{appName:s})}const o=new Tt(s);for(const t of Zt.values())o.addComponent(t);const a=new se(n,i,o);return Xt.set(s,a),a}function oe(t="[DEFAULT]"){const e=Xt.get(t);if(!e&&"[DEFAULT]"===t&&tt())return re();if(!e)throw ie.create("no-app",{appName:t});return e}function ae(t,e,n){var i;let s=null!==(i=Yt[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Jt.warn(t.join(" "))}ee(new Et(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}let ce=null;function le(){return ce||(ce=qt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw ie.create("idb-open",{originalErrorMessage:t.message})}))),ce}async function ue(t,e){try{const n=(await le()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(e,he(t)),await n.done}catch(t){if(t instanceof ct)Jt.warn(t.message);else{const e=ie.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Jt.warn(e.message)}}}function he(t){return`${t.name}!${t.options.appId}`}
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
 */class de{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new pe(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=fe(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),me(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),me(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=G(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fe(){return(new Date).toISOString().substring(0,10)}class pe{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!at()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await le();return await e.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(he(t))}catch(t){if(t instanceof ct)Jt.warn(t.message);else{const e=ie.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Jt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function me(t){return G(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var ge;ge="",ee(new Et("platform-logger",(t=>new Qt(t)),"PRIVATE")),ee(new Et("heartbeat",(t=>new de(t)),"PRIVATE")),ae("@firebase/app","0.9.13",ge),ae("@firebase/app","0.9.13","esm2017"),ae("fire-js","");
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
ae("firebase","9.23.0","app");function ye(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}Object.create;Object.create;function ve(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const we=ve,be=new lt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ee=new Dt("@firebase/auth");function Ie(t,...e){Ee.logLevel<=kt.ERROR&&Ee.error(`Auth (9.23.0): ${t}`,...e)}
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
 */function Te(t,...e){throw Se(t,...e)}function _e(t,...e){return Se(t,...e)}function ke(t,e,n){const i=Object.assign(Object.assign({},we()),{[e]:n});return new lt("auth","Firebase",i).create(e,{appName:t.name})}function Se(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return be.create(t,...e)}function Ce(t,e,...n){if(!t)throw Se(e,...n)}function Ne(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ie(e),new Error(e)}function Ae(t,e){t||Ne(e)}
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
 */function xe(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function De(){return"http:"===Re()||"https:"===Re()}function Re(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function Oe(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(De()||rt()||"connection"in navigator))||navigator.onLine}
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
class Le{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ae(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Oe()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Pe(t,e){Ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class Me{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ue={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Fe=new Le(3e4,6e4);
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
 */function Ve(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,i,s={}){return je(t,s,(async()=>{let s={},r={};i&&("GET"===e?r=i:s={body:JSON.stringify(i)});const o=pt(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Me.fetch()($e(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function je(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ue),e);try{const e=new qe(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw We(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const e=s.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw We(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw We(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw We(t,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ke(t,a,o);Te(t,a)}}catch(e){if(e instanceof ct)throw e;Te(t,"network-request-failed",{message:String(e)})}}async function ze(t,e,n,i,s={}){const r=await Be(t,e,n,i,s);return"mfaPendingCredential"in r&&Te(t,"multi-factor-auth-required",{_serverResponse:r}),r}function $e(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Pe(t.config,s):`${t.config.apiScheme}://${s}`}class qe{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(_e(this.auth,"network-request-failed"))),Fe.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function We(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=_e(t,e,i);return s.customData._tokenResponse=n,s}
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
function He(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function Ke(t){return 1e3*Number(t)}function Ge(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Ie("JWT malformed, contained fewer than 3 sections"),null;try{const t=Q(n);return t?JSON.parse(t):(Ie("Failed to decode base64 JWT payload"),null)}catch(t){return Ie("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function Qe(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof ct&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Je{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Ye{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=He(this.lastLoginAt),this.creationTime=He(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Xe(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Qe(t,async function(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));Ce(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=ye(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ye(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class Ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Ce(t.idToken,"internal-error"),Ce(void 0!==t.idToken,"internal-error"),Ce(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ge(t);return Ce(e,"internal-error"),Ce(void 0!==e.exp,"internal-error"),Ce(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return Ce(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
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
async function(t,e){const n=await je(t,{},(async()=>{const n=pt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,r=$e(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Me.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new Ze;return n&&(Ce("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(Ce("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(Ce("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ze,this.toJSON())}_performRefresh(){return Ne("not implemented")}}
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
 */function tn(t,e){Ce("string"==typeof t||void 0===t,"internal-error",{appName:e})}class en{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=ye(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Je(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ye(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Qe(this,this.stsTokenManager.getToken(this.auth,t));return Ce(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=bt(t),i=await n.getIdToken(e),s=Ge(i);Ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:He(Ke(s.auth_time)),issuedAtTime:He(Ke(s.iat)),expirationTime:He(Ke(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=bt(t);await Xe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Ce(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new en(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Xe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Qe(this,async function(t,e){return Be(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=e;Ce(v&&I,t,"internal-error");const T=Ze.fromJSON(this.name,I);Ce("string"==typeof v,t,"internal-error"),tn(u,t.name),tn(h,t.name),Ce("boolean"==typeof w,t,"internal-error"),Ce("boolean"==typeof b,t,"internal-error"),tn(d,t.name),tn(f,t.name),tn(p,t.name),tn(m,t.name),tn(g,t.name),tn(y,t.name);const _=new en({uid:v,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((t=>Object.assign({},t)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(t,e,n=!1){const i=new Ze;i.updateFromServerResponse(e);const s=new en({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Xe(s),s}}
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
 */const nn=new Map;function sn(t){Ae(t instanceof Function,"Expected a class definition");let e=nn.get(t);return e?(Ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nn.set(t,e),e)}
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
 */class rn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}rn.type="NONE";const on=rn;
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
 */function an(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=an(this.userKey,i.apiKey,s),this.fullPersistenceKey=an("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?en._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new cn(sn(on),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||sn(on);const r=an(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const i=en._fromJSON(t,e);n!==s&&(o=i),s=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(t){}}))),new cn(s,t,n)):new cn(s,t,n)}}
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
 */function ln(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(un(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mn(e))return"Blackberry";if(gn(e))return"Webos";if(hn(e))return"Safari";if((e.includes("chrome/")||dn(e))&&!e.includes("edge/"))return"Chrome";if(pn(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function un(t=st()){return/firefox\//i.test(t)}function hn(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dn(t=st()){return/crios\//i.test(t)}function fn(t=st()){return/iemobile/i.test(t)}function pn(t=st()){return/android/i.test(t)}function mn(t=st()){return/blackberry/i.test(t)}function gn(t=st()){return/webos/i.test(t)}function yn(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vn(){return ot()&&10===document.documentMode}function wn(t=st()){return yn(t)||pn(t)||gn(t)||mn(t)||/windows phone/i.test(t)||fn(t)}
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
function bn(t,e=[]){let n;switch(t){case"Browser":n=ln(st());break;case"Worker":n=`${ln(st())}-${t}`;break;default:n=t}return`${n}/JsCore/9.23.0/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */async function En(t,e){return Be(t,"GET","/v2/recaptchaConfig",Ve(t,e))}
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
 */function In(t){return void 0!==t&&void 0!==t.enterprise}class Tn{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
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
 */function _n(t){return new Promise(((e,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=_e("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function kn(t){return`__${t}${Math.floor(1e6*Math.random())}`}class Sn{constructor(t){this.type="recaptcha-enterprise",this.auth=xn(t)}async verify(t="verify",e=!1){function n(e,n,i){const s=window.grecaptcha;In(s)?s.enterprise.ready((()=>{s.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{En(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Tn(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((s=>{if(!e&&In(window.grecaptcha))n(s,t,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));_n("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Cn(t,e,n,i=!1){const s=new Sn(t);let r;try{r=await s.verify(n)}catch(t){r=await s.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Nn{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
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
 */class An{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dn(this),this.idTokenSubscription=new Dn(this),this.beforeStateQueue=new Nn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=be,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=sn(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await cn.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Xe(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?bt(t):null;return e&&Ce(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Ce(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(sn(t))}))}async initializeRecaptchaConfig(){const t=await En(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Tn(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new Sn(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new lt("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&sn(t)||this._popupRedirectResolver;Ce(e,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[sn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Ce(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){Ee.logLevel<=kt.WARN&&Ee.warn(`Auth (9.23.0): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}function xn(t){return bt(t)}class Dn{constructor(t){this.auth=t,this.observer=null,this.addObserver=yt((t=>this.observer=t))}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Rn(t,e,n){const i=xn(t);Ce(i._canInitEmulator,i,"emulator-config-failed"),Ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=On(e),{host:o,port:a}=function(t){const e=On(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const t=s[1];return{host:t,port:Ln(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Ln(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function On(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ln(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Pn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ne("not implemented")}_getIdTokenResponse(t){return Ne("not implemented")}_linkToIdToken(t,e){return Ne("not implemented")}_getReauthenticationResolver(t){return Ne("not implemented")}}
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
 */async function Mn(t,e){return Be(t,"POST","/v1/accounts:update",e)}
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
async function Un(t,e){return ze(t,"POST","/v1/accounts:signInWithPassword",Ve(t,e))}
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
class Fn extends Pn{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Fn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Fn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Cn(t,n,"signInWithPassword");return Un(t,e)}return Un(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Cn(t,n,"signInWithPassword");return Un(t,e)}return Promise.reject(e)}));case"emailLink":
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
return async function(t,e){return ze(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}(t,{email:this._email,oobCode:this._password});default:Te(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Mn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return ze(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Te(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Vn(t,e){return ze(t,"POST","/v1/accounts:signInWithIdp",Ve(t,e))}
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
 */class Bn extends Pn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Te("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=ye(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Bn(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return Vn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Vn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Vn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=pt(e)}return t}}
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
 */const jn={USER_NOT_FOUND:"user-not-found"};
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
class zn extends Pn{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new zn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new zn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return ze(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await ze(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,e));if(n.temporaryProof)throw We(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return ze(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),jn)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new zn({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
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
 */class $n{constructor(t){var e,n,i,s,r,o;const a=mt(gt(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Ce(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=mt(gt(t)).link,n=e?mt(gt(e)).deep_link_id:null,i=mt(gt(t)).deep_link_id;return(i?mt(gt(i)).link:null)||i||n||e||t}(t);try{return new $n(e)}catch(t){return null}}}
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
class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(t,e){return Fn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=$n.parseLink(e);return Ce(n,"argument-error"),Fn._fromEmailAndCode(t,n.code,n.tenantId)}}qn.PROVIDER_ID="password",qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Wn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class Hn extends Wn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class Kn extends Hn{constructor(){super("facebook.com")}static credential(t){return Bn._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kn.credentialFromTaggedObject(t)}static credentialFromError(t){return Kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kn.credential(t.oauthAccessToken)}catch(t){return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kn.PROVIDER_ID="facebook.com";
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
class Gn extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Bn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Gn.credentialFromTaggedObject(t)}static credentialFromError(t){return Gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Gn.credential(e,n)}catch(t){return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com",Gn.PROVIDER_ID="google.com";
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
class Qn extends Hn{constructor(){super("github.com")}static credential(t){return Bn._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qn.credentialFromTaggedObject(t)}static credentialFromError(t){return Qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Qn.credential(t.oauthAccessToken)}catch(t){return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com",Qn.PROVIDER_ID="github.com";
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
class Jn extends Hn{constructor(){super("twitter.com")}static credential(t,e){return Bn._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jn.credential(e,n)}catch(t){return null}}}
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
async function Yn(t,e){return ze(t,"POST","/v1/accounts:signUp",Ve(t,e))}
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
 */Jn.TWITTER_SIGN_IN_METHOD="twitter.com",Jn.PROVIDER_ID="twitter.com";class Xn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await en._fromIdTokenResponse(t,n,i),r=Zn(n);return new Xn({user:s,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Zn(n);return new Xn({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Zn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class ti extends ct{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ti.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ti(t,e,n,i)}}function ei(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ti._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function ni(t,e,n=!1){const i=await Qe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",i)}
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
async function ii(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Qe(t,ei(i,s,e,t),n);Ce(r.idToken,i,"internal-error");const o=Ge(r.idToken);Ce(o,i,"internal-error");const{sub:a}=o;return Ce(t.uid===a,i,"user-mismatch"),Xn._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Te(i,"user-mismatch"),t}}
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
 */async function si(t,e,n=!1){const i="signIn",s=await ei(t,i,e),r=await Xn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function ri(t,e){return si(xn(t),e)}async function oi(t,e,n){var i;const s=xn(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await Cn(s,r,"signUpPassword");o=Yn(s,t)}else o=Yn(s,r).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await Cn(s,r,"signUpPassword");return Yn(s,t)}return Promise.reject(t)}));const a=await o.catch((t=>Promise.reject(t))),c=await Xn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function ai(t,e,n){return ri(bt(t),qn.credential(e,n))}
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
class ci{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class li extends ci{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=st();return hn(t)||yn(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=wn(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);vn()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}li.type="LOCAL";const ui=li;
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
 */class hi extends ci{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}hi.type="SESSION";const di=hi;
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
class fi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new fi(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function pi(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */fi.receivers=[];class mi{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=pi("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
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
 */function gi(){return window}
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
function yi(){return void 0!==gi().WorkerGlobalScope&&"function"==typeof gi().importScripts}class vi{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function wi(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function bi(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new vi(t).toPromise()}(),e(await bi()))}))}))}async function Ei(t,e,n){const i=wi(t,!0).put({fbase_key:e,value:n});return new vi(i).toPromise()}function Ii(t,e){const n=wi(t,!0).delete(e);return new vi(n).toPromise()}class Ti{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await bi()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fi._getInstance(yi()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new mi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await bi();return await Ei(t,"__sak","1"),await Ii(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ei(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=wi(t,!1).get(e),i=await new vi(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ii(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=wi(t,!1).getAll();return new vi(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ti.type="LOCAL";const _i=Ti;
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
kn("rcb"),new Le(3e4,6e4);async function ki(t,e,n){var i;const s=await n.verify();try{let r;if(Ce("string"==typeof s,t,"argument-error"),Ce("recaptcha"===n.type,t,"argument-error"),r="string"==typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){Ce("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:start",Ve(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{Ce("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;Ce(n,t,"missing-multi-factor-info");const o=await function(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:start",Ve(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Be(t,"POST","/v1/accounts:sendVerificationCode",Ve(t,e))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
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
class Si{constructor(t){this.providerId=Si.PROVIDER_ID,this.auth=xn(t)}verifyPhoneNumber(t,e){return ki(this.auth,t,bt(e))}static credential(t,e){return zn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Si.credentialFromTaggedObject(e)}static credentialFromError(t){return Si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?zn._fromTokenResponse(e,n):null}}
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
function Ci(t,e){return e?sn(e):(Ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Si.PROVIDER_ID="phone",Si.PHONE_SIGN_IN_METHOD="phone";class Ni extends Pn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Vn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Vn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ai(t){return si(t.auth,new Ni(t),t.bypassAuthState)}function xi(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),ii(n,new Ni(t),t.bypassAuthState)}async function Di(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),ni(n,new Ni(t),t.bypassAuthState)}
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
 */class Ri{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ai;case"linkViaPopup":case"linkViaRedirect":return Di;case"reauthViaPopup":case"reauthViaRedirect":return xi;default:Te(this.auth,"internal-error")}}resolve(t){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Oi=new Le(2e3,1e4);class Li extends Ri{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Ce(t,this.auth,"internal-error"),t}async onExecution(){Ae(1===this.filter.length,"Popup operations only handle one event");const t=pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(_e(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(_e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_e(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Oi.get())};t()}}Li.currentPopupAction=null;
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
const Pi=new Map;class Mi extends Ri{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Pi.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Vi(e),i=Fi(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Pi.set(this.auth._key(),t)}return this.bypassAuthState||Pi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ui(t,e){Pi.set(t._key(),e)}function Fi(t){return sn(t._redirectPersistence)}function Vi(t){return an("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function Bi(t,e,n=!1){const i=xn(t),s=Ci(i,e),r=new Mi(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class ji{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $i(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!$i(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(_e(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(zi(t))}saveEventToCache(t){this.cachedEventUids.add(zi(t)),this.lastProcessedEventTime=Date.now()}}function zi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function $i({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const qi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wi=/^https?/;async function Hi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Be(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Ki(t))return}catch(t){}Te(t,"unauthorized-domain")}function Ki(t){const e=xe(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Wi.test(n))return!1;if(qi.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
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
 */const Gi=new Le(3e4,6e4);function Qi(){const t=gi().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Ji=null;function Yi(t){return Ji=Ji||function(t){return new Promise(((e,n)=>{var i,s,r;function o(){Qi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qi(),n(_e(t,"network-request-failed"))},timeout:Gi.get()})}if(null===(s=null===(i=gi().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=gi().gapi)||void 0===r?void 0:r.load)){const e=kn("iframefcb");return gi()[e]=()=>{gapi.load?o():n(_e(t,"network-request-failed"))},_n(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Ji=null,t}))}(t),Ji}
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
 */const Xi=new Le(5e3,15e3),Zi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ts=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function es(t){const e=t.config;Ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pe(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.23.0"},s=ts.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${pt(i).slice(1)}`}
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
const ns={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class is{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ss(t,e,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ns),{width:i.toString(),height:s.toString(),top:r,left:o}),l=st().toLowerCase();n&&(a=dn(l)?"_blank":n),un(l)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=st()){var e;return yn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(e||"",a),new is(null);const h=window.open(e||"",a,u);Ce(h,t,"popup-blocked");try{h.focus()}catch(t){}return new is(h)}const rs=encodeURIComponent("fac");async function os(t,e,n,i,s,r){Ce(t.config.authDomain,t,"auth-domain-config-required"),Ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.23.0",eventId:s};if(e instanceof Wn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ht(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof Hn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),l=c?`#${rs}=${encodeURIComponent(c)}`:"";return`${function({config:t}){return t.emulator?Pe(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${pt(a).slice(1)}${l}`}const as=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=di,this._completeRedirectFn=Bi,this._overrideRedirectResult=Ui}async _openPopup(t,e,n,i){var s;Ae(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return ss(t,await os(t,e,n,xe(),i),pi())}async _openRedirect(t,e,n,i){await this._originValidation(t);return function(t){gi().location.href=t}(await os(t,e,n,xe(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Ae(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Yi(t),n=gi().gapi;return Ce(n,t,"internal-error"),e.open({where:document.body,url:es(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zi,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=_e(t,"network-request-failed"),r=gi().setTimeout((()=>{i(s)}),Xi.get());function o(){gi().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{i(s)}))}))))}(t),n=new ji(t);return e.register("authEvent",(e=>{Ce(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&e(!!s),Te(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Hi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wn()||hn()||yn()}};
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
class cs{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const ls=et("authIdTokenMaxAge")||300;let us=null;var hs;hs="Browser",ee(new Et("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;Ce(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:hs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bn(hs)},c=new An(n,i,s,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(sn);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ee(new Et("auth-internal",(t=>{const e=xn(t.getProvider("auth").getImmediate());return new cs(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ae("@firebase/auth","0.23.2",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(hs)),ae("@firebase/auth","0.23.2","esm2017");var ds,fs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},ps={},ms=ms||{},gs=fs||self;function ys(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function vs(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ws="closure_uid_"+(1e9*Math.random()>>>0),bs=0;function Es(t,e,n){return t.call.apply(t.bind,arguments)}function Is(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ts(t,e,n){return(Ts=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Es:Is).apply(null,arguments)}function _s(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ks(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Ss(){this.s=this.s,this.o=this.o}Ss.prototype.s=!1,Ss.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ws)&&t[ws]||(t[ws]=++bs))},Ss.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cs=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ns(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function As(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(ys(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let s=0;s<i;s++)t[e+s]=n[s]}else t.push(n)}}function xs(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xs.prototype.h=function(){this.defaultPrevented=!0};var Ds=function(){if(!gs.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{gs.addEventListener("test",(()=>{}),e),gs.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function Rs(t){return/^[\s\xa0]*$/.test(t)}function Os(){var t=gs.navigator;return t&&(t=t.userAgent)?t:""}function Ls(t){return-1!=Os().indexOf(t)}function Ps(t){return Ps[" "](t),t}Ps[" "]=function(){};var Ms,Us,Fs,Vs=Ls("Opera"),Bs=Ls("Trident")||Ls("MSIE"),js=Ls("Edge"),zs=js||Bs,$s=Ls("Gecko")&&!(-1!=Os().toLowerCase().indexOf("webkit")&&!Ls("Edge"))&&!(Ls("Trident")||Ls("MSIE"))&&!Ls("Edge"),qs=-1!=Os().toLowerCase().indexOf("webkit")&&!Ls("Edge");function Ws(){var t=gs.document;return t?t.documentMode:void 0}t:{var Hs="",Ks=(Us=Os(),$s?/rv:([^\);]+)(\)|;)/.exec(Us):js?/Edge\/([\d\.]+)/.exec(Us):Bs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Us):qs?/WebKit\/(\S+)/.exec(Us):Vs?/(?:Version)[ \/]?(\S+)/.exec(Us):void 0);if(Ks&&(Hs=Ks?Ks[1]:""),Bs){var Gs=Ws();if(null!=Gs&&Gs>parseFloat(Hs)){Ms=String(Gs);break t}}Ms=Hs}if(gs.document&&Bs){var Qs=Ws();Fs=Qs||(parseInt(Ms,10)||void 0)}else Fs=void 0;var Js=Fs;function Ys(t,e){if(xs.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($s){t:{try{Ps(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Xs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ys.$.h.call(this)}}ks(Ys,xs);var Xs={2:"touch",3:"pen",4:"mouse"};Ys.prototype.h=function(){Ys.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zs="closure_listenable_"+(1e6*Math.random()|0),tr=0;function er(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++tr,this.fa=this.ia=!1}function nr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ir(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function sr(t){const e={};for(const n in t)e[n]=t[n];return e}const rr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function or(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<rr.length;e++)n=rr[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ar(t){this.src=t,this.g={},this.h=0}function cr(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Cs(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(nr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}ar.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=lr(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new er(e,this.src,r,!!i,s)).ia=n,t.push(e)),e};var ur="closure_lm_"+(1e6*Math.random()|0),hr={};function dr(t,e,n,i,s){if(i&&i.once)return pr(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)dr(t,e[r],n,i,s);return null}return n=Er(n),t&&t[Zs]?t.O(e,n,vs(i)?!!i.capture:!!i,s):fr(t,e,n,!1,i,s)}function fr(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=vs(s)?!!s.capture:!!s,a=wr(t);if(a||(t[ur]=a=new ar(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=vr;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Ds||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(yr(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function pr(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)pr(t,e[r],n,i,s);return null}return n=Er(n),t&&t[Zs]?t.P(e,n,vs(i)?!!i.capture:!!i,s):fr(t,e,n,!0,i,s)}function mr(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)mr(t,e[r],n,i,s);else i=vs(i)?!!i.capture:!!i,n=Er(n),t&&t[Zs]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=lr(r=t.g[e],n,i,s))&&(nr(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=wr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lr(e,n,i,s)),(n=-1<t?e[t]:null)&&gr(n))}function gr(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Zs])cr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(yr(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=wr(e))?(cr(n,t),0==n.h&&(n.src=null,e[ur]=null)):nr(t)}}}function yr(t){return t in hr?hr[t]:hr[t]="on"+t}function vr(t,e){if(t.fa)t=!0;else{e=new Ys(e,this);var n=t.listener,i=t.la||t.src;t.ia&&gr(t),t=n.call(i,e)}return t}function wr(t){return(t=t[ur])instanceof ar?t:null}var br="__closure_events_fn_"+(1e9*Math.random()>>>0);function Er(t){return"function"==typeof t?t:(t[br]||(t[br]=function(e){return t.handleEvent(e)}),t[br])}function Ir(){Ss.call(this),this.i=new ar(this),this.S=this,this.J=null}function Tr(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new xs(e,t);else if(e instanceof xs)e.target=e.target||t;else{var s=e;or(e=new xs(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=_r(o,i,!0,e)&&s}if(s=_r(o=e.g=t,i,!0,e)&&s,s=_r(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=_r(o=e.g=n[r],i,!1,e)&&s}function _r(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&cr(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}ks(Ir,Ss),Ir.prototype[Zs]=!0,Ir.prototype.removeEventListener=function(t,e,n,i){mr(this,t,e,n,i)},Ir.prototype.N=function(){if(Ir.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)nr(n[i]);delete e.g[t],e.h--}}this.J=null},Ir.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Ir.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var kr=gs.JSON.stringify;function Sr(){var t=Or;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Cr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Nr),(t=>t.reset()));class Nr{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ar(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xr(t){gs.setTimeout((()=>{throw t}),0)}let Dr,Rr=!1,Or=new class{constructor(){this.h=this.g=null}add(t,e){const n=Cr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Lr=()=>{const t=gs.Promise.resolve(void 0);Dr=()=>{t.then(Pr)}};var Pr=()=>{for(var t;t=Sr();){try{t.h.call(t.g)}catch(t){xr(t)}var e=Cr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rr=!1};function Mr(t,e){Ir.call(this),this.h=t||1,this.g=e||gs,this.j=Ts(this.qb,this),this.l=Date.now()}function Ur(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Fr(t,e,n){if("function"==typeof t)n&&(t=Ts(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ts(t.handleEvent,t)}return 2147483647<Number(e)?-1:gs.setTimeout(t,e||0)}function Vr(t){t.g=Fr((()=>{t.g=null,t.i&&(t.i=!1,Vr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ks(Mr,Ir),(ds=Mr.prototype).ga=!1,ds.T=null,ds.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Tr(this,"tick"),this.ga&&(Ur(this),this.start()))}},ds.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ds.N=function(){Mr.$.N.call(this),Ur(this),delete this.g};class Br extends Ss{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vr(this)}N(){super.N(),this.g&&(gs.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(t){Ss.call(this),this.h=t,this.g={}}ks(jr,Ss);var zr=[];function $r(t,e,n,i){Array.isArray(n)||(n&&(zr[0]=n.toString()),n=zr);for(var s=0;s<n.length;s++){var r=dr(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function qr(t){ir(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gr(t)}),t),t.g={}}function Wr(){this.g=!0}function Hr(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return kr(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}jr.prototype.N=function(){jr.$.N.call(this),qr(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wr.prototype.Ea=function(){this.g=!1},Wr.prototype.info=function(){};var Kr={},Gr=null;function Qr(){return Gr=Gr||new Ir}function Jr(t){xs.call(this,Kr.Ta,t)}function Yr(t){const e=Qr();Tr(e,new Jr(e))}function Xr(t,e){xs.call(this,Kr.STAT_EVENT,t),this.stat=e}function Zr(t){const e=Qr();Tr(e,new Xr(e,t))}function to(t,e){xs.call(this,Kr.Ua,t),this.size=e}function eo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return gs.setTimeout((function(){t()}),e)}Kr.Ta="serverreachability",ks(Jr,xs),Kr.STAT_EVENT="statevent",ks(Xr,xs),Kr.Ua="timingevent",ks(to,xs);var no={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},io={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function so(){}function ro(t){return t.h||(t.h=t.i())}function oo(){}so.prototype.h=null;var ao,co={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function lo(){xs.call(this,"d")}function uo(){xs.call(this,"c")}function ho(){}function fo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new jr(this),this.P=mo,t=zs?125:void 0,this.V=new Mr(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new po}function po(){this.i=null,this.g="",this.h=!1}ks(lo,xs),ks(uo,xs),ks(ho,so),ho.prototype.g=function(){return new XMLHttpRequest},ho.prototype.i=function(){return{}},ao=new ho;var mo=45e3,go={},yo={};function vo(t,e,n){t.L=1,t.v=Uo(Ro(e)),t.s=n,t.S=!0,wo(t,null)}function wo(t,e){t.G=Date.now(),To(t),t.A=Ro(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Jo(n.i,"t",i),t.C=0,n=t.l.J,t.h=new po,t.g=Ga(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Br(Ts(t.Pa,t,t.g),t.O)),$r(t.U,t.g,"readystatechange",t.nb),e=t.I?sr(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yr(),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function bo(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Eo(t,e,n){let i,s=!0;for(;!t.J&&t.C<n.length;){if(i=Io(t,n),i==yo){4==e&&(t.o=4,Zr(14),s=!1),Hr(t.j,t.m,null,"[Incomplete Response]");break}if(i==go){t.o=4,Zr(15),Hr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Hr(t.j,t.m,i,null),No(t,i)}bo(t)&&i!=yo&&i!=go&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Zr(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ba(e),e.M=!0,Zr(11))):(Hr(t.j,t.m,n,"[Invalid Chunked Response]"),Co(t),So(t))}function Io(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?yo:(n=Number(e.substring(n,i)),isNaN(n)?go:(i+=1)+n>e.length?yo:(e=e.slice(i,i+n),t.C=i+n,e))}function To(t){t.Y=Date.now()+t.P,_o(t,t.P)}function _o(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=eo(Ts(t.lb,t),e)}function ko(t){t.B&&(gs.clearTimeout(t.B),t.B=null)}function So(t){0==t.l.H||t.J||$a(t.l,t)}function Co(t){ko(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ur(t.V),qr(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function No(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||na(n.i,t)))if(!t.K&&na(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;za(n),Ra(n)}Va(n),Zr(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=eo(Ts(n.ib,n),6e3));if(1>=ea(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Wa(n,11)}else if((t.K||n.g==t)&&za(n),!Rs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const e=l[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const s=l[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(ia(r,r.h),r.h=null))}if(i.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Mo(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Ka(i,i.J?i.pa:null,i.Y),o.K){sa(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(ko(a),To(a)),i.g=o}else Fa(i);0<n.j.length&&La(n)}else"stop"!=l[0]&&"close"!=l[0]||Wa(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Wa(n,7):Da(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}Yr()}catch(t){}}function Ao(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ys(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ys(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ys(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}(ds=fo.prototype).setTimeout=function(t){this.P=t},ds.nb=function(t){t=t.target;const e=this.M;e&&3==ka(t)?e.l():this.Pa(t)},ds.Pa=function(t){try{if(t==this.g)t:{const u=ka(this.g);var e=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||zs||this.g&&(this.h.h||this.g.ja()||Sa(this.g)))){this.J||4!=u||7==e||Yr(),ko(this);var n=this.g.da();this.ca=n;e:if(bo(this)){var i=Sa(this.g);t="";var s=i.length,r=4==ka(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Co(this),So(this);var o="";break e}this.h.i=new gs.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rs(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Zr(12),Co(this),So(this);break t}Hr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,n)}this.S?(Eo(this,u,o),zs&&this.i&&3==u&&($r(this.U,this.V,"tick",this.mb),this.V.start())):(Hr(this.j,this.m,o,null),No(this,o)),4==u&&Co(this),this.i&&!this.J&&(4==u?$a(this.l,this):(this.i=!1,To(this)))}else(function(t){const e={};t=(t.g&&2<=ka(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(Rs(t[i]))continue;var n=Ar(t[i]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Zr(12)):(this.o=0,Zr(13)),Co(this),So(this)}}}catch(t){}},ds.mb=function(){if(this.g){var t=ka(this.g),e=this.g.ja();this.C<e.length&&(ko(this),Eo(this,t,e),this.i&&4!=t&&To(this))}},ds.cancel=function(){this.J=!0,Co(this)},ds.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Yr(),Zr(17)),Co(this),this.o=2,So(this)):_o(this,this.Y-t)};var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Do(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Do){this.h=t.h,Oo(this,t.j),this.s=t.s,this.g=t.g,Lo(this,t.m),this.l=t.l;var e=t.i,n=new Ho;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Po(this,n),this.o=t.o}else t&&(e=String(t).match(xo))?(this.h=!1,Oo(this,e[1]||"",!0),this.s=Fo(e[2]||""),this.g=Fo(e[3]||"",!0),Lo(this,e[4]),this.l=Fo(e[5]||"",!0),Po(this,e[6]||"",!0),this.o=Fo(e[7]||"")):(this.h=!1,this.i=new Ho(null,this.h))}function Ro(t){return new Do(t)}function Oo(t,e,n){t.j=n?Fo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Lo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Po(t,e,n){e instanceof Ho?(t.i=e,function(t,e){e&&!t.j&&(Ko(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Go(this,e),Jo(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Vo(e,qo)),t.i=new Ho(e,t.h))}function Mo(t,e,n){t.i.set(e,n)}function Uo(t){return Mo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Bo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Bo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Do.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vo(e,jo,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Vo(e,jo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Vo(n,"/"==n.charAt(0)?$o:zo,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vo(n,Wo)),t.join("")};var jo=/[#\/\?@]/g,zo=/[#\?:]/g,$o=/[#\?]/g,qo=/[#\?@]/g,Wo=/#/g;function Ho(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ko(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Go(t,e){Ko(t),e=Yo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qo(t,e){return Ko(t),e=Yo(t,e),t.g.has(e)}function Jo(t,e,n){Go(t,e),0<n.length&&(t.i=null,t.g.set(Yo(t,e),Ns(n)),t.h+=n.length)}function Yo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ds=Ho.prototype).add=function(t,e){Ko(this),this.i=null,t=Yo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},ds.forEach=function(t,e){Ko(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},ds.ta=function(){Ko(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let t=0;t<s.length;t++)n.push(e[i])}return n},ds.Z=function(t){Ko(this);let e=[];if("string"==typeof t)Qo(this,t)&&(e=e.concat(this.g.get(Yo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},ds.set=function(t,e){return Ko(this),this.i=null,Qo(this,t=Yo(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ds.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},ds.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Xo(t){this.l=t||Zo,gs.PerformanceNavigationTiming?t=0<(t=gs.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(gs.g&&gs.g.Ka&&gs.g.Ka()&&gs.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zo=10;function ta(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ea(t){return t.h?1:t.g?t.g.size:0}function na(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ia(t,e){t.g?t.g.add(e):t.h=e}function sa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ra(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ns(t.i)}Xo.prototype.cancel=function(){if(this.i=ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function oa(){this.g=new class{stringify(t){return gs.JSON.stringify(t,void 0)}parse(t){return gs.JSON.parse(t,void 0)}}}function aa(t,e,n){const i=n||"";try{Ao(t,(function(t,n){let s=t;vs(t)&&(s=kr(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ca(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function la(t){this.l=t.fc||null,this.j=t.ob||!1}function ua(t,e){Ir.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ha,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ks(la,so),la.prototype.g=function(){return new ua(this.l,this.j)},la.prototype.i=function(t){return function(){return t}}({}),ks(ua,Ir);var ha=0;function da(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function fa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pa(t)}function pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ds=ua.prototype).open=function(t,e){if(this.readyState!=ha)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pa(this)},ds.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||gs).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},ds.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,fa(this)),this.readyState=ha},ds.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pa(this)),this.g&&(this.readyState=3,pa(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==gs.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;da(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},ds.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fa(this):pa(this),3==this.readyState&&da(this)}},ds.Za=function(t){this.g&&(this.response=this.responseText=t,fa(this))},ds.Ya=function(t){this.g&&(this.response=t,fa(this))},ds.ka=function(){this.g&&fa(this)},ds.setRequestHeader=function(t,e){this.v.append(t,e)},ds.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ds.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ma=gs.JSON.parse;function ga(t){Ir.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ya,this.L=this.M=!1}ks(ga,Ir);var ya="",va=/^https?$/i,wa=["POST","PUT"];function ba(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ea(t),Ta(t)}function Ea(t){t.F||(t.F=!0,Tr(t,"complete"),Tr(t,"error"))}function Ia(t){if(t.h&&void 0!==ms&&(!t.C[1]||4!=ka(t)||2!=t.da()))if(t.v&&4==ka(t))Fr(t.La,0,t);else if(Tr(t,"readystatechange"),4==ka(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var s=String(t.I).match(xo)[1]||null;!s&&gs.self&&gs.self.location&&(s=gs.self.location.protocol.slice(0,-1)),i=!va.test(s?s.toLowerCase():"")}n=i}if(n)Tr(t,"complete"),Tr(t,"success");else{t.m=6;try{var r=2<ka(t)?t.g.statusText:""}catch(t){r=""}t.j=r+" ["+t.da()+"]",Ea(t)}}finally{Ta(t)}}}function Ta(t,e){if(t.g){_a(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Tr(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function _a(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(gs.clearTimeout(t.A),t.A=null)}function ka(t){return t.g?t.g.readyState:0}function Sa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ya:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ca(t){let e="";return ir(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Na(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ca(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Mo(t,e,n))}function Aa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xa(t){this.Ga=0,this.j=[],this.l=new Wr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Aa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Aa("baseRetryDelayMs",5e3,t),this.hb=Aa("retryDelaySeedMs",1e4,t),this.eb=Aa("forwardChannelMaxRetries",2,t),this.xa=Aa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Xo(t&&t.concurrentRequestLimit),this.Ja=new oa,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Da(t){if(Oa(t),3==t.H){var e=t.W++,n=Ro(t.I);if(Mo(n,"SID",t.K),Mo(n,"RID",e),Mo(n,"TYPE","terminate"),Ma(t,n),(e=new fo(t,t.l,e)).L=2,e.v=Uo(Ro(n)),n=!1,gs.navigator&&gs.navigator.sendBeacon)try{n=gs.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&gs.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ga(e.l,null),e.g.ha(e.v)),e.G=Date.now(),To(e)}Ha(t)}function Ra(t){t.g&&(Ba(t),t.g.cancel(),t.g=null)}function Oa(t){Ra(t),t.u&&(gs.clearTimeout(t.u),t.u=null),za(t),t.i.cancel(),t.m&&("number"==typeof t.m&&gs.clearTimeout(t.m),t.m=null)}function La(t){if(!ta(t.i)&&!t.m){t.m=!0;var e=t.Na;Dr||Lr(),Rr||(Dr(),Rr=!0),Or.add(e,t),t.C=0}}function Pa(t,e){var n;n=e?e.m:t.W++;const i=Ro(t.I);Mo(i,"SID",t.K),Mo(i,"RID",n),Mo(i,"AID",t.V),Ma(t,i),t.o&&t.s&&Na(i,t.o,t.s),n=new fo(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ua(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ia(t.i,n),vo(n,i,e)}function Ma(t,e){t.na&&ir(t.na,(function(t,n){Mo(e,n,t)})),t.h&&Ao({},(function(t,n){Mo(e,n,t)}))}function Ua(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Ts(t.h.Va,t.h,t):null;t:{var s=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].g;const a=s[o].map;if(n-=e,0>n)e=Math.max(0,s[o].g-100),r=!1;else try{aa(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Fa(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Dr||Lr(),Rr||(Dr(),Rr=!0),Or.add(e,t),t.A=0}}function Va(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=eo(Ts(t.Ma,t),qa(t,t.A)),t.A++,!0)}function Ba(t){null!=t.B&&(gs.clearTimeout(t.B),t.B=null)}function ja(t){t.g=new fo(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ro(t.wa);Mo(e,"RID","rpc"),Mo(e,"SID",t.K),Mo(e,"AID",t.V),Mo(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Mo(e,"TO",t.qa),Mo(e,"TYPE","xmlhttp"),Ma(t,e),t.o&&t.s&&Na(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Uo(Ro(e)),n.s=null,n.S=!0,wo(n,t)}function za(t){null!=t.v&&(gs.clearTimeout(t.v),t.v=null)}function $a(t,e){var n=null;if(t.g==e){za(t),Ba(t),t.g=null;var i=2}else{if(!na(t.i,e))return;n=e.F,sa(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;Tr(i=Qr(),new to(i,n)),La(t)}else Fa(t);else if(3==(s=e.o)||0==s&&0<e.ca||!(1==i&&function(t,e){return!(ea(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=eo(Ts(t.Na,t,e),qa(t,t.C)),t.C++,0)))}(t,e)||2==i&&Va(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Wa(t,5);break;case 4:Wa(t,10);break;case 3:Wa(t,6);break;default:Wa(t,2)}}function qa(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wa(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=Ts(t.pb,t);n||(n=new Do("//www.google.com/images/cleardot.gif"),gs.location&&"http"==gs.location.protocol||Oo(n,"https"),Uo(n)),function(t,e){const n=new Wr;if(gs.Image){const i=new Image;i.onload=_s(ca,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_s(ca,n,i,"TestLoadImage: error",!1,e),i.onabort=_s(ca,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_s(ca,n,i,"TestLoadImage: timeout",!1,e),gs.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Zr(2);t.H=0,t.h&&t.h.za(e),Ha(t),Oa(t)}function Ha(t){if(t.H=0,t.ma=[],t.h){const e=ra(t.i);0==e.length&&0==t.j.length||(As(t.ma,e),As(t.ma,t.j),t.i.i.length=0,Ns(t.j),t.j.length=0),t.h.ya()}}function Ka(t,e,n){var i=n instanceof Do?Ro(n):new Do(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Lo(i,i.m);else{var s=gs.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Do(null);i&&Oo(r,i),e&&(r.g=e),s&&Lo(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Mo(i,n,e),Mo(i,"VER",t.ra),Ma(t,i),i}function Ga(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new ga(new la({ob:!0})):new ga(t.va)).Oa(t.J),e}function Qa(){}function Ja(){if(Bs&&!(10<=Number(Js)))throw Error("Environmental error: no available transport.")}function Ya(t,e){Ir.call(this),this.g=new xa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Rs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rs(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new tc(this)}function Xa(t){lo.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Za(){uo.call(this),this.status=1}function tc(t){this.g=t}function ec(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nc(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=(n=(s=(r=(e=n+(o<<7&4294967295|o>>>25))+((o=r+(s^e&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(r^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^e&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(r^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^e&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(r^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^e&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(r^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(r^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(r^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(r^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(r^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(e=n+((o=e+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(e^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}function ic(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=0|t[s];i&&r==e||(n[s]=r,i=!1)}this.g=n}(ds=ga.prototype).Oa=function(t){this.M=t},ds.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ao.g(),this.C=this.u?ro(this.u):ro(ao),this.g.onreadystatechange=Ts(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void ba(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=gs.FormData&&t instanceof gs.FormData,!(0<=Cs(wa,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_a(this),0<this.B&&((this.L=function(t){return Bs&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ts(this.ua,this)):this.A=Fr(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ba(this,t)}},ds.ua=function(){void 0!==ms&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tr(this,"timeout"),this.abort(8))},ds.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tr(this,"complete"),Tr(this,"abort"),Ta(this))},ds.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ta(this,!0)),ga.$.N.call(this)},ds.La=function(){this.s||(this.G||this.v||this.l?Ia(this):this.kb())},ds.kb=function(){Ia(this)},ds.isActive=function(){return!!this.g},ds.da=function(){try{return 2<ka(this)?this.g.status:-1}catch(t){return-1}},ds.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ds.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ma(e)}},ds.Ia=function(){return this.m},ds.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ds=xa.prototype).ra=8,ds.H=1,ds.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new fo(this,this.l,t);let r=this.s;if(this.U&&(r?(r=sr(r),or(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ua(this,s,e),Mo(n=Ro(this.I),"RID",t),Mo(n,"CVER",22),this.F&&Mo(n,"X-HTTP-Session-Id",this.F),Ma(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Ca(r)))+"&"+e:this.o&&Na(n,this.o,r)),ia(this.i,s),this.bb&&Mo(n,"TYPE","init"),this.P?(Mo(n,"$req",e),Mo(n,"SID","null"),s.aa=!0,vo(s,n,null)):vo(s,n,e),this.H=2}}else 3==this.H&&(t?Pa(this,t):0==this.j.length||ta(this.i)||Pa(this))},ds.Ma=function(){if(this.u=null,ja(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=eo(Ts(this.jb,this),t)}},ds.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Zr(10),Ra(this),ja(this))},ds.ib=function(){null!=this.v&&(this.v=null,Ra(this),Va(this),Zr(19))},ds.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Zr(2)):(this.l.info("Failed to ping google.com"),Zr(1))},ds.isActive=function(){return!!this.h&&this.h.isActive(this)},(ds=Qa.prototype).Ba=function(){},ds.Aa=function(){},ds.za=function(){},ds.ya=function(){},ds.isActive=function(){return!0},ds.Va=function(){},Ja.prototype.g=function(t,e){return new Ya(t,e)},ks(Ya,Ir),Ya.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Zr(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ka(t,null,t.Y),La(t)},Ya.prototype.close=function(){Da(this.g)},Ya.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=kr(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&La(e)},Ya.prototype.N=function(){this.g.h=null,delete this.j,Da(this.g),delete this.g,Ya.$.N.call(this)},ks(Xa,lo),ks(Za,uo),ks(tc,Qa),tc.prototype.Ba=function(){Tr(this.g,"a")},tc.prototype.Aa=function(t){Tr(this.g,new Xa(t))},tc.prototype.za=function(t){Tr(this.g,new Za)},tc.prototype.ya=function(){Tr(this.g,"b")},ks(ec,(function(){this.blockSize=-1})),ec.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ec.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(0==s)for(;r<=n;)nc(this,t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){nc(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){nc(this,i),s=0;break}}this.h=s,this.i+=e},ec.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var sc={};function rc(t){return-128<=t&&128>t?function(t,e){var n=sc;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new ic([0|t],0>t?-1:0)})):new ic([0|t],0>t?-1:0)}function oc(t){if(isNaN(t)||!isFinite(t))return cc;if(0>t)return fc(oc(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ac;return new ic(e,0)}var ac=4294967296,cc=rc(0),lc=rc(1),uc=rc(16777216);function hc(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function dc(t){return-1==t.h}function fc(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ic(n,~t.h).add(lc)}function pc(t,e){return t.add(fc(e))}function mc(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function gc(t,e){this.g=t,this.h=e}function yc(t,e){if(hc(e))throw Error("division by zero");if(hc(t))return new gc(cc,cc);if(dc(t))return e=yc(fc(t),e),new gc(fc(e.g),fc(e.h));if(dc(e))return e=yc(t,fc(e)),new gc(fc(e.g),e.h);if(30<t.g.length){if(dc(t)||dc(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lc,i=e;0>=i.X(t);)n=vc(n),i=vc(i);var s=wc(n,1),r=wc(i,1);for(i=wc(i,2),n=wc(n,2);!hc(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=wc(i,1),n=wc(n,1)}return e=pc(t,s.R(e)),new gc(s,e)}for(s=cc;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=oc(n)).R(e);dc(o)||0<o.X(t);)o=(r=oc(n-=i)).R(e);hc(r)&&(r=lc),s=s.add(r),t=pc(t,o)}return new gc(s,t)}function vc(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ic(n,t.h)}function wc(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ic(s,t.h)}(ds=ic.prototype).ea=function(){if(dc(this))return-fc(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ac+i)*e,e*=ac}return t},ds.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(hc(this))return"0";if(dc(this))return"-"+fc(this).toString(t);for(var e=oc(Math.pow(t,6)),n=this,i="";;){var s=yc(n,e).g,r=((0<(n=pc(n,s.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(hc(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},ds.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},ds.X=function(t){return dc(t=pc(this,t))?-1:hc(t)?0:1},ds.abs=function(){return dc(this)?fc(this):this},ds.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(65535&this.D(s))+(65535&t.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ic(n,-2147483648&n[n.length-1]?-1:0)},ds.R=function(t){if(hc(this)||hc(t))return cc;if(dc(this))return dc(t)?fc(this).R(fc(t)):fc(fc(this).R(t));if(dc(t))return fc(this.R(fc(t)));if(0>this.X(uc)&&0>t.X(uc))return oc(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=t.D(s)>>>16,c=65535&t.D(s);n[2*i+2*s]+=o*c,mc(n,2*i+2*s),n[2*i+2*s+1]+=r*c,mc(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,mc(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,mc(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ic(n,0)},ds.gb=function(t){return yc(this,t).h},ds.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ic(n,this.h&t.h)},ds.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ic(n,this.h|t.h)},ds.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ic(n,this.h^t.h)},Ja.prototype.createWebChannel=Ja.prototype.g,Ya.prototype.send=Ya.prototype.u,Ya.prototype.open=Ya.prototype.m,Ya.prototype.close=Ya.prototype.close,no.NO_ERROR=0,no.TIMEOUT=8,no.HTTP_ERROR=6,io.COMPLETE="complete",oo.EventType=co,co.OPEN="a",co.CLOSE="b",co.ERROR="c",co.MESSAGE="d",Ir.prototype.listen=Ir.prototype.O,ga.prototype.listenOnce=ga.prototype.P,ga.prototype.getLastError=ga.prototype.Sa,ga.prototype.getLastErrorCode=ga.prototype.Ia,ga.prototype.getStatus=ga.prototype.da,ga.prototype.getResponseJson=ga.prototype.Wa,ga.prototype.getResponseText=ga.prototype.ja,ga.prototype.send=ga.prototype.ha,ga.prototype.setWithCredentials=ga.prototype.Oa,ec.prototype.digest=ec.prototype.l,ec.prototype.reset=ec.prototype.reset,ec.prototype.update=ec.prototype.j,ic.prototype.add=ic.prototype.add,ic.prototype.multiply=ic.prototype.R,ic.prototype.modulo=ic.prototype.gb,ic.prototype.compare=ic.prototype.X,ic.prototype.toNumber=ic.prototype.ea,ic.prototype.toString=ic.prototype.toString,ic.prototype.getBits=ic.prototype.D,ic.fromNumber=oc,ic.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return fc(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=oc(Math.pow(n,8)),s=cc,r=0;r<e.length;r+=8){var o=Math.min(8,e.length-r),a=parseInt(e.substring(r,r+o),n);8>o?(o=oc(Math.pow(n,o)),s=s.R(o).add(oc(a))):s=(s=s.R(i)).add(oc(a))}return s};var bc=ps.createWebChannelTransport=function(){return new Ja},Ec=ps.getStatEventTarget=function(){return Qr()},Ic=ps.ErrorCode=no,Tc=ps.EventType=io,_c=ps.Event=Kr,kc=ps.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Sc=ps.FetchXmlHttpFactory=la,Cc=ps.WebChannel=oo,Nc=ps.XhrIo=ga,Ac=ps.Md5=ec,xc=ps.Integer=ic;
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
class Dc{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dc.UNAUTHENTICATED=new Dc(null),Dc.GOOGLE_CREDENTIALS=new Dc("google-credentials-uid"),Dc.FIRST_PARTY=new Dc("first-party-uid"),Dc.MOCK_USER=new Dc("mock-user");
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
let Rc="9.23.0";
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
 */const Oc=new Dt("@firebase/firestore");function Lc(){return Oc.logLevel}function Pc(t,...e){if(Oc.logLevel<=kt.DEBUG){const n=e.map(Fc);Oc.debug(`Firestore (${Rc}): ${t}`,...n)}}function Mc(t,...e){if(Oc.logLevel<=kt.ERROR){const n=e.map(Fc);Oc.error(`Firestore (${Rc}): ${t}`,...n)}}function Uc(t,...e){if(Oc.logLevel<=kt.WARN){const n=e.map(Fc);Oc.warn(`Firestore (${Rc}): ${t}`,...n)}}function Fc(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function Vc(t="Unexpected state"){const e=`FIRESTORE (${Rc}) INTERNAL ASSERTION FAILED: `+t;throw Mc(e),new Error(e)}function Bc(t,e){t||Vc()}function jc(t,e){return t}
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
 */const zc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $c extends ct{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class qc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Wc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Dc.UNAUTHENTICATED)))}shutdown(){}}class Kc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Gc{constructor(t){this.t=t,this.currentUser=Dc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new qc;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qc,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Pc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Pc("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qc)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Pc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Bc("string"==typeof e.accessToken),new Wc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Bc(null===t||"string"==typeof t),new Dc(t)}}class Qc{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Dc.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Jc{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Qc(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Dc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xc{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Pc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Pc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Pc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?i(t):Pc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Bc("string"==typeof t.token),this.T=t.token,new Yc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Zc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class tl{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Zc(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function el(t,e){return t<e?-1:t>e?1:0}function nl(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
class il{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $c(zc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $c(zc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new $c(zc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $c(zc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return il.fromMillis(Date.now())}static fromDate(t){return il.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new il(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?el(this.nanoseconds,t.nanoseconds):el(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class sl{constructor(t){this.timestamp=t}static fromTimestamp(t){return new sl(t)}static min(){return new sl(new il(0,0))}static max(){return new sl(new il(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class rl{constructor(t,e,n){void 0===e?e=0:e>t.length&&Vc(),void 0===n?n=t.length-e:n>t.length-e&&Vc(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===rl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ol extends rl{construct(t,e,n){return new ol(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new $c(zc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ol(e)}static emptyPath(){return new ol([])}}const al=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class cl extends rl{construct(t,e,n){return new cl(t,e,n)}static isValidIdentifier(t){return al.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),cl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new cl(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new $c(zc.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new $c(zc.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new $c(zc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new $c(zc.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new cl(e)}static emptyPath(){return new cl([])}}
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
 */class ll{constructor(t){this.path=t}static fromPath(t){return new ll(ol.fromString(t))}static fromName(t){return new ll(ol.fromString(t).popFirst(5))}static empty(){return new ll(ol.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ol.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ol.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ll(new ol(t.slice()))}}
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
 */class ul{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}ul.UNKNOWN_ID=-1;function hl(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=sl.fromTimestamp(1e9===i?new il(n+1,0):new il(n,i));return new fl(s,ll.empty(),e)}function dl(t){return new fl(t.readTime,t.key,-1)}class fl{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new fl(sl.min(),ll.empty(),-1)}static max(){return new fl(sl.max(),ll.empty(),-1)}}function pl(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ll.comparator(t.documentKey,e.documentKey),0!==n?n:el(t.largestBatchId,e.largestBatchId))}
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
 */const ml="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function yl(t){if(t.code!==zc.FAILED_PRECONDITION||t.message!==ml)throw t;Pc("LocalStore","Unexpectedly lost primary lease")}
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
 */class vl{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Vc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new vl(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof vl?e:vl.resolve(e)}catch(t){return vl.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):vl.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):vl.reject(e)}static resolve(t){return new vl(((e,n)=>{e(t)}))}static reject(t){return new vl(((e,n)=>{n(t)}))}static waitFor(t){return new vl(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=vl.resolve(!1);for(const n of t)e=e.next((t=>t?vl.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new vl(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new vl(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}}
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
 */function wl(t){return"IndexedDbTransactionError"===t.name}
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
class bl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function El(t){return null==t}function Il(t){return 0===t&&1/t==-1/0}function Tl(t){return"number"==typeof t&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */bl.ct=-1;const _l=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],kl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Sl=kl;
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
function Cl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Al(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class xl{constructor(t,e){this.comparator=t,this.root=e||Rl.EMPTY}insert(t,e){return new xl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Rl.BLACK,null,null))}remove(t){return new xl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Rl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dl(this.root,t,this.comparator,!0)}}class Dl{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Rl{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Rl.RED,this.left=null!=i?i:Rl.EMPTY,this.right=null!=s?s:Rl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Rl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Rl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Rl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Rl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Vc();if(this.right.isRed())throw Vc();const t=this.left.check();if(t!==this.right.check())throw Vc();return t+(this.isRed()?0:1)}}Rl.EMPTY=null,Rl.RED=!0,Rl.BLACK=!1,Rl.EMPTY=new class{constructor(){this.size=0}get key(){throw Vc()}get value(){throw Vc()}get color(){throw Vc()}get left(){throw Vc()}get right(){throw Vc()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Rl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ol{constructor(t){this.comparator=t,this.data=new xl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ll(this.data.getIterator())}getIteratorFrom(t){return new Ll(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ol))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ol(this.comparator);return e.data=t,e}}class Ll{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Pl{constructor(t){this.fields=t,t.sort(cl.comparator)}static empty(){return new Pl([])}unionWith(t){let e=new Ol(cl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Pl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return nl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Ml extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Ul{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ml("Invalid base64 string: "+t):t}}(t);return new Ul(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ul(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return el(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ul.EMPTY_BYTE_STRING=new Ul("");const Fl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vl(t){if(Bc(!!t),"string"==typeof t){let e=0;const n=Fl.exec(t);if(Bc(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Bl(t.seconds),nanos:Bl(t.nanos)}}function Bl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function jl(t){return"string"==typeof t?Ul.fromBase64String(t):Ul.fromUint8Array(t)}
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
 */function zl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function $l(t){const e=t.mapValue.fields.__previous_value__;return zl(e)?$l(e):e}function ql(t){const e=Vl(t.mapValue.fields.__local_write_time__.timestampValue);return new il(e.seconds,e.nanos)}
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
 */class Wl{constructor(t,e,n,i,s,r,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Hl{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Hl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Hl&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zl(t)?4:au(t)?9007199254740991:10:Vc()}function Ql(t,e){if(t===e)return!0;const n=Gl(t);if(n!==Gl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ql(t).isEqual(ql(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Vl(t.timestampValue),i=Vl(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,jl(t.bytesValue).isEqual(jl(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Bl(t.geoPointValue.latitude)===Bl(e.geoPointValue.latitude)&&Bl(t.geoPointValue.longitude)===Bl(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Bl(t.integerValue)===Bl(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Bl(t.doubleValue),i=Bl(e.doubleValue);return n===i?Il(n)===Il(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return nl(t.arrayValue.values||[],e.arrayValue.values||[],Ql);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Cl(n)!==Cl(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Ql(n[t],i[t])))return!1;return!0}(t,e);default:return Vc()}var i}function Jl(t,e){return void 0!==(t.values||[]).find((t=>Ql(t,e)))}function Yl(t,e){if(t===e)return 0;const n=Gl(t),i=Gl(e);if(n!==i)return el(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return el(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Bl(t.integerValue||t.doubleValue),i=Bl(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Xl(t.timestampValue,e.timestampValue);case 4:return Xl(ql(t),ql(e));case 5:return el(t.stringValue,e.stringValue);case 6:return function(t,e){const n=jl(t),i=jl(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=el(n[t],i[t]);if(0!==e)return e}return el(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=el(Bl(t.latitude),Bl(e.latitude));return 0!==n?n:el(Bl(t.longitude),Bl(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Yl(n[t],i[t]);if(e)return e}return el(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Kl.mapValue&&e===Kl.mapValue)return 0;if(t===Kl.mapValue)return 1;if(e===Kl.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=el(i[t],r[t]);if(0!==e)return e;const o=Yl(n[i[t]],s[r[t]]);if(0!==o)return o}return el(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Vc()}}function Xl(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return el(t,e);const n=Vl(t),i=Vl(e),s=el(n.seconds,i.seconds);return 0!==s?s:el(n.nanos,i.nanos)}function Zl(t){return tu(t)}function tu(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Vl(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?jl(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ll.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=tu(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${tu(t.fields[s])}`;return n+"}"}(t.mapValue):Vc()}function eu(t){return!!t&&"integerValue"in t}function nu(t){return!!t&&"arrayValue"in t}function iu(t){return!!t&&"nullValue"in t}function su(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ru(t){return!!t&&"mapValue"in t}function ou(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nl(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ou(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ou(t.arrayValue.values[n]);return e}return Object.assign({},t)}function au(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class cu{constructor(t){this.value=t}static empty(){return new cu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ru(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ou(e)}setAll(t){let e=cl.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=ou(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());ru(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ql(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Nl(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new cu(ou(this.value))}}function lu(t){const e=[];return Nl(t.fields,((t,n)=>{const i=new cl([t]);if(ru(n)){const t=lu(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Pl(e)
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
 */}class uu{constructor(t,e,n,i,s,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(t){return new uu(t,0,sl.min(),sl.min(),sl.min(),cu.empty(),0)}static newFoundDocument(t,e,n,i){return new uu(t,1,e,sl.min(),n,i,0)}static newNoDocument(t,e){return new uu(t,2,e,sl.min(),sl.min(),cu.empty(),0)}static newUnknownDocument(t,e){return new uu(t,3,e,sl.min(),sl.min(),cu.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(sl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=cu.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=cu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=sl.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof uu&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new uu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class hu{constructor(t,e){this.position=t,this.inclusive=e}}function du(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?ll.comparator(ll.fromName(o.referenceValue),n.key):Yl(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function fu(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ql(t.position[n],e.position[n]))return!1;return!0}
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
 */class pu{constructor(t,e="asc"){this.field=t,this.dir=e}}function mu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class gu{}class yu extends gu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ku(t,e,n):"array-contains"===e?new Au(t,n):"in"===e?new xu(t,n):"not-in"===e?new Du(t,n):"array-contains-any"===e?new Ru(t,n):new yu(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Su(t,n):new Cu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Yl(e,this.value)):null!==e&&Gl(this.value)===Gl(e)&&this.matchesComparison(Yl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Vc()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vu extends gu{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new vu(t,e)}matches(t){return wu(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function wu(t){return"and"===t.op}function bu(t){return Eu(t)&&wu(t)}function Eu(t){for(const e of t.filters)if(e instanceof vu)return!1;return!0}function Iu(t){if(t instanceof yu)return t.field.canonicalString()+t.op.toString()+Zl(t.value);if(bu(t))return t.filters.map((t=>Iu(t))).join(",");{const e=t.filters.map((t=>Iu(t))).join(",");return`${t.op}(${e})`}}function Tu(t,e){return t instanceof yu?(n=t,(i=e)instanceof yu&&n.op===i.op&&n.field.isEqual(i.field)&&Ql(n.value,i.value)):t instanceof vu?function(t,e){return e instanceof vu&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Tu(n,e.filters[i])),!0)}(t,e):void Vc();var n,i}function _u(t){return t instanceof yu?`${(e=t).field.canonicalString()} ${e.op} ${Zl(e.value)}`:t instanceof vu?function(t){return t.op.toString()+" {"+t.getFilters().map(_u).join(" ,")+"}"}(t):"Filter";var e}class ku extends yu{constructor(t,e,n){super(t,e,n),this.key=ll.fromName(n.referenceValue)}matches(t){const e=ll.comparator(t.key,this.key);return this.matchesComparison(e)}}class Su extends yu{constructor(t,e){super(t,"in",e),this.keys=Nu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Cu extends yu{constructor(t,e){super(t,"not-in",e),this.keys=Nu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Nu(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ll.fromName(t.referenceValue)))}class Au extends yu{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return nu(e)&&Jl(e.arrayValue,this.value)}}class xu extends yu{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Jl(this.value.arrayValue,e)}}class Du extends yu{constructor(t,e){super(t,"not-in",e)}matches(t){if(Jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Jl(this.value.arrayValue,e)}}class Ru extends yu{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!nu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Jl(this.value.arrayValue,t)))}}
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
 */class Ou{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.dt=null}}function Lu(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Ou(t,e,n,i,s,r,o)}function Pu(t){const e=jc(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Iu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),El(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Zl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Zl(t))).join(",")),e.dt=t}return e.dt}function Mu(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fu(t.startAt,e.startAt)&&fu(t.endAt,e.endAt)}function Uu(t){return ll.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Fu{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Vu(t,e,n,i,s,r,o,a){return new Fu(t,e,n,i,s,r,o,a)}function Bu(t){return new Fu(t)}function ju(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function zu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $u(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function qu(t){return null!==t.collectionGroup}function Wu(t){const e=jc(t);if(null===e.wt){e.wt=[];const t=$u(e),n=zu(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new pu(t)),e.wt.push(new pu(cl.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new pu(cl.keyField(),t))}}}return e.wt}function Hu(t){const e=jc(t);if(!e._t)if("F"===e.limitType)e._t=Lu(e.path,e.collectionGroup,Wu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Wu(e)){const e="desc"===n.dir?"asc":"desc";t.push(new pu(n.field,e))}const n=e.endAt?new hu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new hu(e.startAt.position,e.startAt.inclusive):null;e._t=Lu(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e._t}function Ku(t,e,n){return new Fu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gu(t,e){return Mu(Hu(t),Hu(e))&&t.limitType===e.limitType}function Qu(t){return`${Pu(Hu(t))}|lt:${t.limitType}`}function Ju(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>_u(t))).join(", ")}]`),El(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Zl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Zl(t))).join(",")),`Target(${e})`}(Hu(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ll.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Wu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=du(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,Wu(n),i)||n.endAt&&!function(t,e,n){const i=du(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,Wu(n),i)));var n,i}function Xu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zu(t){return(e,n)=>{let i=!1;for(const s of Wu(t)){const t=th(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function th(t,e,n){const i=t.field.isKeyField()?ll.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Yl(i,s):Vc()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Vc()}}
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
 */class eh{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Nl(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Al(this.inner)}size(){return this.innerSize}}
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
 */const nh=new xl(ll.comparator);function ih(){return nh}const sh=new xl(ll.comparator);function rh(...t){let e=sh;for(const n of t)e=e.insert(n.key,n);return e}function oh(t){let e=sh;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ah(){return lh()}function ch(){return lh()}function lh(){return new eh((t=>t.toString()),((t,e)=>t.isEqual(e)))}const uh=new xl(ll.comparator),hh=new Ol(ll.comparator);function dh(...t){let e=hh;for(const n of t)e=e.add(n);return e}const fh=new Ol(el);function ph(){return fh}
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
 */function mh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function gh(t){return{integerValue:""+t}}function yh(t,e){return Tl(e)?gh(e):mh(t,e)}
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
 */class vh{constructor(){this._=void 0}}function wh(t,e,n){return t instanceof Ih?Th(t,e):t instanceof _h?kh(t,e):n}function bh(t,e){var n,i;return t instanceof Sh?eu(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class Eh extends vh{}class Ih extends vh{constructor(t){super(),this.elements=t}}function Th(t,e){const n=Nh(e);for(const e of t.elements)n.some((t=>Ql(t,e)))||n.push(e);return{arrayValue:{values:n}}}class _h extends vh{constructor(t){super(),this.elements=t}}function kh(t,e){let n=Nh(e);for(const e of t.elements)n=n.filter((t=>!Ql(t,e)));return{arrayValue:{values:n}}}class Sh extends vh{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Ch(t){return Bl(t.integerValue||t.doubleValue)}function Nh(t){return nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Ah{constructor(t,e){this.version=t,this.transformResults=e}}class xh{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xh}static exists(t){return new xh(void 0,t)}static updateTime(t){return new xh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Dh(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Rh{}function Oh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new $h(t.key,xh.none()):new Fh(t.key,t.data,xh.none());{const n=t.data,i=cu.empty();let s=new Ol(cl.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Vh(t.key,i,new Pl(s.toArray()),xh.none())}}function Lh(t,e,n){var i;t instanceof Fh?function(t,e,n){const i=t.value.clone(),s=jh(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Vh?function(t,e,n){if(!Dh(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=jh(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Bh(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function Ph(t,e,n,i){return t instanceof Fh?function(t,e,n,i){if(!Dh(t.precondition,e))return n;const s=t.value.clone(),r=zh(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Vh?function(t,e,n,i){if(!Dh(t.precondition,e))return n;const s=zh(t.fieldTransforms,i,e),r=e.data;return r.setAll(Bh(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(s=e,r=n,Dh(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function Mh(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=bh(i.transform,t||null);null!=s&&(null===n&&(n=cu.empty()),n.set(i.field,s))}return n||null}function Uh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&nl(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof Ih&&i instanceof Ih||n instanceof _h&&i instanceof _h?nl(n.elements,i.elements,Ql):n instanceof Sh&&i instanceof Sh?Ql(n.gt,i.gt):n instanceof Eh&&i instanceof Eh);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Fh extends Rh{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vh extends Rh{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function jh(t,e,n){const i=new Map;Bc(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,wh(o,a,n[s]))}return i}function zh(t,e,n){const i=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);i.set(a.field,(r=c,o=e,(s=t)instanceof Eh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&zl(e)&&(e=$l(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,r):s instanceof Ih?Th(s,r):s instanceof _h?kh(s,r):function(t,e){const n=bh(t,e),i=Ch(n)+Ch(t.gt);return eu(n)&&eu(t.gt)?gh(i):mh(t.serializer,i)}(s,r)))}var s,r,o;return i}class $h extends Rh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qh extends Rh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Wh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Lh(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ph(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ph(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ch();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Oh(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(sl.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),dh())}isEqual(t){return this.batchId===t.batchId&&nl(this.mutations,t.mutations,((t,e)=>Uh(t,e)))&&nl(this.baseMutations,t.baseMutations,((t,e)=>Uh(t,e)))}}class Hh{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Bc(t.mutations.length===n.length);let i=uh;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new Hh(t,e,n,i)}}
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
 */class Kh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Gh{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var Qh,Jh;function Yh(t){switch(t){default:return Vc();case zc.CANCELLED:case zc.UNKNOWN:case zc.DEADLINE_EXCEEDED:case zc.RESOURCE_EXHAUSTED:case zc.INTERNAL:case zc.UNAVAILABLE:case zc.UNAUTHENTICATED:return!1;case zc.INVALID_ARGUMENT:case zc.NOT_FOUND:case zc.ALREADY_EXISTS:case zc.PERMISSION_DENIED:case zc.FAILED_PRECONDITION:case zc.ABORTED:case zc.OUT_OF_RANGE:case zc.UNIMPLEMENTED:case zc.DATA_LOSS:return!0}}function Xh(t){if(void 0===t)return Mc("GRPC error has no .code"),zc.UNKNOWN;switch(t){case Qh.OK:return zc.OK;case Qh.CANCELLED:return zc.CANCELLED;case Qh.UNKNOWN:return zc.UNKNOWN;case Qh.DEADLINE_EXCEEDED:return zc.DEADLINE_EXCEEDED;case Qh.RESOURCE_EXHAUSTED:return zc.RESOURCE_EXHAUSTED;case Qh.INTERNAL:return zc.INTERNAL;case Qh.UNAVAILABLE:return zc.UNAVAILABLE;case Qh.UNAUTHENTICATED:return zc.UNAUTHENTICATED;case Qh.INVALID_ARGUMENT:return zc.INVALID_ARGUMENT;case Qh.NOT_FOUND:return zc.NOT_FOUND;case Qh.ALREADY_EXISTS:return zc.ALREADY_EXISTS;case Qh.PERMISSION_DENIED:return zc.PERMISSION_DENIED;case Qh.FAILED_PRECONDITION:return zc.FAILED_PRECONDITION;case Qh.ABORTED:return zc.ABORTED;case Qh.OUT_OF_RANGE:return zc.OUT_OF_RANGE;case Qh.UNIMPLEMENTED:return zc.UNIMPLEMENTED;case Qh.DATA_LOSS:return zc.DATA_LOSS;default:return Vc()}}(Jh=Qh||(Qh={}))[Jh.OK=0]="OK",Jh[Jh.CANCELLED=1]="CANCELLED",Jh[Jh.UNKNOWN=2]="UNKNOWN",Jh[Jh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Jh[Jh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Jh[Jh.NOT_FOUND=5]="NOT_FOUND",Jh[Jh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Jh[Jh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Jh[Jh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Jh[Jh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Jh[Jh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Jh[Jh.ABORTED=10]="ABORTED",Jh[Jh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Jh[Jh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Jh[Jh.INTERNAL=13]="INTERNAL",Jh[Jh.UNAVAILABLE=14]="UNAVAILABLE",Jh[Jh.DATA_LOSS=15]="DATA_LOSS";
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
class Zh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return td}static getOrCreateInstance(){return null===td&&(td=new Zh),td}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let td=null;
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
 */function ed(){return new TextEncoder}
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
 */const nd=new xc([4294967295,4294967295],0);function id(t){const e=ed().encode(t),n=new Ac;return n.update(e),new Uint8Array(n.digest())}function sd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new xc([n,i],0),new xc([s,r],0)]}class rd{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new od(`Invalid padding: ${e}`);if(n<0)throw new od(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new od(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new od(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=xc.fromNumber(this.It)}Et(t,e,n){let i=t.add(e.multiply(xc.fromNumber(n)));return 1===i.compare(nd)&&(i=new xc([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=id(t),[n,i]=sd(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,i,t);if(!this.At(e))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),r=new rd(s,i,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.It)return;const e=id(t),[n,i]=sd(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,i,t);this.Rt(e)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class od extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class ad{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,cd.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ad(sl.min(),i,new xl(el),ih(),dh())}}class cd{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new cd(n,e,dh(),dh(),dh())}}
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
 */class ld{constructor(t,e,n,i){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=i}}class ud{constructor(t,e){this.targetId=t,this.Vt=e}}class hd{constructor(t,e,n=Ul.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class dd{constructor(){this.St=0,this.Dt=md(),this.Ct=Ul.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=dh(),e=dh(),n=dh();return this.Dt.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Vc()}})),new cd(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=md()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class fd{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=ih(),this.zt=pd(),this.Wt=new xl(el)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:Vc()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,i=t.Vt.count,s=this.se(n);if(s){const r=s.target;if(Uu(r))if(0===i){const t=new ll(r.path);this.Yt(n,t,uu.newNoDocument(t,sl.min()))}else Bc(1===i);else{const s=this.ie(n);if(s!==i){const i=this.re(t,s);if(0!==i){this.ee(n);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Zh.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var i,s,r,o,a,c;const l={localCacheCount:e,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(l.bloomFilter={applied:0===t,hashCount:null!==(i=null==u?void 0:u.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(r=null===(s=null==u?void 0:u.bits)||void 0===s?void 0:s.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),l}(i,s,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:i}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=n;let a,c;try{a=jl(s).toUint8Array()}catch(t){if(t instanceof Ml)return Uc("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new rd(a,r,o)}catch(t){return Uc(t instanceof od?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:i!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{const s=this.Gt.ue(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.vt(r)||(this.Yt(t,n,null),i++)})),i}ce(t){const e=new Map;this.Qt.forEach(((n,i)=>{const s=this.se(i);if(s){if(n.current&&Uu(s.target)){const e=new ll(s.target.path);null!==this.jt.get(e)||this.ae(i,e)||this.Yt(i,e,uu.newNoDocument(e,t))}n.Mt&&(e.set(i,n.Ot()),n.Ft())}}));let n=dh();this.zt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const i=new ad(t,e,this.Wt,this.jt,n);return this.jt=ih(),this.zt=pd(),this.Wt=new xl(el),i}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,e)?i.Bt(e,1):i.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new dd,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Ol(el),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||Pc("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new dd),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function pd(){return new xl(ll.comparator)}function md(){return new xl(ll.comparator)}const gd={asc:"ASCENDING",desc:"DESCENDING"},yd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vd={and:"AND",or:"OR"};class wd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bd(t,e){return t.useProto3Json||El(e)?e:{value:e}}function Ed(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Id(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Td(t,e){return Ed(t,e.toTimestamp())}function _d(t){return Bc(!!t),sl.fromTimestamp(function(t){const e=Vl(t);return new il(e.seconds,e.nanos)}(t))}function kd(t,e){return(n=t,new ol(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Sd(t){const e=ol.fromString(t);return Bc(Wd(e)),e}function Cd(t,e){return kd(t.databaseId,e.path)}function Nd(t,e){const n=Sd(e);if(n.get(1)!==t.databaseId.projectId)throw new $c(zc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $c(zc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ll(Rd(n))}function Ad(t,e){return kd(t.databaseId,e)}function xd(t){const e=Sd(t);return 4===e.length?ol.emptyPath():Rd(e)}function Dd(t){return new ol(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rd(t){return Bc(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Od(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function Ld(t,e){let n;if(e instanceof Fh)n={update:Od(t,e.key,e.value)};else if(e instanceof $h)n={delete:Cd(t,e.key)};else if(e instanceof Vh)n={update:Od(t,e.key,e.data),updateMask:qd(e.fieldMask)};else{if(!(e instanceof qh))return Vc();n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Eh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ih)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _h)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Sh)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw Vc()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(s=e.precondition).updateTime?{updateTime:Td(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Vc())),n;var i,s}function Pd(t,e){return{documents:[Ad(t,e.path)]}}function Md(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Ad(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ad(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0!==t.length)return $d(vu.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>{return{field:jd((e=t).field),direction:Vd(e.dir)};var e}))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=bd(t,e.limit);var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt={before:!(c=e.endAt).inclusive,values:c.position}),n}function Ud(t){let e=xd(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Bc(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Fd(t);return e instanceof vu&&bu(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new pu(zd((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,El(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new hu(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new hu(n,e)}(n.endAt)),Vu(e,s,o,r,a,"F",c,l)}function Fd(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=zd(t.unaryFilter.field);return yu.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=zd(t.unaryFilter.field);return yu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zd(t.unaryFilter.field);return yu.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=zd(t.unaryFilter.field);return yu.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Vc()}}(t):void 0!==t.fieldFilter?(n=t,yu.create(zd(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Vc()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,vu.create(e.compositeFilter.filters.map((t=>Fd(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Vc()}}(e.compositeFilter.op))):Vc();var e,n}function Vd(t){return gd[t]}function Bd(t){return yd[t]}function jd(t){return{fieldPath:t.canonicalString()}}function zd(t){return cl.fromServerFormat(t.fieldPath)}function $d(t){return t instanceof yu?function(t){if("=="===t.op){if(su(t.value))return{unaryFilter:{field:jd(t.field),op:"IS_NAN"}};if(iu(t.value))return{unaryFilter:{field:jd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(su(t.value))return{unaryFilter:{field:jd(t.field),op:"IS_NOT_NAN"}};if(iu(t.value))return{unaryFilter:{field:jd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jd(t.field),op:Bd(t.op),value:t.value}}}(t):t instanceof vu?function(t){const e=t.getFilters().map((t=>$d(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,vd[n]),filters:e}};var n}(t):Vc()}function qd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Wd(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Hd{constructor(t,e,n,i,s=sl.min(),r=sl.min(),o=Ul.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Hd(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Hd(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Hd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Hd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Kd{constructor(t){this.fe=t}}function Gd(t){const e=Ud({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ku(e,e.limit,"L"):e}
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
 */class Qd{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(Bl(t.integerValue));else if("doubleValue"in t){const n=Bl(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),Il(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(jl(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?au(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):Vc()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const t of Object.keys(n))this.Te(t,e),this.me(n[t],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const t of n)this.me(t,e)}ve(t,e){this.ye(e,37),ll.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}Qd.Ve=new Qd;
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
class Jd{constructor(){this.rn=new Yd}addToCollectionParentIndex(t,e){return this.rn.add(e),vl.resolve()}getCollectionParents(t,e){return vl.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return vl.resolve()}deleteFieldIndex(t,e){return vl.resolve()}getDocumentsMatchingTarget(t,e){return vl.resolve(null)}getIndexType(t,e){return vl.resolve(0)}getFieldIndexes(t,e){return vl.resolve([])}getNextCollectionGroupToUpdate(t){return vl.resolve(null)}getMinOffset(t,e){return vl.resolve(fl.min())}getMinOffsetFromCollectionGroup(t,e){return vl.resolve(fl.min())}updateCollectionGroup(t,e,n){return vl.resolve()}updateIndexEntries(t,e){return vl.resolve()}}class Yd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Ol(ol.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Ol(ol.comparator)).toArray()}}
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
 */new Uint8Array(0);class Xd{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Xd(t,Xd.DEFAULT_COLLECTION_PERCENTILE,Xd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Xd.DEFAULT_COLLECTION_PERCENTILE=10,Xd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xd.DEFAULT=new Xd(41943040,Xd.DEFAULT_COLLECTION_PERCENTILE,Xd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xd.DISABLED=new Xd(-1,0,0);
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
class Zd{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Zd(0)}static Mn(){return new Zd(-1)}}
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
class tf{constructor(){this.changes=new eh((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,uu.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?vl.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class ef{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class nf{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ph(n.mutation,t,Pl.empty(),il.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,dh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=dh()){const i=ah();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=rh();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ah();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,dh())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=ih();const r=lh(),o=lh();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Vh)?s=s.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),Ph(o.mutation,e,o.mutation.getFieldMask(),il.now())):r.set(e.key,Pl.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ef(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=lh();let i=new xl(((t,e)=>t-e)),s=dh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Pl.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||dh()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=ch();c.forEach((t=>{if(!s.has(t)){const i=Oh(e.get(t),n.get(t));null!==i&&l.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,l))}return vl.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,ll.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):qu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):vl.resolve(ah());let o=-1,a=s;return r.next((e=>vl.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?vl.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,dh()))).next((t=>({batchId:o,changes:oh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ll(e)).next((t=>{let e=rh();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=rh();return this.indexManager.getCollectionParents(t,i).next((r=>vl.forEach(r,(r=>{const o=(a=e,c=r.child(i),new Fu(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,uu.newInvalidDocument(i)))}));let n=rh();return t.forEach(((t,s)=>{const r=i.get(t);void 0!==r&&Ph(r.mutation,s,Pl.empty(),il.now()),Yu(e,s)&&(n=n.insert(t,s))})),n}))}}
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
 */class sf{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return vl.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:_d(n.createTime)}),vl.resolve()}getNamedQuery(t,e){return vl.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,{name:(n=e).name,query:Gd(n.bundledQuery),readTime:_d(n.readTime)}),vl.resolve();var n}}
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
 */class rf{constructor(){this.overlays=new xl(ll.comparator),this.ls=new Map}getOverlay(t,e){return vl.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ah();return vl.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.we(t,e,i)})),vl.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),vl.resolve()}getOverlaysForCollection(t,e,n){const i=ah(),s=e.length+1,r=new ll(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return vl.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new xl(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ah(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ah(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return vl.resolve(o)}we(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Kh(e,n));let s=this.ls.get(e);void 0===s&&(s=dh(),this.ls.set(e,s)),this.ls.set(e,s.add(n.key))}}
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
 */class of{constructor(){this.fs=new Ol(af.ds),this.ws=new Ol(af._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new af(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new af(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new ll(new ol([])),n=new af(e,t),i=new af(e,t+1),s=[];return this.ws.forEachInRange([n,i],(t=>{this.ys(t),s.push(t.key)})),s}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new ll(new ol([])),n=new af(e,t),i=new af(e,t+1);let s=dh();return this.ws.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new af(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class af{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return ll.comparator(t.key,e.key)||el(t.As,e.As)}static _s(t,e){return el(t.As,e.As)||ll.comparator(t.key,e.key)}}
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
 */class cf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Ol(af.ds)}checkEmpty(t){return vl.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Wh(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.Rs=this.Rs.add(new af(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return vl.resolve(r)}lookupMutationBatch(t,e){return vl.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.bs(n),s=i<0?0:i;return vl.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return vl.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return vl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new af(e,0),i=new af(e,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,i],(t=>{const e=this.Ps(t.As);s.push(e)})),vl.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ol(el);return e.forEach((t=>{const e=new af(t,0),i=new af(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,i],(t=>{n=n.add(t.As)}))})),vl.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;ll.isDocumentKey(s)||(s=s.child(""));const r=new af(new ll(s),0);let o=new Ol(el);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.As)),!0)}),r),vl.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Bc(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return vl.forEach(e.mutations,(i=>{const s=new af(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new af(e,0),i=this.Rs.firstAfterOrEqual(n);return vl.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,vl.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class lf{constructor(t){this.Ds=t,this.docs=new xl(ll.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return vl.resolve(n?n.document.mutableCopy():uu.newInvalidDocument(e))}getEntries(t,e){let n=ih();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():uu.newInvalidDocument(t))})),vl.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let s=ih();const r=e.path,o=new ll(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||pl(dl(o),n)<=0||(i.has(o.key)||Yu(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return vl.resolve(s)}getAllFromCollectionGroup(t,e,n,i){Vc()}Cs(t,e){return vl.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new uf(this)}getSize(t){return vl.resolve(this.size)}}class uf extends tf{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.os.addEntry(t,i)):this.os.removeEntry(n)})),vl.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
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
 */class hf{constructor(t){this.persistence=t,this.xs=new eh((t=>Pu(t)),Mu),this.lastRemoteSnapshotVersion=sl.min(),this.highestTargetId=0,this.Ns=0,this.ks=new of,this.targetCount=0,this.Ms=Zd.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),vl.resolve()}getLastRemoteSnapshotVersion(t){return vl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return vl.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),vl.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),vl.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Zd(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,vl.resolve()}updateTargetData(t,e){return this.Fn(e),vl.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,vl.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),vl.waitFor(s).next((()=>i))}getTargetCount(t){return vl.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return vl.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),vl.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),vl.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),vl.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return vl.resolve(n)}containsKey(t,e){return vl.resolve(this.ks.containsKey(e))}}
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
 */class df{constructor(t,e){this.$s={},this.overlays={},this.Os=new bl(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new hf(this),this.indexManager=new Jd,this.remoteDocumentCache=new lf((t=>this.referenceDelegate.Ls(t))),this.serializer=new Kd(e),this.qs=new sf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new cf(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){Pc("MemoryPersistence","Starting transaction:",t);const i=new ff(this.Os.next());return this.referenceDelegate.Us(),n(i).next((t=>this.referenceDelegate.Ks(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Gs(t,e){return vl.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class ff extends gl{constructor(t){super(),this.currentSequenceNumber=t}}class pf{constructor(t){this.persistence=t,this.Qs=new of,this.js=null}static zs(t){return new pf(t)}get Ws(){if(this.js)return this.js;throw Vc()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),vl.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),vl.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),vl.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return vl.forEach(this.Ws,(n=>{const i=ll.fromPath(n);return this.Hs(t,i).next((t=>{t||e.removeEntry(i,sl.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return vl.or([()=>vl.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
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
class mf{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=i}static Li(t,e){let n=dh(),i=dh();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new mf(t,e.fromCache,n,i)}}
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
 */class gf{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ki(t,e).next((s=>s||this.Gi(t,e,i,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(ju(e))return vl.resolve(null);let n=Hu(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Ku(e,null,"F"),n=Hu(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const s=dh(...i);return this.Ui.getDocuments(t,s).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.ji(e,i);return this.zi(e,r,s,n.readTime)?this.Ki(t,Ku(e,null,"F")):this.Wi(t,r,e,n)}))))})))))}Gi(t,e,n,i){return ju(e)||i.isEqual(sl.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((s=>{const r=this.ji(e,s);return this.zi(e,r,n,i)?this.Qi(t,e):(Lc()<=kt.DEBUG&&Pc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ju(e)),this.Wi(t,r,e,hl(i,-1)))}))}ji(t,e){let n=new Ol(Zu(t));return e.forEach(((e,i)=>{Yu(t,i)&&(n=n.add(i))})),n}zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(t,e){return Lc()<=kt.DEBUG&&Pc("QueryEngine","Using full collection scan to execute query:",Ju(e)),this.Ui.getDocumentsMatchingQuery(t,e,fl.min())}Wi(t,e,n,i){return this.Ui.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class yf{constructor(t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new xl(el),this.Yi=new eh((t=>Pu(t)),Mu),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nf(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function vf(t,e,n,i){return new yf(t,e,n,i)}async function wf(t,e){const n=jc(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=dh();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({er:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function bf(t){const e=jc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Ef(t,e,n){let i=dh(),s=dh();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=ih();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(sl.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):Pc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:i,sr:s}}))}function If(t,e){const n=jc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Tf(t,e){const n=jc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Bs.getTargetData(t,e).next((s=>s?(i=s,vl.resolve(i)):n.Bs.allocateTargetId(t).next((s=>(i=new Hd(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Ji.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function _f(t,e,n){const i=jc(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!wl(t))throw t;Pc("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function kf(t,e,n){const i=jc(t);let s=sl.min(),r=dh();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=jc(t),s=i.Yi.get(n);return void 0!==s?vl.resolve(i.Ji.get(s)):i.Bs.getTargetData(e,n)}(i,t,Hu(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Hi.getDocumentsMatchingQuery(t,e,n?s:sl.min(),n?r:dh()))).next((t=>(Sf(i,Xu(e),t),{documents:t,ir:r})))))}function Sf(t,e,n){let i=t.Xi.get(e)||sl.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Xi.set(e,i)}class Cf{constructor(){this.activeTargetIds=ph()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nf{constructor(){this.Hr=new Cf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Cf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Af{Yr(t){}shutdown(){}}
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
 */class xf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Pc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){Pc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Df=null;function Rf(){return null===Df?Df=268435456+Math.round(2147483648*Math.random()):Df++,"0x"+Df.toString(16)
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
 */}const Of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Lf{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
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
 */class Pf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,i,s){const r=Rf(),o=this.To(t,e);Pc("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.Eo(a,i,s),this.Ao(t,o,a,n).then((e=>(Pc("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw Uc("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,i,s,r){return this.Io(t,e,n,i,s)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Rc,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=Of[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,i){const s=Rf();return new Promise(((r,o)=>{const a=new Nc;a.setWithCredentials(!0),a.listenOnce(Tc.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ic.NO_ERROR:const e=a.getResponseJson();Pc("WebChannelConnection",`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),r(e);break;case Ic.TIMEOUT:Pc("WebChannelConnection",`RPC '${t}' ${s} timed out`),o(new $c(zc.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const n=a.getStatus();if(Pc("WebChannelConnection",`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(zc).indexOf(e)>=0?e:zc.UNKNOWN}(e.status);o(new $c(t,e.message))}else o(new $c(zc.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $c(zc.UNAVAILABLE,"Connection failed."));break;default:Vc()}}finally{Pc("WebChannelConnection",`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(i);Pc("WebChannelConnection",`RPC '${t}' ${s} sending request:`,i),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const i=Rf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=bc(),o=Ec(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Sc({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=s.join("");Pc("WebChannelConnection",`Creating RPC '${t}' stream ${i}: ${l}`,a);const u=r.createWebChannel(l,a);let h=!1,d=!1;const f=new Lf({ro:e=>{d?Pc("WebChannelConnection",`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(Pc("WebChannelConnection",`Opening RPC '${t}' stream ${i} transport.`),u.open(),h=!0),Pc("WebChannelConnection",`RPC '${t}' stream ${i} sending:`,e),u.send(e))},oo:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,Cc.EventType.OPEN,(()=>{d||Pc("WebChannelConnection",`RPC '${t}' stream ${i} transport opened.`)})),p(u,Cc.EventType.CLOSE,(()=>{d||(d=!0,Pc("WebChannelConnection",`RPC '${t}' stream ${i} transport closed`),f.wo())})),p(u,Cc.EventType.ERROR,(e=>{d||(d=!0,Uc("WebChannelConnection",`RPC '${t}' stream ${i} transport errored:`,e),f.wo(new $c(zc.UNAVAILABLE,"The operation could not be completed")))})),p(u,Cc.EventType.MESSAGE,(e=>{var n;if(!d){const s=e.data[0];Bc(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Pc("WebChannelConnection",`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Qh[t];if(void 0!==e)return Xh(e)}(e),s=o.message;void 0===n&&(n=zc.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),d=!0,f.wo(new $c(n,s)),u.close()}else Pc("WebChannelConnection",`RPC '${t}' stream ${i} received:`,s),f._o(s)}})),p(o,_c.STAT_EVENT,(e=>{e.stat===kc.PROXY?Pc("WebChannelConnection",`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===kc.NOPROXY&&Pc("WebChannelConnection",`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
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
 */function Mf(){return"undefined"!=typeof document?document:null}
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
 */function Uf(t){return new wd(t,!0)}
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
 */class Ff{constructor(t,e,n=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-n);i>0&&Pc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
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
 */class Vf{constructor(t,e,n,i,s,r,o,a){this.ii=t,this.$o=n,this.Oo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Ff(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===zc.RESOURCE_EXHAUSTED?(Mc(e.toString()),Mc("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===zc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new $c(zc.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return Pc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(Pc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bf extends Vf{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.serializer=s}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s="NO_CHANGE"===(i=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Vc(),r=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(Bc(void 0===e||"string"==typeof e),Ul.fromBase64String(e||"")):(Bc(void 0===e||e instanceof Uint8Array),Ul.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?zc.UNKNOWN:Xh(t.code);return new $c(e,t.message||"")}(a);n=new hd(s,r,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Nd(t,i.document.name),r=_d(i.document.updateTime),o=i.document.createTime?_d(i.document.createTime):sl.min(),a=new cu({mapValue:{fields:i.document.fields}}),c=uu.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new ld(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Nd(t,i.document),r=i.readTime?_d(i.readTime):sl.min(),o=uu.newNoDocument(s,r),a=i.removedTargetIds||[];n=new ld([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Nd(t,i.document),r=i.removedTargetIds||[];n=new ld([],r,s,null)}else{if(!("filter"in e))return Vc();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:s}=t,r=new Gh(i,s),o=t.targetId;n=new ud(o,r)}}var i;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return sl.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?sl.min():e.readTime?_d(e.readTime):sl.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=Dd(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=Uu(i)?{documents:Pd(t,i)}:{query:Md(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Id(t,e.resumeToken);const i=bd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(sl.min())>0){n.readTime=Ed(t,e.snapshotVersion.toTimestamp());const i=bd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Vc()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=Dd(this.serializer),e.removeTarget=t,this.Wo(e)}}class jf extends Vf{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(Bc(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Bc(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?_d(t.updateTime):_d(e);return n.isEqual(sl.min())&&(n=_d(e)),new Ah(n,t.transformResults||[])}(t,n)))):[]),s=_d(t.commitTime);return this.listener.cu(s,i)}var e,n;return Bc(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=Dd(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ld(this.serializer,t)))};this.Wo(e)}}
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
 */class zf extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new $c(zc.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Io(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new $c(zc.UNKNOWN,t.toString())}))}vo(t,e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.vo(t,e,n,s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new $c(zc.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class $f{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Mc(e),this.mu=!1):Pc("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
 */class qf{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{Zf(this)&&(Pc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=jc(t);e.vu.add(4),await Hf(e),e.bu.set("Unknown"),e.vu.delete(4),await Wf(e)}(this))}))})),this.bu=new $f(n,i)}}async function Wf(t){if(Zf(t))for(const e of t.Ru)await e(!0)}async function Hf(t){for(const e of t.Ru)await e(!1)}function Kf(t,e){const n=jc(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Xf(n)?Yf(n):yp(n).Ko()&&Qf(n,e))}function Gf(t,e){const n=jc(t),i=yp(n);n.Au.delete(e),i.Ko()&&Jf(n,e),0===n.Au.size&&(i.Ko()?i.jo():Zf(n)&&n.bu.set("Unknown"))}function Qf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(sl.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yp(t).su(e)}function Jf(t,e){t.Vu.qt(e),yp(t).iu(e)}function Yf(t){t.Vu=new fd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),yp(t).start(),t.bu.gu()}function Xf(t){return Zf(t)&&!yp(t).Uo()&&t.Au.size>0}function Zf(t){return 0===jc(t).vu.size}function tp(t){t.Vu=void 0}async function ep(t){t.Au.forEach(((e,n)=>{Qf(t,e)}))}async function np(t,e){tp(t),Xf(t)?(t.bu.Iu(e),Yf(t)):t.bu.set("Unknown")}async function ip(t,e,n){if(t.bu.set("Online"),e instanceof hd&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Au.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Au.delete(i),t.Vu.removeTarget(i))}(t,e)}catch(n){Pc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await sp(t,n)}else if(e instanceof ld?t.Vu.Ht(e):e instanceof ud?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(sl.min()))try{const e=await bf(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Au.get(i);s&&t.Au.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.Au.get(e);if(!i)return;t.Au.set(e,i.withResumeToken(Ul.EMPTY_BYTE_STRING,i.snapshotVersion)),Jf(t,e);const s=new Hd(i.target,e,n,i.sequenceNumber);Qf(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Pc("RemoteStore","Failed to raise snapshot:",e),await sp(t,e)}}async function sp(t,e,n){if(!wl(e))throw e;t.vu.add(1),await Hf(t),t.bu.set("Offline"),n||(n=()=>bf(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Pc("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Wf(t)}))}function rp(t,e){return e().catch((n=>sp(t,n,e)))}async function op(t){const e=jc(t),n=vp(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ap(e);)try{const t=await If(e.localStore,i);if(null===t){0===e.Eu.length&&n.jo();break}i=t.batchId,cp(e,t)}catch(t){await sp(e,t)}lp(e)&&up(e)}function ap(t){return Zf(t)&&t.Eu.length<10}function cp(t,e){t.Eu.push(e);const n=vp(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function lp(t){return Zf(t)&&!vp(t).Uo()&&t.Eu.length>0}function up(t){vp(t).start()}async function hp(t){vp(t).hu()}async function dp(t){const e=vp(t);for(const n of t.Eu)e.uu(n.mutations)}async function fp(t,e,n){const i=t.Eu.shift(),s=Hh.from(i,e,n);await rp(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await op(t)}async function pp(t,e){e&&vp(t).ou&&await async function(t,e){if(Yh(n=e.code)&&n!==zc.ABORTED){const n=t.Eu.shift();vp(t).Qo(),await rp(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await op(t)}var n}(t,e),lp(t)&&up(t)}async function mp(t,e){const n=jc(t);n.asyncQueue.verifyOperationInProgress(),Pc("RemoteStore","RemoteStore received new credentials");const i=Zf(n);n.vu.add(3),await Hf(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Wf(n)}async function gp(t,e){const n=jc(t);e?(n.vu.delete(2),await Wf(n)):e||(n.vu.add(2),await Hf(n),n.bu.set("Unknown"))}function yp(t){return t.Su||(t.Su=function(t,e,n){const i=jc(t);return i.fu(),new Bf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{uo:ep.bind(null,t),ao:np.bind(null,t),nu:ip.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),Xf(t)?Yf(t):t.bu.set("Unknown")):(await t.Su.stop(),tp(t))}))),t.Su}function vp(t){return t.Du||(t.Du=function(t,e,n){const i=jc(t);return i.fu(),new jf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{uo:hp.bind(null,t),ao:pp.bind(null,t),au:dp.bind(null,t),cu:fp.bind(null,t)}),t.Ru.push((async e=>{e?(t.Du.Qo(),await op(t)):(await t.Du.stop(),t.Eu.length>0&&(Pc("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))}))),t.Du
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
 */}class wp{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new qc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new wp(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new $c(zc.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bp(t,e){if(Mc("AsyncQueue",`${e}: ${t}`),wl(t))return new $c(zc.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Ep{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ll.comparator(e.key,n.key):(t,e)=>ll.comparator(t.key,e.key),this.keyedMap=rh(),this.sortedSet=new xl(this.comparator)}static emptySet(t){return new Ep(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ep))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ep;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Ip{constructor(){this.Cu=new xl(ll.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):Vc():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Tp{constructor(t,e,n,i,s,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Tp(t,e,Ep.emptySet(e),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
 */class _p{constructor(){this.Nu=void 0,this.listeners=[]}}class kp{constructor(){this.queries=new eh((t=>Qu(t)),Gu),this.onlineState="Unknown",this.ku=new Set}}async function Sp(t,e){const n=jc(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new _p),s)try{r.Nu=await n.onListen(i)}catch(t){const n=bp(t,`Initialization of query '${Ju(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&xp(n)}async function Cp(t,e){const n=jc(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Np(t,e){const n=jc(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.$u(t)&&(i=!0);s.Nu=t}}i&&xp(n)}function Ap(t,e,n){const i=jc(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function xp(t){t.ku.forEach((t=>{t.next()}))}class Dp{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Tp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=Tp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
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
class Rp{constructor(t){this.key=t}}class Op{constructor(t){this.key=t}}class Lp{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=dh(),this.mutatedKeys=dh(),this.tc=Zu(t),this.ec=new Ep(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Ip,i=e?e.ec:this.ec;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Yu(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||c&&this.tc(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{ec:r,ic:n,zi:o,mutatedKeys:s}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const s=t.ic.xu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Vc()}};return n(t)-n(e)}(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const r=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==s.length||a?{snapshot:new Tp(this.query,t.ec,i,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ip,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=dh(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new Op(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new Rp(n))})),e}hc(t){this.Yu=t.ir,this.Zu=dh();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return Tp.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Pp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Mp{constructor(t){this.key=t,this.fc=!1}}class Up{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new eh((t=>Qu(t)),Gu),this._c=new Map,this.mc=new Set,this.gc=new xl(ll.comparator),this.yc=new Map,this.Ic=new of,this.Tc={},this.Ec=new Map,this.Ac=Zd.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Fp(t,e){const n=nm(t);let i,s;const r=n.wc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const t=await Tf(n.localStore,Hu(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await Vp(n,e,i,"current"===r,t.resumeToken),n.isPrimaryClient&&Kf(n.remoteStore,t)}return s}async function Vp(t,e,n,i,s){t.Rc=(e,n,i)=>async function(t,e,n,i){let s=e.view.sc(n);s.zi&&(s=await kf(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Jp(t,e.targetId,o.cc),o.snapshot}(t,e,n,i);const r=await kf(t.localStore,e,!0),o=new Lp(e,r.ir),a=o.sc(r.documents),c=cd.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,s),l=o.applyChanges(a,t.isPrimaryClient,c);Jp(t,n,l.cc);const u=new Pp(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function Bp(t,e){const n=jc(t),i=n.wc.get(e),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter((t=>!Gu(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await _f(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Gf(n.remoteStore,i.targetId),Gp(n,i.targetId)})).catch(yl)):(Gp(n,i.targetId),await _f(n.localStore,i.targetId,!0))}async function jp(t,e){const n=jc(t);try{const t=await function(t,e){const n=jc(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);var u,h,d;null!==e.targetMismatches.get(a)?l=l.withResumeToken(Ul.EMPTY_BYTE_STRING,sl.min()).withLastLimboFreeSnapshotVersion(sl.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),s=s.insert(a,l),h=l,d=r,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(t,l))}));let a=ih(),c=dh();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Ef(t,r,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!i.isEqual(sl.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return vl.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=s,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.yc.get(e);i&&(Bc(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.fc=!0:t.modifiedDocuments.size>0?Bc(i.fc):t.removedDocuments.size>0&&(Bc(i.fc),i.fc=!1))})),await Zp(n,t,e)}catch(t){await yl(t)}}function zp(t,e,n){const i=jc(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.wc.forEach(((n,i)=>{const s=i.view.Mu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=jc(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Mu(e)&&(i=!0)})),i&&xp(n)}(i.eventManager,e),t.length&&i.dc.nu(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function $p(t,e,n){const i=jc(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.yc.get(e),r=s&&s.key;if(r){let t=new xl(ll.comparator);t=t.insert(r,uu.newNoDocument(r,sl.min()));const n=dh().add(r),s=new ad(sl.min(),new Map,new xl(el),t,n);await jp(i,s),i.gc=i.gc.remove(r),i.yc.delete(e),Xp(i)}else await _f(i.localStore,e,!1).then((()=>Gp(i,e,n))).catch(yl)}async function qp(t,e){const n=jc(t),i=e.batch.batchId;try{const t=await function(t,e){const n=jc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=vl.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Bc(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=dh();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Kp(n,i,null),Hp(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Zp(n,t)}catch(t){await yl(t)}}async function Wp(t,e,n){const i=jc(t);try{const t=await function(t,e){const n=jc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Bc(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Kp(i,e,n),Hp(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Zp(i,t)}catch(t){await yl(t)}}function Hp(t,e){(t.Ec.get(e)||[]).forEach((t=>{t.resolve()})),t.Ec.delete(e)}function Kp(t,e,n){const i=jc(t);let s=i.Tc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function Gp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),n&&t.dc.Pc(i,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Qp(t,e)}))}function Qp(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Gf(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Xp(t))}function Jp(t,e,n){for(const i of n)i instanceof Rp?(t.Ic.addReference(i.key,e),Yp(t,i)):i instanceof Op?(Pc("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||Qp(t,i.key)):Vc()}function Yp(t,e){const n=e.key,i=n.path.canonicalString();t.gc.get(n)||t.mc.has(i)||(Pc("SyncEngine","New document in limbo: "+n),t.mc.add(i),Xp(t))}function Xp(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new ll(ol.fromString(e)),i=t.Ac.next();t.yc.set(i,new Mp(n)),t.gc=t.gc.insert(n,i),Kf(t.remoteStore,new Hd(Hu(Bu(n.path)),i,"TargetPurposeLimboResolution",bl.ct))}}async function Zp(t,e,n){const i=jc(t),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach(((t,a)=>{o.push(i.Rc(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=mf.Li(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.dc.nu(s),await async function(t,e){const n=jc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>vl.forEach(e,(e=>vl.forEach(e.Fi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>vl.forEach(e.Bi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!wl(t))throw t;Pc("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(e,s)}}}(i.localStore,r))}async function tm(t,e){const n=jc(t);if(!n.currentUser.isEqual(e)){Pc("SyncEngine","User change. New user:",e.toKey());const t=await wf(n.localStore,e);n.currentUser=e,(i=n).Ec.forEach((t=>{t.forEach((t=>{t.reject(new $c(zc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Ec.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Zp(n,t.er)}var i}function em(t,e){const n=jc(t),i=n.yc.get(e);if(i&&i.fc)return dh().add(i.key);{let t=dh();const i=n._c.get(e);if(!i)return t;for(const e of i){const i=n.wc.get(e);t=t.unionWith(i.view.nc)}return t}}function nm(t){const e=jc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=em.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$p.bind(null,e),e.dc.nu=Np.bind(null,e.eventManager),e.dc.Pc=Ap.bind(null,e.eventManager),e}function im(t){const e=jc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wp.bind(null,e),e}class sm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Uf(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return vf(this.persistence,new gf,t.initialUser,this.serializer)}createPersistence(t){return new df(pf.zs,this.serializer)}createSharedClientState(t){return new Nf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>zp(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=tm.bind(null,this.syncEngine),await gp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new kp}createDatastore(t){const e=Uf(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Pf(i));var i,s,r;return s=t.authCredentials,r=t.appCheckCredentials,new zf(s,r,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>zp(this.syncEngine,t,0),r=xf.D()?new xf:new Af,new qf(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Up(t,e,n,i,s,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=jc(t);Pc("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Hf(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
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
class om{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):Mc("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class am{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Dc.UNAUTHENTICATED,this.clientId=tl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Pc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Pc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $c(zc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function cm(t,e){t.asyncQueue.verifyOperationInProgress(),Pc("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await wf(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function lm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hm(t);Pc("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>mp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>mp(e.remoteStore,n))),t._onlineComponents=e}function um(t){return"FirebaseError"===t.name?t.code===zc.FAILED_PRECONDITION||t.code===zc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function hm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Pc("FirestoreClient","Using user provided OfflineComponentProvider");try{await cm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!um(n))throw n;Uc("Error using user provided cache. Falling back to memory cache: "+n),await cm(t,new sm)}}else Pc("FirestoreClient","Using default OfflineComponentProvider"),await cm(t,new sm);return t._offlineComponents}async function dm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Pc("FirestoreClient","Using user provided OnlineComponentProvider"),await lm(t,t._uninitializedComponentsProvider._online)):(Pc("FirestoreClient","Using default OnlineComponentProvider"),await lm(t,new rm))),t._onlineComponents}function fm(t){return dm(t).then((t=>t.syncEngine))}async function pm(t){const e=await dm(t),n=e.eventManager;return n.onListen=Fp.bind(null,e.syncEngine),n.onUnlisten=Bp.bind(null,e.syncEngine),n}function mm(t,e,n={}){const i=new qc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new om({next:r=>{e.enqueueAndForget((()=>Cp(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new $c(zc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new $c(zc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new Dp(Bu(n.path),r,{includeMetadataChanges:!0,Ku:!0});return Sp(t,o)}(await pm(t),t.asyncQueue,e,n,i))),i.promise}
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
function gm(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const ym=new Map;
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
 */function vm(t,e,n){if(!n)throw new $c(zc.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wm(t){if(!ll.isDocumentKey(t))throw new $c(zc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bm(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Vc()}function Em(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $c(zc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bm(t);throw new $c(zc.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Im{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new $c(zc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new $c(zc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new $c(zc.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gm(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new $c(zc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new $c(zc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new $c(zc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tm{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Im({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $c(zc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new $c(zc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Im(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Hc;switch(t.type){case"firstParty":return new Jc(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new $c(zc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ym.get(t);e&&(Pc("ComponentProvider","Removing Datastore"),ym.delete(t),e.terminate())}(this),Promise.resolve()}}function _m(t,e,n,i={}){var s;const r=(t=Em(t,Tm))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&Uc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Dc.MOCK_USER;else{e=it(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new $c(zc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Dc(r)}t._authCredentials=new Kc(new Wc(e,n))}}
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
 */class km{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cm(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new km(this.firestore,t,this._key)}}class Sm{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Sm(this.firestore,t,this._query)}}class Cm extends Sm{constructor(t,e,n){super(t,e,Bu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new km(this.firestore,null,new ll(t))}withConverter(t){return new Cm(this.firestore,t,this._path)}}function Nm(t,e,...n){if(t=bt(t),1===arguments.length&&(e=tl.A()),vm("doc","path",e),t instanceof Tm){const i=ol.fromString(e,...n);return wm(i),new km(t,null,new ll(i))}{if(!(t instanceof km||t instanceof Cm))throw new $c(zc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ol.fromString(e,...n));return wm(i),new km(t.firestore,t instanceof Cm?t.converter:null,new ll(i))}}
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
class Am{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Ff(this,"async_queue_retry"),this.Xc=()=>{const t=Mf();t&&Pc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=Mf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=Mf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new qc;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!wl(t))throw t;Pc("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;throw Mc("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const i=wp.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(i),i}Zc(){this.Wc&&Vc()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class xm extends Tm{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Am,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rm(this),this._firestoreClient.terminate()}}function Dm(t){return t._firestoreClient||Rm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rm(t){var e,n,i;const s=t._freezeSettings(),r=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new Wl(o,a,c,(l=s).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,gm(l.experimentalLongPollingOptions),l.useFetchStreams));var o,a,c,l;t._firestoreClient=new am(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
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
class Om{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Om(Ul.fromBase64String(t))}catch(t){throw new $c(zc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Om(Ul.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Lm{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new $c(zc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new cl(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Pm{constructor(t){this._methodName=t}}
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
 */class Mm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $c(zc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $c(zc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return el(this._lat,t._lat)||el(this._long,t._long)}}
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
 */const Um=/^__.*__$/;class Fm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Vh(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fh(t,this.data,e,this.fieldTransforms)}}function Vm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Vc()}}class Bm{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Bm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.fa(t),i}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Ym(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Vm(this.ca)&&Um.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class jm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Uf(t)}ya(t,e,n,i=!1){return new Bm({ca:t,methodName:e,ga:n,path:cl.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zm(t){const e=t._freezeSettings(),n=Uf(t._databaseId);return new jm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $m(t,e,n,i,s,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,s);Km("Data must be an object, but it was:",o,i);const a=Wm(i,o);let c,l;if(r.merge)c=new Pl(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Gm(e,i,n);if(!o.contains(s))throw new $c(zc.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Xm(t,s)||t.push(s)}c=new Pl(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Fm(new cu(a),c,l)}function qm(t,e){if(Hm(t=bt(t)))return Km("Unsupported field value:",e,t),Wm(t,e);if(t instanceof Pm)return function(t,e){if(!Vm(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=qm(s,e.wa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=bt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return yh(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=il.fromDate(t);return{timestampValue:Ed(e.serializer,n)}}if(t instanceof il){const n=new il(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ed(e.serializer,n)}}if(t instanceof Mm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Om)return{bytesValue:Id(e.serializer,t._byteString)};if(t instanceof km){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:kd(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${bm(t)}`)}(t,e)}function Wm(t,e){const n={};return Al(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nl(t,((t,i)=>{const s=qm(i,e.ha(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Hm(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof il||t instanceof Mm||t instanceof Om||t instanceof km||t instanceof Pm)}function Km(t,e,n){if(!Hm(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=bm(n);throw"an object"===i?e._a(t+" a custom object"):e._a(t+" "+i)}var i}function Gm(t,e,n){if((e=bt(e))instanceof Lm)return e._internalPath;if("string"==typeof e)return Jm(t,e);throw Ym("Field path arguments must be of type string or ",t,!1,void 0,n)}const Qm=new RegExp("[~\\*/\\[\\]]");function Jm(t,e,n){if(e.search(Qm)>=0)throw Ym(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lm(...e.split("."))._internalPath}catch(i){throw Ym(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ym(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new $c(zc.INVALID_ARGUMENT,a+t+c)}function Xm(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Zm{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new km(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new tg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(eg("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class tg extends Zm{data(){return super.data()}}function eg(t,e){return"string"==typeof e?Jm(t,e):e instanceof Lm?e._internalPath:e._delegate._internalPath}
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
 */class ng{convertValue(t,e="none"){switch(Gl(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Bl(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(jl(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Vc()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Nl(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Mm(Bl(t.latitude),Bl(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=$l(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ql(t));default:return null}}convertTimestamp(t){const e=Vl(t);return new il(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ol.fromString(t);Bc(Wd(n));const i=new Hl(n.get(1),n.get(3)),s=new ll(n.popFirst(5));return i.isEqual(e)||Mc(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function ig(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
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
class sg{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rg extends Zm{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new og(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(eg("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class og extends rg{data(t={}){return super.data(t)}}
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
function ag(t){t=Em(t,km);const e=Em(t.firestore,xm);return mm(Dm(e),t._key).then((n=>hg(e,t,n)))}class cg extends ng{constructor(t){super(),this.firestore=t}convertBytes(t){return new Om(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new km(this.firestore,null,e)}}function lg(t,e,n){t=Em(t,km);const i=Em(t.firestore,xm),s=ig(t.converter,e,n);return ug(i,[$m(zm(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,xh.none())])}function ug(t,e){return function(t,e){const n=new qc;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=im(t);try{const t=await function(t,e){const n=jc(t),i=il.now(),s=e.reduce(((t,e)=>t.add(e.key)),dh());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ih(),c=dh();return n.Zi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=Mh(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Vh(t.key,e,lu(e.value.mapValue),xh.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:oh(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Tc[t.currentUser.toKey()];i||(i=new xl(el)),i=i.insert(e,n),t.Tc[t.currentUser.toKey()]=i}(i,t.batchId,n),await Zp(i,t.changes),await op(i.remoteStore)}catch(t){const e=bp(t,"Failed to persist write");n.reject(e)}}(await fm(t),e,n))),n.promise}(Dm(t),e)}function hg(t,e,n){const i=n.docs.get(e._key),s=new cg(t);return new rg(t,s,e._key,i,new sg(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){Rc="9.23.0",ee(new Et("firestore",((t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new xm(new Gc(t.getProvider("auth-internal")),new Xc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $c(zc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hl(t.options.projectId,e)}(s,n),s);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),ae("@firebase/firestore","3.13.0",t),ae("@firebase/firestore","3.13.0","esm2017")}();const dg={buttonSwitch:document.querySelector("#toggle-button"),headerNav:document.querySelector("#header-nav"),authorizationWindowInput:document.querySelectorAll(".authorization-window-input"),authorizationWindowSubmitButton:document.querySelector(".authorization-window-submit-button"),authorizationWindowForm:document.querySelector(".authorization-window-form"),openAuthorizationBtn:document.querySelector("[data-authorization-open]"),closeAuthorizationBtn:document.querySelector("[data-authorization-close]"),authorization:document.querySelector("[data-authorization]"),signUpButton:document.querySelector(".sign-up"),signInButton:document.querySelector(".sign-in"),btnLogin:document.querySelector(".btn-login"),btnSigned:document.querySelector(".btn-signed"),btnLogout:document.querySelector(".btn-logout"),authorizationWindow:document.querySelector(".authorization-window"),authorizationWindowCloseButtonIcon:document.querySelector(".authorization-window-close-button-icon"),authorizationWindowIcon:document.querySelectorAll(".authorization-window-icon"),headerList:document.querySelector(".header-list"),inputName:document.querySelector("#name")};""!==localStorage.getItem("user-id")&&(dg.btnSigned.textContent=localStorage.getItem("user-name"),dg.btnLogin.classList.add("visually-hidden"),dg.btnSigned.classList.remove("visually-hidden"),dg.headerNav.classList.remove("visually-hidden"));let fg="";"dark"===localStorage.theme&&(dg.authorizationWindow.classList.add("dark"),dg.authorizationWindowInput.forEach((t=>{t.classList.add("dark")})),dg.authorizationWindowCloseButtonIcon.classList.add("dark"),dg.authorizationWindowIcon.forEach((t=>{t.classList.add("dark")})),dg.authorizationWindowSubmitButton.classList.add("dark"),dg.signUpButton.classList.add("dark"),dg.signInButton.classList.add("dark")),dg.buttonSwitch.addEventListener("click",(()=>{dg.authorizationWindow.classList.toggle("dark"),dg.authorizationWindowInput.forEach((t=>{t.classList.toggle("dark")})),dg.authorizationWindowCloseButtonIcon.classList.toggle("dark"),dg.authorizationWindowIcon.forEach((t=>{t.classList.toggle("dark")})),dg.authorizationWindowSubmitButton.classList.toggle("dark"),dg.signUpButton.classList.toggle("dark"),dg.signInButton.classList.toggle("dark")})),(()=>{function t(){const t="true"===dg.openAuthorizationBtn.getAttribute("aria-expanded")||!1;dg.openAuthorizationBtn.setAttribute("aria-expanded",!t),dg.authorization.classList.toggle("is-hidden"),t?(document.body.style.overflow="scroll",dg.authorizationWindowForm.reset()):document.body.style.overflow="hidden"}dg.openAuthorizationBtn.addEventListener("click",t),dg.closeAuthorizationBtn.addEventListener("click",t)})();const pg=re({apiKey:"AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms",authDomain:"js-firebase-auth-cb2eb.firebaseapp.com",projectId:"js-firebase-auth-cb2eb",storageBucket:"js-firebase-auth-cb2eb.appspot.com",messagingSenderId:"233176764690",appId:"1:233176764690:web:5fcced0357c9421e88e3cb"});dg.signUpButton.addEventListener("click",(()=>{dg.authorizationWindowSubmitButton.textContent="sign up",dg.signUpButton.classList.add("curr"),dg.signInButton.classList.remove("curr"),dg.inputName.disabled=!1,dg.inputName.style.display="block"})),dg.signInButton.addEventListener("click",(()=>{dg.authorizationWindowSubmitButton.textContent="sign in",dg.signUpButton.classList.remove("curr"),dg.signInButton.classList.add("curr"),dg.inputName.disabled=!0,dg.inputName.style.display="none",dg.authorizationWindowForm.elements.name.value=""}));const mg=function(t=oe()){const e=ne(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=ne(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(dt(n.getOptions(),null!=e?e:{}))return t;Te(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:as,persistence:[_i,ui,di]}),i=et("authTokenSyncURL");if(i){const t=(s=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>ls)return;const i=null==e?void 0:e.token;us!==i&&(us=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){bt(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){bt(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var s;const r=X("auth");return r&&Rn(n,`http://${r}`),n}(pg);dg.authorizationWindowForm.addEventListener("submit",(t=>{t.preventDefault(),"sign up"===dg.authorizationWindowSubmitButton.textContent.trim().toLowerCase()?function(){const t=`${dg.authorizationWindowForm.elements.name.value}`,e=`${dg.authorizationWindowForm.elements.email.value}`,n=`${dg.authorizationWindowForm.elements.password.value}`;try{oi(mg,e,n).then((n=>{user=n.user,fg=user.uid,dg.btnLogin.classList.add("visually-hidden"),dg.btnSigned.classList.remove("visually-hidden"),dg.btnSigned.textContent=t,dg.authorization.classList.toggle("is-hidden"),dg.authorizationWindowForm.reset(),document.body.style.overflow="scroll",A.Notify.success(`User ${t} with email address ${e} successfully created!`),async function(t){try{await lg(Nm(gg,"books",`${fg}`),{name:t}).then((()=>{})).catch((t=>{console.log(`I got an error! ${t}`)}))}catch(t){console.log(`I got an error! ${t}`)}}(t),localStorage.setItem("user-name",`${t}`),localStorage.setItem("user-id",`${fg}`),dg.headerNav.classList.remove("visually-hidden")})).catch((t=>{const n=t.code,i=t.message;console.log(n),console.log(i),"auth/wrong-password"===n?A.Notify.failure("Wrong password."):"auth/email-already-in-use"===n?A.Notify.failure(`User with this email ${e} already in use.`):A.Notify.failure(`${i}`),console.log(t)}))}catch(n){console.log(n),A.Notify.failure(`User ${t} with email address ${e} failed created!`)}}():function(){const t=`${dg.authorizationWindowForm.elements.email.value}`,e=`${dg.authorizationWindowForm.elements.password.value}`;if(t.length<4)return void A.Notify.failure("User email address is wrong! Please enter an email address.");if(e.length<4)return void A.Notify.failure("User password is wrong! Please enter a password.");try{ai(mg,t,e).then((e=>{user=e.user,console.log(user),fg=user.uid,dg.btnLogin.classList.add("visually-hidden"),dg.btnSigned.classList.remove("visually-hidden"),dg.btnSigned.textContent=name,dg.authorization.classList.toggle("is-hidden"),document.body.style.overflow="scroll",dg.authorizationWindowForm.reset(),A.Notify.success(`User with email address ${t} successfully SIGNED!`),localStorage.setItem("user-id",`${fg}`),dg.headerNav.classList.remove("visually-hidden"),async function(t){const e=await ag(Nm(gg,"books",`${t}`));if(e.exists())return e.data().name;console.log("No such document!")}(fg).then((t=>{console.log(t),localStorage.setItem("user-name",`${t}`),dg.btnSigned.textContent=`${t}`})).catch((t=>{console.log(t.message)}))})).catch((t=>{const e=t.code,n=t.message;console.log(n),"auth/wrong-password"===e?A.Notify.failure("Wrong password!"):A.Notify.failure(`${n}`),console.log(t)}))}catch(e){console.log(e),A.Notify.failure(`User ${name} with email address ${t} failed SIGNED!`)}}()})),dg.btnLogout.addEventListener("click",(function(){try{mg.signOut().then((()=>{dg.btnLogin.classList.remove("visually-hidden"),dg.btnSigned.classList.add("visually-hidden"),dg.btnLogout.classList.add("visually-hidden"),user="",A.Notify.success(`User ${dg.btnSigned.textContent} successfully SIGNED OUT!`),document.location.replace("../index.html"),dg.headerNav.classList.add("visually-hidden"),localStorage.setItem("user-name",""),localStorage.setItem("user-id","")})).catch((t=>{console.log(t),A.Notify.failure(`User ${dg.btnSigned.textContent} with email address ${email} failed SIGNED OUT!`)}))}catch(t){console.log(t),A.Notify.failure(`User ${dg.btnSigned.textContent} with email address ${email} failed SIGNED OUT!`)}})),dg.btnSigned.addEventListener("click",(()=>{dg.btnLogout.classList.toggle("visually-hidden")})),window.addEventListener("beforeunload",(()=>{try{mg.signOut().then((t=>{})).catch((t=>{console.log(t)}))}catch(t){console.log(t)}})),window.addEventListener("load",(()=>{mg.onAuthStateChanged((function(t){}))}));const gg=function(t,e){const n="string"==typeof t?t:e||"(default)",i=ne("object"==typeof t?t:oe(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=Z("firestore");t&&_m(i,...t)}return i}(pg);s=i("014TN");const yg=document.querySelector("#container-best");document.querySelector(".see-more-btn");yg.addEventListener("click",(t=>{if("BUTTON"===t.target.nodeName){console.log(t.target.parentNode.firstChild.textContent);const e=t.target.parentNode.firstChild.textContent;c(),async function(t){try{c();const e=await(0,s.fetchBooksByCategory)(t),n=o(e);yg.insertAdjacentHTML("beforeend",n)}catch(t){console.log(t)}}(e)}}));const vg=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){window.onscroll=()=>{window.scrollY>700?vg.classList.remove("scroll-up_hide"):window.scrollY<700&&vg.classList.add("scroll-up_hide")}})),vg.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.919fa474.js.map
