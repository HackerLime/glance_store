import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import ShopLogo from '../UI/logo/ShopLogo'
import NavBarSearch from './NavBarSearch'
import NavBarMenu from './NavBarMenu'
import Container from 'react-bootstrap/Container'
import classes from './NavBar.module.css'
const NavBar = () => {
	return (
		<nav className={classes.navbar}>
			<div className={classes.navbarContainer}>
				<div className={classes.navbarWrapper}>
					<div><ShopLogo /></div>
					<div><NavBarSearch /></div>
					<div><NavBarMenu /></div>
				</div>
			</div>
		</nav>


	)
}

export default NavBar