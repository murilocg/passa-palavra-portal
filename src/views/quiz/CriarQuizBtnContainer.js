import { connect } from 'react-redux';
import CriarQuizBtn from './CriarQuizBtn';
import { quizController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  novoQuiz: async title => await dispatch(quizController.novoQuiz(title))
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CriarQuizBtn);
