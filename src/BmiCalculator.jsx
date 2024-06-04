import React, { useState } from "react";

const BmiCalculator = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const weightInput = (event) => {
    setWeight(event.target.value);
  }

  const heightInput = (event) => {
    setHeight(event.target.value);
  }

  const calculate = () => {
    setHeight('');
    setWeight('');
    setResult((weight / height / height) * 10000);
  }

  return (
    <div className="calculator-container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <h2>Weight (Kg)</h2>
        <input type="number" value={weight} onChange={weightInput} />
      </div>
      <div className="input-group">
        <h2>Height (Cm)</h2>
        <input type="number" value={height} onChange={heightInput} />
      </div>
      <button onClick={calculate}>Calculate BMI</button>
      <p>Results: {Math.floor(result)}</p>
    </div>
  );
};

export default BmiCalculator;
