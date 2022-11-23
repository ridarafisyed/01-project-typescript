/** @format */

function mod(num1: number, num2: number): number {
	return num1 ^ num2;
}
function percentage(num1: number, num2: number): number {
	let result = (num1 * 100) / num2;
	return result;
}
function multiply(num1: number, num2: number): number {
	return num1 * num2;
}
function divide(num1: number, num2: number): number {
	return num1 / num2;
}
export { mod, percentage, multiply, divide };
