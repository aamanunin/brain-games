#!/usr/bin/env node

import { congrulate, greet, gameIsEven } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const name = greet();
const game1 = gameIsEven(15);
const game2 = gameIsEven(6);
const game3 = gameIsEven(7);
congrulate(game1, game2, game3, name);
