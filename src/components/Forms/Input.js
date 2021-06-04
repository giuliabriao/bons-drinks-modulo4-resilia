import React from 'react';
import styles from './Input.module.css';

const Input = ({
    id,
    label,
    onChange,
    value,
    type,
    onBlur,
    erro,
    placeholder,
}) => {
    console.log(erro);
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                
                id={id}
                type={type}
                name={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
            {/* define também dentro do componente o controle da exibição de mensagem de erro - 
            usando o operador && só aparece o <p> com a mensagem de erro quando erro == true, 
            poderíamos usar ternário também - o erro é recebido também via props e 
            vai ser controlado pelo hook customizado useForm que tem a lógica de verificar 
            e definir erro e as funções de onChange e onBlur */}
            {erro && <p >{erro}</p>}
        </div>
    );
};

export default Input;