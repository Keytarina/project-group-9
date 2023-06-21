import {fetchTopBooks} from './serviceApi.js'
//This function recieves parsed data from api and returns the markup of book-list
//at the home page. Should be used after any of serviceApi functions in async code.

export const renderBestSellersList = (data) => {
  const header =
    '<h1 class="best-sellers-header">Best Sellers <span class="best-sellers-accent">Books</span></h1>';
  const markup = header.concat(
    [...data]
      .map((list) => {
        const { list_name: listName, books } = list;
        return `<div class="book-list-wrapper"><h2 class="best-sellers-title">${listName}</h2>
     <ul class="best-sellers-list">${books
       .map((book) => {
         const { _id: id, author, book_image, title } = book;
         return `<li class="best-sellers-list-item" data-id=${id}>
              <div class="best-sellers-thumb"><img class="best-sellers-image" src=${book_image} alt=${title}/></div>
              <div class="book-description-thumb"><h3 class="book-title">${
                title.length > 18 ? title.slice(0, 18) + "..." : title
              }</h3>
              <p class="book-description">${author}</p></div>
    
          </li>`;
       })
       .join(
         ""
       )}</ul><button class="see-more-btn" type="button">See More</button></div>`;
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
      return `<li class="book-category-list-item" data-id=${id}>
            <div class="best-sellers-thumb"><img class="best-sellers-image" src=${book_image} alt=${title}/></div>
            <div class="book-description-thumb"><h3 class="book-title">${
              title.length > 18 ? title.slice(0, 18) + "..." : title
            }</h3>
            <p class="book-description">${author}</p></div>
        </li>`;
    })
    .join("");

  return `<h1 class="best-sellers-header">${categoryTitle}</h1>
     <ul class="book-category-list">${markup}</ul>`;
};
const container = document.querySelector('#container-best');
const foo = async() => {
  try {
    const data = await fetchTopBooks();
    const markup = renderBestSellersList(data);
    container.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
console.log(err);
  }

};
export const clearMarkup = () => container.innerHTML = "";
foo();