

import { renderBooksByCategory, renderBestSellersList, clearMarkup } from './best-sellers.js';



async function fetchTopBooks() {
  try {
    startLoader(); 
    const { data } = await axios('top-books'); 
    stopLoader(); 
    return data; 
  } catch (error) {
    console.log(error); 
  }
}


const container = document.querySelector('#container-best');
const seeMoreBtn = document.querySelector('.seeMoreBtn');

async function  fetchAndRenderBooks () {
  try {
    const data = await fetchTopBooks();
    const markup = renderBestSellersList(data);
    container.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
};

async function loadBooksByCategory  (category) {
  try {
    clearMarkup();
    const data = await fetchBooksByCategory(category);
    const markup = renderBooksByCategory(data);
    container.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
};

seeMoreBtn.addEventListener('click', (event) => {
  if (event.target.classList.contains('seeMoreBtn')) {
    const categoryElement = event.target.closest('.book-list-wrapper');
    const category = categoryElement.dataset.category;
    loadBooksByCategory(category);
  }
});

fetchAndRenderBooks();
console.log(seeMoreBtn);





