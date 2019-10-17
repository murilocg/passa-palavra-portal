import axios from 'axios';
import answerModel from './answerModel';
const BASE_URL = 'http://localhost:3000';

class PerguntaModel {
  salvarPergunta = async (pergunta, resposta) => {
    if (pergunta.id) return await this.editarPergunta(pergunta, resposta);
    return await this.criarPergunta(pergunta, resposta);
  };

  criarPergunta = async (pergunta, resposta) => {
    const res = await axios.post(`${BASE_URL}/questions/${pergunta.quizId}`, pergunta);
    if (res.status !== 200) return false;
    const question = res.data;
    return await answerModel.criarResposta({
      resposta: resposta,
      questionId: question.id
    });
  };

  editarPergunta = async (pergunta, resposta) => {
    const res = await axios.put(`${BASE_URL}/questions/${pergunta.id}`, pergunta);
    if (res.status !== 200) return false;
    const question = res.data;
    return await answerModel.editarResposta({
      resposta: resposta,
      questionId: question.id
    });
  };

  deletePergunta = async idPergunta => {
    const data = await axios.delete(`${BASE_URL}/questions/${idPergunta}`);
    return data.status === 200;
  };

  getQuestions = async idQuiz => {
    const res = await axios.get(`${BASE_URL}/questions?quizId=${idQuiz}`);
    return res.data;
  };

  getNextQuestion = async (letter, quizId) => {
    const res = await axios.get(`${BASE_URL}/questions/next?letter=${letter}&quizId=${quizId}`);
    return res.data.question;
  };
}

export default new PerguntaModel();
