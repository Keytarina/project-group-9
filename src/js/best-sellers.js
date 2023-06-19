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

//The function below hasn't been completed yet because of backend malfunctions.
//Don't export until it's done;
const renderBooksByCategory = (data) => {
  const markup = [...data]
    .map((list) => {
      const { list_name: listName, books } = list;
      return `<h1>${listName}</h2>
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
   .join("")}</ul>`;
    })
    .join("");
  return markup;
};
