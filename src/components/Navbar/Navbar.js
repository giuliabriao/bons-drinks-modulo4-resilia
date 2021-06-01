import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../App.css'
import headerStyle from '../Header/Header.module.css'
import navbarStyle from './Navbar.module.css'

function Navbar() {
    return (
            <nav className={navbarStyle.navbar}>
                <Link className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} to="/drinks">Drinks</Link>
                <Link className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} to="/about-us">About us</Link>
                <Link className={`${navbarStyle.headerLink} ${headerStyle.fonteEspecial}`} to="/">Good Drinks</Link>
                <Link className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} to="/our-team">Our team</Link>
                <Link className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} to="/contact">Contact us</Link>
            </nav>
    )
}

export default Navbar
