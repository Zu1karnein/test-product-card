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
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Серебристый",
  engine: "2.5L 4-цилиндровый",
};

car.owner = user;

// задание №6.3 создание функции которая добавляет максимальную скорость
const addMaxSpeed = (car) => {
  if (!("maxSpeed" in car)) {
    car.maxSpeed = 300;
  }
};

// задание №6.4 создание функции для вывода значения объекта
const showObjectValue = (obj, key) => {
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
const booksDune = [
  {
    title: "Дюна",
    author: "Альфред Бест",
    year: 1965,
    colorCover: "Синий",
    genre: "Фантастика",
  },
  {
    title: "Мессия Дюны",
    author: "Альфред Бест",
    year: 1971,
    colorCover: "Синий",
    genre: "Фантастика",
  },
  {
    title: "Дети Дюны",
    author: "Альфред Бест",
    year: 1975,
    colorCover: "Синий",
    genre: "Фантастика",
  },
];

// объединение двух массивов книг с помощью оператора spread
const allBooks = [...books, ...booksDune];

// задание №6.8 проверка на редкость, метод map
const rareBooks = allBooks.map((book) => ({
  ...book,
  isRare: book.year < 1900,
}));

console.log(rareBooks);
