import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItemes(galleryItems){
    const markup = galleryItems.map(galleryItems => {
        return
         `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </li>`;
    });
        console.log(markup);
} 


// console.log(galleryItems);
