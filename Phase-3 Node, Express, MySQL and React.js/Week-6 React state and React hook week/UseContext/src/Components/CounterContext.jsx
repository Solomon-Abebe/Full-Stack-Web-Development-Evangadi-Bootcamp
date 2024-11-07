// CounterContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const allClicksCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <CounterContext.Provider value={{ count, allClicksCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the counter context
export const useCounter = () => {
  return useContext(CounterContext);
};
