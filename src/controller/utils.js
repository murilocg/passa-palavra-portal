export const updateList = (newQuestion, questions) => {
  const letter = newQuestion.letter;
  questions[letter] = { ...questions[letter], ...newQuestion };
  return questions;
};

export const defaultQuestions = () => {
  const questions = {};
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(i + 65);
    questions[letter] = {
      letter,
      result: undefined,
      skiped: false
    };
  }
  return questions;
};
