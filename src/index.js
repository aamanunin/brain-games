import readlineSync from 'readline-sync';
import { descriptionEven, gameEven } from './games/even';
import { descriptionCalc, gameCalc } from './games/calc';
import { descriptionGcd, gameGcd } from './games/gcd';

// если вспомогательные функцию вынесу с index.js в отдельный файл, лучше будет?

const roundMax = 3;
const minNum = 1;
const maxNum = 100;
const mathItUp = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const welcome = () => console.log('Welcome to the Brain Games!');

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return (name);
};

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

const getGcd = (x, y) => {
  let a = x;
  let b = y;
  if (a === 0 || b === 0) return a + b;
  if (a > b) {
    a %= b;
  } else {
    b %= a;
  }
  return (getGcd(a, b));
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
  welcome();
  descriptionEven();
  play(gameEven);
};

const runCalc = () => {
  welcome();
  descriptionCalc();
  play(gameCalc);
};

const runGcd = () => {
  welcome();
  descriptionGcd();
  play(gameGcd);
};

export {
  greet, getRandomInt, isEven, minNum, maxNum,
  runEven, runCalc, getRandomOperand, mathItUp,
  runGcd, getGcd,
};
