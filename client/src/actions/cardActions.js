import {
  FETCH_CARDS

} from './types'


export const fetchCards = () => {
  return (dispatch) => {
    fetch('/api/card', {
      method: 'GET',
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      return dispatch({
        type: FETCH_CARDS,
        payload: data.results
      })
    })
  }
}
