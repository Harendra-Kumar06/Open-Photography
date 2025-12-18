/* IMAGE MODAL WITH NEXT / PREVIOUS */

const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// open modal
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
    currentIndex = index;
  });
});

// next image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
});

// previous image
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// close on background click
modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
});

let startX = 0;
let endX = 0;

modal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    // swipe left → next image
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
  }

  if(endX - startX > 50){
    // swipe right → previous image
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
  }
});


