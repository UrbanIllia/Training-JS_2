// Модуль 21....................................................................................................................................

// let a = null;
// console.log(a);

// console.log(typeof 3);
// console.log(typeof "ksk"); Узнать что это
// console.log(typeof false);

// console.log(2 + 3);
// Перевірка на число

// const value = "3";
// console.log(Number(value));  Привести до числа
// console.log(typeof value);

// let a = 31;
// console.log(a);      31

// const number = Number("51");
// console.log(Number.isNaN(number));
// false;

// const string = Number("qwer");
// console.log(Number.isNaN(string)); // true

// console.log(Number.parseFloat("5hfhfh")); 5
// console.log(Number.parseFloat("12vvhfh"));  12
// console.log(Number.parseFloat("1.45hfhfh"));  1.45
// console.log(Number.parseFloat("hfhfh"));  NaN

// console.log(0.1 + 0.2 === 0.3);  false
// console.log(0.1 + 0.2); // 0.300000000000004;
// console.log((0.1 * 10 + 0.2 * 10) / 10);   0.3

// console.log(Math.ceil(1.2)); //2 найбільше ціле
// console.log(Math.floor(1.7)); //1 найменше ціле
// console.log(Math.round(1.2)); //1 округлює
// console.log(Math.round(1.5)); //2 округлює
// console.log(Math.max(20, 10, 50, 40)); //50 найбільше з перелічених
// console.log(Math.min(20, 10, 50, 40)); // 10 Найменше
// console.log(Math.pow(2, 4)); // 16 степінь
// console.log(Math.random()); // 0.3453 випадкове число від 0 до 1
// console.log(Math.random() * (10 - 1) + 1); //5.6574 випадкове число * 10//

// let str = "Привіт";
// let str2 = "Одинарні лапки також дозволяються";
// let phrase = `так можно вставляти ${str}`;
// console.log(phrase);

// let name = "Оля";
// let hello = `Привіт ${name}`;
// console.log(hello);

// const message = "Javascript " + "is" + " awesome";
// console.log(message);

// Конкатенація/////////////////////////////////////////////////////////////////////

// let result;

// result = 5 + "5";
// console.log(result); //55 стає стрінгою

// result = 5 + "5" + 5;
// console.log(result); //555 стає стрінгою

// result = 5 + 5 + "5";
// console.log(result); // 105 стає стрінгою
// console.log(typeof result); // string

// Методи строк//////////////////////////////////////////////////////////////////////
// 1 це в JS 2.  0 1 2 3 . . . .
// const message = "Wellcome to Kiev";
// // console.log(message.length); // 16 Довжина стрінги
// // console.log("Wellcome to Glevaha".length); // 19 можно так
// console.log(message.toLowerCase()); //wellcome to kiev
// console.log(message.toUpperCase()); //WELLCOME TO KIEV
// console.log(message.indexOf("t")); //9 на якому місці
// console.log(message.indexOf("z")); //-1  Якщо тако немає
// console.log(message.includes("wellcome")); // false маленька літера
// console.log(message.includes("Wellcome")); // true

// BigInt Великі числа
// const number = 48546647839920934748575773;
// console.log(typeof number);

//Обьекти///////////////////////////////////////////////////////////////////////////

// let obj = {
//   city: "Kyiv", // Ключ(Завжди стрінга)
//   age: 1550,
// };

// let user = {
//   name: "Illia", // ключ name
//   age: 38, //ключ age
//   work: false,
// };
// console.log(user);

// console.log(user.name); // значення окремо
// console.log(user.age);
// console.log(user.work);

// let user = {
//   name: "Illia", // ключ name
//   age: 38, //ключ age
//   "Likes birds": true, // Імья властивості з декілька слів повинно бути у лапках
// };
// delete user.age; // Видалити одне значення
// console.log(user);
// console.log(user["Likes birds"]); // стрінги через [лапки] якщо є пробіл  true

// let user = {
//   name: "Illia",
// };
// user.age = 38; // Якщо треба додати ключ потім
// console.log(user);
// (user.male = false), console.log(user);

// Цикл for ////////////////////////////////////////////////////////////

// for (key in Object) {
// }

// let user = {
//   name: "Illia",
//   age: 38,
//   isAdmin: true,
// };
// console.log(user);

// for (let key in user) {
//   //   console.log(key); // визвати назви всіх ключів
//   console.log(user[key]); // визвати значення всіх ключів
// }

