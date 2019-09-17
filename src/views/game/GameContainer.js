import {QuizController} from '../../controller'
import { connect } from 'react-redux'
import Game from './Game';

const mapStateToProps  = (state) => ({})

const mapDispatchToProps  = dispatch => ({
    nextQuestion: () => dispatch(QuizController.nextQuestion())
})

export default connect(mapStateToProps, mapDispatchToProps )(Game)