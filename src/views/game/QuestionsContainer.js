import { connect } from 'react-redux';
import Questions from './Questions';

const mapStateToProps = state => ({
  questions: state.game.questions,
  tempo: state.game.tempo,
  activeQuestion: state.game.activeQuestion
});

export default connect(mapStateToProps)(Questions);
