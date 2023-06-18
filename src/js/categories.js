import {fetchBooksCategoryList,
  fetchTopBooks,
  fetchBooksByCategory,
  fetchBookById,} from './serviceApi.js'

const category = document.querySelector(".categories-item");


category.addEventListener('click', () => {
  fetchBooksCategoryList().then(data => {
    const markupCategoriesList = data.map(({list_name }) => {
      return `<li class="categories-list" id="${list_name}">${list_name}</li>`;
    }).join('')
    category.insertAdjacentHTML('beforeend', markupCategoriesList);
  }).catch((error) => console.log(error))
});

fetchBooksCategoryList();

// async function fetchBooksCategoryList(list_name) {
//   try {
//     console.log(123456);
//     const response = await axios.get(
      
//     );
//     return `<li class="" id="${list_name}">${list_name}</li>`;;
//   }
//   catch (error) {
//       console.log(error);
//   }
// };
