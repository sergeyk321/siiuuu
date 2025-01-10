// src/components/Button/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={`button ${className || ''}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export default Button;
