import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

class QuizModel {
  answerQuestion = async (question, answer) => {
    const res = await axios.post(`${BASE_URL}/questions/${question.id}/answer`, {
      answer
    });
    return res.data.result;
  };

  nextQuestion = async (quiz, letter) => {
    if (letter !== 'Z') {
      const nexLetter = this.getNextLetter(letter);
      const res = await axios.get(`${BASE_URL}/questions?letter=${nexLetter}&quizId=${quiz}`);
      return res.data.question;
    }
  };

  getNextLetter = letter => {
    if (!letter) return String.fromCharCode(65);
    const code = (letter.charCodeAt(0) - 64) % 26;
    return String.fromCharCode(code + 65);
  };
}

export default new QuizModel();
