import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.css'; // Import your CSS file for styling

/**
 * Dropdown component for selecting options
 */
const Dropdown = ({ options, defaultValue, onSelect, ...props }) => {
  return (
    <select className="dropdown" defaultValue={defaultValue} onChange={onSelect} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  /**
   * Array of options for the dropdown
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * Default value for the dropdown
   */
  defaultValue: PropTypes.string,
  /**
   * Function to handle option selection
   */
  onSelect: PropTypes.func,
};

export { Dropdown }; // Export the Dropdown component
