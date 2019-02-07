import {
  getRandomInt,
} from '..';
import readlineSync from 'readline-sync';

const minNum = 1;
const maxNum = 100;

const descriptionCalc = () => {
  console.log('What is the result of the expression?');
  console.log();
};

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

const gameCalc = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const operand = getRandomOperand();
  console.log(`Question: ${x} ${operand} ${y}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = mathItUp[operand](x, y);
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export { descriptionCalc, gameCalc };
