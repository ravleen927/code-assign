import React from 'react';
import PropTypes from 'prop-types';
import './text.css'; // Import your CSS file for styling

/**
 * Text component for displaying text
 */
const Text = ({ content, ...props }) => {
  return (
    <div className="text" {...props}>
      {content}
    </div>
  );
};

Text.propTypes = {
  /**
   * Content of the text
   */
  content: PropTypes.string.isRequired,
};

export { Text }; // Export the Text component
