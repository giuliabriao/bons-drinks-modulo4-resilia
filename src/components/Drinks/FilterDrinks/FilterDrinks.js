import React, { useState } from 'react'
import styles from './FilterDrinks.module.css'
import useReq from '../../../Hooks/useReq'

function FilterDrinks() {

    const filterOptions = (filtro) => {
        if (filtro === 'Alcóolico') {
          return ['Alcóolico', 'Não Alcóolico'];
        } else if (filtro === 'Categoria') {
          return [
            'Ordinary Drink',
            'Cocktail',
            'Cocoa',
            'Shot',
            'Milk / Float / Shake',
            'Other/Unknown',
            'Coffee / Tea',
            'Homemade Liqueur',
            'Punch / Party Drink',
            'Beer',
            'Soft Drink / Soda',
          ];
        } else if (filtro === 'Copo') {
          return [
            'Highball glass',
            'Cocktail glass',
            'Old-fashioned glass',
            'Collins glass',
          ];
        } else {
          return ['error'];
        }
      };
      

    const [filter, setFilter] = useState("")

    const alcoholicDrinks = (filter) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`

        const drinks = useReq(url);
    }

    const filteringDrinks = (filter) => {
        if(filter == "Alcoholic"){

        }
    }

    return (
        <form className={styles.form}>
            <h3 className={styles.title}>Filter:</h3>
            <select className={styles.filter} selected value="Selected">
                <option>Alcoholic</option>
                <option>Category</option>
                <option>Glass</option>
            </select>
            <select className={styles.subFilter} selected value="Selected">
                <option>Alcoholic</option>
                <option>Category</option>
                <option>Glass</option>
            </select>
        </form>
    )
}

export default FilterDrinks
