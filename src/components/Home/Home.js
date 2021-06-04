import React from 'react'
import homeStyle from './Home.module.css'

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
