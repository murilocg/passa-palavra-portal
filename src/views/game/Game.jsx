import React, { Component } from 'react';
import AnswerContainer from './AnswerContainer';
import QuestionsContainer from './QuestionsContainer';
import LabelQuestion from './LabelQuestion';
import ScoreContainer from './ScoreContainer';
import './css/game.css';

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
