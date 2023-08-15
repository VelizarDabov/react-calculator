import React from 'react';
import '../App.css';

const Key = ({ label, onClick }) => (
    <div className='button'>

    
  <button className={`calculator-key ${label}`} onClick={() => onClick(label)}>
    {label}
  </button>
  </div>
);

export default Key;