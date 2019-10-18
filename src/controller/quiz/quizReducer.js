import actions from './quizActions';

const DEFAULT_STATE = {
  quizzes: [],
  quiz: { id: 0, title: '' },
  perguntas: []
};

const quizReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actions.SET_QUIZZES:
      return { ...state, quizzes: action.quizzes };
    case actions.SET_PERGUNTAS:
      return { ...state, perguntas: action.perguntas };
    case actions.SET_QUIZ_MANAGE:
      return { ...state, quiz: action.quiz };
    default:
      return { ...state };
  }
};

export default quizReducer;
