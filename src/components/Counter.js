import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState({ countVal: 0 });
  const decrement = () => {
    var countVal = count.count--;
    console.log("dec", countVal);
  };

  const increment = () => {
    var countVal = count.count++;
    console.log("inc", countVal);
  };

  const setValue = () => {
      
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count.count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
