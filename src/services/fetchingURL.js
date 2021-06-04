//Utilizando a API gratuita disponível em https://www.thecocktaildb.com

const fetchingURL = async (url) => {

    if (!url) {
        return "URL inválida";
    }

    const response = await fetch(url);
    const data = await response.json();
    return data.drinks
};

export default fetchingURL;