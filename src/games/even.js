import runGame from '..';
import getRandomInt from '../utils';

const minNum = 1;
const maxNum = 100;
const isEven = num => (num % 2 === 0);

const description = 'Answer "yes" if number even otherwise answer "no".';
const game = () => {
  const randomNum = getRandomInt(minNum, maxNum);
  const question = String(randomNum);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, game);
