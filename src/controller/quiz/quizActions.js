class QuizActions {
  SET_QUIZZES = 'SET_QUIZZES';
  SET_QUIZ_MANAGE = 'SET_QUIZ_MANAGE';
  SET_PERGUNTAS = 'SET_PERGUNTAS';

  setQuizzes = quizzes => ({
    type: this.SET_QUIZZES,
    quizzes
  });

  setQuizManage = quiz => ({
    type: this.SET_QUIZ_MANAGE,
    quiz
  });

  setPerguntas = perguntas => ({
    type: this.SET_PERGUNTAS,
    perguntas
  });
}

export default new QuizActions();
