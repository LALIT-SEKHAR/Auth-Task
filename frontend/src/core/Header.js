import React from 'react';
import { Link } from 'react-router-dom';
import { IsSignIn, SignoutUser } from '../auth/Helper';
import './Header.css'

const Header = () => {

    const signout = () => {
        SignoutUser(localStorage.getItem('AccessToken'))
        localStorage.clear()
    }

    return (
        <header>
            <span>LOGO</span>
            <span>
                <ul className="Header-items">
                    {
                        IsSignIn() ? <li onClick={signout}>logout</li> : <li><Link to="/signin">login</Link></li>
                    }
                </ul>
            </span>
        </header>
    );
};

export default Header;