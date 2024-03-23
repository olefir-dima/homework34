import React from "react";
import Counter from "./Counter";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1>Counter App</h1>
      <Counter initialCount={0} />
    </div>
  );
};

export default App;
