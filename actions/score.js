export const UPDATE_SCORE = 'UPDATE_SCORE'

export function updateScore(points = 0){
  return{
    type: UPDATE_SCORE,
    points
  }
}