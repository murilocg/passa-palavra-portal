import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const answerQuestion = async (question, answer) => {
  const res = await axios.post(`${BASE_URL}/questions/${question.id}/answer`, {
    answer
  });
  return res.data.result;
};

export const nextQuestion = async (quiz, letter) => {
  if (letter !== 'Z') {
    const nexLetter = getNextLetter(letter);
    const res = await axios.get(`${BASE_URL}/questions?letter=${nexLetter}&quizId=${quiz}`);
    return res.data.question;
  }
};

const getNextLetter = letter => {
  if (!letter) return String.fromCharCode(65);
  const code = (letter.charCodeAt(0) - 64) % 26;
  return String.fromCharCode(code + 65);
};
