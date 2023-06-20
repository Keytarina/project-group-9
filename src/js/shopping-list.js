import { fetchBookById } from './serviceApi';

const list = document.querySelector('.shopping-list-list');
const dummyMessage = document.querySelector('.shopping-dummy-message');
const controller = document.querySelector('.shopping-paginator-list');

const firstBtn = document.querySelector('button[data-page="first"]');
const secondBtn = document.querySelector('button[data-page="second"]');
const thirdBtn = document.querySelector('.btn-hidden');

// Імітація наповнення LocalStorage id-шниками книг -------
const arrayOfId = [];
arrayOfId.push(
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a080',
  '643282b1e85766588626a080',
  '643282b1e85766588626a080',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a080',
  '643282b1e85766588626a080',
  '643282b1e85766588626a080'
);
localStorage.setItem('id', JSON.stringify(arrayOfId));
// -----------

let arrayOfBooksId = [];
let arrayOfBooksIdToPaginate = [];
arrayOfBooksId = JSON.parse(localStorage.getItem('id'));

// формування повідомлення про пустий кошик----
function showMessageIfEmpty() {
  if (arrayOfBooksId.length > 0) {
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
arrayOfBooksIdToPaginate = JSON.parse(localStorage.getItem('id'));
let paginator = 3;
let page = 1;
let totalPages = 1;
checkNumberBooksPerPage();
checkTotalPages();

function checkNumberBooksPerPage() {
  if (getComputedStyle(thirdBtn).display == 'none') {
    // console.log('3 on page');
    return (paginator = 3);
  } else {
    // console.log('4 on page');
    return (paginator = 4);
  }
}
function checkTotalPages() {
  checkNumberBooksPerPage();
  totalPages = Math.ceil(
    JSON.parse(localStorage.getItem('id')).length / paginator
  );
  return totalPages;
}

function renderFirstPage(page, paginator) {
  checkNumberBooksPerPage();
  checkTotalPages();
  renderBooksFromBusket(page, paginator);
}
renderFirstPage(page, paginator);

function makeArrayToPaginate(page, paginator) {
  console.log(`при создании массива ${page} p[age]`);
  console.log(`при создании массив ${totalPages} total pages`);
  arrayOfBooksIdToPaginate = JSON.parse(localStorage.getItem('id'));

  const arrayOfBooksToPaginate = arrayOfBooksIdToPaginate.splice(
    (page - 1) * paginator,
    paginator
  );
  arrayOfBooksIdToPaginate = JSON.parse(localStorage.getItem('id'));

  return arrayOfBooksToPaginate;
}

function changeNumeration(weight) {
  firstBtn.textContent = Number.parseInt(firstBtn.textContent) + weight;
  console.log(secondBtn.textContent);
  secondBtn.textContent = Number.parseInt(secondBtn.textContent) + weight;
  console.log(secondBtn.textContent);
  thirdBtn.textContent = Number.parseInt(thirdBtn.textContent) + weight;
}
function pageNumeration(page) {
  firstBtn.textContent = page;
  secondBtn.textContent = page + 1;
  thirdBtn.textContent = page + 2;
}

function paginate(event) {
  console.log(`'this is page ${page}`);
  console.log(`event check ${totalPages} total pages`);
  checkNumberBooksPerPage();
  checkTotalPages();
  if (JSON.parse(localStorage.getItem('id')).length <= paginator) {
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
      startBtnAction();
      return;
    }
  }
  if (event.target.dataset.page === 'last') {
    if (page <= 1) {
      return;
    }
    if (getComputedStyle(thirdBtn).display == 'none') {
      lastBtnActionWithThreeBooksPerPage();
    } else {
      lastBtnActionWithFourBooksPerPage();
    }
  }
  if (event.target.dataset.page === 'first') {
    actionByNumeredBtns(firstBtn);
    return;
  }

  if (event.target.dataset.page === 'second') {
    checkTotalPages();
    if (totalPages >= 2) {
      actionByNumeredBtns(secondBtn);
      return;
    }
  }
  if (event.target.dataset.page === 'third') {
    checkTotalPages();
    if (totalPages >= 3) {
      actionByNumeredBtns(thirdBtn);
      return;
    }
  }
  if (event.target.dataset.page === 'more') {
    checkNumberBooksPerPage();
    moreBtnAction(paginator);
    return;
  }
  if (event.target.dataset.page === 'end') {
    checkTotalPages();
    console.log(page);
    console.log(totalPages);
    if (page != totalPages) {
      console.log('hoor');
      removingCurrentBtnStyle();
      firstBtn.classList.add('current-page');
      page = totalPages;
      pageNumeration(page);
      renderFirstPage(page, paginator);
      return;
    }
  }
  if (event.target.dataset.page === 'next') {
    checkTotalPages();
    if (page >= totalPages) {
      return;
    }
    if (getComputedStyle(thirdBtn).display == 'none') {
      nextBtnActionWithThreeBooksPerPage();
      return;
    } else {
      nextBtnActionWithFourBooksPerPage();
      return;
    }
  }
}

function actionByNumeredBtns($numeredBtn) {
  page = Number.parseInt($numeredBtn.textContent);
  removingCurrentBtnStyle();
  $numeredBtn.classList.add('current-page');
  renderFirstPage(page, paginator);
}

function removingCurrentBtnStyle() {
  firstBtn.classList.remove('current-page');
  secondBtn.classList.remove('current-page');
  thirdBtn.classList.remove('current-page');
}

function startBtnAction() {
  removingCurrentBtnStyle();
  pageNumeration(1);
  page = 1;

  firstBtn.classList.add('current-page');
  renderFirstPage(1, paginator);
  return;
}

function moreBtnAction(paginator) {
  checkNumberBooksPerPage();
  checkTotalPages();

  if (Number.parseInt(firstBtn.textContent) + paginator - 1 <= totalPages) {
    removingCurrentBtnStyle();
    firstBtn.classList.add('current-page');
    changeNumeration(3);
    page = firstBtn.textContent;
    renderFirstPage(page, paginator);
    return;
  }
}

function lastBtnActionWithThreeBooksPerPage() {
  if (Number.parseInt(firstBtn.textContent) <= 2) {
    startBtnAction();
    return;
  }
  if (firstBtn.classList.contains('current-page')) {
    firstBtn.classList.remove('current-page');
    secondBtn.classList.add('current-page');
    changeNumeration(-2);
  } else if (secondBtn.classList.contains('current-page')) {
    secondBtn.classList.remove('current-page');
    firstBtn.classList.add('current-page');
  } else {
    changeNumeration(-1);
  }
  page -= 1;
  renderFirstPage(page, paginator);
}

function lastBtnActionWithFourBooksPerPage() {
  if (Number.parseInt(firstBtn.textContent) <= 4) {
    startBtnAction();
    return;
  }
  if (firstBtn.classList.contains('current-page')) {
    firstBtn.classList.remove('current-page');
    thirdBtn.classList.add('current-page');
    changeNumeration(-3);
  } else if (secondBtn.classList.contains('current-page')) {
    secondBtn.classList.remove('current-page');
    firstBtn.classList.add('current-page');
  } else if (thirdBtn.classList.contains('current-page')) {
    secondBtn.classList.add('current-page');
    thirdBtn.classList.remove('current-page');
  } else {
    changeNumeration(-1);
  }
  page -= 1;
  renderFirstPage(page, paginator);
}

function nextBtnActionWithThreeBooksPerPage() {
  if (firstBtn.classList.contains('current-page')) {
    firstBtn.classList.remove('current-page');
    secondBtn.classList.add('current-page');
  } else if (secondBtn.classList.contains('current-page')) {
    secondBtn.classList.remove('current-page');
    firstBtn.classList.add('current-page');
    changeNumeration(2);
  } else {
    changeNumeration(1);
  }
  page += 1;
  renderFirstPage(page, paginator);
}

function nextBtnActionWithFourBooksPerPage() {
  if (firstBtn.classList.contains('current-page')) {
    firstBtn.classList.remove('current-page');
    secondBtn.classList.add('current-page');
  } else if (secondBtn.classList.contains('current-page')) {
    secondBtn.classList.remove('current-page');
    thirdBtn.classList.add('current-page');
  } else if (thirdBtn.classList.contains('current-page')) {
    moreBtnAction(paginator);
    return;
  } else {
    changeNumeration(1);
  }
  page += 1;

  renderFirstPage(page, paginator);
}
// --------------------

// ------функція, що перемальовує список книг у кошику---------
function renderBooksFromBusket(page, paginator) {
  list.innerHTML = '';
  showMessageIfEmpty();
  makeArrayToPaginate(page, paginator).forEach(id => {
    renderCardFromStorage(id);
  });
}

// -----запит данних із серверу----
async function renderCardFromStorage(id) {
  try {
    const data = await fetchBookById(id);
    renderMarkup(data, id);
  } catch (error) {
    console.log(error);
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
                      src="./shop-amazon-62x19px.7917bd99.png"
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
                      src="./shop-read-33x32px.d5fa78b5.png"
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
                      src="./shop-book-shop-38x36px.536ec7a9.png"
                      alt="BookShop" loading="lazy"
                    />
                  </a>
                </li>
              </ul>
              <button class="shopping-btn-dump" type="button" data-book="${id}">
                <svg class="shopping-btn-dump-icon" width="16" height="16">
                  <use href="./icons.61d18740.svg#dump"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>`;

  list.insertAdjacentHTML('beforeend', markup);
  list.addEventListener('click', deleteBook);

  controller.addEventListener('click', paginate);
}
// ------------

// -------видалення книги із кошика---------

function deleteBook(event) {
  if (
    event.target.nodeName === 'use' ||
    event.target.nodeName === 'svg' ||
    event.target.nodeName === 'BUTTON'
  ) {
    const idToDelete = event.target.dataset.book;
    const index = arrayOfBooksId.indexOf(idToDelete);
    arrayOfBooksId.splice(index, 1);
    localStorage.setItem('id', JSON.stringify(arrayOfBooksId));
    checkNumberBooksPerPage();
    checkTotalPages();
    if (page > totalPages) {
      page = totalPages;
    }
    // thirdBtn.textContent = Number.parseInt(thirdBtn.textContent) - 1;
    console.log(page),
      console.log(paginator),
      renderBooksFromBusket(page, paginator);
  }

  return;
}
