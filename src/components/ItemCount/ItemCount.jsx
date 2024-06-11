import React, { useState } from 'react';
import './ItemCount.css'; 

function Counter({ count, max , onAdd, updateQuantity }) {
    const handleIncrement = () => {
        if (count < max) {
            updateQuantity(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
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