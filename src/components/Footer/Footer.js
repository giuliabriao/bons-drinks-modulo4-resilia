import React from 'react'
import footerStyle from './Footer.module.css'

function Footer({footerUrl}) {
    return (
        <div>
            <footer className={footerStyle.footer}>
                <p className={footerStyle.pFooter}>
                    A project made by <a className={footerStyle.aFooter} href={footerUrl}>Giulia Briao</a> - 2021 © (not) All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer
