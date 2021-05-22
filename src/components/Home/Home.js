import React from 'react'
import Image from '../Image/Image'
import homeStyle from './Home.module.css'
import style from '../../App.css'

function Home() {
    return (
        <>
            <section className={homeStyle.homeContainer}>
                <article className={homeStyle.articleHome}>
                    <p className={homeStyle.textHome}>Do it yourself and experience the best drinks you could imagine...</p>
                </article>
            </section>

        </>
    )
}

export default Home
