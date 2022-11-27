/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { add, sub, multiply, divide } from "./module/basicCalculation.js";
import inquirer from "inquirer";
import chalk from "chalk";
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let iterate = true;
        const welcome = `
            ----->>>>> Welcome to the Calculator <<<<<-----`;
        while (iterate) {
            const calulatorMessage = `
    ${chalk.yellowBright("**Please Select Operation")}

    ${chalk.cyan(`
                -- For Addition (+) press: ${chalk.bold("+")}
                -- For Substraction (-) press: ${chalk.bold("-")}
                -- For Multiplication (x) press: ${chalk.bold("*")}
                -- For Division (/) press : ${chalk.bold("/")}"`)}`;
            console.log(chalk.greenBright.bold(welcome));
            console.log(calulatorMessage);
            let operation = yield inquirer.prompt([
                {
                    name: "sign",
                    type: "string",
                    message: "Please enter Operation",
                },
            ]);
            let num1 = yield inquirer.prompt([
                {
                    name: "digit",
                    type: "number",
                    message: "Please enter 1st Number",
                },
            ]);
            let num2 = yield inquirer.prompt([
                {
                    name: "digit",
                    type: "number",
                    message: "Please enter 2nd Number",
                },
            ]);
            switch (operation.sign) {
                case "+":
                    console.log(chalk.redBright(`your equation is ${num1.digit} + ${num2.digit} = ${add(num1.digit, num2.digit)}`));
                    break;
                case "-":
                    console.log(chalk.redBright(`your equation is ${num1.digit} - ${num2.digit} = ${sub(num1.digit, num2.digit)}`));
                    break;
                case "*":
                    console.log(chalk.redBright(`your equation is ${num1.digit} x ${num2.digit} = ${multiply(num1.digit, num2.digit)}`));
                    break;
                case "/":
                    console.log(chalk.redBright(`your equation is ${num1.digit} / ${num2.digit} = ${divide(num1.digit, num2.digit)}`));
                    break;
                default:
                    break;
            }
            let userPick = yield inquirer.prompt([
                {
                    name: "ans",
                    type: "number",
                    message: "If you want to continue press any key... for exit press 1.",
                },
            ]);
            if (userPick.ans === 1) {
                break;
            }
            else
                continue;
        }
    });
}
calculator();
