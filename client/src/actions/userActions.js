import {
  FETCH_CURRENT_USER

} from './types'


export const fetchCurrentUser = (id) => {
  return (dispatch) => {
    console.log('here');
    fetch(`/api/user/${id}`, {
      method: 'GET',
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
      return dispatch({
        type: FETCH_CURRENT_USER,
        payload: data.results
      })
    })
  }
}
