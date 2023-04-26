import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const myStyle = {
  color: "red",
  fontWeight: "bold",
};

export default function Counter() {

// Hooks
const counterState = useSelector((state)=> state.counter);
const dispatch = useDispatch();

let {value} = counterState


// Handlers
const handleIncrement = ()=>{
  // handle increment
dispatch(increment());
};
const handleDecrement = ()=>{
  // handle decrement
  dispatch(decrement());
};
const handleIncrementByAmount = ()=>{
  // handle increment by amount
  dispatch(incrementByAmount(10));
};

  return (
    <div>
      <h2>
        Counter #1: <span style={myStyle}>({value})</span>
      </h2>
      {/* <p>name: {counterSlice.name}</p> */}
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrementByAmount}>+10</button>
    </div>
  );
}
