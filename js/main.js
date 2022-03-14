'use strict';

/* var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {

};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
  name: "Jone",
  age: 25,
  isMarried: false
};

console.log(person.name);
console.log(person['age']);

let arr = ['plun.png','orange.jpeg','apple.jpeg'];
console.log(arr[2]);

// alert("Hello Word!")

// let answer = confirm("Are you her?")
// console.log(answer);

let answer = prompt("Вам 18 лет", "Да")
console.log(answer); 

let incr,
    decr;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecket = false,
    isClose = false;

console.log(isChecket || !isClose);
*/

let money = prompt("Ваш бюджет на месяц?", " ")
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD", " ")
console.log(time);

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
    a2 = prompt("Во сколько обойдется?", " "),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", " "),
    a4 = prompt("Во сколько обойдется?", " ");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);