

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const listRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

listRef.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(createGalleryItems(galleryItems));

function createGalleryItems(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
  }).join(""); 
}


const instance =  new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });













