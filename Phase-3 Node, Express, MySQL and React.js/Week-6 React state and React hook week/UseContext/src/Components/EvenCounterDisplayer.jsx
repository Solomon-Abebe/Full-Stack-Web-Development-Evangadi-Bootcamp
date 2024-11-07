
import React from "react";
import { useCounter } from "./CounterContext";

const EvenCounterDisplayer = () => {
  const { count } = useCounter();
  return <p>{count % 2 === 0 ? "Even Count!" : "Odd Count!"}</p>;
};

export default EvenCounterDisplayer;
