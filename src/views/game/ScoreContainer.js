import { connect } from 'react-redux';
import Score from './Score';
import { QuizController } from '../../controller';

const mapStateToProps = state => ({
  score: state.game.score
});

const mapDispatchToProps = dispatch => ({
  initGame: () => dispatch(QuizController.initGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score);
