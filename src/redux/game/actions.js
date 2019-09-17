export const SET_QUESTIONS = "SET_QUESTIONS"
export const SET_ACTIVE_QUESTION = "SET_ACTIVE_QUESTION"
export const SET_END_OF_GAME = "SET_END_OF_GAME"

export const setQuestions = (questions) => ({ 
    type: SET_QUESTIONS, 
    questions
})

export const setActiveQuestion = (activeQuestion) => ({
    type: SET_ACTIVE_QUESTION,
    activeQuestion
})

export const setEndOfGame = (endOfGame) => ({
    type: SET_END_OF_GAME,
    endOfGame
})