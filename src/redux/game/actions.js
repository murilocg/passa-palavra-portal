export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_ACTIVE_QUESTION = 'SET_ACTIVE_QUESTION';
export const SET_END_OF_GAME = 'SET_END_OF_GAME';
export const SET_SCORE = 'SET_SCORE';
export const SET_QUIZ = 'SET_QUIZ';

export const setQuestions = questions => ({
  type: SET_QUESTIONS,
  questions
});

export const setActiveQuestion = activeQuestion => ({
  type: SET_ACTIVE_QUESTION,
  activeQuestion
});

export const setEndOfGame = endOfGame => ({
  type: SET_END_OF_GAME,
  endOfGame
});

export const setScore = score => ({
  type: SET_SCORE,
  score
});

export const setQuiz = quiz => ({
  type: SET_QUIZ,
  quiz
});
