import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../store";

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state,
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
