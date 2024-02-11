// RadioButton.js
import React from 'react';
import './radioButton.css';

const RadioButton = ({ options, onSelect }) => {
  return (
    <div>
      {options.map(option => (
        <div key={option.id}>
          <input
            type="radio"
            id={option.id}
            name="radioOptions"
            value={option.id}
            onChange={() => onSelect(option.id)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export { RadioButton };
