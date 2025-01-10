// src/components/Header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Button label="Home" onClick={() => navigate('/')} className="home" />
      <Button label="About" onClick={() => navigate('/about')} className='about'/>
      <Button label="Contact" onClick={() => navigate('/contact')} className='contact'/>
    </header>
  );
};

export default Header;
