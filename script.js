// Select the slider track and all slides
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let current = 0; // current slide index

// Function to update the slide position
function updateSlide() {
  slider.style.transform = `translateX(-${current * 100}%)`;
}

// Next button
document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length; // loop back to start
  updateSlide();
});

// Previous button
document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length; // loop back to end
  updateSlide();
});

// Optional: keyboard navigation (arrow keys)
document.addEventListener('keydown', (event) => {
  if (event.key === "ArrowRight") {
    current = (current + 1) % slides.length;
    updateSlide();
  } else if (event.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide();
  }
});
