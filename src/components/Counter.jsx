import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice.js";

const myStyle = {
  color: "red",
  fontWeight: "bold",
};

export default function Counter() {

// Hooks
const counterState = useSelector((state)=> state.counter);


// Handlers
const handleIncrement = ()=>{
  // handle increment

};
const handleDecrement = ()=>{
  // handle decrement

};
const handleIncrementByAmount = ()=>{
  // handle increment by amount

};

  return (
    <div>
      <h2>
        Counter #1: <span style={myStyle}>({counterState.value})</span>
      </h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementByAmount}>+10</button>
    </div>
  );
}
