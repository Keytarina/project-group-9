import { fetchBookById } from './serviceApi';

const list = document.querySelector('.shopping-list-list');
const dummyMessage = document.querySelector('.shopping-dummy-message');
const controller = document.querySelector('.shopping-paginator-list');

const firstBtn = document.querySelector('button[data-page="first"]');
const secondBtn = document.querySelector('button[data-page="second"]');
const thirdBtn = document.querySelector('.btn-hidden');

const support = document.querySelector('.support');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const mediaQuerySupport = window.matchMedia('(max-width: 1439px)');

// Імітація наповнення LocalStorage id-шниками книг -------
// localStorage.clear();
let arrayOfBooksId = [];
arrayOfBooksId.push(
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc'
);
localStorage.setItem('id', JSON.stringify(arrayOfBooksId));
// -----------
// paginator - кількість книг, що буде відображатись на сторінці.
// page - сторінка списку книг.
// totalPages - скільки займатимуть сторінок книги з localStorage.

let paginator = 3;
let page = 1;
let totalPages = 1;

function checkCurrentPage() {
  if (Number.parseInt(localStorage.getItem('page')) > 0) {
    page = JSON.parse(localStorage.getItem('page'));
    console.log(`now is page ${page}`);
  } else page = 1;
}
checkCurrentPage();

// формування повідомлення про пустий кошик----
function showMessageIfEmpty() {
  if (JSON.parse(localStorage.getItem('id')).length > 0) {
    dummyMessage.classList.add('visually-hidden');
  } else {
    list.classList.add('visually-hidden');
    controller.classList.add('visually-hidden');
    dummyMessage.classList.remove('visually-hidden');
    list.removeEventListener('click', deleteBook);
    controller.removeEventListener('click', paginate);
  }
}
// ---------

// -----Функція що збирає з localStorage id-шники для пагінації-----
function fetchArrayOfBookId() {
  return (arrayOfBooksId = JSON.parse(localStorage.getItem('id')));
}
fetchArrayOfBookId();
// --------Функція, що повертає кількість книг, що вміщує сторінка і загальну кількість сторінок,
//   яку при цьому займуть книги у кошику------

fetchPaginator();

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
  totalPages = Math.ceil(
    JSON.parse(localStorage.getItem('id')).length / paginator
  );
  return totalPages;
}
// ---------------------------------------------

/////////////Фуекція, що перезаписує значення поточної сторінки із зберігає його у localStorage
function changePage(adduct) {
  page += adduct;
  localStorage.page = page;
  console.log(page);
  return page;
}
// ------------------------------------

function renderLastSession() {
  renderPage(page, paginator);
  pageNumeration(page);
}
renderLastSession();

function renderPage(page, paginator) {
  // fetchPaginator();
  renderBooksFromBusket(page, paginator);
}

function makeArrayToPaginate(page, paginator) {
  console.log(`при создании массива ${page} p[age]`);
  console.log(`при создании массив ${totalPages} total pages`);
  fetchArrayOfBookId();

  const arrayOfBooksToPaginate = arrayOfBooksId.splice(
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
  console.log(`'this is page ${page}`);
  console.log(`event check ${totalPages} total pages`);

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
  renderPage(page, paginator);
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
  renderPage(1, paginator);
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
  return renderPage(page, paginator);
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
}

function lastBtnActionWithFourBooksPerPage() {
  if (firstBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    thirdBtn.classList.add('current-page');
    changeNumeration(-3);
  } else if (secondBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    firstBtn.classList.add('current-page');
  } else if (thirdBtn.classList.contains('current-page')) {
    removingCurrentBtnStyle();
    secondBtn.classList.add('current-page');
  } else {
    changeNumeration(-1);
  }
}

function nextBtnAction() {
  if (page >= totalPages) {
    return;
  }
  if (paginator === 3) {
    return nextBtnActionWithThreeBooksPerPage();
  } else {
    nextBtnActionWithFourBooksPerPage();
  }
  changePage(1);
  renderPage(page, paginator);
}
function moreBtnAction(paginator) {
  if (Number.parseInt(firstBtn.textContent) + paginator - 1 <= totalPages) {
    removingCurrentBtnStyle();
    firstBtn.classList.add('current-page');
    if (paginator === 4) {
      changeNumeration(3);
    } else {
      changeNumeration(2);
    }
    changePage(firstBtn.textContent - page);
    return renderPage(page, paginator);
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
    renderPage(page, paginator);
  }
}
// --------------------

// ------функція, що перемальовує список книг у кошику---------
function renderBooksFromBusket(page, paginator) {
  list.innerHTML = '';
  showMessageIfEmpty();
  makeArrayToPaginate(page, paginator).forEach(id => {
    renderCardFromStorage(id);
  });
  list.addEventListener('click', deleteBook, { once: 'true' });
  controller.addEventListener('click', paginate);
}

// -----запит данних із серверу----
async function renderCardFromStorage(id) {
  try {
    const data = await fetchBookById(id);
    renderMarkup(data, id);
  } catch (error) {
    console.log(error);
    showMessageIfEmpty();
    dummyMessage.firstElementChild.textContent =
      'Server is not available right now. Please, try later';
    controller.classList.add('visually-hidden');
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
            width="100px"
            height="142px" loading="lazy"
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
                      width="32px"
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
                      width="16px"
                      height="16px"
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
                      width="16px"
                      height="16px"
                      class="shopping-card-link-icon shopping-card-link-shopbook"
                      src="./shop-book-shop-38x36px.eb5fbc1e.png"
                      alt="BookShop" loading="lazy"
                    />
                  </a>
                </li>
              </ul>
              <button class="shopping-btn-dump" type="button" data-book="${id}">
                <svg class="shopping-btn-dump-icon" width="16" height="16">
                  <use href="./icons.d473670f.svg#dump"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>`;

  list.insertAdjacentHTML('beforeend', markup);
  controller.classList.remove('visually-hidden');
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

const refresh = document.querySelector('.shopping-refresh');
refresh.addEventListener('click', refreshPage);

function refreshPage() {
  return renderLastSession();
}

function procedureDeletingBook(event) {
  const idToDelete = event.target.dataset.book;
  const index = arrayOfBooksId.indexOf(idToDelete);
  fetchArrayOfBookId();
  arrayOfBooksId.splice(index, 1);
  localStorage.setItem('id', JSON.stringify(arrayOfBooksId));
  fetchPaginator();
  if (arrayOfBooksId.length === 0) {
    return renderBooksFromBusket(page, paginator);
  }
  if (page > totalPages) {
    return lastBtnAction();
  }
  renderBooksFromBusket(page, paginator);
}
