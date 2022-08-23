"use strict";

var _galleryItems = require("./gallery-items");

var _simplelightbox = _interopRequireDefault(require("simplelightbox"));

require("simplelightbox/dist/simple-lightbox.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add imports above this line
// Change code below this line
console.log(_galleryItems.galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];

_galleryItems.galleryItems.forEach(element => {
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.setAttribute('title', element.description);
  galleryImage.alt = element.description;
  galleryLink.append(galleryImage);
  items.push(galleryLink);
});

gallery.append(...items);
new _simplelightbox.default('.gallery a', {
  captionDelay: 250
});