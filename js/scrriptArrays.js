// // 1. Клонирование массива
// // Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// function arrayClone(arr) {
//   let arr1 = arr.slice(0);
//   return arr1;
// }

// // console.log(arrayClone(vegetables));
// console.log(arrayClone(["Капуста", "Репа", "Редиска", "Морковка"])); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
// ........................................................................................................................
// // 2. Преобразование массива в строку
// // Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// // Элементы массива будут разделены запятой.Получите результат двумя разными методами.

// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// let str1 = vegetables.join(", ");
// let str2 = "";
// for (const vegetable of vegetables) {
//   str2 = `${str2} ${vegetable},`;
// }
// console.log(str1);
// console.log(str2);
// .......................................................................................................................
// 3. Двоеточие между нечётными числами
// Пользователь вводит многозначное число через promt.
// Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие(: ) между двумя нечетными числами.
//     Например, если вводится число 55639217, то на выход должно быть 5: 563: 921: 7.

// const num = prompt("Введите число");
// function colonOdd(num) {
//   const result1 = num.split("");
//   let result2 = [];
//   for (let i = 0; i < result1.length; i++) {
//     result2.push(result1[i]);
//     if (result1[i] % 2 === 1 && result1[i + 1] % 2 === 1) {
//       result2.push(":");
//     }
//   }
//   return result2.join("");
// }

// console.log(colonOdd(num)); // 5:5
// const changeEven = (numbers, value) => {
//   let newNumber = [];
//   numbers.forEach((num) => {
//     if (num % 2 === 0) {
//       newNumber.push(num + value);
//     } else {
//       newNumber.push(num);
//     }
//   });
//   return newNumber;
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetLength = planets.map((planet) => planet.length);

// console.log(planetLength);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// const makeCarsWithDiscount = (cars) => {
//   cars = structuredClone(cars);

//   return cars.map((car) => {
//     car.price;

//     // return car;
//   });
// };
// console.table(makeCarsWithDiscount(allCars));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// console.table(allCars);
// const studentNames = students.map((name) => name.name);
// console.log(studentNames);

// const findNames = (array, b) => {
//   array = structuredClone(array);
//   return array.find((student) => student.name === b || `Іди в жопу)))`);
// };
// const findNames = (array, b) => {
//   array = structuredClone(array);
//   return array.find((student) => student.name === b) || "Іди в жопу)))";
// };
// console.log(findNames(students, "Ajax"));
// console.log(findNames(students, "Illia"));

// const studentNames = students.map((student) => student.name);
// const studentNames = students.map((student) => student.name);

// const studentNames = (students) => {
//   let names = [];
//   students.forEach((student) => {
//     names.push(student.name);
//   });
//   return names;
// };

// console.log(studentNames);
// console.log(studScore);
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.flatMap((student) => student.courses);
// console.log(mappedCourses);
// ................................................................................21.02
// 5. Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr
//   (игнорируйте чувствительность к регистру).
// const arr = ['php', 'php', 'css', 'css', 'script', 'script', 'html', 'html', 'java'];
// function removeDuplicates(arr) {
//   const newArr = [];
//   arr.forEach(el => {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// }

// console.log(removeDuplicates(arr)); // [php,css,script,html,java]
// ......................................................................................
// 6. Найдите високосные годы
// Високосным годом является каждый четвертый год и века начинаются только на высокостные года,
//   отличие високосного года от обычного заключается в появлении 366 - го дня.Напишите функцию chooseYears(start, end),
//   которая принимает в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне.
// chooseYears = (start, end) => {
//   const leapYears = [];
//   for (let year = start; year <= end; year++) {
//     if (year % 4 === 0) {
//       leapYears.push(year);
//     }
//   }
//   return leapYears;
// }

// console.log(chooseYears(2000, 2018)); // [2000,2004,2008,2012,2016]
// ........................................................................................../////////////////////////////////////////////////////////////////////////////
// 7. Отобразить элементы в случайном порядоке
// Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for
// случайно изменяет порядок расстановки элементов массива.
// function shuffle(arr) {
//   for (var i = arr.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   return arr;
// }
// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// document.writeln(shuffle(array));
// .........................................................................................////////////////////////////////////////////////////////////////////////////////
// 8. Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getFirst(array, n) {
//   return array.slice(0, n);
// }
// console.log(getFirst(array, -3));
// // 1 document.writeln(getFirst(array, 4));
// // // 1,2,3,4 document.writeln(getFirst(array,-3)); // 1,2,3,4,5,6
// .......................................................................................
// 10. Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// const sumArray = arr1.map((num, index) => num + (arr2[index] || 0));
// console.log(sumArray); // [5,7,9,4,5]
// ........................................................................................
//  11. Количество повторяющихся элементов в массиве
//  Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.
// function countIdentic(arr) {}
// countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]); // 4
//  countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3
// ...................................................................................................................................................................................
// 12. Разворачивание массива массивов
// Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.
// var arr1 = [1, [2, [3, [4]]]];
// var arr2 = [1, [2], [3, [[4]]], [5, 6]];
// function expand(arr) {

// }
// console.log(expand(arr)); // 1,2,3,4 document.writeln(expand(arr2)); // 1,2,3,4,5,6
// ..................................................................................................................................................................................................
// 3. Объединить два массива без дублирования элементов
// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.

// var array1 = [5, 2, 1, -10, 8];
// var array2 = [5, 2, 1, -9, 3, 7];

// var union = function (array1, array2) {
//   const combined = array1.concat(array2); // Об'єднуємо два масиви
//   const unique = [];

