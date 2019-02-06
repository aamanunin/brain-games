import readlineSync from 'readline-sync';
// После проверки начал уже переделывать код под следующие задание для модульности
// Вроде все замечания поправил.
const roundMax = 3;

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return (name);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const expressionEven = () => {
  const minNum = 1;
  const maxNum = 100;
  const expression = getRandomInt(minNum, maxNum);
  return expression;
};

const isEven = num => (num % 2 === 0);

const questionEven = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const game = (question, expression) => {
  const name = greet();
  for (let round = 1; round <= roundMax; round += 1) {
    const resultCurrentQuestion = question(expression());
    if (!resultCurrentQuestion) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  game(questionEven, expressionEven);
};

export { greet, gameEven };
