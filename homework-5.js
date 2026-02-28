// задание №5.1 создание функции для вывода температуры
function getTemp(city, temp) {
  console.log(`Сейчас в ${city} температура - ${temp} градусов по Цельсию`);
}

// задание №5.2 переменная скорость света, функция проверка на скорость света
const LIGHT_SPEED = 299792458;

const compareSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    console.log(`${speed} - сверхсветовая скорость`);
  }
  if (speed < LIGHT_SPEED) {
    console.log(`${speed} - субсветовая  скорость`);
  } else {
    console.log(`${speed} - скорость света`);
  }
};

// задание №5.3 покупка продукта
let product = "apple";
let priceProduct = 10;

const buyProduct = (budget) => {
  console.log(
    (canBuy =
      budget >= priceProduct
        ? `${product} приобретён. Спасибо за покупку!`
        : `Вам не хватает ${priceProduct - budget}, пополните баланс`),
  );
};
