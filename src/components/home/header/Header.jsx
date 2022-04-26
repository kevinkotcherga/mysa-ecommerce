import React from 'react'
import './header.scss'
import logo from '../../../images/logo-gold.svg'
import { FiShoppingCart } from 'react-icons/fi';


const Header = () => {
  return (
    <div className='header'>
      <div className="header__nav">
        <ul>
          <li>SHOP</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="header__logo">
        <img className='header__img' src={logo} height={80} alt="logo" />
      </div>
      <div className="header__login">
        <ul>
          <li>CONNEXION</li>
          <li>INSCRIPTION</li>
          <li className='header__logo-shop'><FiShoppingCart/></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
