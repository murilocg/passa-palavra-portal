class GameActions {
  SET_QUESTIONS = 'SET_QUESTIONS';
  SET_ACTIVE_QUESTION = 'SET_ACTIVE_QUESTION';
  SET_END_OF_GAME = 'SET_END_OF_GAME';
  SET_SCORE = 'SET_SCORE';
  SET_QUIZ = 'SET_QUIZ';

  setQuestions = questions => ({
    type: this.SET_QUESTIONS,
    questions
  });

  setActiveQuestion = activeQuestion => ({
    type: this.SET_ACTIVE_QUESTION,
    activeQuestion
  });

  setEndOfGame = endOfGame => ({
    type: this.SET_END_OF_GAME,
    endOfGame
  });

  setScore = score => ({
    type: this.SET_SCORE,
    score
  });

  setQuiz = quiz => ({
    type: this.SET_QUIZ,
    quiz
  });
}

export default new GameActions();
