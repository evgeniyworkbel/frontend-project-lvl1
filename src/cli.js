import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');
export default userName;
