// let status = null;
// console.log(typeof status);

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
// multiply(2, 3, 4);
// const result = multiply;
// console.log(result);
// function multiply(x, y, z) {
//   return x * y * z;
// }

// const result = multiply
// console.log(result); // 30

// ...............................................................................................................

// Створіть функцію для обчислення площі прямокутника. js
// Функція має приймати два параметри: довжини сторін прямокутника, а повертати - значення площі.
// Якщо передано лише один параметр - функція має обчислювати площу квадрата.

// function square(a, b) {
//   if (b == undefined) {
//     return a * a;
//   }
//   return a * b;
// }
// // ..............
// function square(a, b) {
//   return a * (b || a);
// }
// // ...................
// function square(a, b = a) {
//   return a * b;
// }
//
// //////////////////////////////
// function countSquare(a, b) {
//   square = a * b;
//   return square;
// }
// console.log(countSquare(5, 3));

// // Приклади використання:
// console.log(calculateArea(5, 10)); // 50 (прямокутник)
// console.log(calculateArea(7)); // 49 (квадрат)

// ..................................................................................................................
// Створіть функцію для підрахунку вартості товару з урахуванням знижки.
// Функція має приймати 2 параметри, а саме: вартість товару без знижки (number) та відсоток знижки (number).
// Функція має повертати вартість товару зі знижкою. Якщо відсоток знижки в функцію не передано - має використовуватись стандартне значення в 10%.

// function price(cost, discount) {
//   if (discount === undefined) {
//     discount = 10;
//   }

//   return (cost / 100) * (100 - discount);
// }
// function price(cost, discount = 10) {
//   return (cost / 100) * (100 - discount);
// }
// ////////////////////////////////////////////////
// let totalprice;
// function countPrice(priceWithoutDiscount, percentDiscount) {
//   return (totalPrice = (priceWithoutDiscount / 100) * percentDiscount);
// }
// countPrice(100, 10);
// console.log(totalprice);                  -bad-
// .......................................................................................................................
// Створіть функцію для визначення, чи є число додатним (більше 0).
// Функція має приймати як параметр число, і повертати true(bool), якщо число додатне, або false(bool) - якщо від'ємне, або 0.

// function number(a) {
//   if (a > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(number(5));                   -good-
// ...........................................................................................................................
// Створіть функцію для визначення, чи є число парним.
// Функція має приймати як вхідний параметр число, і повертати true(bool), якщо число парне, або false(bool) - якщо непарне.
// function num(a) {
//   if (a % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(num(6));
// function isEven(number) {
//   return number % 2 == 0;
// }
// console.log(isEven(6));                      -+--
// ..............................................................................................................................
// Створіть функцію, що буде розраховувати вартість поїздки на таксі.
// Функція має приймати як вхідний параметр відстань в кілометрах (number), а повертати вартість поїздки в гривнях (number).
// Вартість поїздки розраховується за такими правилами:
// подача авто: 30 грн;
// перші 10 км: 8 грн/км;
// вартість кожного км поїздки після 10 км: 5 грн/км

// function tripCost(distance) {
//   return 30 + Math.min(10, distance) * 8 + Math.max(0, distance - 10) * 5;
// }
// /////////////////////////////////////////
// function costValue(distance) {
//   if (distance <= 10) {
//     return 30 + distance * 8;
//   } else {
//     return 30 + distance * 5;
//   }
// }
// console.log(costValue(5));              -good- but another
// ................................................................................................................................
// Створіть функцію для обчислення індексу маси тіла людини (BMI).
// Функція має приймати два параметри: масу тіла в кілограмах(float) та зріст в метрах(float),
//     а повертати індекс маси тіла(float).Щоб підрахувати індекс маси тіла, треба масу тіла в кілограмах поділити на квадрат зросту в метрах.
// function calcBMI(m, h) {
//   return m / Math.pow(h, 2);
// }
// console.log(calcBMI(10, 100));
// //////////////////////////////////
// function bmi(weight, height) {
//   return weight / (height * height);
// }
// console.log(bmi(10, 100));                 -good- but another
// ..................................................................................................................................
// Створіть функцію, яка з набору вхідних даних буде генерувати певний текст за шаблоном.
// Функція має приймати два, або три параметри: ім'я (string), місто (string) та (опціонально) адресу (string), а повертати (залежно від того чи передано третій параметр) рядок
// "... проживає в місті ... .", або "... проживає в місті ... за адресою: ... ."
// Замість "..." функція має підставити ім'я, місто та адресу.
// function genText(name, city, address) {
//   if (address === undefined) {
//     return name + " проживає в місті " + city + ".";
//   }
//   return name + " проживає в місті " + city + " за адресою: " + address + ".";
// }
// ////////////////////////////////////////////////////
// function text(a, b, c) {
//   if (c == undefined) {
//     return `${a} проживає в місті ${b}.`;
//   } else {
//     return `${a} проживає в місті ${b} за адресою: ${c}.`;
//   }
// }
// console.log(text("Illia", "Kiev", "Vokzalna 22"));
// console.log(text("Illia", "Kiev"));                                    -good-
// .......................................................................................................................................
// Створіть функцію, яка повертає кількість переданих в неї параметрів.
// function argumentsLength() {
//   return arguments.length;
// }
// function argumentsLength(...args) {
//   return args.length;
// }                                                                     -very bad-
// ..........................................................................................................................................
// Створіть функцію, яка приймає число як параметр, а повертає рядок. Функція має повертати різний рядок за такими правилами:
// якщо число менше, або дорівнює 0, функція має повертати рядок "" (порожній рядок);
// якщо число більше 0, але менше 10, функція має повертати рядок "одиниці";
// якщо число від 10 до 100, функція має повертати рядок "десятки";
// якщо число від 100 до 1000, функція має повертати рядок "сотні";
// якщо число 1000 і більше, функція має повертати рядок "дуже багато";
// якщо параметр у функцію не передано, або передано не число, функція має повертати рядок "" (порожній рядок)
// function numbers(number) {
//   if (number <= 0 || typeof number !== "number") {
//     return "";
//   }
//   if (number < 10) {
//     return "одиниці";
//   }
//   if (number < 100) {
//     return "десятки";
//   }
//   if (number < 1000) {
//     return "сотні";
//   }
//   return "дуже багато";
// }
// //////////////////////////2
// function numbers(number) {
//   if (typeof number !== "number") {
//     return "";
//   }

