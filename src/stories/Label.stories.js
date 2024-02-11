import React from 'react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
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

// Define stories for different variations of the Label component
export const Default = (args) => <Label {...args} />;
Default.args = {
  text: 'Default Label', // Default text for the label
};

export const CustomText = (args) => <Label {...args} />;
CustomText.args = {
  text: 'Custom Text Label', // Custom text for the label
};

export const Colored = (args) => <Label {...args} />;
Colored.args = {
  text: 'Colored Label', // Text for the colored label
  backgroundColor: '#ffcc00', // Background color for the label
};
