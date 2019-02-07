import readlineSync from 'readline-sync';
import { descriptionEven, gameEven } from './games/even';
import { descriptionCalc, gameCalc } from './games/calc';
import { descriptionGcd, gameGcd } from './games/gcd';

const roundMax = 3;

const welcome = () => console.log('Welcome to the Brain Games!');

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return (name);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const play = (game) => {
  const name = greet();
  for (let round = 1; round <= roundMax; round += 1) {
    const resultCurrentQuestion = game();
    if (!resultCurrentQuestion) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const runEven = () => {
  welcome();
  descriptionEven();
  play(gameEven);
};

const runCalc = () => {
  welcome();
  descriptionCalc();
  play(gameCalc);
};

const runGcd = () => {
  welcome();
  descriptionGcd();
  play(gameGcd);
};

export {
  greet, getRandomInt, runEven, runCalc, runGcd,
};
