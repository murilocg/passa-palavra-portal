const BASE_URL = 'http://localhost:3000'
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
                    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
export const answerQuestion = async (question, answer) => {
    const res = await axios.post(`${BASE_URL}/questions/${question.id}/answer`, {
        answer
    })
    return res.data
}

export const nextQuestion = async (quiz, questions, letter) => {
    const nexLetter = getNextLetter(letter)
    if(hasNextQuestion(nexLetter, questions)){
        const passedQuestions = questions[nexLetter].passedQuestions
        const res = await axios.get(`${BASE_URL}/questions?letter=${nexLetter}&quizId=${quiz}&passed=${JSON.stringify(passedQuestions)}`)
        return res.data.question
    }
}

const getNextLetter = (letter) => {
    if(!letter) return letters[0]
    const code = (letter.charCodeAt(0) - 64) % letters.length
    return letters[code]
}

const hasNextQuestion = (nexLetter, questions) => {
    const code = nexLetter.charCodeAt(0) - 65
    for (let i = 0; i < 27; i++) {
        const letter = letters[(i + code) % 26]
        const nextQuestion = questions[letter] 
        if(nextQuestion.result === undefined) return true
    }
    return false
}