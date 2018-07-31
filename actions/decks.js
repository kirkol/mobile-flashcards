export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

import {decks} from '../utils/_DATA' // I take my start data (I wanted to have any data at the beginning to play with)

export function receiveDecks(){
  return{
    type: RECEIVE_DECKS,
    decks
  }
}

export function addNewDeck(deck){
  return{
    type: ADD_DECK,
    deck
  }
}

export function addNewQuestion(deck, question){
  return{
    type: ADD_QUESTION,
    deck,
    question
  }
}