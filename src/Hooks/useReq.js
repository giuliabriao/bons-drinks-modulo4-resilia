//Utilizando a API gratuita disponível em https://www.thecocktaildb.com

import React from 'react'

const useReq = (url) => {
    //estado para guardar os dados da requisção e que será retornado pelo hook
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        //se passa uma url vazia, retorna o erro e não procede com a requisição
        if (!url) {
            return "URL inválida";
        }

        fetchData(url);

        //url tem que fazer parte do array de dependências porque é uma props que tá sendo usada no efeito
    }, [url]);

    //função assíncrona para buscar os dados
    const fetchData = async (url) => {

        const response = await fetch(url);

        const data = await response.json();


        //retorna o "setando" o estado com os dados
        return setData(data.drinks);
    };
    // if (data == null) {
    //     return <p>Deu merda hein</p>
    // }else{        
        return data;
    

};

export default useReq;