import readlineSync from 'readline-sync';

const roundMax = 3;

const welcome = () => console.log('Welcome to the Brain Games!');

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return (name);
};

const writeDescription = (description) => {
  console.log(description);
  console.log();
};

const runGame = (descriptionGame, game) => {
  welcome();
  writeDescription(descriptionGame);
  const name = greet();
  for (let round = 1; round <= roundMax; round += 1) {
    const [question, correctAnswerGame] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswerGame) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswerGame}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
