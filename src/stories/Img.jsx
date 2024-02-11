import React from 'react';
import PropTypes from 'prop-types';
import './img.css'; // Import your CSS file for styling

/**
 * Img component for displaying images
 */
const Img = ({ src, alt, ...props }) => {
  return (
    <img src={src} alt={alt} className="img" {...props} />
  );
};

Img.propTypes = {
  /**
   * Source URL of the image
   */
  src: PropTypes.string.isRequired,
  
  /**
   * Alternate text for the image
   */
  alt: PropTypes.string.isRequired,
};

export { Img }; // Export the Img component
