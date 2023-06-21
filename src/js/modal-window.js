import {fetchBookById} from './serviceApi.js'

function imageClickHandler(event) {
  const id = event.currentTarget.id;
  if (event.target.nodeName === "IMG") {
    renderModalWindow(event.target.book_image);
  } 
}

function renderModalWindow(book_image) {
  const books = JSON.parse(localStorage.getItem('books'));
  const book = books.find(({ image }) => image === book_image);
  const markup = createModalWindow(book);
  modal.innerHTML = "";
  modal.insertAdjacentHTML('beforeend', markup);
}

function createModalWindow({id, title, author, book_image, description }) {
  return `<div class='modal-window' data-id=${id}> 
    <div class="picture"><img class="card-img" src='${book_image}' alt='${description}'></div>
      <div class="info"><h1 class="titles">${title}>
      <h2 class="authors">${author}</h2>
      <p class="descriptions">${description}</p>
      <ul class="icons">
            <li class="icon-link"><a  class="card-link" href="https://www.amazon.com/" target="_blank"
                    rel="noopener noreferrer">
            <img src="./image/Amazon-min.png"></a>
            </li>
            <li class="icon-link"><a class="card-link" href="https://books.apple.com/" target="_blank"
                    rel="noopener noreferrer">
            <img src="./image/List-min.png"></a>
            </li>
            <li class="icon-link"><a class="card-link" href="https://bookshop.org/" target="_blank"
                    rel="noopener noreferrer">
            <img src="./image/Book-min.png"></a>
            </li>
        </ul>
        </div>
    </div>`;
}