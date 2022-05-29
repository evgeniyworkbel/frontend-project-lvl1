import basisOfGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const prime = () => {
  // Задание игры
  const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // Вводные данные на игру
  const taskPrime = () => {
    const number = getRandomInt(100);

    const isPrime = (num) => {
      if (num < 2) { return false; }

      let i = 2;
      while (i <= num / 2) {
        if (num % i === 0) { return false; }
        i += 1;
      }

      return true;
    };

    const question = `${number}`;
    const result = (isPrime(number) ? 'yes' : 'no');

    return [question, result];
  };

  basisOfGames(noteToPrime, taskPrime);
};

export default prime;
