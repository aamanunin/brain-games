import {
  getRandomInt, getRandomOperand, mathItUp, minNum, maxNum,
} from '..';
import readlineSync from 'readline-sync';

const gameCalc = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const operand = getRandomOperand();
  console.log(`Question: ${x} ${operand} ${y}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = mathItUp[operand](x, y);
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default gameCalc;
