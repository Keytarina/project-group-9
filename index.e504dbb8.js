var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7951;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7951=o),o("3soWa"),o("4S0r6"),o("bUb57");var s=o("3soWa");const i=e=>'<h1 class="best-sellers-header">Best Sellers <span class="best-sellers-accent">Books</span></h1>'.concat([...e].map((e=>{const{list_name:t,books:n}=e;return`<div class="book-list-wrapper"><h2 class="best-sellers-title">${t}</h2>\n     <ul class="best-sellers-list">${n.map((e=>{const{_id:t,author:n,book_image:o,title:s}=e;return`<li class="best-sellers-list-item">\n              <div class="best-sellers-thumb"><img class="best-sellers-image" src=${o} alt=${s} data-id-img=${t}/><div class="book-thumb-overlay"><p class="book-overlay-text">quick view</p></div></div>\n              <div class="book-description-thumb"><h3 class="book-title">${s.length>18?s.slice(0,18)+"...":s}</h3>\n              <p class="book-description">${n}</p></div>\n          </li>`})).join("")}</ul><button class="see-more-btn" type="button">See More</button></div>`})).join("")),a=e=>{let t;const n=[...e].map((e=>{const{_id:n,author:o,book_image:s,title:i,list_name:a}=e;return t=a,`<li class="book-category-list-item">\n            <div class="best-sellers-thumb"><img class="best-sellers-image" src=${s} alt=${i} data-id-img=${n}/><div class="book-thumb-overlay"><p class="book-overlay-text">quick view</p></div></div>\n            <div class="book-description-thumb"><h3 class="book-title">${i.length>18?i.slice(0,18)+"...":i}</h3>\n            <p class="book-description">${o}</p></div>\n        </li>`})).join("");return t=t.split(" ").map(((e,o,s)=>{if(s.indexOf(e)+1===s.length)return`<h1 class="best-sellers-header">${t.split(" ").slice(0,o).join(" ")}<span class="best-sellers-accent"> ${e}<span></h1><ul class="book-category-list">${n}</ul>`})),t.join("")},l=document.querySelector("#container-best"),r=()=>l.innerHTML="";l.innerHTML||(async()=>{try{const e=await(0,s.fetchTopBooks)(),t=i(e);l.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();s=o("3soWa");const c=document.querySelector(".categories-item"),d=document.querySelector(".categories-item");let p=document.getElementsByClassName("categories-list");const u=document.querySelector("#container-best");d.addEventListener("click",(function(e){p===document.getElementsByClassName("categories-list")&&(p=e.target);return p.classList.remove("active"),p=e.target,p.classList.add("active"),p})),(0,s.fetchBooksCategoryList)().then((e=>{const t=e.map((({list_name:e})=>`<li class="categories-list" id=${e}>${e}</li>`)).join("");c.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e))),d.addEventListener("click",(async function(e){if("LI"!==e.target.nodeName&&"All categories"===e.target.textContent)return;try{const t=await(0,s.fetchBooksByCategory)(e.target.textContent),n=a(t);r(),u.insertAdjacentHTML("beforeend",n)}catch(e){console.log(e)}})),d.addEventListener("click",(async function(e){if("All categories"===e.target.textContent)try{const e=await(0,s.fetchTopBooks)(),t=i(e);r(),u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})),o("dTazW");s=o("3soWa");const g=document.querySelector(".modal"),m=document.querySelector(".modal-card"),h=document.getElementById("container-best"),b=document.querySelector(".modal-window-text"),f=document.querySelector(".cls-button"),k=document.querySelector("[data-modal-backdrop]");let v=[];function y(e){if("Escape"===e.code)return L(),x()}function S(e){if("BUTTON"===e.currentTarget.nodeName)return L(),x()}function L(){f.removeEventListener("click",S,{once:"true"}),m.removeEventListener("click",T),document.removeEventListener("keydown",y,{once:"true"}),k.removeEventListener("click",w)}function w(e){if(e.target===k)return L(),x()}function x(){g.classList.toggle("is-hidden"),k.classList.toggle("is-hidden"),document.body.classList.toggle("stop-scrolling")}function $(){if(!JSON.parse(localStorage.getItem("id")))return v=[],localStorage.setItem("id",JSON.stringify(v))}function T(e){if(e.target.classList.contains("btn-action")){const t=e.target.dataset.id;!function(e,t){if($(),v.includes(e))t.target.dataset.modalSubmit="del"}(t,e),"add"===e.target.dataset.modalSubmit?(!function(e){if(!JSON.parse(localStorage.getItem("id")))return v=[],v.push(e),localStorage.setItem("id",JSON.stringify(v));v=JSON.parse(localStorage.getItem("id")),v.includes(e)?console.log("this book already in a busket"):(v.push(e),localStorage.setItem("id",JSON.stringify(v)))}(t),e.target.textContent="remove from the shopping list",b.textContent='Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',b.classList.remove("is-hidden"),e.target.dataset.modalSubmit="del"):(!function(e){if($(),v=JSON.parse(localStorage.getItem("id")),v.includes(e)){const t=v.indexOf(e);v.splice(t,1),localStorage.setItem("id",JSON.stringify(v))}}(t),e.target.textContent="add to shopping list",b.classList.add("is-hidden"),e.target.dataset.modalSubmit="add")}}$(),h.addEventListener("click",(function(e){if("IMG"===e.target.nodeName){const n=e.target.dataset.idImg;x(),async function(e){try{!function(e,t){let{title:n,author:o,book_image:s="./image/shopping/dummy-book-tr.png",description:i,buy_links:a}=e;const l=a;let r="https://www.amazon.com",c="https://books.apple.com",d="https://bookshop.org";r=l[0].url,c=l[1].url,d=l[4].url,0===i.trim().length&&(i="Description is not available for that book");let p="";p=function({id:e,title:t,author:n,book_image:o,description:s,amazonUrl:i,appleUrl:a,bookShopUrl:l}){return`\n  <div class="modal-window">\n    <div class="picture">\n      <img class="card-img" src="${o}" alt="${s}" />\n    </div>\n    <div class="info">\n      <h1 class="titles">${t}</h1>\n      <h2 class="authors">${n}</h2>\n      <p class="descriptions">${s}</p>\n      <ul class="icons">\n        <li class="icon-link">\n          <a\n                    class="shopping-card-shop-link"\n                    href="${i}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Amazon link"\n                    ><img\n                      width="62px"\n                      class="shopping-card-link-icon shopping-card-link-amazon"\n                      src="./shop-amazon-62x19px.a7ec3af8.png"\n                      alt="Amazon" loading="lazy"\n                    />\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${a}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="Apple Books link"\n                  >\n                    <img\n                      width="32px"\n                      height="32px"\n                      class="shopping-card-link-icon"\n                      src="./shop-read-33x32px.a9f158e0.png"\n                      alt="Apple Books" loading="lazy"\n                    />\n                  </a></li>\n                <li>\n                  <a\n                    class="shopping-card-shop-link"\n                    href="${l}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    aria-label="BookShop link"\n                  >\n                    <img\n                      width="38px"\n                      height="36px"\n                      class="shopping-card-link-icon shopping-card-link-shopbook"\n                      src="./shop-book-shop-38x36px.eb5fbc1e.png"\n                      alt="BookShop" loading="lazy"\n                    />\n                  </a>\n        </li>\n      </ul>\n    </div>\n    <button\n    class="btn-action button pointer"\n    data-modal-submit="add" data-id=${e}\n    type="button">add to shopping list</button>\n  </div>`}({id:t,title:n,author:o,book_image:s,description:i,amazonUrl:r,appleUrl:c,bookShopUrl:d}),m.innerHTML="",m.insertAdjacentHTML("afterbegin",p)}(await(0,s.fetchBookById)(e),e)}catch(e){console.log(e)}}(n),t=n,$(),v=JSON.parse(localStorage.getItem("id")),v.includes(t)&&(b.textContent="This book is already in your cart",b.classList.remove("is-hidden")),m.addEventListener("click",T),document.addEventListener("keydown",y,{once:"true"}),f.addEventListener("click",S,{once:"true"}),k.addEventListener("click",w)}var t}));s=o("3soWa");const E=document.querySelector("#container-best");document.querySelector(".see-more-btn");E.addEventListener("click",(e=>{if("BUTTON"===e.target.nodeName){console.log(e.target.parentNode.firstChild.textContent);const t=e.target.parentNode.firstChild.textContent;r(),async function(e){try{r();const t=await(0,s.fetchBooksByCategory)(e),n=a(t);E.insertAdjacentHTML("beforeend",n)}catch(e){console.log(e)}}(t)}}));const N=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){window.onscroll=()=>{window.scrollY>700?N.classList.remove("scroll-up_hide"):window.scrollY<700&&N.classList.add("scroll-up_hide")}})),N.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.e504dbb8.js.map
