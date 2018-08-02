import {NEXT_CARD} from '../actions/cardNr'

export default function nextCard(state = 0, action){
  switch (action.type) {
    case NEXT_CARD :
      return action.nr
    default:
      return state
  }
}