// /Впорядкоування властивостей об'єкта////////////////////////////////
// let codes = {
//   49: "Німеччина",
//   41: "Швейцарія",
//   44: "Великобританія",
//   1: "США",
// };
// // for (let code in codes) {
// //   // 1 41 44 49 перебирає по порядку томущо чисельні
// //   console.log(code);
// // }
// for (let prop in codes) {
//   console.log(prop); // Стрінги перебирає по черзі
// }

// Є багато інших типів об'єктів:

// Array для зберігання впорядкованих колекцій даних
// Date для зберігання інформації про дату та час
// Error для зберігання інформації про помилку
// ... і так далі

// ДЗ..............................................................................

// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);

// let name = "Olga";
// console.log(`привіт ${1}`); //привіт 1
// console.log(`привіт ${"name"}`); //привіт name
// console.log(`привіт ${name}`); //привіт Olga

// let a = "5";
// let b = "13cvb";
// let c = "12.9skljdfw";
// console.log(Number.parseFloat(a));
// console.log(Number.parseFloat(b));
// console.log(Number.parseFloat(c));
// console.log(typeof Number(a));
// console.log(typeof Number(b));
// console.log(typeof Number(c));

// // console.log((0.1 * 10 + 0.2 * 10) / 10);
// // console.log(Math.max(20, 10, 50, 40));
// // //      ds (Math.random() * (max - min)+min); повернути випадкове число від 2 до 4
// // console.log(Math.random() * (4 - 2) + 2);

// const message = "Welcome to Bahamas";
// console.log(message.length);
// console.log(message.toUpperCase()); //Обов'язково дужки в кінці

// let obj = {}; // пустий обїект
// obj.name = "Illya";
// obj.age = 16;
// obj.city = "Kyiv";

// // console.log(obj);
// // delete obj.city;
// // console.log(obj);
// obj["Like flowers"] = true;
// // console.log(obj);

// for (let key in obj) {
//   console.log(key);
//   //   console.log(obj[key]);
// }

// Модуль 22.......................................................................................................................................
// const message = "Javasrcipt is awesome";
// console.log(message);
// alert(message);

// const isConfirm = confirm("Please confirm reservation"); //Виводиться в алерт ок чи Кенсел
// console.log(isConfirm); //// також алерт відповідь в консолі false or true

// const username = prompt("Please enter your fucken name"); // ввод чогонебудь через модальне вікно отклик чи ім'я чи нулл
// console.log(username);

// const value = prompt("Please enter fucken number");
// console.log(typeof value); //string we need numbers
// console.log(value);

// let value;

// value = false;
// console.log(typeof value);

// const newValue = String(value);
// console.log(typeof newValue);

/////////////////////////////////////////
// value = "123";
// console.log(typeof value); // Переделіваем в намбер

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number("qwerty"); // NuN
// console.log(test);

// console.log(Boolean(1)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean("вітаю")); //true
// console.log(Boolean("")); //false

// console.log(Boolean(NaN)); //false
// console.log(Boolean(null)); //false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// = Оператор присвоєння

//Операнди - це те до чого застосовують оператори
// 5*2 два операнди або аргументи
// Унарний 1 операнти
// Бінарний 2 операнти
//  *  -  +  /  % Остача від ділення ** піднесення до степеня
// console.log(2 + 5);
// console.log(2 - 5);
// console.log(2 * 5);
// console.log(2 / 5);
// console.log(5 % 2);
// console.log(5 ** 2);
///////////////////////Оператори порівняння //////////////////////////////////////////////////////////
// console.log(2 > 5); // ОТримуємо булі
// console.log(5 >= 5);
// console.log(5 <= 5);
// console.log(5 == 5); //дорівнює true
// console.log(5 != 6); //не дорівнює true
// console.log(6 === 6); //Дуже строго true
// console.log(7 !== 6); //Дуже строго не дорівнює true

/////////Оператори or and /////////////////////////////////////////////////////////////

// && --- Оператор AND
// console.log(5 === 5 && 6 > 3); // Дві умови  true
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

// //  || --- Оператор  OR   /////////////////////////////////////////////////////
// console.log(20 + 5 === 25 || 2 * 2 === 6); // Одна з двох умов true

// //  ! --- Оператор NOT    (!===) (!--) /////////////////////////////////////
// console.log(5 !== 4);
// console.log(true); // true
// console.log(!true); // false

// Умови if/else //////////////////////////////////////////////////////////
// if (5 + 5 === 10) {
//   console.log("Hello");    // Hello
// }
// if (5 + 5 === 25) {
//     console.log("1");     //  Пусто) бо не дорівнює

