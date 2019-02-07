import {
  getRandomInt,
} from '..';
import readlineSync from 'readline-sync';

const minNum = 1;
const maxNum = 100;
const isEven = num => (num % 2 === 0);

const descriptionEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log();
};

const gameEven = () => {
  const question = getRandomInt(minNum, maxNum);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export { descriptionEven, gameEven };
