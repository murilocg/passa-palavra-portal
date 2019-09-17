import React, { useState } from 'react'

const Answer = (props) => {
    const [answer, setAnswer] = useState('')
    return (
        <div className="">
            <input className="input-answer" onChange={(e) => handlerOnChange(e, setAnswer)} value={answer} />
            <button className="btn-answer" value="Responder" onClick={() => {
                onClickAnswer(answer, setAnswer,props.answerQuestion) 
            }} />
            <button className="btn-pass-word" value="Passa Palavra" disabled />
        </div>
    )
}

const handlerOnChange = (e, setAnswer) => setAnswer(e.target.value)
const onClickAnswer = async (answer, setAnswer, answerQuestion) => {
    await answerQuestion(answer)
    setAnswer('')
}

export default Answer