import { fetchBookById } from './serviceApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { dellBookID } from './authorization.js';

console.log(localStorage.page);

const list = document.querySelector('.shopping-list-list');
const dummyMessage = document.querySelector('.shopping-dummy-message');
const controller = document.querySelector('.shopping-paginator-list');
const refresh = document.querySelector('.shopping-refresh-btn');

const startBtn = document.querySelector('button[data-page="start"]');
const lastBtn = document.querySelector('button[data-page="last"]');
const firstBtn = document.querySelector('button[data-page="first"]');
const secondBtn = document.querySelector('button[data-page="second"]');
const thirdBtn = document.querySelector('.btn-hidden');
const moreBtn = document.querySelector('button[data-page="more"]');
const nextBtn = document.querySelector('button[data-page="next"]');
const endBtn = document.querySelector('button[data-page="end"]');

const mediaQuery = window.matchMedia('(min-width: 768px)');

const support = document.querySelector('.support');

const mediaQuerySupport = window.matchMedia('(max-width: 1439px)');
support.style.position = 'static';

function handleDesktopChange(e) {
  if (e.matches) {
    support.classList.add('visually-hidden');
  } else {
    support.classList.remove('visually-hidden');
  }
}
mediaQuerySupport.addListener(handleDesktopChange);
handleDesktopChange(mediaQuerySupport);

// localStorage.clear();

let storageOfBooksId = [];

// -----------
// paginator - кількість книг, що буде відображатись на сторінці.
// page - сторінка списку книг.
// totalPages - скільки займатимуть сторінок книги з localStorage.

let paginator = 3;
let page = 1;
let totalPages = 1;

// -----Функція що збирає з localStorage id-шники для пагінації-----
function fetchArrayOfBookId() {
  if (!JSON.parse(localStorage.getItem('id'))) {
    storageOfBooksId = [];
    return localStorage.setItem('id', JSON.stringify(storageOfBooksId));
  } else {
    return (storageOfBooksId = JSON.parse(localStorage.getItem('id')));
  }
}
fetchArrayOfBookId();

// --------Функція, що повертає кількість книг, що вміщує сторінка і загальну кількість сторінок,
//   яку при цьому займуть книги у кошику------

function fetchPaginator() {
  refreshNumberBooksPerPage();
  refreshTotalPages();
}

function refreshNumberBooksPerPage() {
  if (mediaQuery.matches) {
    // console.log('4 on page');
    return (paginator = 4);
  } else {
    // console.log('3 on page');
    return (paginator = 3);
  }
}
function refreshTotalPages() {
  return (totalPages = Math.ceil(
    JSON.parse(localStorage.getItem('id')).length / paginator
  ));
}
fetchPaginator();

// формування повідомлення про пустий кошик----
function showMessageIfEmpty() {
  if (JSON.parse(localStorage.getItem('id')).length > 0) {
    dummyMessage.classList.add('visually-hidden');
    list.classList.remove('visually-hidden');
    list.addEventListener('click', deleteBook, { once: 'true' });
  } else {
    list.classList.add('visually-hidden');
    controller.classList.add('visually-hidden');
    dummyMessage.classList.remove('visually-hidden');
    list.removeEventListener('click', deleteBook, { once: 'true' });
    controller.removeEventListener('click', paginate);
  }
}
// ---------

// ------------Рендер останньої сесії---------------------------------

  const timerId = setTimeout(() => {
    checkForUpdate();
  }, 10000);

function renderLastSession() {
  checkCurrentPage();
  console.log(page);
  console.log(localStorage.page);
  fetchPaginator();

  renderBooksFromBusket(page, paginator);
  pageNumeration(page);
  console.log(page);
  console.log(localStorage.page);
}
renderLastSession();
// ----------------------------------------

function checkCurrentPage() {
  if (Number.parseInt(localStorage.getItem('page')) > 0) {
    console.log('more then null');
    page = JSON.parse(localStorage.getItem('page'));
    console.log(`now is page ${page}`);
    if (page > totalPages) {
      console.log('more then need');
      page = totalPages;
    }
  } else {
    console.log('page else');
    page = 1;
  }
}

