import {TOGGLE_CARD} from '../actions/cardSide'

export default function cardSide(state = "question", action){
  
  switch (action.type) {
    case TOGGLE_CARD :
      return action.cardSide
    default:
      return state
  }
}