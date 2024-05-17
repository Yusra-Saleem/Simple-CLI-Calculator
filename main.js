#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let answer = await inquirer_1.default.prompt([{
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
