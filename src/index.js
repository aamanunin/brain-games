import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return (name);
};

const question = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  if (number % 2 === 0) {
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

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = greet();
  if (question(15) === false) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (question(6) === false) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (question(7) === false) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
};

export { greet, game };
