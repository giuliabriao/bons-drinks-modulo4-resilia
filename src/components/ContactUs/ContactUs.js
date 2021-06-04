import React from 'react'
import styles from './ContactUs.module.css'

function ContactUs() {
    return (
        <section className={styles.content}>
            <h1 className={styles.title}>Contact us!</h1>
            <form className={styles.form}>
                <label>
                    Name:
                <input type="text" name="name" required/>
                </label>
                <label>
                    E-mail:
                    <input type="text" name="email" required/>
                </label>
                <textarea/>
                <input type="submit" value="Send" />
            </form>
        </section>
    )
}

export default ContactUs
