import React from 'react';
import './header.css';

import {Link} from 'react-router-dom';

import home from '../../assets/web-house-.svg';



const Header = () => {
    return(
        <div className="header">
            <span className="home">
                <Link to='/' >
                <img className="home-logo" src={home} alt="home page"/>
                </Link>
            </span>
            <span className="logo">Aloron</span>
            <span className="about">
            <Link to='/about'><span className="about-logo">About Me</span></Link>
            </span>
        </div>
    )
}

export default Header;