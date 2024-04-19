import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    { type: "list",
        name: "operator",
        message: "Select an operator",
        choices: ["+", "-", "*", "/"] }
]);
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("Invalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} =${result} `);
