import readlineSync from 'readline-sync';
import gameEven from './games/even';
import gameCalc from './games/calc';

const roundMax = 3;

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return (name);
};

const minNum = 1;
const maxNum = 100;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = num => (num % 2 === 0);

const getRandomOperand = () => {
  let operand;
  const randomSwitch = getRandomInt(1, 3);
  switch (randomSwitch) {
    case 1: operand = '+';
      break;
    case 2: operand = '-';
      break;
    case 3: operand = '*';
      break;
    default: break;
  }
  return operand;
};

const mathItUp = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const play = (game) => {
  const name = greet();
  for (let round = 1; round <= roundMax; round += 1) {
    const resultCurrentQuestion = game();
    if (!resultCurrentQuestion) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const runEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
  play(gameEven);
};

const runCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log();
  play(gameCalc);
};
export {
  greet, getRandomInt, isEven, minNum, maxNum, runEven, runCalc, getRandomOperand, mathItUp,
};
