import React, { useEffect, useState } from 'react';
import './App.css';

const colors = ["#196127", "#219A3A", "#EAEDF0", "#C6E48B", "#7BC96F"];
const squareCount = 365;

const getRandomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const App = () => {
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const newSquares = [];
        for (let i = 0; i < squareCount; i++) {
            newSquares.push(getRandomColor(colors));
        }
        setSquares(newSquares);
    }, []);

    return (
        <div className="container">
            {squares.map((color, index) => (
                <div key={index} className="square" style={{ backgroundColor: color }}></div>
            ))}
        </div>
    );
}

export default App;
