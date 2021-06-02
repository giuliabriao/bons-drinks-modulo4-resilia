import React, { useState } from 'react'
import styles from './SearchDrinks.module.css'
import { FaSearch } from 'react-icons/fa';
import useReq from '../../../Hooks/useReq'
import Modal from '../../Modal/Modal';
import stylesDrinks from '../PopularDrinks/PopularDrinks.module.css'

function SearchDrinks(props) {

    const [drinkName, setDrinkName] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedDrink, setSelectedDrink] = useState({})
    const [error, setError] = useState("")

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

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`

    const drinks = useReq(url);

    const validate = async () => {
        if (drinks == null) {
            await setError("Nada foi encontrado.")
            console.log("Nada foi encontrado.");
        }
    }

    console.log(drinks);

    const inputValue = React.useRef(drinkName);

    const onButtonClick = () => {
        if (inputValue.current.value == "") {
            setError("Digite seu drink (:")
        }
        setDrinkName(inputValue.current.value);
    }

    return (
        <section className={styles.searchField}>
            <button onClick={() => onButtonClick()}><FaSearch className={styles.searchIcon} /></button>
            <input ref={inputValue} type="text" placeholder="Type a drink..." className={styles.searchInput} />
            <section className={styles.drinksFound}>
                {

                    error !== "" ? <p>{error}</p>

                        : drinks.map((drink) => {
                            return (
                                <section key={drink.idDrink}>
                                    <p className={stylesDrinks.drinkName}>{drink.strDrink}</p>
                                    <img onClick={() => {
                                        handleClick(drink)
                                        closeModal()
                                    }} className={stylesDrinks.drinkImg} src={drink.strDrinkThumb} />
                                </section>
                            )
                        })}
            </section>


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
        </section>
    )
}

export default SearchDrinks
