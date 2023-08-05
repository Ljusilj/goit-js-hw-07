import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const listRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);


listRef.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(createGalleryItems(galleryItems))

function createGalleryItems(galleryItems) {

  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li> `
  }).join("");
}


listRef.insertAdjacentHTML("beforeend", galleryMarkup);

listRef.addEventListener("click", onClick);
let instance = 0;

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
    `)

  instance.show()
  document.addEventListener("keydown", onEscClick)
}


function onEscClick(evt) {
  if (evt.code === "Escape" && instance !== null) {
    instance.close();
    document.removeEventListener("keydown", onEscClick)
  }
}




