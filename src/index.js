import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');

const descriptionEven = () => console.log('Answer "yes" if number even otherwise answer "no".');

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return (name);
};

const questionEven = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = num => (num % 2 === 0);
  let correctAnswer = '';
  if (isEven(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const gameEven = () => {
  welcome();
  descriptionEven();
  const name = greet();
  let round = 1;
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const minNum = 1;
  const maxNum = 100;
  for (round; round <= 3; round += 1) {
    if (questionEven(getRandomInt(minNum, maxNum))) {
      if (round === 3) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};

const gameCalc = () => {

};

export { greet, gameEven, gameCalc };
