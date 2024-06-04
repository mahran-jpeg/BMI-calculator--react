import React, { useState } from "react";
import './App.css'
const Calculator = () => {
  const [val, setVal] = useState('');
  const [convertedVal, setConvertedVal] = useState('');

  const click = () => {
    setConvertedVal(val * 100);
    setVal('');
  };

  const change = (event) => {
    setVal(event.target.value);
  };

  return (
    <div className="calculator-container">
      <h1>BMI Calculator</h1>
      <h2>m to Cm</h2>
      <input
        type="number"
        onChange={change}
        min="1"
        max="300"
        value={val}
      />
      <button onClick={click}>Convert</button>
      <p>{convertedVal} cm</p>
    </div>
  );
};

export default Calculator;
