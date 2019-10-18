import gameActions from './gameActions';
import { quizModel } from '../../model';
import { updateList, defaultQuestions } from '../utils';

class GameController {
  answerQuestion = answer => async (dispatch, getState) => {
    const question = getState().game.activeQuestion;
    const questions = getState().game.questions;
    const score = getState().game.score;

    const result = await quizModel.answerQuestion(question, answer);
    const updatedQuestions = updateList({ ...question, result }, { ...questions });
    await dispatch(gameActions.setQuestions(updatedQuestions));

    if (result) score.hits += 1;
    else score.mistakes += 1;
    dispatch(gameActions.setScore(score));

    await dispatch(this.nextQuestion());
  };

  nextQuestion = () => async (dispatch, getState) => {
    const question = getState().game.activeQuestion;
    const letter = question && question.letter;
    const quiz = getState().game.quizId;
    const newQuestion = await quizModel.nextQuestion(quiz, letter);
    if (newQuestion) dispatch(gameActions.setActiveQuestion(newQuestion));
    else dispatch(gameActions.setEndOfGame(true));
  };

  skipword = () => async (dispatch, getState) => {
    const question = getState().game.activeQuestion;
    const score = { ...getState().game.score };
    const questions = { ...getState().game.questions };
    questions[question.letter].skiped = true;
    score.skiped += 1;
    dispatch(gameActions.setScore(score));
    await dispatch(gameActions.setQuestions(questions));
    await dispatch(this.nextQuestion());
  };

  initGame = () => async dispatch => {
    dispatch(gameActions.setScore({ hits: 0, mistakes: 0, skiped: 0 }));
    await dispatch(gameActions.setQuiz(1));
    await dispatch(gameActions.setQuestions(defaultQuestions()));
    await dispatch(gameActions.setActiveQuestion(undefined));
    await dispatch(gameActions.setEndOfGame(false));
    await dispatch(this.nextQuestion());
  };
}
export default new GameController();
