import React from 'react'
import { Switch, NavLink, Route } from 'react-router-dom'
import PopularDrinks from './PopularDrinks/PopularDrinks'
import SearchDrinks from './SearchDrinks/SearchDrinks'
import drinkStyle from './Drinks.module.css'
import aboutUsImage from '../../images/about-us-image.jpg'

function Drinks() {
    return (
        <section className={drinkStyle.drinksContainer}>
            <h1 className={drinkStyle.drinksTitle}> Taste the experience...</h1>

            <ul className={drinkStyle.drinksUl}>
                <li>
                    <NavLink className={drinkStyle.drinksLink} to="/drinks/popular-drinks" activeClassName={drinkStyle.drinksLinkActive}>Popular drinks</NavLink>
                </li>

                <li>
                    <NavLink className={drinkStyle.drinksLink} to="/drinks/search-drinks" activeClassName={drinkStyle.drinksLinkActive}>Search drinks</NavLink>
                </li>
            </ul>

            <section className={drinkStyle.drinksContent}>
                <Switch>
                    <Route path="/drinks/popular-drinks">
                        <PopularDrinks />
                    </Route>
                    <Route path="/drinks/search-drinks">
                        <SearchDrinks />
                    </Route>
                </Switch>
            </section>
        </section >
    )
}

export default Drinks
