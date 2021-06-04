import React, { useState } from 'react'
import styles from './FilterDrinks.module.css'
import useReq from '../../../Hooks/useReq'
import { PesquisaCategoriaAlc, PesquisaCategoria, PesquisaCategoriaCopo } from '../../../services/API';

function FilterDrinks() {

  let drinkNome = '';
  const [data, setData] = useState([]);
  const [categoria, setCategoria] = useState([]);

  /**********************************************
   * PESQUISA DRINQUE POR CATEGORIA
   **********************************************/
  
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
    }
    else if (nomeCategoria === 'Ordinary Drink' || nomeCategoria === 'Cocktail' || nomeCategoria === 'Cocoa' || nomeCategoria === 'Shot' || nomeCategoria === 'Milk / Float / Shake' || nomeCategoria === 'Other / Unknown' || nomeCategoria === 'Coffee / Tea' || nomeCategoria === 'Homemade Liqueur' || nomeCategoria === 'Punch / Party Drink' || nomeCategoria === 'Beer' || nomeCategoria === 'Soft Drink / Soda') {
      console.log('entrou aqui no categoria');
      const dados = await PesquisaCategoria(nomeCategoria);
      setData(dados);
    }
    else if (nomeCategoria === 'Highball glass' || nomeCategoria === 'Cocktail glass' || nomeCategoria === 'Old-fashioned glass' || nomeCategoria === 'Collins glass') {
      console.log('entrou aqui no copo');
      const dados = await PesquisaCategoriaCopo(nomeCategoria);
      setData(dados);
    }
  }

  return (
    <div>
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
  )
}

export default FilterDrinks

{/* {data ? (
        data.map((drink) => {
          return (
            <div key={drink.idDrink} className={styles.drinkDiv}>
              <h2 className={styles.drinkNome}>{drink.strDrink}</h2>
              <img className={styles.drinkImg} src={drink.strDrinkThumb} />
            </div>
          )
        })
      ) :
        <img src="https://st3.depositphotos.com/1006899/14648/i/600/depositphotos_146482703-stock-photo-robot-holding-the-numbers-404.jpg" />}
    </div> */}