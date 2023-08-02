import { galleryItems } from './gallery-items.js';
// Change code below this line
const listRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

listRef.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(createGalleryItems(galleryItems))

function createGalleryItems(galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
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


listRef.addEventListener("click", onClick); 

function onClick(evt) {
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery-item")) {
        return;
    }
console.log(evt.target);
}


// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()
