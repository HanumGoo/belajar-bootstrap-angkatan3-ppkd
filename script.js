"use strict";

const modal = new bootstrap.Modal(document.getElementById("imageModal"));
const modalImage = document.getElementById("modalImage");

document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modal.show();
  });
});


