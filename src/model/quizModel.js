import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const answerQuestion = async (question, answer) => {
  const res = await axios.post(`${BASE_URL}/questions/${question.id}/answer`, {
    answer
  });
  return res.data.result;
};

export const nextQuestion = async (quiz, letter) => {
  if (letter !== 'Z') {
    const nexLetter = getNextLetter(letter);
    const res = await axios.get(`${BASE_URL}/questions?letter=${nexLetter}&quizId=${quiz}`);
    return res.data.question;
  }
};

const getNextLetter = letter => {
  if (!letter) return String.fromCharCode(65);
  const code = (letter.charCodeAt(0) - 64) % 26;
  return String.fromCharCode(code + 65);
};

module.exports = (Sequelize, DataTypes) => {

  let question = Sequelize.define("quiz", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      ask_content: DataTypes.STRING(255),
      answer: DataTypes.STRING(30),
      blocked: DataTypes.BOOLEAN,
      banned: DataTypes.BOOLEAN,
      user_creator_name: DataTypes.STRING(45),
      user_creator_id: DataTypes.INTEGER,
      letter: DataTypes.CHAR,
      tag: DataTypes.STRING(30),
      tag_id: DataTypes.INTEGER,
      users_blocked: DataTypes.INTEGER,

  }, {
          timestamps: true,
          tableName: 'user',
          underscored: true
      });

  quiz.associate = function (model) {

      quiz.belongsTo(model.User, {
          as: 'user',
          foreignKey: 'user_id'
      });
  };

  return quiz;
};