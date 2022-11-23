/** @format */

import { add, sub, multiply, divide } from "./module/basicCalculation.js";
import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

async function calculator(){
    let iterate = true;
    const welcome = `
            ----->>>>> Welcome to the Calculator <<<<<-----`;
    
    while(iterate){
    const calulatorMessage =`
    ${chalk.yellowBright("**Please Select Operation")}

    ${chalk.cyan(`
                -- For Addition (+) press: ${chalk.bold("1")}
                -- For Substraction (-) press: ${chalk.bold("2")}
                -- For Multiplication (x) press: ${chalk.bold("3")}
                -- For Division (/) press : ${chalk.bold("4")}"`)
    }`;
    console.log(chalk.greenBright.bold(welcome));
    console.log(calulatorMessage);
    let operation = await inquirer.prompt([{
        name: "sign",
        type: "number",
        message: "Please enter Operation"}])  ;

    let num1 = await inquirer.prompt([{
        name: "digit",
        type: "number",
        message: "Please enter 1st Number"}]) ; 

    let num2 = await inquirer.prompt([{
        name: "digit",
        type: "number",
        message: "Please enter 2nd Number"}])   ; 
    switch (operation.sign) {
        case 1:
            console.log(chalk.redBright(`your equation is ${num1.digit} + ${num2.digit} = ${add(num1.digit, num2.digit)}`));
            break;      
        case 2:
            console.log(chalk.redBright(`your equation is ${num1.digit} - ${num2.digit} = ${sub(num1.digit, num2.digit)}`));
            break;       
        case 3:
            console.log(chalk.redBright(`your equation is ${num1.digit} x ${num2.digit} = ${multiply(num1.digit, num2.digit)}`));
            break;   
        case 4:
            console.log(chalk.redBright(`your equation is ${num1.digit} / ${num2.digit} = ${divide(num1.digit, num2.digit)}`));
            break;   
        default:
            break;   
    };
    let userPick = await inquirer.prompt([{
        name: "ans",
        type: "number",
        message: "If you want to continue press any key... for exit press 1."}]);        
            
    if (userPick.ans === 1){
            break
        }
    else continue
    
};
};


calculator();
