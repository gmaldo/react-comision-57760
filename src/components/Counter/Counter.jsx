import React, { useState } from 'react';
import './Counter.css'; 

function Counter({ max }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < max) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter">
            <button className="btn btn-secondary" onClick={handleDecrement} disabled={count <= 0}>-</button>
            <span className="count">{count}</span>
            <button className="btn btn-secondary" onClick={handleIncrement} disabled={count >= max}>+</button>
        </div>
    );
}

export default Counter;