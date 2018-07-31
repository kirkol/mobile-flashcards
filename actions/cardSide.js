export const TOGGLE_CARD = 'TOGGLE_CARD'

export function toggleCard(cardSide){
  return{
    type: TOGGLE_CARD,
    cardSide
  }
}