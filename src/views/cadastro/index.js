import { connect } from 'react-redux';
import { autorizacaoController } from '../../controller';
import Cadastro from './Cadastro';

const mapDispatchToProps = dispatch => ({
  cadastrar: async usuario => await dispatch(autorizacaoController.cadastrar(usuario))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
