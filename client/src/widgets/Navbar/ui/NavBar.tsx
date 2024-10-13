import { ShopLogo } from 'shared/ui/logo'
import classes from './NavBar.module.css'
import { NavBarMenu } from './NavBarMenu'
import { NavBarSearch } from './NavBarSearch'

export const NavBar = () => {
	return (
		<header className={classes.navbar}>
			<div className={classes.navbarWrapper}>
				<ShopLogo />
				<NavBarSearch />
				<NavBarMenu />
			</div>
		</header>


	)
}

