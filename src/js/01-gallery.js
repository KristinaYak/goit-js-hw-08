// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");
const imgsMarkup = createImageItem(galleryItems); 
galleryContainer.insertAdjacentHTML('beforeend', imgsMarkup);

function createImageItem(galleryItems) {
   return galleryItems

   .map(({ preview, original, description }) => 

   `<a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${ preview}" alt="${description}" />
 </a>`
 )
 .join('');
 }

 galleryContainer.addEventListener('click',onImgClickCreateModal)
 function onImgClickCreateModal(event){
	event.preventDefault();
 }
	const lightbox = new SimpleLightbox('.gallery a', {captionData: "${description}", captionDelay: 250});
