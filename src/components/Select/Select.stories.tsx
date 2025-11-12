import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import React, { useState } from 'react';
import './Select.scss';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
        description: {
            component: 'A custom Select component that supports default, hover, focus, filled, and read-only states.'
        }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: { 
        control: 'text', 
        description: 'The label for the select input.',
        defaultValue: 'Label'
    },
    options: { 
        control: 'object', 
        description: 'The options for the select dropdown.'
    },
    value: { 
        control: 'text',
        description: 'The currently selected value.'
     },
    placeholder: { 
        control: 'text',
        description: 'The placeholder text when no option is selected.',
        defaultValue: 'Selecciona...'
     },
    readOnly: { 
        control: 'boolean',
        description: 'If true, the select is in a read-only state.',
        defaultValue: false
     },
     onChange: { action: 'changed' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- Base Template for Stories ---
const Template: Story['render'] = (args) => {
  const [value, setValue] = useState(args.value);

  // To reflect changes in Storybook controls
  React.useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };

  return <Select {...args} value={value} onChange={handleChange} />;
};

const defaultOptions = [
    { value: '1', label: 'Item 1' },
    { value: '2', label: 'Item 2' },
    { value: '3', label: 'Item 3' },
];

// --- Stories for each state ---

export const Default: Story = {
  render: Template,
  args: {
    label: 'Label',
    options: defaultOptions,
    placeholder: 'Selecciona...',
    value: '', // Initially no value
  },
  parameters: {
    docs: {
      storyDescription: 'Default state, waiting for user interaction. Displays a placeholder.',
    },
  },
};

export const Filled: Story = {
    render: Template,
    args: {
      label: 'Label',
      options: defaultOptions,
      value: '2', // Pre-selected value
    },
    parameters: {
        docs: {
          storyDescription: 'Represents the state when a user has selected an option. It also shows hover and focus states.',
        },
      },
  };


export const ReadOnly: Story = {
    render: Template,
    args: {
      label: 'Label',
      options: defaultOptions,
      value: '3', // Pre-selected value
      readOnly: true,
    },
    parameters: {
        docs: {
          storyDescription: 'A non-interactive state to display a selected value without allowing changes.',
        },
      },
  };
