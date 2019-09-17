import * as actions from './actions'
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
                    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const DEFAULT_STATE = {
    quizId: 0,
    question: undefined,
    endOfGame: false,
    questions: defaultQuestions()
}

const gameReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case actions.SET_ACTIVE_QUESTION:
            return {...state, question: action.question }
        case actions.SET_QUESTIONS:
            return {...state, questions: [...action.questions]}
        case actions.SET_END_OF_GAME:
            return {...state, endOfGame: action.endOfGame }
        default:
            return { ...state }
    }
}

const defaultQuestions = () => {
    const questions = {}
    letters.forEach(l => {
        questions[l] = {
            result: undefined,
            passedQuestions: []
        }
    })
    return questions
}

export default gameReducer