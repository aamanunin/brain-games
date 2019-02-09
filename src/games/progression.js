import runGame from '..';
import getRandomInt from '../utils';

const maxIndex = 9;
const maxStartNum = 10;
const maxStep = 10;

const description = 'What number is missing in the progression?';

const game = () => {
  const startNum = getRandomInt(0, maxStartNum);
  const step = getRandomInt(1, maxStep);
  const hiddenIndex = getRandomInt(0, maxIndex);
  let question = '';
  for (let i = 0; i <= maxIndex; i += 1) {
    if (i === hiddenIndex) {
      question += String('.. ');
    } else {
      question += String(`${startNum + step * i} `);
    }
  }
  question = question.trim();
  const correctAnswer = String(startNum + step * hiddenIndex);
  return [question, correctAnswer];
};

export default () => runGame(description, game);
