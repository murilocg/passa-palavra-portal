import axios from 'axios';
class AutorizacaoModel {
  async cadastrar(usuario) {
    const url = `http://localhost:3000/users`;
    const response = await axios.post(url, usuario);
    return response.data;
  }
  async login(credenciais) {
    const url = `http://localhost:3000/session`;
    const response = await axios.post(url, credenciais);
    return response.data;
  }
}

export default new AutorizacaoModel();
