import React from "react";
import { useTestContext } from "./Context/Context";

export default function Counter() {
  const { count, setCount, memoryCount } = useTestContext();
  return (
    <>
      <div>
        <h1> {count} </h1>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <button onClick={(f) => setCount(count - 1)}>Down</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button
          ref={memoryCount}
          onClick={() => {
            memoryCount.current.value = count;
          }}
        >
          Remembering
        </button>
        <h1> {memoryCount.current.value} </h1>
      </div>
      <div>
        <p onClick={() => console.log(memoryCount)}>
          memoryCount variable value
        </p>
        <p onClick={() => console.log(memoryCount.current.value)}>
          memoryCount.current.value variable value
        </p>
      </div>
    </>
  );
}