//   switch (true) {
//     case number <= 0:
//       return "";
//     case number < 10:
//       return "одиниці";
//     case number < 100:
//       return "десятки";
//     case number < 1000:
//       return "сотні";
//     default:
//       return "дуже багато";
//   }
// }
// ///////////////////////////////////////////////////////////////////////////////////
// function test(num) {
//   if (num <= 0) {
//     return "";
//   } else if (num > 0 && num < 10) {
//     return "одиниці";
//   } else if (num >= 10 && num < 100) {
//     return "десятки";
//   } else if (num >= 100 && num < 1000) {
//     return "сотні";
//   } else if (num >= 1000) {
//     return "дуже багато";
//   } else {
//     return "";
//   }
// }
// console.log(test(56));
// console.log(test(6));
// console.log(test(156));
// console.log(test(756));
// console.log(test(5756));
// console.log(test(0));                              -good but another-
// .....................................................................................................................
// Створіть функцію, яка отримує на вхід номер місяця (ціле число від 1 до 12) і повертає назву пори року ("Winter", "Spring", "Summer", "Autumn").
// Якщо передано неправильний номер місяця - функція має повертати рядок "Error".
// function season(number) {
//   if (number === 12 || number === 1 || number === 2) {
//     return "Winter";
//   }
//   if (number >= 3 && number <= 5) {
//     return "Spring";
//   }
//   if (number >= 6 && number <= 8) {
//     return "Summer";
//   }
//   if (number >= 9 && number <= 11) {
//     return "Autumn";
//   }

//   return "Error";
// }
// //////////////////////////2
// function season(number) {
//   switch (number) {
//     case 1:
//     case 2:
//     case 12:
//       return "Winter";
//     case 3:
//     case 4:
//     case 5:
//       return "Spring";
//     case 6:
//     case 7:
//     case 8:
//       return "Summer";
//     case 9:
//     case 10:
//     case 11:
//       return "Autumn";
//     default:
//       return "Error";
//   }
// }

// function month(num) {
//   if (typeof num !== "number") {
//     return "Error";
//   }
//   switch (true) {
//     case num <= 0 || num > 12:
//       return "Error";
//     case num <= 3:
//       return "Winter";
//     case num <= 6:
//       return "Spring";
//     case num <= 9:
//       return "Summer";
//     default:
//       return "Autumn";
//   }
// }
// console.log(month(2));
// console.log(month(0));
// console.log(month(5));
// console.log(month(9));
// console.log(month(12));
// console.log(month(15));
// console.log(month("hello"));
// ...................................................................................................
// function toggleModalVisibility(isVisible) {
//   //   if (isVisible === !true) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return isVisible === !true ? true : false;
// }
// console.log(toggleModalVisibility(true));
// .......................................................................................................
// function normalizeInput(input, to) {
//   //   if (to === "upper") {
//   //     return input.toUpperCase();
//   //   } else {
//   //     return input.toLowerCase();
//   //     }
//   return to === "upper" ? input.toUpperCase() : input.toLowerCase();
// }
// console.log(normalizeInput("Hello", "upper"));
// ..............................................................................................................
// function calculateTotal(number) {
//   let total = 0;
//   let i = 0;
//   while (i <= number) {
//     total += i;
//     i++;
//   }

