// recolor first card
const recolorFirstCardBtn = document.getElementById("recolor-first-card-btn");
const firstCard = document.querySelector(".card__mousse");
const blueHashColor = "#96ffef";

recolorFirstCardBtn.addEventListener("click", () => {
  firstCard.style.backgroundColor = blueHashColor;
});

// recolor all cards
const catalogCards = document.querySelectorAll(".card");
const recolorAllCardsBtn = document.getElementById("recolor-all-cards-btn");
const greenHashColor = "#abff96";

recolorAllCardsBtn.addEventListener("click", () => {
  catalogCards.forEach((card) => (card.style.backgroundColor = greenHashColor));
});

// open google
const googleOpenBtn = document.getElementById("open-google-btn");
googleOpenBtn.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm(
    "Вы действительно хотите открыть перейти на сайт google.com?",
  );

  if (answer) {
    window.open("http://google.com");
  } else {
    console.log("Пользователь отменил переход на сайт google.com");
  }
}

// main title to console
const printMainTitle = document.querySelector(".main_title");

printMainTitle.addEventListener("mouseenter", () => {
  console.log(printMainTitle.textContent);
});

// change color of button
const recolorHimselfBtn = document.getElementById("recolor-himself-btn");

recolorHimselfBtn.addEventListener("click", () => {
  recolorHimselfBtn.classList.toggle("blue-bg");
});
