import {
  getRandomInt, isEven, minNum, maxNum,
} from '..';
import readlineSync from 'readline-sync';

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

export default gameEven;
