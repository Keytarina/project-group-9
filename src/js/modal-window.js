import { fetchBookById } from './serviceApi.js';

const modal = document.querySelector('.modal');
const containerBest = document.getElementById('container-best');
// modal.classList.toggle('is-hidden');
// const addToShoppingListBtn = document.querySelector(
//   'button[data-modal-submit="add"]'
// );
modal.classList.add('is-hidden');

containerBest.addEventListener('click', imageClickHandler);
function imageClickHandler(event) {
  console.log(event.target);
  const idToCallModal = event.target.dataset.idImg;
  renderModalWindow(idToCallModal);
  modal.classList.remove('is-hidden');
}

async function renderModalWindow(id) {
  try {
    const dataFromServer = await fetchBookById(id);
    renderMarkupModalWindow(dataFromServer, id);
  } catch (error) {
    console.log(error);
  }
}

function renderMarkupModalWindow(book, id) {
  let {
    title = 'Title unknown',
    author = 'Author unknown',
    book_image = './image/shopping/dummy-book-tr.png',
    description,
    buy_links,
  } = book;
  const arrayOfShops = buy_links;
  let amazonUrl = 'https://www.amazon.com';
  let appleUrl = 'https://books.apple.com';
  let bookShopUrl = 'https://bookshop.org';
  amazonUrl = arrayOfShops[0].url;
  appleUrl = arrayOfShops[1].url;
  bookShopUrl = arrayOfShops[4].url;
  if (description.trim().length === 0) {
    description = 'Description is not available for that book';
  }

  let markup = '';
  markup = createModalWindow({
    id,
    title,
    author,
    book_image,
    description,
  });
  // const books = JSON.parse(localStorage.getItem('books'));
  // const book = books.find(({ image }) => image === book_image);
  // const markup = createModalWindow(book);
  modal.innerHTML = '';

  return modal.insertAdjacentHTML('afterbegin', markup);
}

function createModalWindow({ id, title, author, book_image, description }) {
  return `<button class="cls-button" data-modal-close>
        <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18"
       fill="none"><path stroke="#111" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="2.5" 
        d="M16 2 2 16M2 2l14 14"/></svg></button>
  <div class="modal-window" data-id=${id}>
    <div class="picture">
      <img class="card-img" src="${book_image}" alt="${description}" />
    </div>
    <div class="info">
      <h1 class="titles">${title}</h1>
      <h2 class="authors">${author}</h2>
      <p class="descriptions">${description}</p>
      <ul class="icons">
        <li class="icon-link">
          <a
            class="card-link"
            href="${amazonUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./image/Amazon-min.png"
          /></a>
        </li>
        <li class="icon-link">
          <a
            class="card-link"
            href="${appleUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./image/List-min.png"
          /></a>
        </li>
        <li class="icon-link">
          <a
            class="card-link"
            href="${bookShopUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./image/Book-min.png"
          /></a>
        </li>
      </ul>
    </div>
    <button class="btn-action button pointer" data-modal-submit="add" type="submit">
        add to shopping list
      </button>
  </div>`;
}