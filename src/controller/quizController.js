import { gameActions } from '../redux';
import { QuizModel } from '../model';
import { updateList, defaultQuestions } from './utils';

export const answerQuestion = answer => async (dispatch, getState) => {
  const question = getState().game.activeQuestion;
  const questions = getState().game.questions;
  const score = getState().game.score;

  const result = await QuizModel.answerQuestion(question, answer);
  const updatedQuestions = updateList({ ...question, result }, { ...questions });
  await dispatch(gameActions.setQuestions(updatedQuestions));

  if (result) score.hits += 1;
  else score.mistakes += 1;
  dispatch(gameActions.setScore(score));

  await dispatch(nextQuestion());
};

export const nextQuestion = () => async (dispatch, getState) => {
  const question = getState().game.activeQuestion;
  console.log('activeQuestion', question);
  const letter = question && question.letter;
  const quiz = getState().game.quizId;
  const newQuestion = await QuizModel.nextQuestion(quiz, letter);
  if (newQuestion) dispatch(gameActions.setActiveQuestion(newQuestion));
  else dispatch(gameActions.setEndOfGame(true));
};

export const skipword = () => async (dispatch, getState) => {
  const question = getState().game.activeQuestion;
  const score = { ...getState().game.score };
  const questions = { ...getState().game.questions };
  questions[question.letter].skiped = true;
  score.skiped += 1;
  dispatch(gameActions.setScore(score));
  await dispatch(gameActions.setQuestions(questions));
  await dispatch(nextQuestion());
};

export const initGame = () => async dispatch => {
  dispatch(gameActions.setScore({ hits: 0, mistakes: 0, skiped: 0 }));
  await dispatch(gameActions.setQuiz(1));
  await dispatch(gameActions.setQuestions(defaultQuestions()));
  await dispatch(gameActions.setActiveQuestion(undefined));
  await dispatch(gameActions.setEndOfGame(false));
  await dispatch(nextQuestion());
};
