import React, { useState } from 'react'
import styles from './SearchDrinks.module.css'
import { FaSearch } from 'react-icons/fa';
import useReq from '../../../Hooks/useReq'
import Modal from '../../Modal/Modal';
import stylesDrinks from '../PopularDrinks/PopularDrinks.module.css'
import FilterDrinks from '../FilterDrinks/FilterDrinks';

function SearchDrinks() {

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

    const inputValue = React.useRef(drinkName);

    const onButtonClick = () => {
        if (inputValue.current.value == "") {
            return setError("Type your drink (:")
        }
        if (drinks == null) {
            setDrinkName(inputValue.current.value)
            return setError("Nothing was found, try again ):")
        }else{
            setError("")
            return setDrinkName(inputValue.current.value)
        }

    }

    return (
        <section className={styles.searchField}>
            <button className={styles.searchButton} onClick={() => onButtonClick()}><FaSearch className={styles.searchIcon} /></button>
            <input ref={inputValue} type="text" placeholder="Type a drink..." className={styles.searchInput} />
            
            <section className={styles.drinksFound}>
                {
                    error !== ""
                        ? <p className={styles.error}>{error}</p>
                        : drinks == null
                            ? <p className={styles.error}>{error}</p>
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
                            })
                }
            </section>

            <FilterDrinks/>

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