import basisOfGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gcd = () => {
  // Задание игры
  const noteToGcd = 'Find the greatest common divisor of given numbers.';

  // Вводные данные на игру
  const taskGcd = () => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    const question = `${number1} ${number2}`;

    const getGcd = (num1, num2) => {
      if (num1 % num2 === 0) { return num2; }

      return getGcd(num2, num1 % num2);
    };

    const result = getGcd(number1, number2).toString();

    return [question, result];
  };

  basisOfGames(noteToGcd, taskGcd);
};

export default gcd;
