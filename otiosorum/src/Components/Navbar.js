import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import Logo from '../Images/LogoV3.png'

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }   else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize',showButton);

    return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img className="Logo" src={Logo}></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='HomeBut'>
                    <Link to = "/" className='nav-links' onClick={closeMobileMenu}>
                        HOME
                    </Link>
                </li>
                <li className='SignBut'>
                    <Link to = "/Account" className='nav-links-mobile' onClick={closeMobileMenu}>
                        SIGNUP
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

        </div>
    </nav>
  )
}

export default Navbar