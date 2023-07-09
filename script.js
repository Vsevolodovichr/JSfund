console.log("Шкуренко");

let variable1;
let variable2;

variable1 = "Значення 1";
variable2 = "Значення 2";

console.log(variable1);
console.log(variable2);

variable2 = variable1;

console.log(variable1);
console.log(variable2);

let login = prompt("Введіть логін:");
let email = prompt("Введіть емейл:");
let password = prompt("Введіть пароль:");

let message = `Dear User, your email is ${email}, your password is ${password}.`;

console.log(message);