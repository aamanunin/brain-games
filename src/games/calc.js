import runGame from '..';
import getRandomInt from '../utils/random';

const minNum = 1;
const maxNum = 100;

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

const getAnswer = (operand, x, y) => mathItUp[operand](x, y);

const description = 'What is the result of the expression?';

const game = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const operand = getRandomOperand();
  const questionCalc = `${x} ${operand} ${y}`;
  const correctAnswerCalc = String(getAnswer(operand, x, y));
  return [questionCalc, correctAnswerCalc];
};

const play = () => runGame(description, game);

export default play;