//   return total;
// }
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     total += i;
//   }

//   return total;
// }
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = number; i >= 0; i--) {        В іншу сторону
//     total += i;
//   }

//   return total;
// }

// console.log(calculateTotal(5));
// console.log(calculateTotal(5));
// console.log(calculateTotal(10));             перераховує та складає
// ...................................................................................................................
// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 !== 1) {
//       total += i;
//     }
//   }
//   return total;
// }                                      Перераховує всі лише парні і складає в сумму
// .............................................................................................................
// Створіть функцію, яка отримує на вхід рядок (string) з назвою дня тижня англійською,
//  або українською мовою,
// а повертає номер дня в тижні (число від 1 до 7).
// Якщо передано неправильну назву дня - функція має повертати 0.
// ................................................................................................................  Масивы теория!!!!!!!!!!!!!!!!!!!!!
// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// let first = (planets[0] = "Jupiter");
// planets[2] = "Neptune";
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']
// console.log(first);// 'Jupiter'
// // ..................................................................................................................
// function getLastElementMeta(array) {
//   let lastIndex = array.length - 1;
//   let lastElement = array[lastIndex];
//   return [lastIndex, lastElement];
// }
// ...................................................................................................................
// function getExtremeElements(array) {
//   let firstElement = array[0];
//   let lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }
// ..................................................................................................................
//
// function getSlice(array, value) {
//   let indexValue = array.indexOf(value);
//   if (indexValue === -1) {
//     return [];
//   } else {
//     return array.slice(0, indexValue + 1);
//   }
// }                     Если не входит в масив то пустой масив. Если входит вывоит все до него
// ....................................................................................................................

// function createArrayOfNumbers(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// ....................................................................................................................
// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }                                   виведення кожеого елемента в окремий масив
// ....................................................................................................................
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total = total + order[i];                 Я написав total = total + i   //  i is index. order[i] value of this index
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
//////////////////////////////////////////
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const num of order) {
//     total = total + num;
//   }
//   return total;
// }
// .....................................................................................................................
// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.Якщо
// жодного парного числа немає, то масив має бути пустим.Парним вважається число, яке ділиться
//  на 2 без остачі(10 % 2 === 0).Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(getEvenNumbers(3, 11));
// .....................................................................................................................
// Функція checkStorage(storage, item) приймає два параметри:
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].
// function checkStorage(storage, item) {
//   storage = storage.join(" ").toLowerCase();
//   item = item.toLowerCase();

//   if (storage.includes(item)) {
//     return `${item} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// checkStorage(["apple", "plum", "pear"], "pLuM") повертає "plum is available to order!"
// checkStorage(["apple", "plum", "pear"], "pear") повертає "pear is available to order!"
// checkStorage(["apple", "plum", "pear"], "pEAr") повертає "pear is available to order!"
// checkStorage(["apple", "plum", "pear"], "orange") повертає "Sorry! We are out of stock!"
// checkStorage(["apple", "plum", "pear"], "carrot") повертає "Sorry! We are out of stock!"
// ........................................................................................................
// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// Доповни код функції:
// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
// function getCommonElements(array1, array2) {
//   let newarr = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newarr.push(array1[i]);
//     }
//   }

//   return newarr;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// ........................................................................................................................
// Приветствие
// Напишите программу, которая приветствует пользователя при входе на сайт. У пользователя может быть указано имя, а может и не быть.
//  Если имя не указано, в переменной name будет храниться значение null.

// Программа должна выполнить следующие действия:

// Если переменная name равна null, вывести в консоль сообщение:
// "Привет, гость.".
// Если в переменной name содержится строка, вывести в консоль сообщение:
// "Привет, [имя].", где [имя] — это значение переменной name.
// Примечание
// Переменная name уже создана, в ней либо лежит имя пользователя, либо null.
// Используйте оператор нулевого слияния для решения.

// const userName = prompt('Please enter a name');
// if (userName === null || userName === "") {
//   console.log("Привет, гость.");
// } else if (userName === "String") {
//   console.log(`Привет, ${userName}.`);
// }

// console.log(userName === null || userName === "" ? "Привет, гость." : userName === "String" ?
// .........................................................................................................

// function createReversedArray() {
//   let newArr = Array.from(arguments);
//   console.log((newArr = newArr.toReversed()));
// }
// console.log(createReversedArray(12, 85, 37, 4));
// ............................................................................................
// function slugify(title) {
//   let slug = title.split(" ").join("-").toLowerCase();
//   return slug;
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// /.............................................................................................
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = "Каждый охотник желает знать";
// function stringToarray(str) {
//   const str2 = str.split(" ");
//   console.log(str2);
// }

// console.log(stringToarray(str));

// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// .......................................................................................
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = "Каждый охотник желает знать";
// function delete_characters(str, length) {
//   let subStr = str.slice(0, length);
//   return subStr;
// }

// console.log(delete_characters(str, 7)); // Каждый
// .................................................................................................
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире(-) между словами.
//  При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
//   return str.replaceAll(" ", "-").toUpperCase();
// }

// console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// .......................................................................................................
// // Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";

// function capitalize(str) {
//   let words = str.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let capitalWord = word[0].toUpperCase() + word.slice(1);
//     result = result + capitalWord + " ";
//   }
//   return result.trim();
// }

// console.log(capitalize(str)); // "Каждый Охотник Желает Знать"
// ...........................................................................................................
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный.Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

// function change_register(str) {
//   let str2 = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       str2 += str[i].toUpperCase();
//     } else {
//       str2 += str[i].toLowerCase();
//     }
//   }
//   return str2;
// }

// console.log(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"
// ..............................................................................................................
// Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// function remove_char(str) {
//   return str.replace(/[^a-zA-Z0-9]/g, "");
// }

// console.log(remove_char(str)); // "every hunter wishes to know"
// ..............................................................................................................
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с
// дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros(num, len, sign = "") {
//   let newNum = String(num);
//   let newNum1 = newNum.padStart(len, "0");
//   return sign + newNum1;
// }

// console.log(zeros(145, 5, "-")); // -00145
// console.log(zeros(33, 4, "+")); // +0033
// console.log(zeros(33, 4)); // 0033
// ................................................................................................................
// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// function comparison(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(comparison("string", "StRiNg")); // true
// console.log(comparison("ABCDe", "AbcdW")); // false
// ..................................................................................................................
// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в
// строкеstr1 без учёта регистра символов.

// function insensitive_search(str1, str2) {
//   return str1.toLowerCase().includes(str2.toLowerCase()) ? true : false;
// }
// console.log(insensitive_search("Изучаю JavaScript", "javascript"));
// // Соответствует
// console.log(insensitive_search("Изучаю JavaScript", "javascriptS"));
// // Не соответствует
// .....................................................................................................................
// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, \
// при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// let str = "hEllo woRld";
// function initCap(str) {
//   let words = str.toLowerCase().split(" ");
//   let result = "";

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let capitalizedWord = word[0].toUpperCase() + word.slice(1);
//     result = result + capitalizedWord;
//   }
//   return result;
// }

