// CounterDisplayer.js
import React from "react";
import { useCounter } from "./CounterContext";

const CounterDisplayer = () => {
  const { count } = useCounter();
  return <p>Counter: {count}</p>;
};

export default CounterDisplayer;
