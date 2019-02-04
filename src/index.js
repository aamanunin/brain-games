import readlineSync from 'readline-sync';

const actual = readlineSync.question('May I have your name? ');

export const greet = () => console.log(`Hello, ${actual}!`);