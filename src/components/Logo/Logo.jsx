import React from 'react'
import './Logo.css';
import shopLogo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <div><Link to="/"><img className="logo" src={shopLogo} alt="ecommerce logo" /></Link></div>
  )
}

export default Logo