// -----------Функція зміни відображення кількості книжок на сторінці-------------
function handleTabletChange(mediaQuery) {
  // let booksOnBusket = JSON.parse(localStorage.getItem('id')).length;
  fetchPaginator();
  if (mediaQuery.matches) {
    thirdBtn.classList.remove('visually-hidden');
    // page = Math.ceil(booksOnBusket / 4);
    // localStorage.page = page;
  } else if (list.children.length === 4) {
    list.lastElementChild.classList.remove('visually-hidden');
  } else {
    // thirdBtn.classList.add('visually-hidden');

    // page = Math.ceil(booksOnBusket / 3);
    if (list.children.length === 4) {
      list.lastElementChild.classList.add('visually-hidden');
    }
  }

  // localStorage.page = page;
  pagesToShow();
  pageNumeration(page);
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
// ------------------------------------------------------

/////////////Функція, що перезаписує значення поточної сторінки і зберігає його у localStorage
function changePage(adduct) {
  page += adduct;
  localStorage.page = page;
  return page;
}
// ------------------------------------

function makeArrayToPaginate(page, paginator) {
  fetchArrayOfBookId();
  localStorage.page = page;
  const arrayOfBooksToPaginate = storageOfBooksId.splice(
    (page - 1) * paginator,
    paginator
  );
  return arrayOfBooksToPaginate;
}

function changeNumeration(weight) {
  firstBtn.textContent = Number.parseInt(firstBtn.textContent) + weight;
  secondBtn.textContent = Number.parseInt(secondBtn.textContent) + weight;
  thirdBtn.textContent = Number.parseInt(thirdBtn.textContent) + weight;
}
function pageNumeration(page) {
  firstBtn.textContent = page;
  secondBtn.textContent = page + 1;
  thirdBtn.textContent = page + 2;
}

function paginate(event) {
  fetchPaginator();

  if (fetchArrayOfBookId().length <= paginator) {
    return;
  }

  if (Number.parseInt(event.target.textContent) > totalPages) {
    return;
  }

  if (Number.parseInt(event.target.textContent) === page) {
    return;
  }
  if (event.target.dataset.page === 'start') {
    if (page > 1) {
      return startBtnAction();
    }
  }
  if (event.target.dataset.page === 'last') {
    return lastBtnAction();
  }
  if (event.target.dataset.page === 'first') {
    return actionByNumeredBtns(firstBtn);
  }

  if (event.target.dataset.page === 'second') {
    if (totalPages >= 2) {
      return actionByNumeredBtns(secondBtn);
    }
  }
  if (event.target.dataset.page === 'third') {
    if (totalPages >= 3) {
      return actionByNumeredBtns(thirdBtn);
    }
  }
  if (event.target.dataset.page === 'more') {
    return moreBtnAction(paginator);
  }

  if (event.target.dataset.page === 'next') {
    return nextBtnAction();
  }
  if (event.target.dataset.page === 'end') {
    return endBtnAction();
  }
}

function actionByNumeredBtns($numeredBtn) {
  changePage(Number.parseInt($numeredBtn.textContent) - page);
  removingCurrentBtnStyle();
  $numeredBtn.classList.add('current-page');
  renderBooksFromBusket(page, paginator);
}

function removingCurrentBtnStyle() {
  firstBtn.classList.remove('current-page');
  secondBtn.classList.remove('current-page');
  thirdBtn.classList.remove('current-page');
}

function startBtnAction() {
  removingCurrentBtnStyle();
  pageNumeration(1);
  changePage(-page + 1);
  firstBtn.classList.add('current-page');
  renderBooksFromBusket(1, paginator);
  return;
}

function lastBtnAction() {
  if (page <= 1) {
    return;
  }
  if (page === 2) {
    return startBtnAction();
  }

  if (paginator === 3) {
    lastBtnActionWithThreeBooksPerPage();
  } else {
    lastBtnActionWithFourBooksPerPage();
  }
  changePage(-1);
  return renderBooksFromBusket(page, paginator);
}

function lastBtnActionWithThreeBooksPerPage() {
  // if (Number.parseInt(firstBtn.textContent) <= 2) {
  //   return startBtnAction();
  // }
  if (firstBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    secondBtn.classList.add('current-page');
    changeNumeration(-2);
  } else if (secondBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    firstBtn.classList.add('current-page');
  } else {
    changeNumeration(-1);
  }
  if (page === 3) {
    if (firstBtn.classList.contains('current-page')) {
      removingCurrentBtnStyle();
      secondBtn.classList.add('current-page');
      changeNumeration(-2);
    } else if (secondBtn.classList.contains('current-page')) {
      removingCurrentBtnStyle();
      firstBtn.classList.add('current-page');
      changeNumeration(-1);
    }
  }
}

function lastBtnActionWithFourBooksPerPage() {
  if (firstBtn.classList.contains('current-page') && page !== 3) {
    removingCurrentBtnStyle();
    thirdBtn.classList.add('current-page');
    changeNumeration(-3);
  } else if (secondBtn.classList.contains('current-page') && page !== 3) {
    removingCurrentBtnStyle();
    firstBtn.classList.add('current-page');
  } else if (thirdBtn.classList.contains('current-page') && page !== 3) {
    removingCurrentBtnStyle();
    secondBtn.classList.add('current-page');
  }
  if (page === 3) {
    if (firstBtn.classList.contains('current-page')) {
      removingCurrentBtnStyle();
      secondBtn.classList.add('current-page');
      changeNumeration(-2);
    } else if (secondBtn.classList.contains('current-page')) {
      removingCurrentBtnStyle();
      firstBtn.classList.add('current-page');
    } else {
      removingCurrentBtnStyle();
      secondBtn.classList.add('current-page');
    }
  }
}

function nextBtnAction() {
  if (page >= totalPages) {
    return;
  }
  if (paginator === 3) {
    nextBtnActionWithThreeBooksPerPage();
  } else {
    nextBtnActionWithFourBooksPerPage();
  }
  console.log('next');
  changePage(1);
  renderBooksFromBusket(page, paginator);
}

function moreBtnAction(paginator) {
  if (Number.parseInt(firstBtn.textContent) + paginator - 1 <= totalPages) {
    console.log('more');
    removingCurrentBtnStyle();
    firstBtn.classList.add('current-page');
    if (paginator === 4) {
      changeNumeration(3);
    } else {
      changeNumeration(2);
    }
    changePage(firstBtn.textContent - page);
    return renderBooksFromBusket(page, paginator);
  }
}

function nextBtnActionWithThreeBooksPerPage() {
  if (firstBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    secondBtn.classList.add('current-page');
  } else if (secondBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    firstBtn.classList.add('current-page');
    changeNumeration(2);
  } else {
    changeNumeration(1);
  }
}

function nextBtnActionWithFourBooksPerPage() {
  if (firstBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    secondBtn.classList.add('current-page');
  } else if (secondBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    thirdBtn.classList.add('current-page');
  } else if (thirdBtn.classList.contains('current-page')) {
    return moreBtnAction(paginator);
  } else {
    changeNumeration(1);
  }
}

function endBtnAction() {
  if (totalPages === 2) {
    return nextBtnAction();
  }
  if (page != totalPages) {
    removingCurrentBtnStyle();
    if (paginator === 4) {
      thirdBtn.classList.add('current-page');
      pageNumeration(totalPages - 2);
    } else {
      secondBtn.classList.add('current-page');
      pageNumeration(totalPages - 1);
    }

    changePage(totalPages - page);
    renderBooksFromBusket(page, paginator);
  }
}
// --------------------

function pagesToShow() {
  if (totalPages <= 1) {
    controller.classList.add('visually-hidden');
    controller.removeEventListener('click', paginate);
    return;
  }
  const difr = totalPages - page;
  if (totalPages > 4) {
    console.log('more than 4');
    startBtn.classList.remove('visually-hidden');
    secondBtn.classList.remove('visually-hidden');
    lastBtn.classList.remove('visually-hidden');
    moreBtn.classList.remove('visually-hidden');
    nextBtn.classList.remove('visually-hidden');
    endBtn.classList.remove('visually-hidden');
  }
  if (paginator === 3) {
    thirdBtn.classList.add('visually-hidden');
    if (totalPages === 3) {
      console.log('its 3, paginator = 3');
      startBtn.classList.add('visually-hidden');
      lastBtn.classList.add('visually-hidden');
      moreBtn.classList.add('visually-hidden');
      nextBtn.classList.remove('visually-hidden');
      endBtn.classList.add('visually-hidden');
    } else if (totalPages === 4) {
      console.log('its 4, paginator = 3');
      startBtn.classList.remove('visually-hidden');
      lastBtn.classList.remove('visually-hidden');
      moreBtn.classList.remove('visually-hidden');
      nextBtn.classList.add('visually-hidden');
      endBtn.classList.remove('visually-hidden');
    }
    if (difr < 1 && firstBtn.classList.contains('current-page')) {
      console.log('less than 1-3-1c ');
      secondBtn.classList.add('visually-hidden');
      nextBtn.classList.add('visually-hidden');
      endBtn.classList.add('visually-hidden');
      moreBtn.classList.add('visually-hidden');
    } else if (difr < 1) {
      console.log('less than 1-3 less1');
      secondBtn.classList.remove('visually-hidden');
      nextBtn.classList.add('visually-hidden');
      endBtn.classList.add('visually-hidden');
      moreBtn.classList.add('visually-hidden');
    } else if (difr <= 1) {
      console.log('less than 1-3 =1');
      secondBtn.classList.remove('visually-hidden');
      nextBtn.classList.remove('visually-hidden');
      endBtn.classList.add('visually-hidden');
      moreBtn.classList.add('visually-hidden');
    } else if (difr <= 1 && firstBtn.classList.contains('current-page')) {
      console.log('less than 1-3-1');
      secondBtn.classList.remove('visually-hidden');
      nextBtn.classList.remove('visually-hidden');
      endBtn.classList.add('visually-hidden');
      moreBtn.classList.add('visually-hidden');
    } else if (difr > 1) {
      console.log('more than 1-difr');
      secondBtn.classList.remove('visually-hidden');
    }
  }
  controller.classList.remove('visually-hidden');
  controller.addEventListener('click', paginate);

  if (paginator === 4) {
    if (totalPages === 3) {
      console.log('its 3, paginator = 4');
      startBtn.classList.add('visually-hidden');
      lastBtn.classList.add('visually-hidden');
      thirdBtn.classList.remove('visually-hidden');
      moreBtn.classList.add('visually-hidden');
      nextBtn.classList.add('visually-hidden');
      endBtn.classList.add('visually-hidden');
    } else if (totalPages === 4) {
      console.log('its 4, paginator = 4');
      startBtn.classList.remove('visually-hidden');
      lastBtn.classList.remove('visually-hidden');
      thirdBtn.classList.remove('visually-hidden');
      moreBtn.classList.remove('visually-hidden');
      nextBtn.classList.remove('visually-hidden');
      endBtn.classList.add('visually-hidden');
    }
  }
  if (totalPages === 2) {
    startBtn.classList.add('visually-hidden');
    lastBtn.classList.add('visually-hidden');
    thirdBtn.classList.add('visually-hidden');
    moreBtn.classList.add('visually-hidden');
    nextBtn.classList.add('visually-hidden');
    endBtn.classList.add('visually-hidden');
  }
  if (difr < 1 && firstBtn.classList.contains('current-page')) {
    console.log('less than 1-3-1c ');
    secondBtn.classList.add('visually-hidden');
    thirdBtn.classList.add('visually-hidden');
    nextBtn.classList.add('visually-hidden');
    endBtn.classList.add('visually-hidden');
    moreBtn.classList.add('visually-hidden');
  } else if (difr < 1 && secondBtn.classList.contains('current-page')) {
    console.log('less than 1-3 less1');
    secondBtn.classList.remove('visually-hidden');
    thirdBtn.classList.add('visually-hidden');
    nextBtn.classList.add('visually-hidden');
    endBtn.classList.add('visually-hidden');
    moreBtn.classList.add('visually-hidden');
  } else if (difr <= 1) {
    console.log('less than 1-3 =1');
    secondBtn.classList.remove('visually-hidden');
    nextBtn.classList.remove('visually-hidden');
    endBtn.classList.add('visually-hidden');
    moreBtn.classList.add('visually-hidden');
  } else if (difr <= 1 && firstBtn.classList.contains('current-page')) {
    console.log('less than 1-3-1');
    secondBtn.classList.remove('visually-hidden');
    nextBtn.classList.remove('visually-hidden');
    endBtn.classList.add('visually-hidden');
    moreBtn.classList.add('visually-hidden');
  } else if (difr > 1) {
    console.log('more than 1-difr');
    secondBtn.classList.remove('visually-hidden');
  }
  if (page === 1) {
    startBtn.classList.add('visually-hidden');
    lastBtn.classList.add('visually-hidden');
  }
}

// ------функція, що перемальовує список книг у кошику---------
function renderBooksFromBusket(page, paginator) {
  localStorage.page = page;

  list.innerHTML = '';
  showMessageIfEmpty();
  fetchPaginator();
  makeArrayToPaginate(page, paginator).forEach(id => {
    renderCardFromStorage(id);
  });
  clearInterval(timerId);
  timerId = setTimeout(() => {
    checkForUpdate();
  }, 10000);
  pagesToShow();
  storageOfBooksId = JSON.parse(localStorage.getItem('id'));
}

// -----запит данних із серверу----
async function renderCardFromStorage(id) {
  try {
    const data = await fetchBookById(id);
    renderMarkup(data, id);
  } catch (error) {
    console.log(error);
    showMessageIfEmpty();
    controller.classList.add('visually-hidden');
    dummyMessage.firstElementChild.textContent =
      'Server is not available right now. Please, try later';
    dummyMessage.classList.remove('visually-hidden');
  }
}
// ----------формування шаблону-----------
function renderMarkup(book, id) {
  let {
    title = 'Title unknown',
    author = 'Author unknown',
    book_image = './image/shopping/dummy-book-tr.png',
    list_name = 'No category',
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
  markup = `<li class="shopping-list-item"><div class="shopping-list-item-card">
          <img
            class="shopping-card-img"
            src="${book_image}"
            alt="book cover"
            width="100"
            height="142" loading="lazy"
          />
          <div class="shopping-list-card-info">
            <h2 class="shopping-card-title">${title}</h2>
            <p class="shopping-card-category">${list_name}</p>
            <p class="shopping-card-descr">${description}</p><p class="visually-hidden">
              Description is not available for that book
            </p>
            <div class="shopping-card-bottom-container">
              <p class="shopping-card-author">${author}</p>
              <ul class="shopping-card-shop-list">
                <li>
                  <a
                    class="shopping-card-shop-link"
                    href="${amazonUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Amazon link"
                    ><img
                      width="32"
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
                      width="16"
                      height="16"
                      class="shopping-card-link-icon"
                      src="./shop-read-33x32px.a9f158e0.png"
                      alt="Apple Books" loading="lazy"
                    />
                  </a>
                </li>
                <li>
                  <a
                    class="shopping-card-shop-link"
                    href="${bookShopUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BookShop link"
                  >
                    <img
                      width="16"
                      height="16"
                      class="shopping-card-link-icon shopping-card-link-shopbook"
                      src="./shop-book-shop-38x36px.eb5fbc1e.png"
                      alt="BookShop" loading="lazy"
                    />
                  </a>
                </li>
              </ul>
              <button class="shopping-btn-dump" type="button" data-book="${id}">
                <svg class="shopping-btn-dump-icon" width="16" height="16">
                  <use href="./icons-all.435abbb0.svg#dump"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>`;

  list.insertAdjacentHTML('beforeend', markup);
}
// ------------

// -------видалення книги із кошика---------

function deleteBook(event) {
  if (
    event.target.nodeName === 'use' ||
    event.target.nodeName === 'svg' ||
    event.target.nodeName === 'BUTTON'
  ) {
    procedureDeletingBook(event);
  }
  return;
}

refresh.addEventListener('click', refreshPage);

function refreshPage() {
  refresh.style.color = 'var(--main-text-color)';
  checkCurrentPage();
  renderBooksFromBusket(page, paginator);
}

function procedureDeletingBook(event) {
  const idToDelete = event.target.dataset.book;
  const index = storageOfBooksId.indexOf(idToDelete);
  fetchArrayOfBookId();
  storageOfBooksId.splice(index, 1);
  localStorage.setItem('id', JSON.stringify(storageOfBooksId));
  // dellBookID(idToDelete);
  fetchPaginator();
  if (storageOfBooksId.length === 0) {
    return showMessageIfEmpty();
  }
  if (page > totalPages) {
    return lastBtnAction();
  }
  renderBooksFromBusket(page, paginator);
}

function checkForUpdate() {
  if (storageOfBooksId.length < JSON.parse(localStorage.getItem('id')).length) {
    refresh.style.color = 'var(--background-color-main)';
    Notify.success(
      `You have more new books in the busket. Click Refresh button to check`
    );
  }
}
