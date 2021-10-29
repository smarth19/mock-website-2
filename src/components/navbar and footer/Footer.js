import React from 'react'
import Icons from '../generic/icons/Icons'
import styles from './style.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.header} ${styles.footer}`}>
        <div className={`backgroundCircle ${styles.backgroundCircle}`}></div>
            <div className={styles.logoDiv}>
                <Icons icon="paypal"/>
                <div className={styles.navigationDiv}>
                    <ul className={styles.ul}>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className={styles.socialAccounts}>
                <div>
                    <Icons icon="facebook"/>
                    <Icons icon="twitter"/>
                    <Icons icon="linkedin"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
