import React from 'react'
import Button from '../generic/button/Button'
import logo from './paypal.png'
import styles from './style.module.css'

const Navbar = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.logoDiv}>
                <img src={logo} alt="Logo"/>
                <div className={styles.navigationDiv}>
                    <ul className={styles.ul}>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className={styles.btnActionsDiv}>
                <Button>Schedule a Demo</Button>
            </div>
        </nav>
    )
}

export default Navbar
