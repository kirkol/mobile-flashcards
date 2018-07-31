import {RECEIVE_DECKS, ADD_DECK, ADD_QUESTION} from '../actions/decks'

export default function decks(state = {}, action){
  switch(action.type){
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    case ADD_QUESTION:
      return{
        ...state,
        // to do obczajenia xD
      }
    default:
      return state
  }
}