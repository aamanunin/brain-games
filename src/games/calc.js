import runGame from '..';
import getRandomInt from '../random';

const minNum = 1;
const maxNum = 100;

const description = 'What is the result of the expression?';

const game = () => {
  let question;
  let correctAnswer;
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const randomSwitch = getRandomInt(1, 3);
  switch (randomSwitch) {
    case 1:
      question = `${x} + ${y}`;
      correctAnswer = String(x + y);
      break;
    case 2:
      question = `${x} - ${y}`;
      correctAnswer = String(x - y);
      break;
    case 3:
      question = `${x} * ${y}`;
      correctAnswer = String(x * y);
      break;
    default: break;
  }
  return [question, correctAnswer];
};

export default () => runGame(description, game);
