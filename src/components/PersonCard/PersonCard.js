import React from 'react'
import personCardStyle from './PersonCard.module.css'

function PersonCard(props) {

    const {imageSrc, personCardName, personCardText} = props

    return (
        <section className={personCardStyle.personCardSection}>
            <img className={personCardStyle.personCardImage} src={imageSrc} alt="A person from our team"/>

            <article className={personCardStyle.personCardArticle}>
                <button className={personCardStyle.personCardButton}>
                    <p className={personCardStyle.personCardName}>
                        {personCardName}
                    </p>
                </button>
                <p className={personCardStyle.personCardText}>
                    {personCardText}
                </p>

            </article>
        </section>
    )
}

export default PersonCard
