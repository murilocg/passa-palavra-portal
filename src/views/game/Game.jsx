import React, { Component } from 'react';
import AnswerContainer from './AnswerContainer';
import QuestionsContainer from './QuestionsContainer';
import LabelQuestion from './LabelQuestion';
import './css/game.css';
import ScoreContainer from './ScoreContainer';

class Game extends Component {
  componentDidMount() {
    this.props.initGame();
  }
  render() {
    return (
      <>
        {this.props.endOfGame ? (
          <ScoreContainer />
        ) : (
          <>
            <LabelQuestion question={this.props.question} />
            <QuestionsContainer />
            <AnswerContainer />
          </>
        )}
      </>
    );
  }
}

export default Game;
