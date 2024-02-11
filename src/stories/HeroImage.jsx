import React from 'react';
import PropTypes from 'prop-types';
import './heroImage.css'; // Import your CSS file for styling

interface HeroImageProps {
  src: string;
  alt: string;
}

/**
 * HeroImage component for displaying a hero image
 */
const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="hero-image" />
  );
};

HeroImage.propTypes = {
  /**
   * Source URL of the hero image
   */
  src: PropTypes.string.isRequired,
  
  /**
   * Alternate text for the hero image
   */
  alt: PropTypes.string.isRequired,
};

export default HeroImage; // Export the HeroImage component
