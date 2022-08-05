import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'


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
                BOOK <i className='fa-solid fa-alien' />
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
                <li className='ProdBut'>
                    <Link to = "/Products" className='nav-links' onClick={closeMobileMenu}>
                        PRODUCTS
                    </Link>
                    
                </li>
                <li className='ServBut'>
                    <Link to = "/Services" className='nav-links' onClick={closeMobileMenu}>
                        SERVICES
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