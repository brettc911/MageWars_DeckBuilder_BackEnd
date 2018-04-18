import { FETCH_USER } from '../actions/types'


const INITIAL_STATE = {

  allUsers: [],
  user: 0

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_USER:
      return {...state, user: action.payload}

    default:
      return state;
  }
}
