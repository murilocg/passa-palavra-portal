import { connect } from 'react-redux';
import Score from './Score';
import { gameController } from '../../controller';

const mapStateToProps = state => ({
  score: state.game.score
});

const mapDispatchToProps = dispatch => ({
  initGame: () => dispatch(gameController.initGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score);
