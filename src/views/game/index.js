import { gameController } from '../../controller';
import { connect } from 'react-redux';
import Game from './Game';
import { withTemplate } from '../components/template';
const mapDispatchToProps = dispatch => ({
  initGame: () => dispatch(gameController.initGame())
});

const mapStateToProps = state => ({
  question: state.game.activeQuestion,
  endOfGame: state.game.endOfGame
});

const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default withTemplate(Component);
