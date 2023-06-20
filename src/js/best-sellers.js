import {fetchTopBooks} from './serviceApi.js'
//This function recieves parsed data from api and returns the markup of book-list
//at the home page. Should be used after any of serviceApi functions in async code.

export const renderBestSellersList = (data) => {
  const header =
    '<h1 class="bestSellersHeader">Best Sellers <span class="bestSellersAccent">Books</span></h1>';
  const markup = header.concat(
    [...data]
      .map((list) => {
        const { list_name: listName, books } = list;
        return `<div class="bookListWrapper"><h2 class="bestSellersTitle">${listName}</h2>
     <ul class="bestSellersList">${books
       .map((book) => {
         const { _id: id, author, book_image, title } = book;
         return `<li class="bestSellersListItem" data-id=${id}>
              <div class="bestSellersThumb"><img class="bestSellersImage" src=${book_image} alt=${title}/></div>
              <div class="bookDescriptionThumb"><h3 class="bookTitle">${
                title.length > 18 ? title.slice(0, 18) + "..." : title
              }</h3>
              <p class="bookDescription">${author}</p></div>
    
          </li>`;
       })
       .join(
         ""
       )}</ul><button class="seeMoreBtn" type="button">See More</button></div>`;
      })
      .join("")
  );
  return markup;
};

//The function should be used to render a list of books of specific genre (category) 
export const renderBooksByCategory = (data) => {
  let categoryTitle;
  const markup = [...data]
    .map((book) => {
      const { _id: id, author, book_image, title, list_name: listName } = book;
      categoryTitle = listName;
      return `<li class="bookCategoryListItem" data-id=${id}>
            <div class="bestSellersThumb"><img class="bestSellersImage" src=${book_image} alt=${title}/></div>
            <div class="bookDescriptionThumb"><h3 class="bookTitle">${
              title.length > 18 ? title.slice(0, 18) + "..." : title
            }</h3>
            <p class="bookDescription">${author}</p></div>
        </li>`;
    })
    .join("");

  return `<h1 class="bestSellersHeader">${categoryTitle}</h1>
     <ul class="bookCategoryList">${markup}</ul>`;
};
