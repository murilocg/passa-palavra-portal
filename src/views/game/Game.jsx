import React, { Component } from 'react';
import AnswerContainer from './AnswerContainer';
import QuestionsContainer from './QuestionsContainer';
import LabelQuestion from './LabelQuestion';
import './css/game.css';
import history from '../../shared/history';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      idInterval: undefined
    };
    this.cleanCount = this.cleanCount.bind(this);
    this.setCount = this.setCount.bind(this);
    this.addCount = this.addCount.bind(this);
  }

  componentDidMount() {
    this.cleanCount();
  }

  setCount = count => {
    this.setState({ count });
  };

  addCount = async () => {
    if (this.state.count === 1) {
      await this.props.answerQuestion('');
      this.setCount(5);
    } else {
      this.setCount(this.state.count - 1);
    }
  };

  cleanCount = () => {
    const { tempo } = this.props;
    if (!tempo) return;
    if (this.state.idInterval) clearInterval(this.state.idInterval);
    if (!this.props.endOfGame) {
      const idInterval = setInterval(this.addCount, 1000);
      this.setState({ idInterval, count: 5 });
    }
  };

  render() {
    const { endOfGame, question } = this.props;
    if (endOfGame) {
      clearInterval(this.state.idInterval);
      history.push('/score');
    }
    return (
      <>
        <LabelQuestion question={question} />
        <QuestionsContainer count={this.state.count} />
        <AnswerContainer cleanCount={this.cleanCount} />
      </>
    );
  }
}

export default Game;
