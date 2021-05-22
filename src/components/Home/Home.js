import React from 'react'
import Image from '../Image/Image'
import homeStyle from './Home.module.css'
import style from '../../App.css'

function Home() {
    return (
        <div className={homeStyle.homeContainer}>
            <Image imageClassName={homeStyle.homeImage} imageSrc=""/>
        </div>
    )
}

export default Home
