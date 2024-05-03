import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Logo/Logo';
import CartWidget from '../Cart/CartWidget';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Logo/>
            <div className="navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Categoría 1</a>
                    <a className="nav-item nav-link" href="#">Categoría 2</a>
                    <a className="nav-item nav-link" href="#">Categoría 3</a>
                </div>
            </div>
            <CartWidget/> {/* Utilizando el componente CartWidget aquí */}
        </nav>
    );
}

export default NavBar;