// задание №6.1 создание объекта моими пользователя
const user = {
  name: "Али",
  lastName: "Шамсаев",
  email: "ali.shamsaev@example.com",
  work: "Программист",
  position: "Frontend Developer",
  age: 20,
  country: "Россия",
  city: "Москва",
};

// задание №6.2 создание объекта с информацией о машине
const car = {
  owner: user,

  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Серебристый",
  engine: "2.5L 4-цилиндровый",
};

// задание №6.3 создание функции проверка наличия максимальной скорости
const checkMaxSpeed = (car) => {
  if (!("maxSpeed" in car)) {
    car.maxSpeed = 300;
  }
};

// задание №6.4 создание функции для вывода значения объекта
const showValue = (obj, key) => {
  console.log(obj[key]);
};

// задание №6.5 массив с продуктами
const products = ["apple", "banana", "orange", "grape", "watermelon"];

// задание №6.6 массив объектов с информацией о книгах
const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    colorCover: "Серый",
    year: 1869,
    genre: "Роман",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    colorCover: "Красный",
    genre: "Роман",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    colorCover: "Зеленый",
    genre: "Роман",
  },
  {
    title: "Анна Каренина",
    author: "Лев Толстой",
    year: 1877,
    colorCover: "Серый",
    genre: "Роман",
  },
];

// добавление новой книги в массив объектов с книгами

books.push({
  title: "Герой нашего времени",
  author: "Михаил Лермонтов",
  year: 1840,
  colorCover: "Черный",
  genre: "Роман",
});

// задание №6.7 второй массив книг
const books2 = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1948,
    colorCover: "Черный",
    genre: "Антология",
  },
  {
    title: "Скотный двор",
    author: "Овсепян Армен",
    year: 1948,
    colorCover: "Черный",
    genre: "Антология",
  },
];

// объединение двух массивов книг с помощью оператора spread
const allBooks = [...books, ...books2];

// задание №6.8 проверка на редкость, метод map
const rareBooks = allBooks.map((book) => ({
  ...book,
  isRare: book.year < 1900,
}));

console.log(rareBooks);
