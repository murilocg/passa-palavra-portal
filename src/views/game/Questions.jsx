import React, {useEffect, useMemo} from 'react'

const Questions = (props) => {
    const {questions, activeQuestion } = props
    return (
        <div className="questions-box">
            {
                questions.map( q => {
                    return <SingleQuestion question={q} active={ activeQuestion.letter === q.letter } />
                })
            }
        </div>
    )
}

const SingleQuestion = (props) => {
    const { question } = props
    return useMemo(() => (
            <div className={`question ${getClassState(question)}`}>{question.letter}</div>
        ), [question.result, question.passedQuestions])
}

const getClassState = (question, active) => {
    if(question.result === true) return 'answer-right'
    if(question.result === false) return 'answer-wrong'
    if(question.passedQuestions.length > 0) return 'answer-passed'
    if(active) return 'active'
    return 'unaswer'
}

export default Questions