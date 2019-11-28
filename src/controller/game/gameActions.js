class GameActions {
  SET_QUESTIONS = 'GAME/SET_QUESTIONS';
  SET_ACTIVE_QUESTION = 'GAME/SET_ACTIVE_QUESTION';
  SET_END_OF_GAME = 'GAME/SET_END_OF_GAME';
  SET_SCORE = 'GAME/SET_SCORE';
  SET_QUIZ = 'GAME/SET_QUIZ';
  SET_QUIZZES = 'GAME/SET_QUIZZES';
  SET_TEMPO = 'GAME/SET_TEMPO';
  SET_COUNT = 'GAME/SET_COUNT';

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

  setQuizzes = quizzes => ({
    type: this.SET_QUIZZES,
    quizzes
  });

  setTempo = tempo => ({
    type: this.SET_TEMPO,
    tempo
  });

  setCount = count => ({
    type: this.SET_COUNT,
    count
  });
}

export default new GameActions();
