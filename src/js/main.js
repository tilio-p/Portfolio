var image = document.querySelector(".l-woodcard");

var lightbox = document.querySelector(".lightbox");

function openLightbox() {
  lightbox.classList.add("is-open");
}

image.addEventListener("click", openLightbox);
