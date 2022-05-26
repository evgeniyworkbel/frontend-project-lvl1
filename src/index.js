import readlineSync from 'readline-sync';

const basisOfGames = (noteToGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Вывод на экран задания (в чём суть игры)
  console.log(noteToGame);

  // Начало цикла игры
  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log('Question: ', pairOfQuestionAndResult[0]);
    const answerUser = readlineSync.question('Your answer: ');

    // Константа для правильного ответа
    const rightAnswer = pairOfQuestionAndResult[1];

    // Сравнение ответа юзера и вычисленного ответа
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default basisOfGames;
