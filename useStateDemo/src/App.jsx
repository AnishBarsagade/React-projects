import React, { useState } from "react";

const App = () => {
  //Creating a state variable
  const [num, setNum] = useState(0);
  //Functions to increase
  function increaseCnt() {
    setNum(num + 1);
  }
  function DecreaseCnt() {
    setNum(num - 1);
  }
  const jumpby5 = () => {
    setNum(num + 5);
  };
  return (
    <div className="container">
      <h1 className="display">{num}</h1>
      <div className="btns">
        <button onClick={increaseCnt}>Increase</button>
        <button onClick={DecreaseCnt}>Decrease</button>
        <button onClick={jumpby5}>Increase by 5</button>
      </div>
    </div>
  );
};

export default App;
