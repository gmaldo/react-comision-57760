import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

      
    return (
        <nav className="navbar">
            <Logo />
            <div className="navbar-nav">
                <div className="dropdown">
                    <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>Categories</button>
                    {isOpen && (
                        <div className="dropdown-content">
                            {categories.map((category,index) => (
                                <NavLink key={index} to={`/category/${category}`} onClick={() => setIsOpen(false)}>
                                    {category}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <NavLink to="/cart"><CartWidget /></NavLink>
        </nav>
    );
}

export default NavBar;
