import { combineReducers } from 'redux';
import game from './game/gameReducer';
const reducer = combineReducers({
  game
});

export default reducer;
