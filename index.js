const readline = require('node:readline');

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForGuess() {
  terminal.question('Guess a number between 1 and 100: ', (answer) => {
    const guess = Number(answer.trim());

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log('Please enter a whole number between 1 and 100.');
      askForGuess();
      return;
    }

    attempts += 1;

    if (guess > targetNumber) {
      console.log('Too high.');
      askForGuess();
      return;
    }

    if (guess < targetNumber) {
      console.log('Too low.');
      askForGuess();
      return;
    }

    console.log(`Correct! You guessed the number in ${attempts} attempt${attempts === 1 ? '' : 's'}.`);
    terminal.close();
  });
}

askForGuess();