import React from 'react'
import style from '../../App.css'
import headerStyle from '../Header/Header.module.css'
import navbarStyle from './Navbar.module.css'

function Navbar() {
    return (
            <nav className={navbarStyle.navbar}>
                <a className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} href="/drinks">Drinks</a>
                <a className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} href="/aboutus">About us</a>
                <a className={`${navbarStyle.headerLink} ${headerStyle.fonteEspecial}`} href="/">Good Drinks</a>
                <a className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} href="/ourteam">Our team</a>
                <a className={`${navbarStyle.headerLink} ${headerStyle.fontePadrao}`} href="/contact">Contact us</a>
            </nav>
    )
}

export default Navbar
