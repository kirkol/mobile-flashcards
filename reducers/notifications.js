import {TOGGLE_NOTFS} from '../actions/notifications'

export default function toggleNotfs(state = false, action){
  switch (action.type) {
    case TOGGLE_NOTFS :
      return action.x
    default:
      return state
  }
}