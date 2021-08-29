// Import Types
import { COUNTER, RESET_COUNTER } from '../types';

// Counter Action defination for Increment/Decrement
export const updateCounter = (counterValue, type) => async dispatch => {
  try {
    if (type === "increment") {
      const payload = counterValue + 1;
      dispatch({
        type: COUNTER,
        payload
      })
    } else if (type === "decrement") {
      if (counterValue < 0) {
        alert("Counter value cannot be less than 0");
      }
      const payload = counterValue - 1;
      dispatch({
        type: COUNTER,
        payload
      })
    } else {
      dispatch({
        type: RESET_COUNTER,
        payload: 0
      })
      alert("Something went wrong, Counter reset to 0");
    }
  } catch (err) {
    console.error(err);
  }
}

// Counter Reset
export const resetCounter = () => async dispatch => {
  try {
    dispatch({
      type: RESET_COUNTER,
      payload: 0
    })
  } catch (err) {
    console.error(err);
  }
} 