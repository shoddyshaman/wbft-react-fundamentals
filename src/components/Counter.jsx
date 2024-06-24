import React,{useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);

    console.log(count);
  }

  function decrease() {
    setCount(count - 1);

    console.log(count);
  }
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
