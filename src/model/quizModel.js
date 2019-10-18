import axios from 'axios';
import { getNextLetter } from './utils';
import perguntaModel from './perguntaModel';

const BASE_URL = 'http://localhost:3000';

class QuizModel {
  answerQuestion = async (question, answer) => {
    const res = await axios.post(`${BASE_URL}/questions/${question.id}/answer`, {
      answer
    });
    return res.data.result;
  };

  nextQuestion = async (quiz, letter) => {
    if (letter !== 'Z') return await perguntaModel.getNextQuestion(getNextLetter(letter), quiz);
  };

  loadQuizzes = async () => {
    const res = await axios.get(`${BASE_URL}/quiz?userId=${1}`);
    return res.data.quizzes;
  };

  salvarQuiz = async quiz => {
    if (quiz.id) return await this.editarQuiz(quiz);
    return await this.criarQuiz(quiz);
  };

  getQuizById = async quizId => {
    const res = await axios.get(`${BASE_URL}/quiz/${quizId}`);
    return res.data;
  };

  criarQuiz = async quiz => {
    const res = await axios.post(`${BASE_URL}/quiz`, { ...quiz, userId: 1 });
    return res.data;
  };

  editarQuiz = async quiz => {
    const res = await axios.put(`${BASE_URL}/quiz/${quiz.id}`, { ...quiz, userId: 1 });
    return res.data;
  };

  deleteQuiz = async quizId => {
    const res = await axios.delete(`${BASE_URL}/quiz/${quizId}`);
    return res.status === 200;
  };
}

export default new QuizModel();