// if (5 + 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");        // 2
// }

// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");         // 1
// }

// if (2 + 3 === 4) {
//   console.log("Привіт");
// } else {
//   console.log("Иди в жопу");
// }
//////// Тернарний оператор ///////////////////////////////////////////////////
// Скорочений if/else
// 2 + 3 === 4 ? console.log("1") : console.log("2");    // 2
// 5 * 5 === 24 ? console.log(true) : console.log(false);    // false

// if (5 + 5 === 11) {
//   console.log("1");
// } else if (2 + 2 === 5) {
//   console.log("2");
// } else {
//   console.log("3");       ////////  Якщо виконається перша то 1, якщо перша ні тоді 2, якщо виконається і перша і друга тоді 3
// }
// let lang = "en";
// if (lang === "ua") {
//   console.log("Понеділок"); //  Вівторок
// } else if (lang === "en") {
//   console.log("Вівторок");
// } else {
//   console.log("Середа");
// }

///    switch/case /////////////////////////////////////////////
// let num = 6;
// switch (num) {
//   case 0:
//     console.log(0);
//     break;
//   case 2:
//     console.log("Ха");
//     break;
//   case 4:
//     console.log(false);
//     break;
//   case 6:
//     console.log("Хи"); //  Хи
//     break;
// } // Можно в дужках просто без let

// let cost;
// const sub = "pr0";

// switch (sub) {
//   case "free":
//     cost = 100;
//     break;
//   case "pro":
//     cost = 500;
//     break;
//   case "premium":
//     cost = 1000;
//     break;
//   default:
//     console.log(0); // Якщо всі ні
// }
// console.log(cost);

// const min = prompt("Введіть хвилину"); // маємо відповідь -min-
// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 44 && min <= 59) {
//   console.log("Четверта чверть");
// }

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;

// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "морква":
//     cost = 20;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "картопля":
//     cost = 30;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "буряк":
//     cost = 40;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "капуста":
//     cost = 50;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   default:
//     alert(`Товару ${value}, немає в наявності`);
// }

// Модуль 23 .................................................................................................................................

// Області видимості

// const a = 5;

// if (true) {
//   const b = 120;
//   console.log("Black", b, a); /// Все що в фігурних скобках, залишається в фігурних скобках
// }

// console.log("Global", b);

//    Цикли //////////////////////

// while (Умова до коли цикл виконується) {Тіло циклу} -- тут шо має відбутися в цьому циклі, в цій ітерації(Одне виконання циклу)
// let a = 0;

// while (a < 5) {
//   a++;
//   console.log("a", a);
// }

// let a = 0;
// while (a) {
//   console.log("a", a);
//   a--;
// }
// while (a) console.log(a--); // Можно коротко, якщо одна умова

// do while /////////////////////////
// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 5); //     Навпаки

//  for //////////////////////////////
// for (let a = 0; a < 3; a++) {
//   console.log(a);
// }
//   // В дужках всі три значення

// break   continue//////////////////////////////////////

// let summ = 0;
// while (true) {
//   let value = +prompt("Ввести число");
//   if (!value) break;
//   summ += value;
// }
// console.log("Summ", summ); // 1Вирахувати сумму всіх цифр введених до cancel

// for (let i = 0; i < 10; i++) {
//   // поки 0, до 10, додаєио по 1
//   if (i % 2 === 1) continue; // коли залишок ділення на два дорівнює строго нулю, тобіш я так розумію пропускаємо. в консолі всі непарні. коли строго дорівнює 1 то виводяться всі парні
//   console.log(i); // Це полегшений break
// }

//// Масиви  /////////////////////////////////////////////////

// let arr = ["Apple", "Orange", "Plum"];
// console.log(arr[2]);                  // Plum

// let arr = ["Apple", "Orange", "Plum"];
// arr[2] = "Lemon";                     // Замінити 2 на Lemon
// console.log(arr[2]);                  // Lemon

// let arr = ["Apple", "Orange", "Plum"];
// arr[3] = "Cherry"; //  Додати ще один
// // console.log(arr[3]); // Cherry
// // console.log(arr);        // Вивести весь масив
// console.log(arr.length); // Вивести довжину, вірніше кількість

// arr2 = [1, "hello", { key: "" }]; // В масиві може бути все що завгодно

// let arr = ["Apple", "Orange", "Plum"];
// arr[2] = "Lemon";
// arr[1] = "Cherry";
// arr.push("Melon"); // Додати в кінець
// // arr.pop(); // Видалити останній
// arr.shift(); // Видалити перший
// arr.unshift("Watermelon"); // Додати замість першого
// console.log(arr);

