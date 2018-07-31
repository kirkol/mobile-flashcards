import { updateScore } from "./score";
import { receiveDecks } from "./decks";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(updateScore())
    dispatch(receiveDecks())
  }
} 