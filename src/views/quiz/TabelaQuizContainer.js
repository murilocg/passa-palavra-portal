import { connect } from 'react-redux';
import TabelaQuiz from './TabelaQuiz';
import { quizController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  loadQuizzes: async () => await dispatch(quizController.loadQuizzes()),
  abrirQuiz: async idQuiz => await dispatch(quizController.abrirQuiz(idQuiz)),
  deleteQuiz: async idQuiz => await dispatch(quizController.deleteQuiz(idQuiz))
});

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabelaQuiz);
