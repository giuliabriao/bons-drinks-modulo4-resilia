import React from 'react'
import styles from './ContactUs.module.css'
import useForms from '../../Hooks/useForms'

function ContactUs() {
    const name = useForms("name");
    const email = useForms("email");

    function handleSubmit(event) {        
        if (name.validateInput() && email.validateInput()) {
          // como name e email são chamadas do hook customizado useForm, eles tem acesso a função de validateInput que é retornada do hook
            console.log("Enviado");
            name.setValue("");
            email.setValue("");
            //aqui não há envio real do formulário, então tem uma simulação para que isso apareça pro usuário

        } 
      }
      
    return (
        <section className={styles.content}>
            <h1 className={styles.title}>Contact us!</h1>
            <section className={styles.formSection}>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <label>Name:</label>
                    <input type="text" name="name" required {...name}/>

                    <label>E-mail:</label>
                    <input type="text" name="email" required {...email}/>

                    <label>Message:</label>
                    <textarea />

                    <input className={styles.submit} type="submit" value="Send" />
                </form>
            </section>
        </ section>
    )
}

export default ContactUs
