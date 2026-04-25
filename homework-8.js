import { productCards } from "./product-cards.js";

console.log("JS WORKS");

const cardTemplate = document.getElementById("card-template");
const cardsSection = document.getElementById("cards-section");

productCards.forEach((card) => {
  const cardClone = cardTemplate.content.cloneNode(true);

  cardClone.querySelector(".title").textContent = card.title;
  cardClone.querySelector(".description").textContent = card.description;

  cardClone.querySelector(".firstIngredient").textContent =
    card.firstIngredient;
  cardClone.querySelector(".secondIngredient").textContent =
    card.secondIngredient;
  cardClone.querySelector(".thirdIngredient").textContent =
    card.thirdIngredient;

  cardClone.querySelector(".priceP").innerHTML = card.price || card.priceP;

  cardClone.querySelector(".img-card").src = card.image;

  cardsSection.appendChild(cardClone);
});
