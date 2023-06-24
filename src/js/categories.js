import {
  renderBooksByCategory,
  clearMarkup,
  renderBestSellersList,
} from './best-sellers.js';
import {
  fetchBooksCategoryList,
  fetchBooksByCategory,
  fetchTopBooks,
} from './serviceApi.js';

const category = document.querySelector('.categories-item');
const list = document.querySelector('.categories-item');
let li = document.getElementsByClassName('categories-list');
const container = document.querySelector('#container-best');

list.addEventListener('click', changeColor);
function changeColor(e) {
  if (li === document.getElementsByClassName('categories-list')) {
    li = e.target;
  }
  li.classList.remove('active');
  li = e.target;
  li.classList.add('active');
  return li;
}

function markupList() {
  fetchBooksCategoryList()
    .then(data => {
      const markupCategoriesList = data
        .map(({ list_name: listName }) => {
          return `<li class="categories-list" id=${listName}>${listName}</li>`;
        })
        .join('');
      category.insertAdjacentHTML('beforeend', markupCategoriesList);
    })
    .catch(error => console.log(error));
}

markupList();
// -Event listeners added for each list-item on categories list.

list.addEventListener('click', renderCategories);
list.addEventListener('click', renderTopBooks);

// - One of two callback functions below are being invoked while clicking on such list-item, depending on it's text-content.
async function renderCategories(e) {
  if (e.target.nodeName !== 'LI' && e.target.textContent === 'All categories') {
    return;
  }
  try {
    const data = await fetchBooksByCategory(e.target.textContent);
    const markup = renderBooksByCategory(data);
    clearMarkup();
    container.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}

async function renderTopBooks(e) {
  if (e.target.textContent === 'All categories') {
    try {
      const data = await fetchTopBooks();
      const markup = renderBestSellersList(data);
      clearMarkup();
      container.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
      console.log(error);
    }
  }
};
