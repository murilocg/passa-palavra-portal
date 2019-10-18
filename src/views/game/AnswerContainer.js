import { gameController } from '../../controller';
import { connect } from 'react-redux';
import Answer from './Answer';

const mapDispatchToProps = dispatch => ({
  answerQuestion: answer => dispatch(gameController.answerQuestion(answer)),
  skipword: () => dispatch(gameController.skipword())
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
