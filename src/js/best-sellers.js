//This function recieves parsed data from api and returns the markup of book-list
//at the home page. Should be used after any of serviceApi functions in async code.

const renderBestSellersList = data => {
  const markup = [...data]
    .map(list => {
      const { list_name: listName, books } = list;
      return `<h2 class="bestSellersTitle">${listName}</h2>
   <ul class="bestSellersList">${books
     .map(book => {
       const { _id: id, author, book_image, title } = book;
       return `<li class="bestSellersListItem" data-id=${id}>
            <div class="bestSellersThumb"><img class="bestSellersImage" src=${book_image} alt=${title}/></div>
            <div class="bookDescriptionThumb"><h3 class="bookTitle">${
              title.length > 18 ? title.slice(0, 18) + '...' : title
            }</h3>
            <p class="bookDescription">${author}</p></div>
  
        </li>`;
     })
     .join('')}</ul><button class="seeMoreBtn" type="button">See More</button>`;
    })
    .join('');
  return markup;
};

export default renderBestSellersList;