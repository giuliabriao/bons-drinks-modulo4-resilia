import React from 'react'
import Navbar from '../Navbar/Navbar'
import headerStyle from './Header.module.css'

function Header() {
    return (
            <header className={headerStyle.headerContainer}>
                <Navbar />
            </header>
    )
}

export default Header
