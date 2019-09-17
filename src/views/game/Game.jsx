import React, { useEffect } from 'react'
import AnswerContainer from './AnswerContainer'
import QuestionsContainer from './QuestionsContainer'
import LabelQuestion from './LabelQuestion'
import '../css/game.css'

const Game = (props) => {
    useEffect(props.nextQuestion);
    return (
        <>
            <LabelQuestion />
            <QuestionsContainer />
            <AnswerContainer />
        </>
    );
}

export default Game;