//   for (let i = 0; i < combined.length; i++) {
//     if (!unique.includes(combined[i])) {
//        Якщо такого елемента ще немає в `unique`
//       unique.push(combined[i]); // Додаємо унікальний елемент
//     }
//   }

//   return unique;
// };

// console.log(union(array1, array2));
//  👉 [-10, 8, 5, 2, 1, -9, 3, 7]
// ..................................................................................................
//  14. Разница между двумя массивами
//  Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2 и наоборот.
// var arr1 = [1, 2, 'a'];
// var arr2 = [1, 2, 3, 4, 'b'];
// function arrayDiff(arr1, arr2) {
//   return [...arr1.filter(el => !arr2.includes(el)), ...arr2.filter(el => !arr1.includes(el))];
// }
// console.log(arrayDiff(arr1, arr2)); // [a,3,4,b]
// ...................................................................................................
// 15. Сортировка массива по убыванию
// Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.
// var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// function compareNumbers(arr) {
//   return arr.toSorted((a, b) => a - b);
// }
// console.log(compareNumbers(numbers)); // -4,1,2,3,3,5,6,7,8
// .......................................................................................................

// 1.Реалізувати фільтер за властивістю amount і отримати
// тільки назву моделі

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars.filter(car => car.amount > amountThreshold).map(el => el.model);
// };

// console.table(getAvailableCarNames(vehicles, 12));
// .........................................................................................................
// 6. Наиболее часто используемый элемент массива
// Напишите код, который находит наиболее часто используемый элемент массива.
// var arr1 = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

// document.writeln(output); // z повторяется 5 раз
// ....................................................................................................////////////////////////////////////////
// 17. Сумма квадратов значений массива
// Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.
// const sumOfSquares = arr => {
//   let total = 0;
//   for (const sum of arr) {
//     total = total + sum * sum;
//   }
//   return total;
// };
// console.log(sumOfSquares([1, 2, 3, 4, 5])); // 55
// ................................................................................................
// 18. Сумма и произведение значений массива
// Напишите код, который определяет сумму и произведение значений массива.
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const total = arr => {
//   let sum = 0;
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     product *= arr[i];
//   }
//   return `Сумма : ${sum} Произведение : ${product}`;
// };

// console.log(total(arr));
// /* Сумма : 45 Произведение : 362880 */
//TODO ..........................................................................................  MAP FILTER.................................
const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// const newArr = vehicles.map(element => element.make);
// const LOW_SCORE = 25000;
// const HIGH_SCORE = 30000;

// const best = vehicles.find(el => el.make === 'Ford');
// const worst = vehicles.filter(el => el.price < LOW_SCORE);
// const middle = vehicles.filter(el => el.price > LOW_SCORE && el.price < HIGH_SCORE);

// console.log(best);
// TODO akjcvhkjvh..................................................... ................................................
const array1 = ['hello', 'deep', 'mortal', 'scorpion'];

// !...........................................................FOR ... FOREACH....MAP...............
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
// }
// array.forEach((el, ind, arr) => {
//   array[ind] = el[0].toUpperCase() + el.slice(1).toLowerCase();
// });
// const newArr = array.map((el, ind, arr) => {
//   return el[0].toUpperCase() + el.slice(1).toLowerCase();
// });
// !............................................................... Filter... For ...Some......................................
// const positivNum = array2.filter(el => el > 0);
// const newArr = array1.filter((el, ind, arr) => typeof array1[ind] === 'string');
// for (let i = 0; i < array1.length; i++) {
//   if (typeof array1[i] === 'string') {
//     newArr.push(array1[i]);
//   }
// }
// const array2 = [14, -34, 14, 598, -97, -329, 32, 7];
// let result = false;
// // for (let i = 0; i < array2.length; i++) {
// //   if (typeof array2[i] === 'number') {
// //     result = true;
// //     break;
// //   }
// // }
// result = array2.some((el, ind) => {
//   typeof el === 'number';
// });

// console.log(result);
// !.............................................................Some  every..........................................................

// const array2 = [14, -34, 14, 598, -97, -329, 32, 7];
// let array3 = 0;

// for (let i = 0; i < array2.length; i++) {
//   array3 += array2[i];
// }
// console.log(array3);

// const everyNum = array2.some((el, ind, arr) => {
//   return el === 7;
// });
// console.log(everyNum);
// const products = [
//   { name: 'apple', quantity: 2 },
//   { name: 'orange', quantity: 5 },
//   { name: 'plum', quantity: 0 },
// ];
// const check = products.some((el, ind, arr) => {
//   return el.quantity === 5;
// });
// console.log(check);

// !...........................................  reduce ....................................................

// const array2 = [14, -34, 14, 598, -97, -329, 32, 7];
// const totalSum = array2.reduce((acc, el, ind, arr) => {
//   return acc + el;
// }, 0);
// console.log(totalSum);
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// const scoreSum = students.reduce((acc, el) => `${acc} ${el.name}`, '').trim();
// console.log(scoreSum);
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, el, ind, arr) => acc + el.playtime / el.gamesPlayed,
//   0
// );

// console.log(totalAveragePlaytimePerGame);
// const scores = [61, 19, 74, 35, 92, 56];
// const sortedScores = scores.toSorted((a, b) => b - a);
// console.log(sortedScores);

const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
];

const sortScoreDown = students.toSorted((a, b) => a.score - b.score);
const sortScoreUp = students.toSorted((a, b) => b.score - a.score);
const sortName = students.toSorted((a, b) => b.name.localeCompare(a.name));

console.log(sortName);
