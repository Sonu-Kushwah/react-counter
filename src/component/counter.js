import React, { useState } from "react";

function Counter() {
  const [no, setNo] = useState(0);
  //decrement
  const decrement = () => {
    if (no > 0) {
      setNo(no - 1);
    } else {
      setNo(0);
    }
  };
  return (
    <>
      <div className="container">
        <h1>React Counter</h1>
        <div className="counter">
          <div className="row">
            <div className="col-lg-3">
              <button onClick={() => setNo(no + 1)}>+</button>
            </div>
            <div className="col-lg-6">
              <h3>Counter Value={no}</h3>
            </div>
            <div className="col-lg-3">
              <button onClick={decrement}>-</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
