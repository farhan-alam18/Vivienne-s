import React, { useState } from 'react';
import './Navbar.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const toggleActive = () => setActive(!isActive);

    const renderNavLink = (href, label) => (
        <li className="nav-item">
            <a href={href} className="nav-link">{label}</a>
        </li>
    );

    return (
        <header>
            <nav className="navbar">
                <a href="#" className="nav-branding">Vivienne's </a>
                <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                    <div className="nav-content">
                        <div className="account">
                            <div className="account-item">
                                <PersonOutlineOutlinedIcon style={{ color: '#FFFF' }} className='person icon'/><a href='#'>Account</a>
                            </div>
                            <div className="account-item">
                                <ShoppingCartOutlinedIcon style={{ color: '#FFFF' }} className='cart icon' /><a href='#'>Cart</a>
                            </div>
                        </div>
                        {renderNavLink("#", "Home")}
                        {renderNavLink("#", "Shop")}
                        {renderNavLink("#", "Collections")}
                        {renderNavLink("#", "About")}
                        {renderNavLink("#", "Contact")}

                    </div>
                </ul>
                <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActive}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
