import React from 'react'
import './Logo.css';
import shopLogo from '../../assets/logo.svg'


const Logo = () => {
  return (
    <div><a href='#'><img className="logo" src={shopLogo} alt="ecommerce logo" /></a></div>
  )
}

export default Logo