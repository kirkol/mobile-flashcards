import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/decks'

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.id]: {title: action.deckName, questions:[]}
      }
    case ADD_CARD:
    console.log("STATE", state)
    console.log("AKCJA", action)
      return {
        ...state,
        [action.id]: {
          ...state[action.id], 
          questions: state[action.id].questions.concat({question: action.question, answer: action.answer})
        }
      }
    default:
      return state
  }
}