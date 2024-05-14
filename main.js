#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        message: "Enter your First Number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: " Enter your Second Number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select one Operator to perform operation ",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "Division"],
        name: "operator"
    },
]);
if (answer.operator === "addition") {
    console.log("Result :", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log("Result:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log("Result:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Result:", answer.firstNumber / answer.secondNumber);
}
;
