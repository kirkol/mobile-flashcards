import { updateScore } from "./score";
import { receiveDecks } from "./decks";
import { nextCard } from "./cardNr";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(updateScore(0))
    dispatch(receiveDecks())
    dispatch(nextCard(0))
  }
} 