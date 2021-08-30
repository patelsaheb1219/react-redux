import React from 'react'
import { connect } from 'react-redux';

export const Counter = (props) => {
  const { counter } = props;
  return (
    <div>
      <h3>{counter}</h3>
      <button
        style={{
          padding: "10px 20px",
          fontSize: 16,
          fontWeight: "bold",
          borderRadius: 5,
          border: "1px solid #0000FF",
          backgroundColor: "#0000FF",
          color: "white"
        }}
      >
        Update
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
      >
        Reset
      </button>
    </div >
  )
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
