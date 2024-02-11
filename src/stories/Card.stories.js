import React from 'react';
import { Card } from './Card';

// Define the title and component for the story
export default {
  title: 'Components/Card', // Title of the story
  component: Card, // Component being tested
};

// Define stories for different variations of the Card component
export const Default = (args) => <Card {...args} />;
Default.args = {
  title: 'Default Card', // Default title for the card
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Default content for the card
};

export const CustomContent = (args) => <Card {...args} />;
CustomContent.args = {
  title: 'Custom Content Card', // Title for the custom content card
  content: 'Custom content goes here.', // Custom content for the card
};

export const Styled = (args) => <Card {...args} />;
Styled.args = {
  title: 'Styled Card', // Title for the styled card
  content: 'Styled content goes here.', // Content for the styled card
  // Additional props for styling
  style: { backgroundColor: '#f0f0f0', color: 'blue', border: '1px solid black' },
};
