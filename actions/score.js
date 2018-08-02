export const UPDATE_SCORE = 'UPDATE_SCORE'

export function updateScore(points){
  return{
    type: UPDATE_SCORE,
    points
  }
}