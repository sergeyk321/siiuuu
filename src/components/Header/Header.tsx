import React from 'react';
import Button from '../Button/Button';
import '../Header/Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <Button
                label="Normal Button"
                onClick={() => window.open("http://localhost:5173/about")}
                color="blue"
                size="large"
            />
            <Button
                label="do NOT click"
                onClick={() => window.open("http://localhost:5173/2031")}
                color="blue"
                size="large"
            />
        </div>
    );
}
export default Header;