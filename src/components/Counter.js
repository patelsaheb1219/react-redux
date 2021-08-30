// Module Import
import React from 'react'
import { connect } from 'react-redux';

// Action Import
import { resetCounter, updateCounter } from '../redux/actions/counter';

export const Counter = (props) => {
  const { counter, updateCounter, resetCounter } = props;
  return (
    <div>
      <h3>{counter}</h3>
      <button
        style={{
          padding: "10px 20px",
          margin: 5,
          fontSize: 16,
          fontWeight: "bold",
          borderRadius: 5,
          border: "1px solid #0000FF",
          backgroundColor: "#0000FF",
          color: "white"
        }}
        onClick={() => updateCounter(counter, "increment")}
      >
        +
      </button>
      <button
        style={{
          padding: "10px 20px",
          fontSize: 16,
          margin: 5,
          fontWeight: "bold",
          borderRadius: 5,
          border: "1px solid #0000FF",
          backgroundColor: "#0000FF",
          color: "white"
        }}
        onClick={() => updateCounter(counter, "decrement")}
      >
        -
      </button>
      <br />
      <button
        style={{
          padding: "10px 20px",
          marginTop: 20,
          fontSize: 16,
          fontWeight: "bold",
          borderRadius: 5,
          border: "1px solid #000",
          backgroundColor: "#000",
          color: "white"
        }}
        onClick={() => resetCounter()}
      >
        Reset
      </button>
    </div >
  )
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
  return {
    updateCounter: (counterValue, type) => dispatch(updateCounter(counterValue, type)),
    resetCounter: () => dispatch(resetCounter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
