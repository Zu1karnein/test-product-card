// задание №5.1 создание функции для вывода температуры
function logTemp(city, temp) {
  console.log(`Сейчас в ${city} температура - ${temp} градусов по Цельсию`);
}

// задание №5.2 переменная скорость света, функция проверка на скорость света
const lightSpeed = 299792458;

const testSpeed = (speed) => {
  if (speed > lightSpeed) {
    console.log(`${speed} - сверхсветовая скорость`);
  }
  if (speed < lightSpeed) {
    console.log(`${speed} - субсветовая  скорость`);
  } else {
    console.log(`${speed} - скорость света`);
  }
};

// задание №5.3 покупка продукта
let product = "apple";
let priceProduct = 10;

const buyProduct = (budget) => {
  return (canBuy =
    budget >= priceProduct
      ? `${product} приобретён. Спасибо за покупку!`
      : `Вам не хватает ${priceProduct - budget}, пополните баланс`);
};
