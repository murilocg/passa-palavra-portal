import { connect } from 'react-redux';
import { autorizacaoController } from '../../controller';
import Login from './Login';

const mapDispatchToProps = dispatch => ({
  login: async credenciais => await dispatch(autorizacaoController.login(credenciais))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
