import basisOfGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Определение функции игры на чётность
const evenGame = () => {
  // Задание игры
  const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  // Вводные данные на игру
  const taskEven = () => {
    const number = getRandomInt(100);

    // Определяем функцию для проверки на четность числа
    const isEven = (num) => num % 2 === 0;

    const question = number;
    const result = (isEven(number) ? 'yes' : 'no');

    return [question, result];
  };

  basisOfGames(noteToEven, taskEven);
};

export default evenGame;