// console.log(initCap(str)); // HelloWorld
// ...........................................................................................................................
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const nameKeys in apartment) {
//   keys.push(nameKeys);
//   values.push(apartment[nameKeys]);
// }
// console.log(keys);

// function countProps(object) {
//   return Object.keys(object).length;
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// ....................................................................................................
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let eachValue = Object.values(salaries);
//   for (const value of eachValue) {
//     totalSalary = value + totalSalary;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// ......................................................................................................
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(colors.hex);
// }
// console.log(hexColors);
// // ...............................................................
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let values = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// function betterThanAverage(classPoints, yourPoints) {
//   let total = 0;
//   for (const point of classPoints) {
//     total = ((total += point) + yourPoints) / classPoints.length + yourPoints.length;
//   }
//   console.log(total);
// }
// function betterThanAverage(classPoints, yourPoints) {
//   const average = classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;
//   return yourPoints > average;
// }
// function betterThanAverage(classPoints, yourPoints) {
//   let total = yourPoints;

//   for (const point of classPoints) {
//     total += point;
//   }

//   const average = total / (classPoints.length + 1);

//   return yourPoints > average;
// !dddddddddddddddddddddddddddddddddddddddddddd
//   return (
//     yourPoints >
//     classPoints.reduce((a, b) => {
//       return (a + b) / (classPoints.length + 1);
//     })
//   );
// }
// console.log(betterThanAverage([14, 28, 18, 22], 22));
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// function bmi(weight, height) {
//   let coefficient = weight / Math.pow(height, 2);
//   if (coefficient <= 18.5) {
//     return 'Underweight';
//   } else if (coefficient <= 25.0) {
//     return 'Normal';
//   } else if (coefficient <= 30.0) {
//     return 'Overweight';
//   } else {
//     return 'Obese';
//   }
// }
// console.log(bmi(70, 1.7));
// ..............................................................
// function stringToArray(string) {
//   return string.split(' ');
// }

// console.log(stringToArray('I love arrays they are my favorite'));
// ..............................................................
// const quarterOf = month => {
//   if (month <= 3) {
//     return 'Квартал 1';
//   } else if (month <= 6) {
//     return 'Квартал 2';
//   } else if (month <= 9) {
//     return 'Квартал 3';
//   } else if (month <= 12) {
//     return 'Квартал 4';
//   } else {
//     return `${month} is not valid`;
//   }
// };
// console.log(quarterOf(2));
// console.log(quarterOf(3));
// console.log(quarterOf(5));
// console.log(quarterOf(7));
// console.log(quarterOf(9));
// console.log(quarterOf(11));
// console.log(quarterOf(12));
// console.log(quarterOf(19));
// console.log(quarterOf(15));
// !...............................................................
// const changeDirection = string => {
//   let reversed = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// };
// !.................................................................
// const changeDirection = string => {
//   return string.split('').reverse().join('');
// };
// console.log(changeDirection('world'));
// console.log(changeDirection('word'));
// console.log(changeDirection('Deep Purple'));
// !....................................................................
// function removeChar(str) {
//   return str.slice(1, -1);
// }
// console.log(removeChar('world'));
// console.log(removeChar('word'));
// console.log(removeChar('Deep Purple'));
// !............................................................
// const changeNumbers = stringNum => {
//   let newStringNum = '';

//   for (let i = 0; i < stringNum.length; i++) {
//     newStringNum += stringNum[i] < '5' ? '0' : '1';
//   }

//   return newStringNum;
// };
// const changeNumbers = stringNum => {
//   let newStringNum = stringNum
//     .split('')
//     .map(el => (el < '5' ? '0' : '1'))
//     .join('');
//   return newStringNum;
// };

// console.log(changeNumbers('3521101834'));
// console.log(_.sum([4, 2, 8, 6]));
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// function updateLight(current) {
//   //   if (current === 'green') {
//   //     return 'yellow';
//   //   } else if (current === 'yellow') {
//   //     return 'red';
//   //   } else {
//   //     return 'green';
//   //   }
//   return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
//   //  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }
// console.log(updateLight('green'));
// console.log(updateLight('yellow'));
// console.log(updateLight('red'));
// const solution = (str, ending) => {
//   return str.endsWith(ending);
// };
// console.log(solution('abc', 'bc'));
// console.log(solution('abc', 'd'));
// ...................................................................................................
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, то это точно ваш друг! В противном случае, будьте уверены, это не...

// Input = ['Ryan', 'Kieran', 'Jason', 'Yous'];
// Output = ['Ryan', 'Yous'];

// Input = ['Peter', 'Stephen', 'Joe'];
// Output = [];
// Входные строки будут содержать только буквы.
// Примечание: сохраните исходный порядок имен в выходных данных.
// function friend(friends) {
//   return friends.filter(el => el.length === 4);
// }
// console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous']));

// Возьмите 2 строки s1и , s2включающие только буквы от aдо z. Верните новую отсортированную строку (в алфавитном порядке возрастания),
//  максимально длинную, содержащую различные буквы - каждая взята только один раз - из s1 или s2.

// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// function longest(s1, s2) {
//   return [...new Set(s1 + s2)].sort().join('');
// }
// !.......................................................................
// Дано множество чисел, вернуть аддитивное обратное для каждого. Каждое положительное становится отрицательным,
//  а отрицательное становится положительным.

// c --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив.
// function invert(array) {
//   return array.map(el => el * -1);
// }
// console.log(invert([]));
// !......................................................................
// // Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде. Преобразование может быть выполнено до или после сложения.

// // Возвращаемое двоичное число должно быть строкой.

// // Примеры: (Вход1, Вход2 --> Выход (объяснение)))

// // 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// // 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// function addBinary(a, b) { }
// !.........................................................................
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];

// const arr2 = [
//   { id: 2, name: 'Mary1' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];
// const newArr = arr1.concat(arr2);
// const newObj = {};

// for (const item of newArr) {
//   newObj[item.id] = item;
// }
// // console.log(newObj);
// const values = Object.values(newObj);
// console.log(values);
// !..............................................................................
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, заданных массивом из минимум 4 положительных целых чисел.
//  Не будут переданы числа с плавающей точкой или неположительные целые числа.

// Например, если массив передается как [19, 5, 42, 2, 77], то вывод должен быть 7.

// [10, 343445353, 3453445, 3453545353453]должен вернуться 3453455.
// function sumTwoSmallestNumbers(numbers) {
//   const newArr = numbers.toSorted((a, b) => a - b);
//   return newArr[0] + newArr[1];
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
// !................................................................................
// На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтеру приходится использовать цвета, которые для простоты названы буквами от a to m.
// Цвета, используемые принтером, записываются в контрольную строку. Например, «хорошая» контрольная строка будет aaabbbbhaijjjmозначать,
//что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, затем один раз цвет a...
// Иногда возникают проблемы: отсутствие цветов, техническая неисправность и выдается «плохая» контрольная строка, например,
// aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.
// Вам нужно написать функцию printer_error, которая, учитывая строку, вернет частоту ошибок принтера в виде строки ,
// представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длина контрольной строки. Не сводите эту дробь к более простому выражению.
// Строка имеет длину больше или равную единице и содержит только буквы от aдо z.

