const yargs = require('yargs');

const input = yargs
  .option('num1', {
    describe: 'First number',
    demandOption: true,
    type: 'number',
  })
  .option('num2', {
    describe: 'Second number', 
    demandOption: true,
    type: 'number',
  })
  .option('operation', {
    describe: 'calculation',
    demandOption: true,
    choices: ['+', '-', '*', '/'],
  })
  .help()
  .argv;

const number1 = input.num1;
const number2 = input.num2;
const operation = input.operation;

let result;
switch (operation) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;
  default:
    console.log('Wrong calculation');
    process.exit(1);
}

console.log(`${number1} ${operation} ${number2} = ${result}`);
