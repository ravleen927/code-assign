import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  // Optional parameters
  parameters: {
    layout: 'centered', // Center the component in the Canvas
    tags: ['autodocs'], // Add tags for documentation
  },
  // Control the checked state using argTypes
  argTypes: {
    checked: { control: 'boolean' },
  },
};

// Define stories for different variations of the RadioButton component
export const Checked = (args) => <RadioButton {...args} />;
Checked.args = {
  checked: true, // RadioButton is checked
  label: 'Checked RadioButton', // Label for the checked RadioButton
  onChange: () => {}, // Function to handle change event
};

export const Unchecked = (args) => <RadioButton {...args} />;
Unchecked.args = {
  checked: false, // RadioButton is unchecked
  label: 'Unchecked RadioButton', // Label for the unchecked RadioButton
  onChange: () => {}, // Function to handle change event
};
