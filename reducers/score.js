import {UPDATE_SCORE} from '../actions/score'

export default function score(state = null, action){
  switch(action.type){
    case UPDATE_SCORE:
      return action.points
    default:
      return state
  }
}