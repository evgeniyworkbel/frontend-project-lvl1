import readlineSync from 'readline-sync';

// Определение функции, дающее рандомное целое число
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// Определение функции игры на чётность
const evenGame = () => {
  /* Приглашение и приветствие
  (отнести их в отдельные функции не вышло из-за разных областей видимостей.
  Так и не понял, как из локальной области приветствия подтянуть введенный юзернейм
  в конец с congratulations) */
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Начало цикла игры
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');

    // Проверка на четность числа
    const isEven = (number % 2 === 0);

    // Константа для правильного ответа
    const rightAnswer = (isEven ? 'yes' : 'no');

    if ((isEven && answerUser === 'yes') || (!isEven && answerUser === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
