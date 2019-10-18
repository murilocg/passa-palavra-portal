import { combineReducers } from 'redux';
import game from './game/gameReducer';
import quiz from './quiz/quizReducer';
const reducer = combineReducers({
  game,
  quiz
});

export default reducer;
