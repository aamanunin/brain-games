import readlineSync from 'readline-sync';
// начал делать вторую игру точь в точь как первую
// сразу стало видно что повторяется, а какая логика уникальная
// почти все переработал
// Вроде все замечания поправил.
const roundMax = 3;

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return (name);
};

const minNum = 1;
const maxNum = 100;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = num => (num % 2 === 0);

const getRandomOperand = () => {
  let operand;
  const randomSwitch = getRandomInt(1, 3);
  switch (randomSwitch) {
    case 1: operand = '+';
      break;
    case 2: operand = '-';
      break;
    case 3: operand = '*';
      break;
    default: break;
  }
  return operand;
};

// этот синтаксис в инете откапал, это дальше в теории будет?
const mathItUp = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const questionCalc = () => {
  const x = getRandomInt(minNum, maxNum);
  const y = getRandomInt(minNum, maxNum);
  const operand = getRandomOperand();
  console.log(operand);
  console.log(`Question: ${x} ${operand} ${y}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = mathItUp[operand](x, y);
  console.log(typeof answer);
  console.log(typeof correctAnswer);
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const questionEven = () => {
  const number = getRandomInt(minNum, maxNum);
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

const game = (question) => {
  const name = greet();
  for (let round = 1; round <= roundMax; round += 1) {
    const resultCurrentQuestion = question();
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
  console.log();
  game(questionEven);
};

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log();
  game(questionCalc);
};

export { greet, gameEven, gameCalc };
