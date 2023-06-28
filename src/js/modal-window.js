import { fetchBookById } from './serviceApi.js';
import { reedBookID, addBookID, dellBookID } from './authorization.js';
const modal = document.querySelector('.modal');
const modalCard = document.querySelector('.modal-card');
const containerBest = document.getElementById('container-best');
const congratsMessage = document.querySelector('.modal-window-text');
const closeModalBtn = document.querySelector('.cls-button');
const backdrop = document.querySelector('[data-modal-backdrop]');

let user = 'GF';

function closeModalByEscape(event) {
  if (event.code === 'Escape') {
    removeListeners();
    return hiddenAll();
  }
}
function closeModalWindow(event) {
  if ((event.currentTarget.dataset.modal = 'close')) {
    removeListeners();
    return hiddenAll();
  }
}

function removeListeners() {
  closeModalBtn.removeEventListener('click', closeModalWindow, {
    once: 'true',
  });
  document.removeEventListener('keydown', closeModalByEscape, {
    once: 'true',
  });
  backdrop.removeEventListener('click', closeBackdrop);
}

function closeBackdrop(event) {
  if (event.target === backdrop) {
    removeListeners();
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

async function checkBookStatus(id, user) {
  try {
    const data = await reedBookID(user);
    if (data.includes(id)) {
      modalCard.firstElementChild.lastElementChild.textContent =
        'remove from the shopping list';
      congratsMessage.textContent = 'This book is already in your cart';
      congratsMessage.classList.remove('is-hidden');
      modalCard.firstElementChild.lastElementChild.dataset.modalSubmit = 'del';
    }
  } catch (error) {
    console.log(error);
  }
}

function fetchUser() {
  if (localStorage.getItem('user-id')) {
    user = localStorage.getItem('user-id');
  } else {
    user = 'GF';
  }
  return user;
}

// -------------Функція, що визиває модальне вікно-------------
containerBest.addEventListener('click', imageClickHandler);
function imageClickHandler(event) {
  if (event.target.nodeName === 'IMG') {
    const idToCallModal = event.target.dataset.idImg;
    hiddenAll();
    fetchUser();
    renderModalWindow(idToCallModal, user);
    document.addEventListener('keydown', closeModalByEscape, { once: 'true' });
    closeModalBtn.addEventListener('click', closeModalWindow, { once: 'true' });
    backdrop.addEventListener('click', closeBackdrop);
  }
}
// -------------------------------------

async function renderModalWindow(id, user) {
  try {
    const dataFromServer = await fetchBookById(id);
    renderMarkupModalWindow(dataFromServer, id);
    const addBtn = modalCard.firstElementChild.lastElementChild;
    addBtn.addEventListener('click', addOrDeleteBook);
    checkBookStatus(id, user);
  } catch (error) {
    console.log(error);
  }
}

function renderMarkupModalWindow(book, id) {
  let {
    title,
    author,
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
const amazon = new URL(
  '../image/shopping/shop-amazon-62x19px.png',
  import.meta.url
);
const applebook = new URL(
  '../image/shopping/shop-read-33x32px.png',
  import.meta.url
);
const bookshop = new URL(
  '../image/shopping/shop-book-shop-38x36px.png',
  import.meta.url
);

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
                      width="62"
                      class="shopping-card-link-icon shopping-card-link-amazon"
                      src=${amazon}
                      alt="Amazon" loading="lazy"
                    />
                  </a>
                </li>
                <li class="icon-link">
                  <a
                    class="shopping-card-shop-link"
                    href="${appleUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apple Books link"
                  >
                    <img
                      width="32"
                      height="32"
                      class="shopping-card-link-icon"
                      src=${applebook}
                      alt="Apple Books" loading="lazy"
                    />
                  </a></li>
                <li class="icon-link">
                  <a
                    class="shopping-card-shop-link"
                    href="${bookShopUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BookShop link"
                  >
                    <img
                      width="38"
                      height="36"
                      class="shopping-card-link-icon shopping-card-link-shopbook"
                      src=${bookshop}
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

function addOrDeleteBook(event) {
  fetchUser();
  if (user !== 'GF' || user == 0) {
    const idChoosenBook = event.target.dataset.id;
    if (event.target.dataset.modalSubmit === 'add') {
      addBookID(idChoosenBook, user);
      event.target.textContent = 'remove from the shopping list';
      congratsMessage.textContent =
        'Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
      congratsMessage.classList.remove('is-hidden');
      event.target.dataset.modalSubmit = 'del';
    } else {
      dellBookID(idChoosenBook, user);
      event.target.textContent = 'add to shopping list';
      congratsMessage.classList.add('is-hidden');
      event.target.dataset.modalSubmit = 'add';
    }
  } else if ((user = 'underfined' || user === 'GF')) {
    hiddenAll();
    removeListeners();
    toggleAuthorizationThrooModal();
  }
}

const openAuthorizationBtn = document.querySelector(
  '[data-authorization-open]'
);
const authorization = document.querySelector('[data-authorization]');
const authorizationWindowForm = document.querySelector(
  '.authorization-window-form'
);

async function toggleAuthorizationThrooModal() {
  const isAuthorizationOpen =
    openAuthorizationBtn.getAttribute('aria-expanded') === 'true' || false;
  openAuthorizationBtn.setAttribute('aria-expanded', !isAuthorizationOpen); // функція toggleAuthorization, змінює атрибут 'aria-expanded' кнопки відкриття вікна авторизації відповідно до стану вікна авторизації (відкрито - true, закрито - false)

  authorization.classList.toggle('is-hidden'); // відкриття/закриття вікна авторизації

  if (!isAuthorizationOpen) {
    document.body.style.overflow = 'hidden'; // заблокувати скролл
  } else {
    document.body.style.overflow = 'scroll'; // розблокувати скролл
    authorizationWindowForm.reset(); // очистити форму
  }
}
