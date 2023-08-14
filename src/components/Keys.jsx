import React from 'react';
import '../App.css'; // Import the provided CSS styles

const Key = ({ label, onClick }) => (
    <div className='button'>

    
  <button className={`calculator-key ${label}`} onClick={() => onClick(label)}>
    {label}
  </button>
  </div>
);

export default Key;