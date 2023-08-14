import React from 'react';
import '../App.css'; // Import the provided CSS styles

const Result = ({ result }) => (
  <div className="calculator-display">
    <div className="auto-scaling-text">{result}</div>
  </div>
);

export default Result;