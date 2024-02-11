import React from 'react';
import PropTypes from 'prop-types';
import './card.css'; // Import your CSS file for styling

/**
 * Card component for displaying content in a card-like format
 */
const Card = ({ title, content, ...props }) => {
  return (
    <div className="card" {...props}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

Card.propTypes = {
  /**
   * Title of the card
   */
  title: PropTypes.string.isRequired,
  
  /**
   * Content of the card
   */
  content: PropTypes.string.isRequired,
};

export { Card }; // Export the Card component
