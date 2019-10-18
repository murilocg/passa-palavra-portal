import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

class AnswerModel {
  criarResposta = async resposta => {
    const dataRes = await axios.post(`${BASE_URL}/answer/${resposta.questionId}`, resposta);
    return dataRes.status === 200;
  };

  editarResposta = async resposta => {
    const dataRes = await axios.put(`${BASE_URL}/answer/${resposta.id}`, resposta);
    return dataRes.status === 200;
  };
}

export default new AnswerModel();
