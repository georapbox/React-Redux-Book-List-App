import {BOOK_SELECTED} from '../actions';

// State argument is not application state, only the state
// this reducer is responsible for.
function activeBookReducer(state = null, action) {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;
    default:
      return state;
  }
}

export default activeBookReducer;
