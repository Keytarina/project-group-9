var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire7951;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7951=a),a("014TN"),a("iO6Mx"),a("hiPTG"),a("70IEE"),a("b11DO");var s=a("014TN");const i=document.querySelector(".shopping-list-list"),r=document.querySelector(".shopping-dummy-message"),o=document.querySelector(".shopping-paginator-list"),l=document.querySelector('button[data-page="first"]'),c=document.querySelector('button[data-page="second"]'),d=document.querySelector(".btn-hidden"),p=window.matchMedia("(min-width: 768px)"),g=document.querySelector(".support"),u=window.matchMedia("(max-width: 1439px)");function h(e){e.matches?g.classList.add("visually-hidden"):g.classList.remove("visually-hidden")}g.style.position="static",u.addListener(h),h(u);let m=[];!function(){if(!JSON.parse(localStorage.getItem("id")))return m=[],localStorage.setItem("id",JSON.stringify(m));m=JSON.parse(localStorage.getItem("id"))}();let f=3,v=1,L=1;function b(){JSON.parse(localStorage.getItem("id")).length>0?(r.classList.add("visually-hidden"),i.classList.remove("visually-hidden")):(i.classList.add("visually-hidden"),o.classList.add("visually-hidden"),r.classList.remove("visually-hidden"),i.removeEventListener("click",_),o.removeEventListener("click",C))}function y(){return m=JSON.parse(localStorage.getItem("id"))}function k(){f=p.matches?4:3,L=Math.ceil(JSON.parse(localStorage.getItem("id")).length/f)}function x(e){return v+=e,localStorage.page=v,v}function S(){N(v,f),I(v)}function N(e,t){J(e,t)}function w(e){l.textContent=Number.parseInt(l.textContent)+e,c.textContent=Number.parseInt(c.textContent)+e,d.textContent=Number.parseInt(d.textContent)+e}function I(e){l.textContent=e,c.textContent=e+1,d.textContent=e+2}function C(e){if(k(),!(y().length<=f||Number.parseInt(e.target.textContent)>L||Number.parseInt(e.target.textContent)===v))return"start"===e.target.dataset.page&&v>1?T():"last"===e.target.dataset.page?q():"first"===e.target.dataset.page?O(l):"second"===e.target.dataset.page&&L>=2?O(c):"third"===e.target.dataset.page&&L>=3?O(d):"more"===e.target.dataset.page?$(f):"next"===e.target.dataset.page?z():"end"===e.target.dataset.page?function(){if(2===L)return z();v!=L&&(E(),4===f?(d.classList.add("current-page"),I(L-2)):(c.classList.add("current-page"),I(L-1)),x(L-v),N(v,f))}():void 0}function O(e){x(Number.parseInt(e.textContent)-v),E(),e.classList.add("current-page"),N(v,f)}function E(){l.classList.remove("current-page"),c.classList.remove("current-page"),d.classList.remove("current-page")}function T(){E(),I(1),x(1-v),l.classList.add("current-page"),N(1,f)}function q(){if(!(v<=1))return 2===v?T():(3===f?l.classList.contains("current-page")?(E(),c.classList.add("current-page"),w(-2)):c.classList.contains("current-page")?(E(),l.classList.add("current-page")):w(-1):l.classList.contains("current-page")?(E(),d.classList.add("current-page"),w(-3)):c.classList.contains("current-page")?(E(),l.classList.add("current-page")):d.classList.contains("current-page")?(E(),c.classList.add("current-page")):w(-1),x(-1),N(v,f))}function z(){v>=L||(3!==f?(!function(){if(l.classList.contains("current-page"))E(),c.classList.add("current-page");else if(c.classList.contains("current-page"))E(),d.classList.add("current-page");else{if(d.classList.contains("current-page"))return $(f);w(1)}}(),x(1),N(v,f)):l.classList.contains("current-page")?(E(),c.classList.add("current-page")):c.classList.contains("current-page")?(E(),l.classList.add("current-page"),w(2)):w(1))}function $(e){if(Number.parseInt(l.textContent)+e-1<=L)return E(),l.classList.add("current-page"),w(4===e?3:2),x(l.textContent-v),N(v,e)}function J(e,t){var n,a;i.innerHTML="",b(),(n=e,a=t,y(),m.splice((n-1)*a,a)).forEach((e=>{!async function(e){try{!function(e,t){let{title:n="Title unknown",author:a="Author unknown",book_image:s="./image/shopping/dummy-book-tr.png",list_name:r="No category",description:o,buy_links:l}=e;const c=l;let d="https://www.amazon.com",p="https://books.apple.com",g="https://bookshop.org";d=c[0].url,p=c[1].url,g=c[4].url,0===o.trim().length&&(o="Description is not available for that book");let u="";u=`<li class="shopping-list-item"><div class="shopping-list-item-card">\n          <img\n            class="shopping-card-img"\n            src="${s}"\n            alt="book cover"\n            width="100px"\n            height="142px" loading="lazy"\n          />\n          <div class="shopping-list-card-info">\n            <h2 class="shopping-card-title">${n}</h2>\n            <p class="shopping-card-category">${r}</p>\n            <p class="shopping-card-descr">${o}</p><p class="visually-hidden">\n              Description is not available for that book\n            </p>\n            <div class="shopping-card-bottom-container">\n              <p class="shopping-card-author">${a}</p>\n              <ul class="shopping-card-shop-list">\n                <li>\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${d}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Amazon link"\n                    ><img\n                      width="32px"\n                      class="shopping-card-link-icon shopping-card-link-amazon"\n                      src="./shop-amazon-62x19px.a7ec3af8.png"\n                      alt="Amazon" loading="lazy"\n                    />\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${p}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Apple Books link"\n                  >\n                    <img\n                      width="16px"\n                      height="16px"\n                      class="shopping-card-link-icon"\n                      src="./shop-read-33x32px.a9f158e0.png"\n                      alt="Apple Books" loading="lazy"\n                    />\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${g}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="BookShop link"\n                  >\n                    <img\n                      width="16px"\n                      height="16px"\n                      class="shopping-card-link-icon shopping-card-link-shopbook"\n                      src="./shop-book-shop-38x36px.eb5fbc1e.png"\n                      alt="BookShop" loading="lazy"\n                    />\n                  </a>\n                </li>\n              </ul>\n              <button class="shopping-btn-dump" type="button" data-book="${t}">\n                <svg class="shopping-btn-dump-icon" width="16" height="16">\n                  <use href="./icons.d47e670f.svg#dump"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n        </div>`,i.insertAdjacentHTML("beforeend",u)}(await(0,s.fetchBookById)(e),e)}catch(e){console.log(e),b(),r.firstElementChild.textContent="Server is not available right now. Please, try later",o.classList.add("visually-hidden"),r.classList.remove("visually-hidden")}y(),m.length<=f?(o.classList.add("visually-hidden"),o.removeEventListener("click",C)):(o.classList.remove("visually-hidden"),o.addEventListener("click",C))}(e)})),i.addEventListener("click",_,{once:"true"}),o.addEventListener("click",C)}function _(e){"use"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"BUTTON"!==e.target.nodeName||function(e){const t=e.target.dataset.book,n=m.indexOf(t);if(y(),m.splice(n,1),localStorage.setItem("id",JSON.stringify(m)),k(),0===m.length)return J(v,f);if(v>L)return q();J(v,f)}(e)}v=Number.parseInt(localStorage.getItem("page"))>0?JSON.parse(localStorage.getItem("page")):1,y(),k(),S();document.querySelector(".shopping-refresh").addEventListener("click",(function(){return S()}));
//# sourceMappingURL=shopping.272161e5.js.map
