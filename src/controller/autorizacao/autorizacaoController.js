import { autorizacaoModel } from '../../model';
import history from '../../shared/history';

class AutorizacaoController {
  cadastrar = usuario => async dispatch => {
    const { email, password } = usuario;
    await autorizacaoModel.cadastrar(usuario);
    await dispatch(this.login({ email, password }));
  };
  login = credenciais => async () => {
    const data = await autorizacaoModel.login(credenciais);
    this.armazenarSessao(data);
    history.push('/');
  };

  armazenarSessao = dados => {
    const { token, email, name } = dados;
    sessionStorage.setItem('TOKEN', token);
    sessionStorage.setItem('EMAIL', email);
    sessionStorage.setItem('NOME', name);
  };
}
export default new AutorizacaoController();
