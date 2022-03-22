import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const {registerFont, createCanvas } =require('canvas')
registerFont('JetBrains Mono Regular Nerd Font Complete Mono.ttf', {family: 'JetBrains Mono'})

const canvas = createCanvas(500, 500)
const ctx = canvas.getContext('2d')

ctx.font = '12px "JetBrains Mono"'
ctx.fillText('Everyone hates this font:(', 250, 10)

function Navbar() {
    const [click, setClick] = useState(false);
    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to = "/" className="navbar-logo">
                OTIO
            </Link>
            <div className='menu-icon'>
                <i className={click ? 'Times New Roman': ''}></i>

            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar