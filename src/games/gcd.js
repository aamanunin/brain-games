import runGame from '..';
import getRandomInt from '../utils';

const minNum = 1;
const maxNum = 100;

const getGcd = (x, y) => {
  if (x === 0 || y === 0) return x + y;
  if (x > y) return getGcd(x % y, y);
  return getGcd(x, y % x);
};

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const question = `${x} ${y}`;
  const correctAnswer = String(getGcd(x, y));
  return [question, correctAnswer];
};

export default () => runGame(description, game);