// Примеры:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// function printerError(s) {
//   const errors = [...s].filter(letter => letter > 'm').length;
//   return `${errors}/${s.length}`;
// }
// console.log(printerError('aaabbbbavafvrmuki.putyjhsefhaijjsacasdcasdjm'));
// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';
// console.log(json);

// const dog = JSON.stringify(true);

// const cat = JSON.parse(dog);
// // console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// // console.log(dog.name); // "Mango"
// // console.log(dog.age); // "Mango"
// // console.log(dog.isGoodBoy); // "Mango"

// console.log(cat);

// let sortme = function (names) {
//   return names.sort((a, b) => a.localeCompare(b));
// };
// console.log(sortme(['one', 'two', 'three']));
// !.......................................................................
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// function opposite(number) {
//   return number * -1;
// }
// console.log(opposite(4.25));
// !.........................................................................
// Ваша задача — создать две функции ( maxand min, или maximumand minimum, и т. д., в зависимости от языка ), которые получают список целых чисел в качестве входных данных и возвращают наибольшее и наименьшее число в этом списке соответственно. Каждая функция возвращает одно число.

// Примеры (Вход -> Выход)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// var min = function (list) {
//   const max = list.find(el => Math.max(el));
//   const min = list.find(el => Math.min(el));
//   return `-> max = ${max}, min = ${min}`;
// };
// console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
// !.............................................................................
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// function grow(numbers) {
//   return numbers.reduce((acc, el) => acc * el, 0);
// }
// console.log(grow([1, 2, 3, 4]));
// !................................................................................
// filter_list([1, 2, 'a', 'b']) == [1, 2];
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15];
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123];
// function filter_list(list) {
//   let newArr = [];
//   for (const item of list) {
//     if (typeof item === 'number' && item >= 0) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }
// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
// !...............................................................................
// Напишите программу, которая находит сумму каждого числа от 1 до num. Число всегда будет положительным целым числом больше 0. Вашей функции нужно только вернуть результат, то, что показано в скобках в примере ниже, — это то, как вы достигаете этого результата, и это не его часть, см. примеры тестов.

// Например (Вход -> Выход) :
// var summation = function (num) {
//   let result = 0;
//   for (var i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// };
// // *..........................................
// function sumNumbers(num) {
//   return (num * (num `+ 1)) / 2;
// }
// console.log(summation(10));
// console.log(sumNumbers(10));
// !...............................................................................
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
// function basicOp(operation, value1, value2) {
//   if (operation === '+') {
//     return value1 + value2;
//   } else if (operation === '-') {
//     return value1 - value2;
//   } else if (operation === '*') {
//     return value1 * value2;
//   } else {
//     return value1 / value2;
//   }
// }
// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));
// !..................................................................................
// Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, вы поняли, что топливо заканчивается,
//   а ближайшая заправка находится 50в нескольких милях! Вы знаете, что в среднем ваша машина проезжает около 25миль на галлон.Остались 2галлоны.
// Учитывая эти факторы, напишите функцию, которая сообщит вам, возможно ли добраться до насоса или нет.
// Функция должна возвращать значение, trueесли это возможно, и falseнаоборот.
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// };
// console.log(zeroFuel(50, 25, 2));
// console.log(zeroFuel(100, 50, 1));
// !....................................................................................
// Реализуйте функцию, которая преобразует заданное логическое значение в его строковое представление.

// Примечание: будут предоставлены только действительные данные.
// const booleanToString = b => String(b);
// console.log(true);

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// const options = {
//   method: 'GET',
// };

// fetch('https://jsonplaceholder.typicode.com/users', options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {})
//   .catch(error => {
//     // Error handling
//   });
// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUsers(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }
// !........................................................................................................
// Ваша задача — просуммировать разности между последовательными парами в массиве в порядке убывания.

// Пример
// [2, 1, 10]  -->  9
// В порядке убывания:[10, 2, 1]

// Сумма:(10 - 2) + (2 - 1) = 8 + 1 = 9

// Если массив пуст или в массиве только один элемент, результатом должен быть 0( Nothingв Haskell, Noneв Rust).
// function sumOfDifferences(arr) {
//   if (arr.length <= 1) {
//     return 0;
//   }
//   // Sort array in descending order
//   const sorted = arr.sort((a, b) => b - a);
//   // Calculate sum of differences
//   let sum = 0;
//   for (let i = 0; i < sorted.length - 1; i++) {
//     sum += sorted[i] - sorted[i + 1];
//   }
//   return sum;
// }
// console.log(sumOfDifferences([10, 2, 1, 3]));
// console.log(sumOfDifferences([1, 2, 10]));
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]
// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }
// console.log(countBy(2, 5));
// ................................................................................
// Таракан — одно из самых быстрых насекомых.Напишите функцию, которая берет его скорость в км в час и возвращает
//  ее в см в секунду, округленную до целого числа(= floored). 100000 3600
// function cockroachSpeed(s) {
//   const cms = (s * 100000) / 3600; // Переводим км/ч в см/с
//   return Math.floor(cms);
// }
// function convertSpeed(kmh) {
//   const cms = (kmh * 100000) / 3600; // Переводим км/ч в см/с
//   return Math.floor(cms); // Округляем вниз до целого числа
// }
// ...............................................................
// Вам будет предоставлен массив aи значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.

