import React from 'react';

const calcRotation = i => {
  return 270 + (360 / 26) * i;
};
const Questions = props => {
  const { questions, activeQuestion } = props;
  const letters = Object.keys(questions);
  return (
    <div className='question-container'>
      <img src='profile.png' alt='user avatar' />
      {letters.map((l, i) => {
        const q = questions[l];
        return (
          <SingleQuestion
            key={q.letter}
            rotation={calcRotation(i)}
            question={q}
            active={activeQuestion && activeQuestion.letter === q.letter}
          />
        );
      })}
    </div>
  );
};

const SingleQuestion = props => {
  const { question, rotation, active } = props;
  return (
    <div
      className={`question ${getClassState(question, active)}`}
      style={{
        transform: `rotate(${rotation}deg) translate(${active ? 12 : 11}em) rotate(${-rotation}deg)`
      }}
    >
      {question.letter}
    </div>
  );
};

const getClassState = (question, active) => {
  if (question.result === true) return 'answer-right';
  if (question.result === false) return 'answer-wrong';
  if (question.skiped) return 'answer-skiped';
  if (active) return 'active';
  return 'unaswer';
};

export default Questions;
