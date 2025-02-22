// 1. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
// var str = "Каждый охотник желает знать";
// function stringToarray(str) {
//   return str.split(" ");
// }

// console.log(stringToarray(str)); // ['Каждый', 'охотник', 'желает', 'знать']
// ...................................................................................
// 2. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = "Каждый охотник желает знать";
// function delete_characters(str, length) {
//   return str.slice(0, length);
// }

// console.log(delete_characters(str, 7)); // Каждый
// .....................................................................................
// 3. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире(-) между словами.
//  При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
//   return str.replaceAll(" ", "-");
// }

// console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// ........................................................................................
// // 4. Сделать первую букву строки прописной
// // Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр
// // первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";

// function cursive_letter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(cursive_letter(str)); // "String not starting with capital"
// ..........................................................................................
// 5. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(capitalize(str)); // "Каждый Охотник Желает Знать"
// .............................................................................................
// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет
// регистр каждого символа на противоположный.Например, если вводится «КаЖдЫй ОхОтНиК»,
// то на выходе должно быть «кАжДыЙ оХоТнИк».

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
// .............................................................................................
// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// function remove_char(str) {
//   return str.replace(/[^a-zA-Z0-9\s]/g, "");
// }

// console.log(remove_char(str)); // "every hunter wishes to know"
// ..............................................................................................
// // 8. Нулевое заполнение строки
// // Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с
// // дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros(num, len, sign = "") {
//   num = String(num);
//   let result = num.padStart(len, "0");
//   return sign + result;
// }

// console.log(zeros(145, 5, "-")); // -00145
// console.log(zeros(33, 4, "+")); // +0033
// console.log(zeros(33, 4)); // 0033
// ..............................................................................................
// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// function comparison(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(comparison("string", "StRiNg")); // true
// console.log(comparison("ABCDe", "AbcdW")); // false
// ................................................................................................
// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в
// строкеstr1 без учёта регистра символов.

// function insensitive_search(str1, str2) {
//   if (str1.toLowerCase().includes(str2)) {
//     return "Соответствует";
//   } else {
//     return "Не соответствует";
//   }
// }

// console.log(insensitive_search("Изучаю JavaScript", "javascript"));
// // Соответствует
// console.log(insensitive_search("Изучаю JavaScript", "javascriptS"));
// // Не соответствует
// .................................................................................................
// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase,
//     при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// str = "hEllo woRld";
// function initCap(str) {
//   let words = str.toLowerCase().split(" ");
//   let newStr = "";
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let capWord = word[0].toUpperCase() + word.slice(1);
//     newStr += capWord;
//   }
//   return newStr;
// }

// console.log(initCap(str)); // HelloWorld
// .......................................................................................................
// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из
// CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания(_),
//     причём каждое слово пишется с маленькой буквы.

// function initSnake(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === char.toUpperCase()) {
//       newString = newString + "_" + char.toLowerCase();
//     } else {
//       newString += char;
//     }
//   }
//   return;
// }

// console.log(initSnake("HelloWorld")); // hello_world
// ...........................................................................................................
function updateObject(obj, ...keysToDelete) {
  let newObj = { ...obj };

  for (let key of keysToDelete) {
    delete newObj[key];
  }

  return newObj;
}
updateObject({ a: 1, b: 2, c: 3 }, "b", "a");
