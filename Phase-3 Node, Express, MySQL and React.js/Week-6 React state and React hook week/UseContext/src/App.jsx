import React from "react";
import MyCounter from "./Components/MyCounter";
import { CounterProvider } from "./Components/CounterContext";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Welcome to the Counter App</h1>
        <MyCounter />
      </div>
    </CounterProvider>
  );
}

export default App;
