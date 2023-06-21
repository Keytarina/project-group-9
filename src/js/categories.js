import { fetchBooksCategoryList, fetchBooksByCategory } from './serviceApi.js';

const category = document.querySelector(".categories-item");
const list = document.querySelector('.categories-list');
const gallery = document.querySelector('.categories');

function markupList() {
  fetchBooksCategoryList()
    .then(data => {
      const markupCategoriesList = data
        .map(({ list_name }) => {
          return `<li class="categories-list" id="${list_name}">${list_name}</li>`;
        })
        .join('');
      category.insertAdjacentHTML('beforeend', markupCategoriesList);
    })
    .catch(error => console.log(error));
}

markupList();

list.addEventListener('click', render);

function render(books) {
    if (!gallery) {
    return;
  } 
  fetchBooksByCategory().then(book => {
          const markupCategory = book.map((image) =>{
      const {list_name,_id, book_image,author,title} = image;
      return `
      <ul class="render-category">
        <li class="list-category" id="${_id}">
          <div class="">
              <img src="${book_image}" alt="${list_name}" loading="lazy" />
              <div class="">
              <h3 class="name-book"> ${title}</р>
              <p class="category-author">${author}</p>
            </div>
          </div>
        </li>
      </ul>`;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markupCategory);
  
  const { height: imageHeight } = document
    .querySelector('.categories')
    .firstElementChild.getBoundingClientRect();
    
    window.scrollBy({
    top: imageHeight * 2,
    behavior: 'smooth',
  });
  }).catch (error => console.log(error));
};



// const renderCategoriesList = (data) => {
  
//   console.log(fetchBooksByCategory());
//     const renderCategoryList = header.concat([...data].map((list) => {
//         const { list_name: listName, books } = list;
//         return `<div class="bookListWrapper"><h2 class="bestSellersTitle">${listName}</h2>
//             <ul class="bestSellersList">${books
//             .map((book) => {
//     const { _id: id, author, book_image, title } = book;
//       return `<li class="bestSellersListItem" data-id=${id}>
//                 <div class="bestSellersThumb">
//                 <img class="bestSellersImage" src=${book_image} alt=${title}/>
//                 </div>
//                 <div class="bookDescriptionThumb"><h3 class="bookTitle">${
//                   title.length > 18 ? title.slice(0, 18) + "..." : title
//                 }</h3>
//                 <p class="bookDescription">${author}</p></div>
//               </li>`;
//         }).join("")}
//         </ul>`
//       }).join(""));
//   return renderCategoryList;
// };

// renderCategoriesList();
