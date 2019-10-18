import { connect } from 'react-redux';
import FormPergunta from './FormPergunta';
import { quizController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  salvarPergunta: async (pergunta, resposta) => {
    return await dispatch(quizController.salvarPergunta(pergunta, resposta));
  }
});

const mapStateToProps = state => ({
  quiz: state.quiz.quiz
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPergunta);
