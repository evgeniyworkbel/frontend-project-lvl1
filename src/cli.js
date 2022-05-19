import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName()}!`);
};

export default greeting;
