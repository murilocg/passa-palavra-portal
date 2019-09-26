import React from 'react';

const Question = props => {
  const question = props.question;
  return <div className='label-question'>{question ? question.text : ''}</div>;
};

export default Question;
