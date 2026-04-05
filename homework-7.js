import { comments } from "./comments.js";

// level 1
// задание 7.1 массив с числами
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter((num) => num >= 5);

// задание 7.2 массив с объектами машин
const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];
console.log(cars.includes("BMW"));

// задание 7.3 функция которая переворачивает массив
function revArray(arr) {
  return arr.reverse();
}
revArray(numbers);
revArray(cars);

// level 2
// задание 7.4 массив с комментариями и фильтрация по email
const commentsCom = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(commentsCom);

// задание 7.5 функция которая меняет postId
const swapPostIds = comments.map((comment) => {
  return { ...comment, postId: comment.id <= 5 ? 2 : 1 };
});

// задание 7.6 функция которая возвращает массив с id и name
const commentsIdName = comments.map(({ id, name }) => ({ id, name }));

// задание 7.7 функция которая добавляет isInvalid в зависимости от длины body
const addIsInvalid = comments.map((comment) => {
  return { ...comment, isInvalid: comment.body.length > 180 };
});

// level 3
// задание 7.8 функция которая возвращает массив с email

// через reduce
const emails = comments.reduce((acc, comment) => {
  return [...acc, comment.email];
}, []);

// через map
const emails2 = comments.map((comment) => comment.email);

// задание 7.9 привести массив emails к строке
const emailsString = emails.join(", ");
