import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import './Button.scss';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // opcional, centra el botón en el canvas
  },
  argTypes: {
    label: { control: 'text', description: 'Texto del botón' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Tipo de botón',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
  },
  render: (args) => (
    <button className={`button ${args.variant}-button`} disabled>
      {args.label}
    </button>
  ),
};
