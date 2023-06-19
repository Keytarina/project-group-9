import { fetchBookById } from './serviceApi';

const list = document.querySelector('.shopping-list-list');
const dummyMessage = document.querySelector('.shopping-dummy-message');

// Імітація наповнення LocalStorage id-шниками книг -------
const arrayOfId = [];
arrayOfId.push('643282b1e85766588626a0dc', '643282b1e85766588626a080');
localStorage.setItem('id', JSON.stringify(arrayOfId));
// -----------

// localStorage.clear();
let arrayOfBooksId = [];
arrayOfBooksId = JSON.parse(localStorage.getItem('id'));
// формування повідомлення про пустий кошик----
function showMessageIfEmpty() {
  if (arrayOfBooksId.length > 0) {
    dummyMessage.classList.add('visually-hidden');
  } else {
    list.classList.add('visually-hidden');
    dummyMessage.classList.remove('visually-hidden');
  }
}
// ---------

// ------функція, що перемальовує список книг у кошику---------
function renderBooksFromBusket() {
  list.innerHTML = '';
  showMessageIfEmpty();
  arrayOfBooksId.forEach(id => {
    renderCardFromStorage(id);
  });
}
renderBooksFromBusket(arrayOfBooksId);

// -----запит данних із серверу----
async function renderCardFromStorage(id) {
  try {
    const data = await fetchBookById(id);
    renderMarkup(data);
  } catch (error) {
    console.log(error);
  }
}
// ----------формування шаблону-----------
function renderMarkup(book) {
  const {
    title,
    author,
    book_image = './image/shopping/dummy-book-tr.png',
    list_name,
    description = 'Description is not available for that book',
    buy_links,
    _id,
  } = book;
  const arrayOfShops = buy_links;
  const amazonUrl = arrayOfShops[0].url;
  const appleUrl = arrayOfShops[1].url;
  const bookShopUrl = arrayOfShops[4].url;

  let markup = '';
  markup = `<li class="shopping-list-item"><div class="shopping-list-item-card">
          <img
            class="shopping-card-img"
            src="${book_image}"
            alt="book cover"
            width="100px"
            height="142px"
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
                      src="./image/shopping/shop-amazon-62x19px.png"
                      alt="Amazon"
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
                      src="./image/shopping/shop-read-33x32px.png"
                      alt="Apple Books"
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
                      src="./image/shopping/shop-book-shop-38x36px.png"
                      alt="BookShop"
                    />
                  </a>
                </li>
              </ul>
              <button class="shopping-btn-dump" type="button" data-book="${_id}">
                <svg class="shopping-btn-dump-icon" width="16" height="16">
                  <use href="./image/shopping/icons.svg#dump"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>`;

  list.insertAdjacentHTML('beforeend', markup);
}
// ------------

// -------видалення книги із кошика---------

list.addEventListener('click', deleteBook);
function deleteBook(event) {
  const menuItemsByTagName = document.querySelectorAll('.shopping-btn-dump');
  console.log(menuItemsByTagName);
  if (
    event.target.nodeName === 'use' ||
    event.target.nodeName === 'svg' ||
    event.target.nodeName === 'BUTTON'
  ) {
    const idToDelete = event.target.dataset.book;
    const index = arrayOfBooksId.indexOf(idToDelete);
    arrayOfBooksId.splice(index, 1);
    console.log(arrayOfBooksId);
    console.log(event.target);
    renderBooksFromBusket(arrayOfBooksId);
  }

  return;
}
