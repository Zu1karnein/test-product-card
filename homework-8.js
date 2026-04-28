import { productCards } from "./product-cards.js";

console.log("JS WORKS");

// template
const cardTemplate = document.getElementById("card-template");
const cardsSection = document.getElementById("cards-section");

function createCard(numberOfCards) {
  cardsSection.innerHTML = "";
  productCards.slice(0, numberOfCards).forEach((card) => {
    const cardClone = cardTemplate.content.cloneNode(true);

    const article = cardClone.querySelector("article");
    article.className = card.name;

    cardClone.querySelector(".title").textContent = card.title;
    cardClone.querySelector(".description").textContent = card.description;

    const list = cardClone.querySelector(".ingredients-list");
    card.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      list.appendChild(li);
    });

    cardClone.querySelector(".priceP").innerHTML = card.priceP;

    cardClone.querySelector(".img-card").src = card.image;

    cardsSection.appendChild(cardClone);
  });
}

// reduce
const allCards = productCards.reduce((acc, card) => {
  return [...acc, { [card.title]: card.description }];
}, []);

console.log(allCards);

// prompt
let numberOfCards;

while (true) {
  numberOfCards = Number(
    prompt("Введите количество карточек для отображения:"),
  );

  if (numberOfCards > 0 && numberOfCards <= 5) {
    break;
  } else {
    alert("Пожалуйста, введите число от 1 до 5.");
  }
}

createCard(numberOfCards);

// BUTTONS
// recolor first card
const firstCardRecolorBtn = document.getElementById("recolor-first-card-btn");
const firstCard = document.querySelector(".card__mousse");
const blueHashColor = "#96ffef";

firstCardRecolorBtn.addEventListener("click", () => {
  if (firstCard) {
    firstCard.style.backgroundColor = blueHashColor;
  } else {
    console.log("first card not found");
  }
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
