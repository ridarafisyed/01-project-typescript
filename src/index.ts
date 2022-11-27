/** @format */

import { add, sub, multiply, divide } from "./module/basicCalculation.js";
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
// import Choices from "inquirer/lib/objects/choices.js";
import chalkAnimation from "chalk-animation";
console.clear();

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcomeMsg() {
	const welcome = chalkAnimation.rainbow(
		figlet.textSync("<<< Calculator >>>", {
			font: "Standard",
			horizontalLayout: "default",
			verticalLayout: "default",
			width: 80,
			whitespaceBreak: true,
		}),
	);

	await sleep();
	welcome.stop();
}

function validateNumber(input: any): string | boolean {
	if (isNaN(input)) {
		return "Invalid Number!";
	} else {
		return true;
	}
}
type Answers = {
	firstNumber: string;
	secondNumber: string;
	operations:
		| "+"
		| "-"
		| "x"
		| "÷"
		| "%"
		| "^"
		| "√"
		| "3√"
		| "sin"
		| "cos"
		| "tan"
		| "π"
		| "log"
		| "e"
		| "1/2√"
		| "3√";
};

let checkConfirm: boolean = false;
async function getInput() {
	do {
		const answers: Answers = await inquirer.prompt([
			{
				type: "input",
				name: "firstNumber",
				message: "Enter first number",
				validate: validateNumber,
			},
			{
				type: "list",
				choices: [
					"+",
					"-",
					"x",
					"÷",
					"%",
					"^",
					"√",
					"3√",
					"sin",
					"cos",
					"tan",
					"π",
					"log",
					"e",
					"1/2√",
					"3√",
				],
				name: "operations",
				message: "Choose operation",
			},
			{
				type: "input",
				name: "secondNumber",
				message: "Enter second number",
				validate: validateNumber,
			},
		]);
		const firstNumber = Number(answers.firstNumber);
		const secondNumber = Number(answers.secondNumber);

		switch (answers.operations) {
			case "+":
				console.log(
					`Equation : ${firstNumber} ${answers.operations} ${secondNumber} = ${
						firstNumber + secondNumber
					}`,
				);
				break;
			case "-":
				console.log(
					`Equation : ${firstNumber} ${answers.operations} ${secondNumber} = ${
						firstNumber - secondNumber
					}`,
				);
				break;
			case "x":
				console.log(
					`Equation : ${firstNumber} ${answers.operations} ${secondNumber} = ${
						firstNumber * secondNumber
					}`,
				);
				break;
			case "÷":
				console.log(
					`Equation : ${firstNumber} ${answers.operations} ${secondNumber} = ${(
						firstNumber / secondNumber
					).toFixed(4)}`,
				);
				break;
			case "^":
				console.log(
					`Equation : ${firstNumber} ${answers.operations} ${secondNumber} = ${
						firstNumber ^ secondNumber
					}`,
				);
				break;
			case "√":
				console.log(
					`Equation : ${firstNumber} ${
						answers.operations
					} ${secondNumber} = ${Math.sqrt(firstNumber).toFixed(4)}`,
				);
				break;
			case "%":
				console.log(
					`Equation : ${firstNumber} ${answers.operations} ${secondNumber} = ${
						firstNumber / 100
					}`,
				);
				break;
			case "3√":
				console.log(
					`Equation: ${firstNumber} ${
						answers.operations
					} ${secondNumber} = ${Math.sqrt(firstNumber).toPrecision(4)}`,
				);
				break;
			case "sin":
				console.log(
					`Equation: ${firstNumber} ${
						answers.operations
					} ${secondNumber} = ${Math.sin(firstNumber).toPrecision(4)}`,
				);
				break;
			case "cos":
				console.log(
					`Equation: ${firstNumber} ${
						answers.operations
					} ${secondNumber} = ${Math.cos(firstNumber).toPrecision(4)}`,
				);
				break;
			case "tan":
				console.log(
					`Equation: ${firstNumber} ${
						answers.operations
					} ${secondNumber} = ${Math.tan(firstNumber).toPrecision(4)}`,
				);
				break;
			case "π":
				console.log(
					`Equation: ${firstNumber} ${answers.operations} ${secondNumber} = ${(
						firstNumber * Math.PI
					).toPrecision(4)}`,
				);
				break;
			case "log":
				console.log(
					`Equation: ${firstNumber} ${
						answers.operations
					} ${secondNumber} = ${Math.log2(firstNumber).toPrecision(4)}`,
				);
				break;
			case "e":
				console.log(
					`Equation: ${firstNumber} ${
						answers.operations
					} ${secondNumber} = ${Math.exp(firstNumber).toPrecision(4)}`,
				);
				break;
			case "1/2√":
				console.log(
					`Equation: ${firstNumber} ${answers.operations} ${secondNumber} = ${(
						firstNumber / Math.SQRT1_2
					).toPrecision(4)}`,
				);
				break;
			case "3√":
				console.log(
					`Equation: ${firstNumber} ${answers.operations} ${secondNumber} = ${(
						firstNumber / Math.sqrt(3)
					).toPrecision(4)}`,
				);
				break;

			default:
				break;
		}
		const isConfirm = await inquirer.prompt([
			{
				name: "confirm",
				type: "confirm",
				message: "Do you want to try again",
			},
		]);
		checkConfirm = isConfirm.confirm;

		console.log("\n \n \n");
	} while (checkConfirm);
}

welcomeMsg();

getInput();
