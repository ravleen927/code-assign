import React from 'react';
import PropTypes from 'prop-types';
import './label.css'; // Import your CSS file for styling

/**
 * Label component for displaying text
 */
const Label = ({ text, ...props }) => {
  return (
    <label className="label" {...props}>
      {text}
    </label>
  );
};

Label.propTypes = {
  /**
   * Text content of the label
   */
  text: PropTypes.string.isRequired,
};

export { Label }; // Export the Label component

