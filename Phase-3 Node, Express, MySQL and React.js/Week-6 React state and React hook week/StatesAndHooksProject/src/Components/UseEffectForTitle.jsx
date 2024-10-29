import { useEffect, useState } from "react";

const UseEffectForTitle = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     alert("Component Mounted");
  //   }, []);
  //   useEffect(() => {
  //     document.title = `TitleCount ${count}`;
  //   }, [count]);

  useEffect(() => {
    if (count === 0) {
      alert("Component Mounted");
    }

    document.title = `TitleCount ${count}`;
  }, [count]);

  return (
    <div>
      <h3 style={{ fontSize: "3em", color: "green" }}>4.Use Effect</h3>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click Here
      </button>
      <h3>Count displayer: {count}</h3>
    </div>
  );
};

export default UseEffectForTitle;
