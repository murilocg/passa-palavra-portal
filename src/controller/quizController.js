import { gameActions } from './redux'
import { QuizModel } from '../model'

export const answerQuestion = async(answer) => (dispatch, getState) => {
    const question = getState().game.activeQuestion.id
    const questions = getState().game.questions
    const result = await QuizModel.answerQuestion( answer, question );
    const questions = updateList({ ...question, result }, [...questions]) 
    await dispatch(gameActions.setQuestions(questions));
    await dispatch(nextQuestion())
}

export const nextQuestion = async() => (dispatch, getState) => {
    const question = getState().game.activeQuestion
    const letter = question && question.letter
    const quiz = getState().game.quizId
    const questions = getState().game.questions
    const newQuestion = await QuizModel.nextQuestion(quiz, letter, questions);
    if(newQuestion)
        dispatch(gameActions.setActiveQuestion(newQuestion))
    else
        dispatch(gameActions.setEndOfGame(true))
}

const updateList = (newQuestion, questions) => {
    const letter = newQuestion.letter
    questions[letter] = { ...questions[letter], ...newQuestion }
    return questions
}