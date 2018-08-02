export const NEXT_CARD = 'NEXT_CARD'

export function nextCard(nr){
  return{
    type: NEXT_CARD,
    nr
  }
}