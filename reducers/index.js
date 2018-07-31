import {combineReducers} from 'redux'
import decks from './decks'
import score from './score'
import cardSide from './cardSide'

export default combineReducers({
  decks,
  score,
  cardSide
})