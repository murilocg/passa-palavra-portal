import { gameController } from '../../controller';
import { connect } from 'react-redux';
import GameMode from './GameMode';
import { withTemplate } from '../components/template';
const mapDispatchToProps = dispatch => ({
  initGame: (quizId, tempo) => dispatch(gameController.initGame(quizId, tempo)),
  loadQuizzes: () => dispatch(gameController.loadQuizzes())
});

const mapStateToProps = state => ({
  quiz: state.game.quizId,
  quizzes: state.game.quizzes
});

const Component = connect(mapStateToProps, mapDispatchToProps)(GameMode);

export default withTemplate(Component);
