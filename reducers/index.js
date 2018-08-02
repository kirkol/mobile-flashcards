import {combineReducers} from 'redux'
import decks from './decks'
import score from './score'
import cardSide from './cardSide'
import cardNr from './cardNr'

export default combineReducers({
  decks,
  score,
  cardSide,
  cardNr
})