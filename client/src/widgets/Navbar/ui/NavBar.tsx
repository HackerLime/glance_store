import ShopLogo from '../../../shared/logo/ShopLogo'
import classes from './NavBar.module.css'
import { NavBarMenu } from './NavBarMenu'
import { NavBarSearch } from './NavBarSearch'

export const NavBar = () => {
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

