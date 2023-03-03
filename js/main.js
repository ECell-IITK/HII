// const arrowBtnLeft = document.querySelector(".btn-arrow-left");
// const arrowBtnRight = document.querySelector(".btn-arrow-right");

// const slides = document.querySelectorAll(".container .slide");
// const dotsContainer = document.querySelector(".dots");

// let curSlide = 0;

// // functions
// const goToSlide = (slide) => {
//   slides.forEach((s, i) => {
//     s.style.transform = `translateX(${104 * (i - slide)}%)`;
//   });
// };

// const nextSlide = function () {
//   curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// const prevSlide = function () {
//   curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// const createDots = () => {
//   slides.forEach((_, i) =>
//     dotsContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class='dot' data-slide='${i}'></button>`
//     )
//   );
// };

// const activateDot = (slide) => {
//   document
//     .querySelectorAll(".dot")
//     .forEach((dot) => dot.classList.remove("dot--active"));
//   document
//     .querySelectorAll(`.dot[data-slide="${slide}"]`)
//     .forEach((dot) => dot.classList.add("dot--active"));
// };

// // inital
// const init = () => {
//   goToSlide(0);
//   createDots();
//   activateDot(0);
// };
// init();

// // event listeners
// arrowBtnLeft.addEventListener("click", prevSlide);
// arrowBtnRight.addEventListener("click", nextSlide);

// setInterval(nextSlide, 3000);

// dotsContainer.addEventListener("click", function (e) {
//   // if needed to work only on dots and not on dot container
//   if (e.target.classList.contains("dot")) {
//     const { slide } = e.target.dataset;
//     goToSlide(slide);
//     activateDot(slide);
//   }
// });
