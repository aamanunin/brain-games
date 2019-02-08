import runGame from '..';
import getRandomInt from '../utils/random';

const minNum = 1;
const maxNum = 100;
const isEven = num => (num % 2 === 0);

const description = 'Answer "yes" if number even otherwise answer "no".';
const game = () => {
  const randomNum = getRandomInt(minNum, maxNum);
  const questionEven = String(randomNum);
  const correctAnswerEven = isEven(randomNum) ? 'yes' : 'no';
  return [questionEven, correctAnswerEven];
};

const play = () => runGame(description, game);

export default play;
