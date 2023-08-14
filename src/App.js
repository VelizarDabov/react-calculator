import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Key from './components/Keys';
const App = () => {

    const [result, setResult] = useState("");

    const onClick = button => {
        if (button === "=") {
            calculate();
        } else if (button === "C") {
            reset();
        } else if (button === "CE") {
            backspace();
        } else {
            setResult(prevResult => prevResult + button);
        }
    };

    const calculate = () => {
        let checkResult = '';
        if (result.includes('--')) {
            checkResult = result.replace('--', '+');
        } else {
            checkResult = result;
        }

        try {
            setResult((eval(checkResult) || "") + "");
        } catch (e) {
            setResult("error");
        }
    };

    const reset = () => {
        setResult("");
    };

    const backspace = () => {
        setResult(prevResult => prevResult.slice(0, -1));
    };

    return (
      <div id="wrapper">
      <div id="app">
          <div className="calculator">
              <Result result={result} />
              <div className="calculator-keypad">
                  <div className="calculator digit-keys input-key">
                      
                  <Key className='calculator digit-keys key-0'label="0" onClick={onClick} />
                      <Key label="1" onClick={onClick} />
                      <Key label="4" onClick={onClick} />
                      <Key label="7" onClick={onClick} />
                      
                      <Key label="AC" onClick={backspace} />
                      
                    
                  </div>
                  <div className="calculator function-keys">
                      {/* Add Key components for function keys */}
                      <Key label="C" onClick={reset} />
                      <Key label="8" onClick={onClick} />
                      <Key label="5" onClick={onClick} />
                      <Key label="2" onClick={onClick} />
                      <Key desabled/>
                   
        
                      
                  </div>
                  <div className='calculator function-keys'>
                  <Key label="%" onClick={onClick} />
                  <Key label="9" onClick={onClick} />
                  <Key label="6" onClick={onClick} />
                  <Key label="3" onClick={onClick} />
                  <Key label="." onClick={onClick} />
                  </div>
                  <div className="calculator-keys operator-keys">
                  
                      <Key label="/" onClick={onClick} />
                      <Key label="*" onClick={onClick} />
                      <Key label="-" onClick={onClick} />
                      <Key label="+" onClick={onClick} />
                      <Key label="=" onClick={onClick} />
                      
                      
                  </div>
                
              </div>
          </div>
      </div>
  </div>
);
};

export default App;