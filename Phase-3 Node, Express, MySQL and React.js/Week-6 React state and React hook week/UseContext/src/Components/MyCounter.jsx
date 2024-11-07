// MyCounter.js
import React from "react";
import { CounterProvider } from "./CounterContext";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

const MyCounter = () => {
  return (
    <CounterProvider>
      <div>
        <h3 style={{ fontSize: "3em", color: "green" }}>
          1. Counter displayer
        </h3>
        <CounterComponents />
      </div>
    </CounterProvider>
  );
};

// Component to handle counter button and display
const CounterComponents = () => {
  const { count, allClicksCounter } = useCounter();

  return (
    <div>
      <button onClick={allClicksCounter}>Click Here</button>
      <CounterDisplayer clicked={count} />
      <EvenCounterDisplayer EvenCounts={count} />
    </div>
  );
};

export default MyCounter;
