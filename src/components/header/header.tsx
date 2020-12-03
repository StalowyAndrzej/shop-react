import React from 'react';
import { Link } from 'react-router-dom'

import  logo  from '../../assets/img/logo.svg'

import './header.styles.scss'


const Header = () => (
    <div className='header'>
       <Link className='logo-container' to="/"><img src={logo} className='logo-container'/></Link>
       <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/contact">CONTACT</Link>
       </div>
    </div>
)

export default Header;