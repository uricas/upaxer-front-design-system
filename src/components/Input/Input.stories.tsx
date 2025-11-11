import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React, { useState } from 'react';
import './Input.scss';

// --- Storybook metadata ---
const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Etiqueta del campo' },
    placeholder: { control: 'text', description: 'Texto del placeholder' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Tipo del input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// --- Helper story with state ---
const Template = (args: any) => {
  const [value, setValue] = useState('');
  return <Input {...args} value={value} onChange={setValue} />;
};

// --- Default story ---
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
    type: 'text',
  },
};

// --- Password variant ---
export const Password: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Contraseña',
    placeholder: 'Ingresa tu contraseña',
    type: 'password',
  },
};

// --- Email variant ---
export const Email: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Correo electrónico',
    placeholder: 'ejemplo@upaxer.com',
    type: 'email',
  },
};
