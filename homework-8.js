import { productCards } from "./product-cards.js";

console.log("JS WORKS");

// template
const cardTemplate = document.getElementById("card-template");
const cardsSection = document.getElementById("cards-section");

function createCard(numberOfCards) {
  cardsSection.innerHTML = "";

  limitedCards.forEach((card) => {
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

    cardClone.querySelector(".priceValue").innerHTML =
      `${card.priceValue}&#8381`;

    cardClone.querySelector(".img-card").src = `img/${card.image}.png`;

    cardsSection.appendChild(cardClone);
  });
}

// reduce
const productInfo = productCards.reduce((acc, card) => {
  return [...acc, { [card.title]: card.description }];
}, []);

console.log(productInfo);

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

// limit number of cards
const limitedCards = productCards.slice(0, numberOfCards);

createCard(numberOfCards);
