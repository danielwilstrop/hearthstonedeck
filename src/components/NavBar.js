import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../resources/HSlogo.png'

export const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setToggle(!toggle)
    }
    return (
         <nav className = {toggle ? 'nav-active nav' : ''}>
            <div className = "logo">
                <img src = {logo} alt = 'logo' className='logo-pic' />
                <p>HearthStone Deck Creator</p>
            </div>
            <ul className = {toggle ? 'nav-links-toggle nav' : 'nav-links'} id = "nav">
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/deckbuilder'>DeckBuilder</Link></li>
                <li><Link to ='/contact'>Contact</Link></li>
                <li><Link to ='/about'>About</Link></li>

            </ul>
            <div className={toggle ? 'toggle burger' : 'burger'} id = "burger" onClick = {handleClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}