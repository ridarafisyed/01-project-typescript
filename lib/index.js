/** @format */
import { add, sub, multiply, divide } from "./module/basicCalculation.js";
let num1 = 6;
let num2 = 2;
console.log(`${num1} + ${num2}  = ${add(num1, num2)}`);
console.log(`${num1} - ${num2}  = ${sub(num1, num2)}`);
console.log(`${num1} * ${num2}  = ${multiply(num1, num2)}`);
console.log(`${num1} / ${num2}  = ${divide(num1, num2)}`);
console.log(`${num1} ^ ${num2}  = ${num1 ^ num2}`); // what is the purpose of this function figure it out
console.log(`${num1} % ${num2}  = ${num1 % num2}`); // what this is doing here figure it out
console.log(`sqrt(${num1})  = ${Math.sqrt(num1)}`);
console.log(`${num1} ** ${num2}  = ${num1 ** num2}`);
