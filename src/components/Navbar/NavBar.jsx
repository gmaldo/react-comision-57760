import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Logo/Logo';
import CartWidget from '../Cart/CartWidget';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
    const categories = ["electronics","jewelery","men's clothing","women's clothing"]
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Logo/>
            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link">
                        <NavLink
                            to={`/category/${categories[0]}`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            {categories[0]}
                        </NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink
                            to={`/category/${categories[1]}`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            {categories[1]}
                        </NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink
                            to={`/category/${categories[2]}`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            {categories[2]}
                        </NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink
                            to={`/category/${categories[3]}`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            {categories[3]}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar