// @ts-nocheck
import React, { useState, FocusEvent } from 'react';
import './Input.scss';

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

export const Input: React.FC<InputProps> = ({
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
    <div className={`upx-input ${isFocused || value ? 'active' : ''}`}
     style={style}>
      <label className="upx-input__label">{label}</label>
      <input
        className="upx-input__field"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputStyle} 
      />
      <span className="upx-input__border"></span>
    </div>
  );
};
