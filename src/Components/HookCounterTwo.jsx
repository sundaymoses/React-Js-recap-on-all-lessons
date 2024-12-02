import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncreaseByFive =() =>{
    for(i=1)
    setCount(prevCount => prevCount+1);
  }
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increement</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={IncreaseByFive}>Increse by 5</button>
    </div>
  );
}

export default HookCounterTwo;
