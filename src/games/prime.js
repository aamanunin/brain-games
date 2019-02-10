import runGame from '..';
import getRandomInt from '../utils';

const minNum = -10;
const maxNum = 10;
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const game = () => {
  const randomNum = getRandomInt(minNum, maxNum);
  const question = String(randomNum);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, game);
