import runGame from '..';
import getRandomInt from '../utils';

const minNum = -10;
const maxNum = 10;
const isPrime = (num) => {
  let countDel = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) countDel += 1;
  }
  return countDel === 2;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const game = () => {
  const randomNum = getRandomInt(minNum, maxNum);
  const question = String(randomNum);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, game);
