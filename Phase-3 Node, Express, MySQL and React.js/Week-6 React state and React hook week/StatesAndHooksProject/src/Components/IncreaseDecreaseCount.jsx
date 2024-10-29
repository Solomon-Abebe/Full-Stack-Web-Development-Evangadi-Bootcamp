import { useState } from "react";

const IncreaseDecreaseCount = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3 style={{ fontSize: "3em", color: "yellow" }}>Hooks...</h3>
      <h3 style={{ fontSize: "3em", color: "green" }}>
        3. Increase Decrease Count
      </h3>
      <h3>Initial Count: {count}</h3>
   
   

      {/* <button onClick={() => setCount(0)}>Reset</button> */}
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount != 0 ? 0 : prevCount))
        }
      >
        Reset
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button
        onClick={() =>
          setCount(count > 0 ? (prevCount) => prevCount - 1 : count)
        }
      >
        Decrease
      </button>
    </div>
  );
};

export default IncreaseDecreaseCount;
