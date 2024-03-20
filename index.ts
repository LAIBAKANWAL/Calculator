#! /usr/bin/env node
// shabang
import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    {message: 'Enter first number', type:'number', name:'FirstNumber'},
    {message: 'Enter second number', type:'number', name:'SecondNumber'},
    {message: 'Select any operator which you want to do operation', type:'list', choices:['Addition', 'Subtraction','Multiplication', 'Division', 'Modulus', 'Exponentiation'], name: 'Operator'}
]);

if(answer.Operator === 'Addition'){
    console.log(`Your output is: ${answer.FirstNumber + answer.SecondNumber}`);
}else if(answer.Operator === 'Subtraction'){
    console.log(`Your output is: ${answer.FirstNumber - answer.SecondNumber}`);
}else if(answer.Operator === 'Multiplication'){
    console.log(`Your output is: ${answer.FirstNumber * answer.SecondNumber}`);
}
else if(answer.Operator === 'Division'){
    if (answer.SecondNumber === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log(`Your output is: ${answer.FirstNumber / answer.SecondNumber}`);
    }
}else if (answer.Operator === 'Modulus') {
    console.log(`Your output is: ${answer.FirstNumber % answer.SecondNumber}`);
} else if (answer.Operator === 'Exponentiation') {
    console.log(`Your output is: ${Math.pow(answer.FirstNumber, answer.SecondNumber)}`);
}else{
    console.log('Please select a valid operator');
}