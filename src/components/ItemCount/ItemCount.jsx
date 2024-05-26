import React, { useState } from 'react';
import './ItemCount.css'; 

function Counter({ max , onAdd, updateQuantity }) {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < max) {
            setCount(count + 1);
            //update en el estado interno del ItemDetail
            updateQuantity(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
            updateQuantity(count - 1);
        }
    };

    return (
        <>
            <div className="counter">
                <button className="btn btn-secondary" onClick={handleDecrement} disabled={count <= 0}>-</button>
                <span className="count">{count}</span>
                <button className="btn btn-secondary" onClick={handleIncrement} disabled={count >= max}>+</button>
            </div>
            <button className="btn btn-primary" onClick={onAdd}>Añadir al carrito</button>
        </>
        
    );
}

export default Counter;