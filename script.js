// recolor first card
const firstCardRecolorBtn = document.getElementById("recolor-first-card-btn");
const firstCard = document.querySelector(".card__mousse");
const blueHashColor = "#96ffef";

firstCardRecolorBtn.addEventListener("click", () => {
  firstCard.style.backgroundColor = blueHashColor;
});

// recolor all cards
const catalogCards = document.querySelectorAll(".card");
const allCardsRecolorBtn = document.getElementById("recolor-all-cards-btn");
const greenHashColor = "#abff96";

allCardsRecolorBtn.addEventListener("click", () => {
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
const mainTitle = document.querySelector(".main_title");

mainTitle.addEventListener("mouseenter", () => {
  console.log(mainTitle.textContent);
});

// change color of button
const himselfRecolorBtn = document.getElementById("recolor-himself-btn");

himselfRecolorBtn.addEventListener("click", () => {
  himselfRecolorBtn.classList.toggle("blue-bg");
});
