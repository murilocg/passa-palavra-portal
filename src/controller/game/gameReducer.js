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
  count: 5,
  tempo: false,
  quizzes: [],
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
    case gameActions.SET_QUIZZES:
      return { ...state, quizzes: action.quizzes };
    case gameActions.SET_TEMPO:
      return { ...state, tempo: action.tempo };
    case gameActions.SET_COUNT:
      return { ...state, count: action.count };
    default:
      return { ...state };
  }
};

export default gameReducer;
