import { QuizController } from '../../controller';
import { connect } from 'react-redux';
import Answer from './Answer';

const mapDispatchToProps = dispatch => ({
  answerQuestion: answer => dispatch(QuizController.answerQuestion(answer)),
  skipword: () => dispatch(QuizController.skipword())
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
