// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');
// const markup = technologies.map(el => `<li class="list-item">${el}</li>`).join('');
// list.innerHtml = markup;

// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector('.target-btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// const handleClick = event => {
//   console.log(event);
// };

// button.addEventListener('click', handleClick);

//    Створи клас для калькулятора, який має такі методи:
//    метод number, який набуває початкового значення для наступних операцій
//   - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
//   методи add, substruct, divide, multiply
//   Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// ? Напиши клас Storage, який створює об'єкти для управління складом товарів.
// ? При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// ? Додай методи класу:
// ? getItems() – повертає масив товарів.
// ? addItem(item) - отримує новий товар та додає його до поточних.
// ? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// */

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//     console.log(items);
//   }
//   getItems() {
//       return this.items;

//     }
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   //   removeItem(item) {
//   //     if (this.items) {
//   //     }
//   //   }
// }
// const stor1 = new Storage(['🍎', '🍋', '🍇', '🍑']);
// // console.log(stor1.getItems());
// stor1.addItem('🍌');
// console.log(stor1);
// // stor1.addItem('🍌');
// // stor1.removeItem('🍋');
// // console.log(stor1.getItems());;
// <!-- Task - 01 -->
//     <p class="task-title">Task 1</p>
//     <form class="contact-form js-contact-form">
//       <input
//         name="userName"
//         type="text"
//         class="contact-form-input js-username-input"
//         data-length="8"
//         placeholder="Your name"
//       />
//       <label class="js-policy-label">
//         <input
//           type="checkbox"
//           name="accept"
//           class="contact-form-checkbox js-policy-checkbox"
//         />
//         Я <span class="js-username-output">Anonymous</span> погоджуюсь із
//         політикою конфіденційності
//       </label>
//       <button type="submit" class="contact-form-btn js-contact-form-submit">
//         Відправити
//       </button>
//     </form>

//     <!-- Task - 02 -->
//     <p class="task-title">Task 2</p>
//     <div class="input-container">
//       <input class="js-password-input" type="text" name="password" />
//       <button class="js-password-button">Приховати</button>
//     </div>

//     <!-- Task - 03 -->
//     <p class="task-title">Task 3</p>
//     <div class="eventThumb"></div>

//     <!-- Task - 04 -->
//     <p class="task-title">Task 4</p>
//     <div>
//       <div class="box"></div>
//       <button class="js-decrease" id="decrease">Зменьшити</button>
//       <button class="js-increase" id="increase">Збільшити</button>
//     </div>

//     <!-- Task - 05 -->
//     <p class="task-title">Task 5</p>
//     <div>
//       <div class="outer-circle">
//         <div class="inner-circle"></div>
//       </div>
//     </div>
// 14:03
// /* tasks styles */