// aможет содержать числа или строки. xможет быть и тем, и другим.

// Верните true, если массив содержит значение, falseесли нет.
// function check(a, x) {
//   return a.includes(x);
// }
// console.log(check([101, 45, 75, 105, 99, 107], 107));
// ..................................................................
// В этом ката речь идет об умножении заданного числа на восемь,
//     если это четное число, и на девять в противном случае.
// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }

// console.log(simpleMultiplication(2));
// ......................................................................
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const findSmallerNumber = arr => {
//   if (!Array.isArray(arr)) {
//     console.log(`${arr} is not array`);
//   }
//   let smallestNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (smallestNumber > arr[i]) {
//       smallestNumber = arr[i];
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallerNumber([12, 47, 22, 14, 39]));

// const findSmallerNumber = numbers => {
//   if (!Array.isArray(numbers)) {
//     return `${numbers} is not array`;
//   }
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (typeof number !== 'number') {
//       continue;
//     }
//     if (smallestNumber > number) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };
// console.log(findSmallerNumber(['d', 47, 22, 14, 39]));
// console.log(findSmallerNumber('hello'));
// ...................................................................
// *Потрібно перевітири чи є речення палінром*/

// const str = 'Я несу гусеня';

// const str = 'Де помити мопед';
// const str = 'І була пані на палубІ';
// const str = 'Поліна неси Ром!'
// const isPalindrom = function (str) {
//   const strArr = str.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
//   const strArr2 = str.toLowerCase().replaceAll(' ', '');
//   return strArr === strArr2;
// };
// console.log(isPalindrom('Де помити мопед'));
// const isPalindrom = function (str) {
//   const updateString = str.replaceAll(' ', '').toLowerCase();
//   const array = [];
//   for (let i = 0; i < updateString.length; i++) {
//     array.push(updateString[updateString.length - 1 - i]);
//   }
//   return array.join('') === updateString;
// };
// console.log(isPalindrom('Де помити мопед'));
// ...................................................................
// const compareNumbers = (a, b) => {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return Math.min(a, b);
//   }
//   return console.log('One of the parametrs is not a number');
// };
// console.log(compareNumbers(15, 44));
// console.log(compareNumbers(15, 44));
// ................................................................
//напиши функцію функцію яка перевірить чи однакові масиви
//елементи з першого масива це елементи другого масива в квадраті
// const numbers = [11, 9, 3, 121, 33, 24, 20];
// const numbers2 = [121, 81, 9, 14641, 1089, 576, 576];

// // const checkArrays = (numbers, numbers2) => {
// //   const numbers3 = [];
// //   for (let i = 0; i < numbers.length; i++) {
// //     numbers3.push(numbers[i] * numbers[i]);
// //   }
// //   for (let i = 0; i < numbers3.length; i++) {
// //     if (numbers3[i] !== numbers2[i]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // };
// // checkArrays(numbers, numbers2);
// function check(numbers, numbers2) {
//   //   const powNumbers = [];
//   if (numbers.length !== numbers2.length) {
//     return false;
//   }
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== Math.sqrt(numbers2[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(check(numbers, numbers2));
// .......................................................................
// const someArr = [22, 11, 34, 5, 12];

// function sumNeighbors(someArr) {
//   let sum = [];
//   for (let i = 0; i < someArr.length; i = i + 2) {
//     sum.push(someArr[i] + (someArr[i + 1] || 0));
//   }
//   return sum;
// }
// console.log(sumNeighbors(someArr));
// ........................................................................
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// // console.log(styles.push('Рок-н-рол'));
// styles.push('Рок-н-рол');
// // console.log(styles);
// const index = styles.indexOf('Блюз');
// console.log(index);
// styles[index] = 'Класика';
// console.log(styles);
// styles.unshift('Реп', 'Реггі');
// console.log(styles);
// ..................................................................
/*
Створити функцію multiples(m, n), яка повертає масив перших m кратних дійсного числа n. Вважати, що m - натуральне число.

Наприклад.
multiples(3, 5) повинна повернути [5, 10, 15]
*/

// function multiples(m, n) {
//   let arr = [];
//   let startNum = n;

//   for (let i = 0; i < m; i++) {
//     arr.push(startNum);
//     startNum += n;
//   }
//   return arr;
// }
// console.log(multiples(3, 5));
// console.log(multiples(5, 29));
// option 2
// function multiples(m, n) {
//   const arr = [];
//   for (let i = 1; i <= m; i += 1) {
//     arr.push(n * i);
//   }
//   return arr;
// }
// console.log(multiples(3, 5));
// console.log(multiples(5, 29));
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку за допомогою циклу for і for..of.

// const string = 'HTML, JavaScript, CSS, React';
// const array = string.split(' ');
// console.log(array);
// const fuck = string => {
//   let array = string.split(',');
//   for (let i = 0; i < array.length; i++) {
//     console.log(string[i]);
//   }
// };
// console.log(fuck('HTML, JavaScript, CSS, React'));
// ..........................................................
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];

// const arr2 = [
//   { id: 2, name: 'Mary1' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];
// const arr3 = arr1.concat(arr2);
// // console.log(arr3);
// let newObject = {};
// for (const item of arr3) {
//   //   console.log(item.id);
//   newObject[item.id] = item;
// }
// console.log(newObject);
// const values = Object.values(newObject);
// console.log(values);
// !................................................................
// console.log(newObject);
// let userInfo = {
//   name: 'Вася',
//   age: 30,
//   58: 'Значение свойства',
// };
// console.log(userInfo[58]);
// let userInfo = {
//   name: 'Вася',
//   age: 30,
// };
// let user = userInfo;
// user.age = 45;

// console.log(userInfo.age);
// let userInfo = {
//   name: 'Вася',
//   age: 30,
//   address: {
//     city: 'Uzhhorod',
//   },
// };
// for (const key in userInfo.address) {
//   console.log(userInfo.address[key]);
// }
// const userInfo = {
//   name: 'Вася',
//   age: 30,
//   'likes js': true,
// };
// console.log(userInfo['likes js']);

// 1.Создайте пустой объект userInfo.
// 2.Добавьте свойство name со значением Вася.
// 3.Добавьте свойство age со значением 30.
// 4.Измените значение свойства name на Лена.
// 5.Удалите свойство name из объекта.
// const userInfo = {};
// userInfo.name = 'Вася';
// console.log(userInfo);
// userInfo.age = 30;
// console.log(userInfo);
// userInfo.name = 'Лена';
// console.log(userInfo);
// delete userInfo.name;
// console.log(userInfo);
// .........................................................
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum.
// У наведеному вище прикладі має бути 390.
// Якщо об’єкт salaries порожній, то результат має бути 0.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (const key in salaries) {
//   sum = sum + salaries[key];
// }
// console.log(sum);
// ............................................................
// Помножте числові значення властивостей на 2
// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості
// об’єкта obj на 2.
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати.
// Слід безпосередньо змінювати об’єкт.
// P.S. Використовуйте typeof для перевірки, що значення властивості числове.

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'Моє меню',
// };

// multiplyNumeric = menu => {
//   for (let men in menu) {
//     if (typeof menu[men] === 'number') {
//       menu[men] *= 2;
//     }
//   }
//   //   console.log(menu);
// };
// multiplyNumeric(menu);
// console.log(menu);
// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню"
// };
// ..........................................................................
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
// const updateObject = (obj, ...keysForDelete) => {
//   const newObj = {};
//   //   const keys = Object.keys(obj);
//   for (const key in obj) {
//     if (!keysForDelete.includes(key)) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// };

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));
// function updateObject(obj, ...keysForDelete) {
//   const newObj = {};
//   const keys = Object.keys(obj);
//   for (const key of [...keys]) {
//     if (keysForDelete.includes(key)) {
//       const index = keys.indexOf(key);
//       keys.splice(index, 1);
//     }
//   }
//   for (const key of keys) {
//     newObj[key] = obj[key];
//   }
//   return newObj;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));
// ...........................................................................
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];
// ....................
// const findTopStudent = students => {
//   let bestStudent = students[0];
//   for (const student of students) {
//     if (student.grade > bestStudent.grade) {
//       bestStudent = student;
//     }
//   }
//   return bestStudent;
// };
// ...................
// const findTopStudent = students => {
//   let grades = [];
//   for (const student of students) {
//     grades.push(student.grade);
//   }
//   let bestStuden = Math.max(...grades);
//   for (const student of students) {
//     if (student.grade === bestStuden) {
//       return student;
//     }
//   }
// };
// console.log(findTopStudent(students));
const people = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
];
//нарцис  'Jhon'

const people2 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'
const people3 = [
  {
    name: 'Alex',
    know: ['Alex', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса

const people4 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'
//Нарциса знають всі, нарцис незнає нікого

function findNar(array) {
  let narcis = '';
  for (const person of array) {
    if (person.know.length === 0) {
    }
  }
}
console.log(findNar(people));
