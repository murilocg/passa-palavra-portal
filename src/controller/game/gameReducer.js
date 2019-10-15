import gameActions from './gameActions';

const DEFAULT_STATE = {
  quizId: 0,
  activeQuestion: undefined,
  endOfGame: false,
  score: {
    hits: 0,
    mistakes: 0,
    skiped: 0
  },
  questions: {}
};

const gameReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case gameActions.SET_ACTIVE_QUESTION:
      return { ...state, activeQuestion: { ...action.activeQuestion } };
    case gameActions.SET_QUESTIONS:
      return { ...state, questions: { ...action.questions } };
    case gameActions.SET_END_OF_GAME:
      return { ...state, endOfGame: action.endOfGame };
    case gameActions.SET_QUIZ:
      return { ...state, quizId: action.quiz };
    case gameActions.SET_SCORE:
      return { ...state, score: action.score };
    default:
      return { ...state };
  }
};

export default gameReducer;
