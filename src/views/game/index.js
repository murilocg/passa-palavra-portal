import { connect } from 'react-redux';
import Game from './Game';
import { withTemplate } from '../components/template';
import { gameController } from '../../controller';

const mapStateToProps = state => ({
  question: state.game.activeQuestion,
  endOfGame: state.game.endOfGame,
  tempo: state.game.tempo
});
const mapDispatchToProps = dispatch => ({
  answerQuestion: answer => dispatch(gameController.answerQuestion(answer))
});

const Component = connect(mapStateToProps, mapDispatchToProps)(Game);

export default withTemplate(Component);
