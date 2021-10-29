import React from 'react'
import Button from '../button/Button'
import styles from './style.module.css'

const Input = ({type, inputRef, placeholder, btnText}) => {
    return (
        <div className={styles.inputDiv}>
            <input type={type} ref={inputRef} placeholder={placeholder}/>
            <Button>{btnText}</Button>
        </div>
    )
}

export default Input
