import {
  getRandomInt,
} from '..';

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

const descriptionGcd = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const questionGcd = ` ${x} ${y}`;
  const correctAnswerGcd = String(getGcd(x, y));
  return [questionGcd, correctAnswerGcd];
};

export { descriptionGcd, gameGcd };
