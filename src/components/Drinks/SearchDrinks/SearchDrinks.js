import React, { useState } from 'react'
import styles from './SearchDrinks.module.css'
import { FaSearch } from 'react-icons/fa';
import fetchingURL from '../../../services/fetchingURL'
import Modal from '../../Modal/Modal';
import stylesDrinks from '../PopularDrinks/PopularDrinks.module.css'
import { PesquisaCategoriaAlc, PesquisaCategoria, PesquisaCategoriaCopo } from '../../../services/API';

function SearchDrinks() {

    // const [changeComponent, setChangeComponent] = useState(false)
    const [drinkName, setDrinkName] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDrink, setSelectedDrink] = useState({});
    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [drinks, setDrinks] = useState([]);

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`


    const handleClick = (drink) => {
        setSelectedDrink(drink)
    }

    const handleModal = () => {
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

    const onButtonClick = async () => {
        
        if (drinkName === "") {
            return setError("Type your drink (:")
        }

        const arrayDrink = await fetchingURL(url);

        if (arrayDrink === null) {
            setDrinkName(drinkName)
            return setError("Nothing was found, try again ):")
        } else {
            setError("")    
            setData(arrayDrink)
        }
    }

    function pegaCategoria(event) {

        if (event.target.value === 'Alcóolico') {
            setCategoria(['Alcoholic', 'Non_Alcoholic']);
        } else if (event.target.value === 'Categoria') {
            setCategoria([
                'Ordinary Drink',
                'Cocktail',
                'Cocoa',
                'Shot',
                'Milk / Float / Shake',
                'Other / Unknown',
                'Coffee / Tea',
                'Homemade Liqueur',
                'Punch / Party Drink',
                'Beer',
                'Soft Drink / Soda',
            ]);
        } else if (event.target.value === 'Copo') {
            setCategoria([
                'Highball glass',
                'Cocktail glass',
                'Old-fashioned glass',
                'Collins glass',
            ]);
        }
    }

    async function drinkCategoria(event) {
        let nomeCategoria = event.target.value;

        //nomeCategoria = nomeCategoria.replaceAll(" ","_");
        if (nomeCategoria === 'Alcoholic' || nomeCategoria === 'Non_Alcoholic') {
            console.log('entrou aqui no alcoolico');
            const dados = await PesquisaCategoriaAlc(nomeCategoria);
            setData(dados);
            console.log(dados);
        }
        else if (nomeCategoria === 'Ordinary Drink' || nomeCategoria === 'Cocktail' || nomeCategoria === 'Cocoa' || nomeCategoria === 'Shot' || nomeCategoria === 'Milk / Float / Shake' || nomeCategoria === 'Other / Unknown' || nomeCategoria === 'Coffee / Tea' || nomeCategoria === 'Homemade Liqueur' || nomeCategoria === 'Punch / Party Drink' || nomeCategoria === 'Beer' || nomeCategoria === 'Soft Drink / Soda') {
            console.log('entrou aqui no categoria');
            const dados = await PesquisaCategoria(nomeCategoria);
            setData(dados);
            console.log(dados);
        }
        else if (nomeCategoria === 'Highball glass' || nomeCategoria === 'Cocktail glass' || nomeCategoria === 'Old-fashioned glass' || nomeCategoria === 'Collins glass') {
            console.log('entrou aqui no copo');
            const dados = await PesquisaCategoriaCopo(nomeCategoria);
            setData(dados);
        }
    }

    return (
        <section className={styles.searchField}>
            <button className={styles.searchButton} onClick={() => onButtonClick()}><FaSearch className={styles.searchIcon} /></button>
            <input type="text" onBlur={(event) => setDrinkName(event.target.value)} placeholder="Type a drink..." className={styles.searchInput} />
            <div className={styles.filterDiv}>
                <p>Filter by:</p>
                <select onChange={pegaCategoria}>
                    <option selected disabled>Selecione</option>
                    <option value="Alcóolico">Alcóolico</option>
                    <option value="Categoria">Categoria</option>
                    <option value="Copo">Copo</option>
                </select>

                <select onChange={drinkCategoria}>
                    <option selected disabled>Selecione</option>
                    {
                        categoria.map((categoriaNome, i) => {
                            return (
                                <option key={i}>{categoriaNome}</option>
                            )
                        })
                    }
                </select>
            </div>

            <section className={styles.drinksFound}>
                {
                    error !== ""
                        ? <p className={styles.error}>{error}</p>
                        : drinks == null
                            ? <p className={styles.error}>{error}</p>
                            :
                            data.map((drink) => {
                                return (
                                    <section key={drink.idDrink}>
                                        <p className={stylesDrinks.drinkName}>{drink.strDrink}</p>
                                        <img onClick={() => {
                                            handleClick(drink)
                                            handleModal()
                                        }} className={stylesDrinks.drinkImg} src={drink.strDrinkThumb} />
                                    </section>
                                )
                            })
                }

            </section>

            {isModalVisible ?
                <Modal handleModal={handleModal}

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