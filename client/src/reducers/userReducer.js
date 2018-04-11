import { FETCH_CURRENT_USER } from '../actions/types'


const INITIAL_STATE = {

  users: [],
  currentUser: 0

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_CURRENT_USER:
      return {...state, currentUser: action.payload}

    default:
      return state;
  }
}
