var image = document.querySelector(".l-woodcard");

var lightbox = document.querySelector(".lightbox");

function openLightbox() {
  lightbox.classList.add("is-open");
}

image.addEventListener("click", openLightbox);

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
