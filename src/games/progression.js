import runGame from '..';
import getRandomInt from '../random';

const maxI = 9;
const maxStartNum = 10;
const maxStep = 10;
const getHiddenI = () => getRandomInt(0, maxI);
const getStartNum = () => getRandomInt(0, maxStartNum);
const getStep = () => getRandomInt(1, maxStep);

const description = 'What number is missing in the progression?';

const game = () => {
  const startNum = getStartNum();
  const step = getStep();
  const hiddenI = getHiddenI();
  let question = '';
  for (let i = 0; i <= maxI; i += 1) {
    if (i === hiddenI) {
      question += String(',, ');
    } else {
      question += String(`${startNum + step * i} `);
    }
  }
  const correctAnswer = String(startNum + step * hiddenI);
  return [question, correctAnswer];
};

export default () => runGame(description, game);
