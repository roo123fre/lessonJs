//ключове слово ім'я змінної = значення
// let, const, var - ключові слова

// const currentMonth = "march";
// const varName = "var name";
// const varname = "sd";

//Number - цілі числа і числа з плаваючою крапкою.

// const age = 20;
// const points = 15.8;

// String - рядки, послідовність з нуля або більше символів.
// Рядок починається і закінчується одинарними ', або подвійними лапками ".

// const username = "Mango";
// const description = 'JavaScript для початківців';

//true - так, вірно, істина, 1
//false - ні, невірно, неправда, 0
// зверніть увагу на імена змінних, що містять буль. Вони ставлять запитання,
// і відповідь га нього - так або ні.

// const isLoggedIn = true;
// const canMerge = false;
// const hasChildren = false;
// const isModalOpen = false;

// null - особливе значення, яке по суті означає ніщо
// Використовується в тих ситуаціях, коли необхідно явно вказати порожнечу.
// Наприклад, якщо користувач нічого не вибрав, то можна сказати що значення null

// let selectedProduct = null

// undefined - ще одне спеціальне значення.
// За завмовчуванням, коли змінна оголошується, але не ініціалізується, її значення не визначено,
// їй присвоюється undefined.

// let username;
// console.log(username); // undefined

// Оператор typeof

// console.log(typeof username); //undefined
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof description); //string

// Взаємодія з користувачем
// console.log(description);
// alert(description);

// Отримання данних

// const years = confirm('Тобі є 18 років ?')
// console.log(years);

// const years = prompt('Тобі є 18 років ?')
// console.log(years);


// const valueA = "5";
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// const valueB = "random string";
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// Методи Number.parseInt() і Number.parseFloat()

//Метод Number.parseInt() парсить з рядка ціле число

// console.log(Number.parseInt("10px"))
// console.log(Number.parseInt("12wer43"))
// console.log(Number.parseInt("12.46qwe79"))
// console.log(Number.parseInt("weww"))

// //Метод Number.parseFloat() парсить з рядка дробове число

// console.log(Number.parseFloat("10px"))
// console.log(Number.parseFloat("12wer43"))
// console.log(Number.parseFloat("12.46qwe79"))
// console.log(Number.parseFloat("weww"))

// //перевірка на число

// const validNum = Number("51");
// console.log(Number.isNaN(validNum));

// const invalidNum = Number("wewer");
// console.log(Number.isNaN(invalidNum));

// const randomNum = Math.round(Math.random() * (10 - 1) + 1);
// console.log(randomNum);

// if (condition){

// }
// const age = 12;

// if (age === 12){
//     console.log("Тобі 12 років")
// }

// const title = document.querySelector("title");
// console.log(title);

// // Розгалуження
// if (true){
//     console.log('true');
// } else {
//     console.log('false');
// }

// {
//     /* <умова> ? <вираз якщо умова правдива>:<вираз якщо хибна>*/
// }
// // тернарний оператор це заміна if-else коду знаком питання:
// true ? console.log("true") : console.log("false");

// const num1 = 10;
// const num2 = 20;

// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber);

// //глобальна область визначення

// if (true){
//     const blockA = "blockA";

//     console.log(global);//'global'
//     console.log(blockA);//'blockA'

//     console.log(blockB);//ReferenceError
//     console.log(blockC);//ReferenceError

//     if (true) {
//         const blockB = "blockB"

//         console.log(global);//'global'
//         console.log(blockA);//'blockA'
//         console.log(blockB);//'blockB'

//     }
// }

// //блочна область видимості

// if (true){
//     const blockC = "blockC"
//     console.log(global);//'global'
//     console.log(blockA);//ReferenceError
//     console.log(blockB);//ReferenceError
//     console.log(blockC);//'blockC'
// }


// while (condition){ //цикл while
//     //код, тіло циклу.
// }

// let counter = 0;

// while (counter < 10){
//     console.log("counter:", counter);
//     counter = +1;
// }

// let password = "";
// do {
//     password = prompt("Введіть пароль довший 4-х символів", "")
// } while (password.length < 5);

// console.log("Ввели пароль:", password);

// const num = 3;

// for (let i = 0; i <= 10; i++){
//     console.log(i);

//     if ( i === num){
//         console.log("Знайшли число 3, прериваємо виконання циклу");
//         break;
//     }
// }

// console.log("Лог пілся циклу");

let correctNumber = 7;
let userGuess = 0;
do{
    userGuess = parseInt(prompt("Вгадай число від 1 до 10:", ""))
    console.log(userGuess);
} while (userGuess !== correctNumber);

alert("Вітаємо! Ви вгадали число " + correctNumber);