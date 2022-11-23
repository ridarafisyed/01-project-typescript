/** @format */

import { add, sub, multiply, divide } from "./module/basicCalculation.js";
import inquirer from "inquirer";

let num1 = 6;
let num2 = 2;

let optSelection = "";

num1 = await inquirer.prompt([{
    name: "First Number",
    type: "number",
    message: 
}])