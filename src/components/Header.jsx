import React from 'react'
import styles from '../scss/Header.module.scss'
import logo from '../assets/logo.svg'
import burger from '../assets/burger.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<a href=""><img src={logo} alt="" /></a>
			<a href=""><img src={burger} alt="" /></a>
		</header>
	)
}

export default Header