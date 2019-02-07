import {
  getRandomInt, getGcd, minNum, maxNum,
} from '..';
import readlineSync from 'readline-sync';

const descriptionGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log();
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
