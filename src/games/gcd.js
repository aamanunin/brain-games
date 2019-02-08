import runGame from '..';
import getRandomInt from '../utils/random';

const minNum = 1;
const maxNum = 100;

const getGcd = (x, y) => {
  let a = x;
  let b = y;
  if (x === 0 || y === 0) return a + b;
  if (a > b) {
    a %= b;
  } else {
    b %= a;
  }
  return (getGcd(a, b));
};

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const questionGcd = ` ${x} ${y}`;
  const correctAnswerGcd = String(getGcd(x, y));
  return [questionGcd, correctAnswerGcd];
};

const play = runGame(description, game);

export default play;
