import {
  FETCH_DECKS,
  CREATE_DECK,
  AUTO_SAVE
} from './types'



export const fetchDecks = () => {
  return (dispatch) => {
    fetch('/api/deck', {
      method: 'GET',
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      return dispatch({
        type: FETCH_DECKS,
        payload: data.results
      })
    })
  }
}

export const createDeck = (deck) => {
  let newDeck = JSON.stringify(deck);
  return (dispatch) => {
    fetch('/api/deck', {
      method: 'POST',
      body: newDeck,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
      return dispatch({
        type: CREATE_DECK,
        payload: data.result
      })
    })
  }
}



export const autoSave = (deck, id) => {
  let savedDeck = JSON.stringify(deck)
  return (dispatch) => {
    fetch(`/api/deck/${id}`, {
      method: 'POST',
      body: savedDeck,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
      return dispatch({
        type: AUTO_SAVE,
        payload: data.result
      })
    })
  }
}
