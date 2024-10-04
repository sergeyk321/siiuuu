import React from 'react';
import Button from '../components/Button';

function Home() {
    return (
        <div>
        <h1>Добро пожаловать!</h1>
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
export default Home;