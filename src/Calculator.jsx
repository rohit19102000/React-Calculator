import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input));
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          className="input"
          value={input}
          readOnly
        />
      </div>
      <div className="buttons">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '=', 'C', '/'].map((btnValue) => (
          <button
            key={btnValue}
            onClick={() => handleButtonClick(btnValue)}
          >
            {btnValue}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
