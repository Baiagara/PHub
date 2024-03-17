const slider = document.querySelector(".testimonial-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showSlide(n) {
  slider.scrollTo({
    left: n * slider.offsetWidth,
    behavior: "smooth",
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const askBtn = document.getElementById("ask-btn");
const questionInput = document.getElementById("question-input");

askBtn.addEventListener("click", () => {
  const question = questionInput.value.trim();
  if (question) {
    // Here, you can add your logic to handle the question
    // For example, you can display the question in the FAQ container
    const faqContainer = document.querySelector(".faq-content");
    const newFaqItem = document.createElement("div");
    newFaqItem.classList.add("faq-item");
    newFaqItem.innerHTML = `
      <div class="faq-question">
        <span class="arrow">&#8672;</span>
        ${question}
      </div>
      <div class="faq-answer">Short answer to the question...</div>
    `;
    faqContainer.appendChild(newFaqItem);
    questionInput.value = "";
  }
});

const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar");

navToggle.addEventListener("click", function () {
  navBar.classList.toggle("show");
  navToggle.classList.toggle("active");
});
