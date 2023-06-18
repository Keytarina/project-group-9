import {fetchBooksCategoryList} from './serviceApi.js'

const category = document.querySelector(".categories-item");

function markupList () {
  fetchBooksCategoryList().then(data => {
    const markupCategoriesList = data.map(({list_name }) => {
      return `<li class="categories-list" id="${list_name}">${list_name}</li>`;
    }).join('')
    category.insertAdjacentHTML('beforeend', markupCategoriesList);
  }).catch((error) => console.log(error))
};

markupList();
