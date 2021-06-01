import React from 'react'
import { popularDrinks } from '../popularDrinksList'
import styles from './PopularDrinks.module.css'

function PopularDrinks() {

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <section className={styles.container}>
            {popularDrinks.map((drink) => {
                return (
                    <section>
                        <p className={styles.drinkName}>{drink.strDrink}</p>
                        <img className={styles.drinkImg} src={drink.strDrinkThumb} />
                    </section>
                )
            })}
        </section>
    )
}

export default PopularDrinks
