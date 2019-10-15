import { gameController } from '../../controller';
import { connect } from 'react-redux';
import Game from './Game';

const mapDispatchToProps = dispatch => ({
  initGame: () => dispatch(gameController.initGame())
});

const mapStateToProps = state => ({
  question: state.game.activeQuestion,
  endOfGame: state.game.endOfGame
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
