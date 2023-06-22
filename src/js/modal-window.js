import { fetchBookById } from './serviceApi.js';

const modal = document.querySelector('.modal');
const modalCard = document.querySelector('.modal-card');
const containerBest = document.getElementById('container-best');
const congratsMessage = document.querySelector('.modal-window-text');
const closeModalBtn = document.querySelector('.cls-button');
const backdrop = document.querySelector('[data-modal-backdrop]');

let storageOfBooksId = ['643282b1e85766588626a0dc', '643282b1e85766588626a080'];
localStorage.setItem('id', JSON.stringify(storageOfBooksId));

function closeModalByEscape(event) {
  if (event.code === 'Escape') {
    modalCard.removeEventListener('click', addOrDeleteBook);
    closeModalBtn.removeEventListener('click', closeModalWindow, {
      once: 'true',
    });
    return hiddenAll();
  }
}
function closeModalWindow(event) {
  if (event.currentTarget.nodeName === 'BUTTON') {
    document.removeEventListener('keydown', closeModalByEscape, {
      once: 'true',
    });
    modalCard.removeEventListener('click', addOrDeleteBook);
    return hiddenAll();
  }
}

function hiddenAll() {
  toggleModalHidden();
  toggleBacdropHidden();
  toggleScroll();
}
function toggleScroll() {
  document.body.classList.toggle('stop-scrolling');
}

function toggleModalHidden() {
  modal.classList.toggle('is-hidden');
}

function toggleBacdropHidden() {
  backdrop.classList.toggle('is-hidden');
}

// -------------Фуекція що визиває модальне вікно-------------
containerBest.addEventListener('click', imageClickHandler);
function imageClickHandler(event) {
  const idToCallModal = event.target.dataset.idImg;
  hiddenAll();
  renderModalWindow(idToCallModal);

  document.addEventListener('keydown', closeModalByEscape, { once: 'true' });
  closeModalBtn.addEventListener('click', closeModalWindow, { once: 'true' });
}
// -------------------------------------

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
    amazonUrl,
    appleUrl,
    bookShopUrl,
  });
  modalCard.innerHTML = '';

  return modalCard.insertAdjacentHTML('afterbegin', markup);
}

function createModalWindow({
  id,
  title,
  author,
  book_image,
  description,
  amazonUrl,
  appleUrl,
  bookShopUrl,
}) {
  return `
  <div class="modal-window">
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
                    class="shopping-card-shop-link"
                    href="${amazonUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Amazon link"
                    ><img
                      width="62px"
                      class="shopping-card-link-icon shopping-card-link-amazon"
                      src="./shop-amazon-62x19px.a7ec3af8.png"
                      alt="Amazon" loading="lazy"
                    />
                  </a>
                </li>
                <li>
                  <a
                    class="shopping-card-shop-link"
                    href="${appleUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apple Books link"
                  >
                    <img
                      width="32px"
                      height="32px"
                      class="shopping-card-link-icon"
                      src="./shop-read-33x32px.a9f158e0.png"
                      alt="Apple Books" loading="lazy"
                    />
                  </a></li>
                <li>
                  <a
                    class="shopping-card-shop-link"
                    href="${bookShopUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BookShop link"
                  >
                    <img
                      width="38px"
                      height="36px"
                      class="shopping-card-link-icon shopping-card-link-shopbook"
                      src="./shop-book-shop-38x36px.eb5fbc1e.png"
                      alt="BookShop" loading="lazy"
                    />
                  </a>
        </li>
      </ul>
    </div>
    <button
    class="btn-action button pointer"
    data-modal-submit="add" data-id=${id}
    type="button">add to shopping list</button>
  </div>`;
}

modalCard.addEventListener('click', addOrDeleteBook);
function addOrDeleteBook(event) {
  if (event.target.classList.contains('btn-action')) {
    const idChoosenBook = event.target.dataset.id;
    if (event.target.dataset.modalSubmit === 'add') {
      addingBookToBusket(idChoosenBook);
      event.target.textContent = 'remove from the shopping list';
      congratsMessage.classList.remove('is-hidden');
      event.target.dataset.modalSubmit = 'del';
    } else {
      deletingBookFromBusket(idChoosenBook);
      event.target.textContent = 'add to shopping list';
      congratsMessage.classList.add('is-hidden');
      event.target.dataset.modalSubmit = 'add';
    }
  }
}

function addingBookToBusket(idChoosenBook) {
  console.log(storageOfBooksId);
  if (!JSON.parse(localStorage.getItem('id'))) {
    storageOfBooksId = [];
    storageOfBooksId.push(idChoosenBook);
    return localStorage.setItem('id', JSON.stringify(storageOfBooksId));
  }
  storageOfBooksId = JSON.parse(localStorage.getItem('id'));

  if (storageOfBooksId.includes(idChoosenBook)) {
    return console.log('this book already in a busket');
  } else {
    storageOfBooksId.push(idChoosenBook);
    localStorage.setItem('id', JSON.stringify(storageOfBooksId));
  }
}

function deletingBookFromBusket(idChoosenBook) {
  console.log('deleting');
  if (!JSON.parse(localStorage.getItem('id'))) {
    storageOfBooksId = [];
    return localStorage.setItem('id', JSON.stringify(storageOfBooksId));
  }
  storageOfBooksId = JSON.parse(localStorage.getItem('id'));
  if (storageOfBooksId.includes(idChoosenBook)) {
    const index = storageOfBooksId.indexOf(idChoosenBook);
    storageOfBooksId.splice(index, 1);
    localStorage.setItem('id', JSON.stringify(storageOfBooksId));
    return;
  }
}
