import { connect } from 'react-redux';
import TabelaPergunta from './TabelaPergunta';
import { quizController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  getQuestions: async () => await dispatch(quizController.getQuestions()),
  deletePergunta: async IdPergunta => await dispatch(quizController.deletePergunta(IdPergunta))
});

const mapStateToProps = state => ({
  perguntas: state.quiz.perguntas
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabelaPergunta);
