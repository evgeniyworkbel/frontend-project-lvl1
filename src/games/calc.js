import basisOfGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calc = () => {
  // Задание игры
  const noteToCalc = 'What is the result of the expression?';

  // Вводные данные на игру
  const taskCalc = () => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    const signs = ['+', '-', '*'];
    const sign = signs[getRandomInt(2)];

    const question = `${number1} ${sign} ${number2}`;

    let result = 0;
    switch (sign) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = null;
    }

    return [question, result];
  };

  basisOfGames(noteToCalc, taskCalc);
};

export default calc;
