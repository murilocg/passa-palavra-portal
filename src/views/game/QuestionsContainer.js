import { connect } from 'react-redux'
import Questions from './Questions'

const mapStateToProps  = (state) => ({
    questions: state.game.questions,
    activeQuestion: state.game.activeQuestion
})

export default connect(mapStateToProps)(Questions)