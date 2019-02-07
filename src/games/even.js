import {
  getRandomInt,
} from '..';

const minNum = 1;
const maxNum = 100;
const isEven = num => (num % 2 === 0);

const descriptionEven = 'Answer "yes" if number even otherwise answer "no".';
const gameEven = () => {
  const randomNum = getRandomInt(minNum, maxNum);
  const questionEven = String(randomNum);
  const correctAnswerEven = isEven(randomNum) ? 'yes' : 'no';
  return [questionEven, correctAnswerEven];
};

export { descriptionEven, gameEven };
