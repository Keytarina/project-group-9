function imageClickHandler(event) {
  const image= event.currentTarget.image;
  if (event.target.nodeName === image) {
    renderPreview(event.target.image);
  } 
}

function renderPreview(image) {
  const books = JSON.parse(localStorage.getItem("books"));
  const book = books.find(({ image }) => image === "IMG");
    const markup = createPreviewMarkup(book);
  modal.insertAdjacentHTML("beforeend", markup);
}

function createPreviewMarkup({ title, author, img, text }) {
    return `<div class='modal' 
  <img src='${img}' alt='${title}'>
    <h1>${title}>
  <h2>${author}</h2>
  <p>${text}</p>
  <ul class="icons">
        <li class="icon-link"></li>
        <li class="icon-link"></li>
        <li class="icon-link"></li>
    </ul>
  </div>`;
}