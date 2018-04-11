import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import deckReducer from './deckReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  cards: cardReducer,
  decks: deckReducer,
  users: userReducer
});

export default rootReducer;
