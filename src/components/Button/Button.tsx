// @ts-nocheck
import React from 'react';
import './Button.scss';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; // 👈 agregado
}

export const Button: React.FC<ButtonProps> = ({ label, onClick , variant = 'primary'}) => {
  return (
    <button  className={`button ${variant}-button`} onClick={onClick}>
      {label}
    </button>
  );
};
