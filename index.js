//ключове слово ім'я змінної = значення
// let, const, var - ключові слова

const currentMonth = "march";
const varName = "var name";
const varname = "sd";

//Number - цілі числа і числа з плаваючою крапкою.

const age = 20;
const points = 15.8;

// String - рядки, послідовність з нуля або більше символів.
// Рядок починається і закінчується одинарними ', або подвійними лапками ".

// const username = "Mango";
const description = 'JavaScript для початківців';

//true - так, вірно, істина, 1
//false - ні, невірно, неправда, 0
// зверніть увагу на імена змінних, що містять буль. Вони ставлять запитання,
// і відповідь га нього - так або ні.

const isLoggedIn = true;
const canMerge = false;
const hasChildren = false;
const isModalOpen = false;

// null - особливе значення, яке по суті означає ніщо
// Використовується в тих ситуаціях, коли необхідно явно вказати порожнечу.
// Наприклад, якщо користувач нічого не вибрав, то можна сказати що значення null

let selectedProduct = null

// undefined - ще одне спеціальне значення.
// За завмовчуванням, коли змінна оголошується, але не ініціалізується, її значення не визначено,
// їй присвоюється undefined.

let username;
console.log(username); // undefined

// Оператор typeof

console.log(typeof username); //undefined
console.log(typeof isLoggedIn); //boolean
console.log(typeof description); //string

// Взаємодія з користувачем
console.log(description);
alert(description);

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

const randomNum = Math.round(Math.random() * (10 - 1) + 1);
console.log(randomNum);