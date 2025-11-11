// @ts-nocheck
import React, { useState, FocusEvent } from 'react';
import './Input2.scss';

interface InputProps {
  label: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
  type?: string;
  name: string; 
  placeholder?: string;
  style?: CSSProperties;
  inputStyle?: CSSProperties;
  className?: string;  
}

export const Input2: React.FC<InputProps> = ({
  label,
  value = '',
  onChange,
  type = 'text',
  name,
  placeholder = '',
  style,
  inputStyle,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => setIsFocused(true);
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(name, e.target.value);
  };

  return (
     <div className="form-field" style={style}>
          <label htmlFor={name}>{placeholder}</label>
          <input 
            id={name} 
            type={type} 
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle} 
            />
      </div>
  );
};
