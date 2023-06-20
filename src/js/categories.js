import { fetchBooksCategoryList,fetchBooksByCategory } from './serviceApi.js'

const category = document.querySelector(".categories-item");

function markupList () {
  fetchBooksCategoryList().then(data => {
    const markupCategoriesList = data.map(({list_name }) => {
      return `<li class="categories-list" id="${list_name}">${list_name}</li>`;
    }).join('')
    category.insertAdjacentHTML('beforeend', markupCategoriesList);
  }).catch((error) => console.log(error))
};

markupList();

function onrenderCategory() {
  renderCategoriesList()
}

const renderCategoriesList = (data) => {
  category.addEventListener('click', fetchBooksByCategory());
  console.log(fetchBooksByCategory());
    const renderCategoryList = header.concat([...data].map((list) => {
        const { list_name: listName, books } = list;
        return `<div class="bookListWrapper"><h2 class="bestSellersTitle">${listName}</h2>
            <ul class="bestSellersList">${books
            .map((book) => {
    const { _id: id, author, book_image, title } = book;
      return `<li class="bestSellersListItem" data-id=${id}>
                <div class="bestSellersThumb">
                <img class="bestSellersImage" src=${book_image} alt=${title}/>
                </div>
                <div class="bookDescriptionThumb"><h3 class="bookTitle">${
                  title.length > 18 ? title.slice(0, 18) + "..." : title
                }</h3>
                <p class="bookDescription">${author}</p></div>
              </li>`;
        }).join("")}
        </ul><button class="seeMoreBtn" type="button">See More</button></div>`;
      }).join(""));
  return renderCategoryList;
};

onrenderCategory();