import React from "react";

const myStyle = {
  color: "red",
  fontWeight: "bold",
};

export default function Counter() {
  return (
    <div>
      <h2>
        Counter #1: <span style={myStyle}>({1})</span>
      </h2>
    </div>
  );
}