//////   Перебор масиву  /////////////////////////////////////////////////////

// let arr = ["Apple", "Orange", "Plum"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }                        //    Old method

// let arr = ["Apple", "Orange", "Plum"];
// for (let item of arr) {
//   console.log(item);
// } // new method перебір for of  // // Не надає доступ до індексу

// let arr = ["Apple", "Orange", "Plum"];
// for (let key in arr) {
//   console.log(arr[key]);
// } // Не є хороший перебір. Дає доступ до індексу

//    Масиви в масивах //////////////////////////////////

// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // console.log(matrix); // Весь масив
// // console.log(matrix[0]); // Перший масив
// console.log(mat[1][0]); // 4

//    МЕтоди присвоєння масиву
// Різниця між примітивними та непримітивними це як вони зберігаються і як вони копіюються
// let a = 5;
// let b = a; // Скопіювали його значення
// // console.log(a);
// a = 10;
// console.log(b); //  ще 5, томущо ми його скопіювали за значенням
// console.log(a); //  вже 10

//  Обьекти та масиви копіюються за значенням
// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);
// console.log(arr2);
// console.log(arr); //The same

// let arr = ["a", "b", "c", "d", "e"];
// delete arr[2];
// console.log(arr); // Видалили "c" але кількіть залишилася 5. Видалили лише значення а ключ лишився. З масивами так не катить.
// Видаляється по іншому

// let arr = ["a", "b", "c", "d", "e"];
// arr.splice(2, 2); // Починаючи з другого видаляємо два. Видалили "c", "d"
// console.log(arr);

// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(1, 3)); // Показує від першого до останнього(не включаючи останній)  // "b", "c"

// let arr = ["a", "b", "c", "d", "e"];
// let a = [1, 2, 3];
// // console.log(arr.concat(a)); // Додавання масивів
// console.log(arr.concat(a, "test")); // Можно навіть додати слово

// Шось шукаємо в масивах
// console.log(arr.indexOf("c")); // Шукаємо "c". Повертає індекс під яким знаходиться елемент // 2
// console.log(arr.indexOf("c", 3)); // Шукаємо "c". починаючи з третього(такого немає повертає -1(це значить що немає))
// console.log(arr.lastindexOf("c", 2)); // Теж саме шукає але з іншої сторони
// console.log(arr.includes("c")); ///повертає true або false

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Orange" },
//   { id: 3, name: "Melon" },
// ];
// console.log(fruits.find((item) => item.id === 1)); // Знаходить шось одне, якщо треба багато це не катить
// console.log(fruits.filter((item) => item.id < 2)); // Всі до 2

///////////       Map   //////////////

// let result = fruits.map((item) => item.name.length); // map Використовується найчастіше (для відмальовки)
// console.log(result);

//////////    Split //////////////////////

// let names = "Оля, Юля, Аня, Ксюха"; // Є строка, а треба порозділяти, щоб зробити масив
// let arr = names.split(", "); // Як ми будемо це передавати
// // console.log(arr);

// ////////////    Join /////////////////////
// // Навпаки з масиву в строку
// let newString = arr.join(", ");
// console.log(newString);

///  arr.reduce /////////////////
// Обчислити якесь одне значення на основі всього масиву, наприклад сумму
// let arr = [1, 2, 3, 4, 5];
// let red = arr.reduce((summ, item) => summ + item); // Перше значення аккумулятор, він аккумулює в собі результат попередніх значень(сумма в нашому випадку),
// // Другим аргументом передається власне сам айтем, можно третім передати індекс, а четвертим сам арей. 3 та 4 необовєязкові значення
// console.log(red); // Складний метод
// One more variant
// let arr = [23, 45, 30]; // Визначити середне число
// let summ = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(summ);

// ...................... Модуль 24 ..............................................................................................................................
//////  Функції ///////////////////////////////
// good name of the function is, what this function do
// Оголошення функції declaration
// function showMessage(name, city) {
//   // В дужках параметри
//   // body of the function
//   console.log("Hello my name is " + name + ". I am from " + city);
// }
// showMessage("Illia", "Teremki"); // Викликаємо функцію
// showMessage("Kseniya", "Obolon"); // Викликаємо функцію
// HTMLVideoElement;

// console.log("hello!!");

// let name = "Оля";
// let hello = `Привіт ${name}`;
// console.log(hello);
