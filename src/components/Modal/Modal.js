import React from 'react'
import styles from './Modal.module.css'

function Modal(props) {

    const handleOutsideClick = (event) => {
        if (event.target.id == "modal") {
            return props.onClose()
        }
    }

    return (
        <div id="modal" className={styles.modal} onClick={() => handleOutsideClick}>
            <section className={styles.container}>
                <button className={styles.close} onClick={() => props.closeModal()}> X </button>
                <img className={styles.drinkImg} src={props.image} />
                <h1 className={styles.drinkName}>{props.drinkName}</h1>
                <ul className={styles.infosContainer}>
                    <li><strong style={{ fontWeight: "revert" }}>Category: </strong>{props.category}</li>
                    <li><strong style={{ fontWeight: "revert" }}>Glass: </strong> {props.glass}</li>
                    <li><strong style={{ fontWeight: "revert" }}>IBA: </strong> {props.iba}</li>
                    <li><strong style={{ fontWeight: "revert" }}>Ingredients: </strong> {props.ingredients}</li>
                    <li><strong style={{ fontWeight: "revert" }}>Instructions: </strong> {props.instructions}</li>
                </ul>
            </section>
        </div>
    )
}

export default Modal
