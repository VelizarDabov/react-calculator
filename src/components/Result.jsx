import React from 'react';
import '../App.css'; 

const Result = ({ result }) => (
  <div className="calculator-display">
    <div className="auto-scaling-text">{result}</div>
  </div>
);

export default Result;