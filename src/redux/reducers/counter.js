// Type Import
import { COUNTER, RESET_COUNTER } from '../types';

const initialState = {
  counter: 0
}

// Counter Global State
const counter = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER:
      return {
        ...state,
        counter: action.payload
      }
    case RESET_COUNTER:
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state;
  }
}

export default counter;