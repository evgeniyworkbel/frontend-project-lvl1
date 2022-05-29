import basisOfGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const progression = () => {
  // Задание игры
  const noteToProgr = 'What number is missing in the progression?';

  // Вводные данные на игру
  const taskProgr = () => {
    // Создаем массив для последовательности чисел
    const sequence = [];
    // Задаем индекс для массива последовательности из 10 чисел
    const lastIndex = 9;

    // Определение функции для получения рандомного шага на последовательность
    const getStep = () => {
      const necessaryStep = getRandomInt(7);

      return (necessaryStep === 0 ? getStep() : necessaryStep);
    };

    // Получаем шаг для последовательности
    const step = getStep();

    // Определяем функцию для получения первого чила последовательности
    const getStartNum = () => {
      const num = getRandomInt(100);
      const limitNum = num + (step * lastIndex);

      if (limitNum > 100) { return getStartNum(); }

      return num;
    };

    // Получаем первое число последовательности
    const startNum = getStartNum();

    // Получаем всю последовательность
    for (let i = 0, nextNum = startNum; i < 10; i += 1, nextNum += step) {
      sequence.push(nextNum);
    }

    // Рандомно определяем индекс числа из массива, которое будет заменено на точки
    const randomIndex = getRandomInt(lastIndex);
    const replacedNum = sequence[randomIndex];
    // Запоминаем результат (правильный ответ) и делаем замену
    let result = replacedNum;
    sequence[randomIndex] = '..';

    // Получаем вопрос для юзера, состоящий из последовательности
    const question = sequence.join(' ');
    // Так как ответ юзера приходит в виде строки (несмотря на то что он указывает число),
    // переводим правильный ответ в строку
    result = result.toString();

    return [question, result];
  };

  basisOfGames(noteToProgr, taskProgr);
};

export default progression;
