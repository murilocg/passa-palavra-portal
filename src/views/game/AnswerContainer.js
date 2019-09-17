import {QuizController} from '../../controller'
import { connect } from 'react-redux'
import Answer from './Answer'

const mapStateToProps  = (state) => ({})

const mapDispatchToProps  = dispatch => ({
    answerQuestion: (answer) => dispatch(QuizController.answerQuestion(answer))
})

export default connect(mapStateToProps, mapDispatchToProps )(Answer)