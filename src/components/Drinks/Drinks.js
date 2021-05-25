import React from 'react'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'
import PopularDrinks from './PopularDrinks/PopularDrinks'
import SearchDrinks from './SearchDrinks/SearchDrinks'
import drinkStyle from './Drinks.module.css'

function Drinks() {
    return (
        <section className={drinkStyle.drinksContainer}>
            <h1 className={drinkStyle.drinksTitle}> Taste the experience...</h1>

            <nav className={drinkStyle.drinksNav}>
                <a className={drinkStyle.drinksLink} href="/popular-drinks">Popular drinks</a>
                <a className={drinkStyle.drinksLink} href="/search-drinks">Search drinks</a>
            </nav>

            <p className={drinkStyle.teste}>TESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTE
            TESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTE
            TESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTE
            TESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTE
            </p>

            <Routes>
                <Switch>
                    <Route path="/drinks/popular-drinks" children={<PopularDrinks />} />
                    <Route path="/drinks/search-drinks" children={<SearchDrinks />} />
                </Switch>
            </Routes>
        </section>
    )
}

export default Drinks
