import quizActions from './quizActions';
import { quizModel, perguntaModel } from '../../model';
import history from '../../shared/history';

class QuizController {
  loadQuizzes = () => async dispatch => {
    const quizzes = await quizModel.loadQuizzes();
    dispatch(quizActions.setQuizzes(quizzes));
  };

  novoQuiz = title => async dispatch => {
    const quiz = await quizModel.salvarQuiz({ title, userId: 1 });
    await dispatch(this.abrirQuiz(quiz.id));
  };

  abrirQuiz = quizId => async dispatch => {
    const quiz = await quizModel.getQuizById(quizId);
    await dispatch(quizActions.setQuizManage(quiz));
    const perguntas = await perguntaModel.getQuestions(quizId);
    await dispatch(quizActions.setPerguntas(perguntas));
    history.push('/edit/quiz');
  };

  salvarQuiz = quiz => async dispatch => {
    await quizModel.salvarQuiz(quiz);
  };

  salvarPergunta = (pergunta, resposta) => async dispatch => {
    await perguntaModel.salvarPergunta(pergunta, resposta);
    await dispatch(this.getQuestions());
  };

  deletePergunta = perguntaId => async dispatch => {
    await perguntaModel.deletePergunta(perguntaId);
    await dispatch(this.getQuestions());
  };

  getQuestions = () => async (dispatch, getState) => {
    const quiz = getState().quiz.quiz;
    const perguntas = await perguntaModel.getQuestions(quiz.id);
    await dispatch(quizActions.setPerguntas(perguntas));
  };

  createQuiz = quiz => async (dispatch, getState) => {
    await quizModel.createQuiz(quiz);
  };

  editQuiz = quiz => async (dispatch, getState) => {
    await quizModel.editQuiz(quiz);
  };

  deleteQuiz = idQuiz => async (dispatch, getState) => {
    await quizModel.deleteQuiz(idQuiz);
    await dispatch(this.loadQuizzes());
  };
}
export default new QuizController();
