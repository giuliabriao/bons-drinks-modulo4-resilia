import React from 'react';

const tipos = {
    name: {
        regex: /^[a-zA-Z ]+$/,
        msgErro: "Invalid name"
    },
    email:{
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        msgErro: "Invalid e-mail"
    }
}

const useForm = (tipo) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    function validatingInput(value) {
        if (value.length === 0) {
            setError("Please, insert a valid value.")
            return false
        } else if (tipos[tipo] && !tipos[tipo].regex.test(value)) {
            setError(tipos[tipo].msgErro)
            return false;
        } else {
            setError(null);
            return true
        }
    }

    //função para manipular onChange
    function onChange({ target }) {
        if (error) {
            validatingInput(target.value)
        }
        setValue(target.value)
    }

    return {
        error,
        value,
        onChange,
        setValue,
        validatingInput: () => validatingInput(value),
        onBlur: () => validatingInput(value)
    }
}