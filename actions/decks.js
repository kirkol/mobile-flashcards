export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

import {decks} from '../utils/_DATA' // I take my start data (I wanted to have any data at the beginning to play with)

export function receiveDecks(){
  return{
    type: RECEIVE_DECKS,
    decks
  }
}

export function addNewDeck(deckName, id){
  return{
    type: ADD_DECK,
    id,
    deckName
  }
}

export function addNewCard(id, question, answer){
  return{
    type: ADD_CARD,
    id,
    question,
    answer
  }
}