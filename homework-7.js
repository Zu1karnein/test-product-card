import { comments } from "./comments";

// level 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter((num) => num >= 5);

const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];
const foundCar = cars.find((car) => car === "BMW");

function revArray(arr) {
  return arr.reverse();
}
revArray(numbers);
revArray(cars);

// level 2
const commentsCom = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(commentsCom);
