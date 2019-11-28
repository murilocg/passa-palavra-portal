import React, { useState, useEffect } from 'react';

const Answer = props => {
  const [answer, setAnswer] = useState('');
  const isEmpty = answer === '';

  useEffect(focus, [isEmpty]);

  const answerQuestion = async () => {
    if (answer !== '') {
      await props.answerQuestion(answer);
      props.cleanCount();
      setAnswer('');
    }
  };

  const handlerOnChange = e => setAnswer(e.target.value);

  const handlerOnKeyPress = e => e.charCode === 13 && answerQuestion();

  const skipword = async () => {
    await props.skipword();
    props.cleanCount();
    focus();
  };

  return (
    <div className='answer-container'>
      <input
        placeholder='Digite aqui sua resposta'
        id='input-answer'
        onChange={handlerOnChange}
        onKeyPress={handlerOnKeyPress}
        value={answer}
      />
      <div className='container-btn'>
        <button className='btn-answer' onClick={answerQuestion}>
          Responder
        </button>
        <button className='btn-skip-word' onClick={skipword}>
          Passa Palavra
        </button>
      </div>
    </div>
  );
};

const focus = () => {
  const input = document.getElementById('input-answer');
  if (input) input.focus();
};

export default Answer;
