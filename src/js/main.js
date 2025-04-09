var image = document.querySelector(".l-woodcard");

var lightbox = document.querySelector(".lightbox");

function openLightbox() {
  lightbox.classList.add("is-open");
}

image.addEventListener("click", openLightbox);

import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".navnext",
    prevEl: ".navpre",
  },
});

swiper.slideTo(1, 0);
