import {
  getRandomInt,
} from '..';
import readlineSync from 'readline-sync';

const minNum = 1;
const maxNum = 100;

const descriptionGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log();
};

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

const gameGcd = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  console.log(`Question: ${x} ${y}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getGcd(x, y);
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export { descriptionGcd, gameGcd };
