const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let current = 0;

function updateSlide() {
  slider.style.transform = `translateX(-${current * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
});
