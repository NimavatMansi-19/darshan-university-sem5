# React Calculator App

```jsx
import React, { useState } from 'react';

const App = () => {
  // useState hook to manage the display value of the calculator.
  const [displayValue, setDisplayValue] = useState('');

  // Function to handle number and operator button clicks.
  const handleButtonClick = (value) => {
    setDisplayValue(prevValue => prevValue + value);
  };

  // Function to clear the display.
  const handleClear = () => {
    setDisplayValue('');
  };

  // Function to handle the backspace button.
  const handleBackspace = () => {
    setDisplayValue(prevValue => prevValue.slice(0, -1));
  };

  // Function to evaluate the expression based on the original logic.
  // This logic iterates through the string to find the first operator
  // and then performs the calculation. It does not handle order of operations
  // or multiple operators.
  const handleEquals = () => {
    let expression = displayValue;
    let result = '';

    for (let i = 0; i < expression.length; i++) {
      if (expression.charAt(i) === '+') {
        const parts = expression.split('+');
        if (parts.length === 2) {
          let m = parseInt(parts[0]);
          let n = parseInt(parts[1]);
          result = (m + n).toString();
        }
        break; // Stop after finding the first operator
      }
      if (expression.charAt(i) === '-') {
        const parts = expression.split('-');
        if (parts.length === 2) {
          let m = parseInt(parts[0]);
          let n = parseInt(parts[1]);
          result = (m - n).toString();
        }
        break;
      }
      if (expression.charAt(i) === '*') {
        const parts = expression.split('*');
        if (parts.length === 2) {
          let m = parseInt(parts[0]);
          let n = parseInt(parts[1]);
          result = (m * n).toString();
        }
        break;
      }
      if (expression.charAt(i) === '/') {
        const parts = expression.split('/');
        if (parts.length === 2) {
          let m = parseInt(parts[0]);
          let n = parseInt(parts[1]);
          result = (m / n).toString();
        }
        break;
      }
      if (expression.charAt(i) === '%') {
        const parts = expression.split('%');
        if (parts.length === 2) {
          let m = parseInt(parts[0]);
          let n = parseInt(parts[1]);
          result = (m % n).toString();
        }
        break;
      }
    }
    setDisplayValue(result || 'Error'); // Set result or show 'Error' if no operator found
  };

  const buttonClass = "bg-gray-700 text-white font-bold p-4 m-1 rounded-full text-2xl transition-all duration-200 hover:bg-gray-600 active:bg-gray-500 shadow-md transform hover:scale-105";
  const operatorClass = "bg-orange-500 text-white font-bold p-4 m-1 rounded-full text-2xl transition-all duration-200 hover:bg-orange-400 active:bg-orange-300 shadow-md transform hover:scale-105";
  const equalsClass = "bg-green-600 text-white font-bold p-4 m-1 rounded-full text-2xl transition-all duration-200 hover:bg-green-500 active:bg-green-400 shadow-md transform hover:scale-105 col-span-2";
  const acClass = "bg-red-500 text-white font-bold p-4 m-1 rounded-full text-2xl transition-all duration-200 hover:bg-red-400 active:bg-red-300 shadow-md transform hover:scale-105";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 font-inter p-4">
      <div className="bg-gray-800 p-6 rounded-3xl shadow-2xl w-full max-w-sm">
        {/* Calculator Display */}
        <div className="mb-6">
          <input
            type="text"
            id="panel"
            className="w-full text-right text-4xl bg-gray-900 text-white p-4 rounded-xl font-light shadow-inner border border-gray-700 focus:outline-none"
            value={displayValue}
            readOnly
          />
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-4 gap-4">
          <button className={acClass} onClick={handleClear}>AC</button>
          <button className={acClass} onClick={handleClear}>C</button>
          <button className={operatorClass} onClick={() => handleButtonClick('%')}>%</button>
          <button className={operatorClass} onClick={() => handleButtonClick('/')}>/</button>
          
          <button className={buttonClass} onClick={() => handleButtonClick('7')}>7</button>
          <button className={buttonClass} onClick={() => handleButtonClick('8')}>8</button>
          <button className={buttonClass} onClick={() => handleButtonClick('9')}>9</button>
          <button className={operatorClass} onClick={() => handleButtonClick('*')}>*</button>
          
          <button className={buttonClass} onClick={() => handleButtonClick('4')}>4</button>
          <button className={buttonClass} onClick={() => handleButtonClick('5')}>5</button>
          <button className={buttonClass} onClick={() => handleButtonClick('6')}>6</button>
          <button className={operatorClass} onClick={() => handleButtonClick('-')}>-</button>
          
          <button className={buttonClass} onClick={() => handleButtonClick('1')}>1</button>
          <button className={buttonClass} onClick={() => handleButtonClick('2')}>2</button>
          <button className={buttonClass} onClick={() => handleButtonClick('3')}>3</button>
          <button className={operatorClass} onClick={() => handleButtonClick('+')}>+</button>
          
          <button className={buttonClass} onClick={() => handleButtonClick('00')}>00</button>
          <button className={buttonClass} onClick={() => handleButtonClick('0')}>0</button>
          <button className={buttonClass} onClick={handleBackspace}>Back</button>
          <button className={equalsClass} onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
```

## Summary

This project is a **React-based Calculator App** built using functional components and hooks.  
Key features include:

- **State Management**: Uses `useState` to manage the display value.  
- **Basic Operations**: Supports addition, subtraction, multiplication, division, and modulus.  
- **Utility Functions**: Includes `AC` (clear), `C` (clear), and `Backspace`.  
- **UI Design**: Styled with Tailwind CSS for a modern responsive look.  
- **Evaluation Logic**: Iterates through the input string to find the first operator and compute the result.  

⚠️ Note: The current logic does not support operator precedence or multiple chained operations.
