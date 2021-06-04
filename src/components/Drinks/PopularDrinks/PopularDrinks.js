import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import { popularDrinks } from '../popularDrinksList'
import styles from './PopularDrinks.module.css'

function PopularDrinks() {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedDrink, setSelectedDrink] = useState({})

    const handleClick = (drink) => {
        setSelectedDrink(drink)
    }

    const closeModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    function getMeasures(drink) {
        const ingredientsEntries = Object.entries(drink);

        return ingredientsEntries
            .filter(([key, value]) => key.startsWith("strMeasure") && value && value.trim())
            .map(([key, value]) => value)
            .join(", ")
    }

    function getIngredients(drink) {

        const drinkEntries = Object.entries(drink);

        return drinkEntries
            .filter(([key, value]) => key.startsWith("strIngredient") && value && value.trim())
            .map(([key, value]) => value)
            .join(", ");
    }

    return (
        <section className={styles.container}>
            {popularDrinks.map((drink) => {
                return (
                    <section key={drink.idDrink}>
                        <p className={styles.drinkName}>{drink.strDrink}</p>
                        <img onClick={() => {
                            handleClick(drink)
                            closeModal()
                        }} className={styles.drinkImg} src={drink.strDrinkThumb} />
                    </section>
                )
            })}

            {isModalVisible ?
                <Modal closeModal={closeModal}

                    drinkName={selectedDrink.strDrink}
                    image={selectedDrink.strDrinkThumb}
                    category={selectedDrink.strCategory}
                    glass={selectedDrink.strGlass}
                    iba={selectedDrink.strIBA}
                    ingredients={`${getMeasures(selectedDrink)} ${getIngredients(selectedDrink)}`}
                    instructions={selectedDrink.strInstructions}
                />
                : null
            }

        </section >
    )
}

export default PopularDrinks
