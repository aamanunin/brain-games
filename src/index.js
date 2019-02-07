import readlineSync from 'readline-sync';

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

const runGame = (descriptionGame, game) => {
  welcome();
  descriptionGame();
  play(game);
};

export {
  greet, getRandomInt, runGame,
};
