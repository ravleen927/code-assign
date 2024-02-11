import React from 'react';
import Text from './Text'; // Import your Text component

export default {
  title: 'Components/Text',
  component: Text,
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

// Define stories for different variations of the Text component
export const Default = (args) => <Text {...args} />;
Default.args = {
  text: 'Default Text', // Default text for the text component
};

export const CustomText = (args) => <Text {...args} />;
CustomText.args = {
  text: 'Custom Text', // Custom text for the text component
};

export const Colored = (args) => <Text {...args} />;
Colored.args = {
  text: 'Colored Text', // Text for the colored text component
  backgroundColor: '#ffcc00', // Background color for the text component
};
