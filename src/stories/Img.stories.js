import React from 'react';
import { Img } from './Img'; // Import the Img component

export default {
  title: 'Components/Img', // Title of the story
  component: Img, // Component being tested
  // Optional parameters
  parameters: {
    layout: 'centered', // Center the component in the Canvas
    tags: ['autodocs'], // Add tags for documentation
  },
  // Control the background color using argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// Define stories for different variations of the Img component
export const Default = (args) => <Img {...args} />;
Default.args = {
  src: 'C:\Users\DELL\Pictures\dog.jpg', // Default source URL for the image
  alt: 'Default Image', // Default alternate text for the image
};

export const CustomImage = (args) => <Img {...args} />;
CustomImage.args = {
  src: 'C:\Users\DELL\Pictures\dog.jpg', // Custom source URL for the image
  alt: 'Custom Image', // Custom alternate text for the image
};

