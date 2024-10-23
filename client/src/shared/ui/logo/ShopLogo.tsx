import { Link } from 'react-router-dom'
import { SHOP_ROUTE } from 'shared/routerPaths'
import classes from './ShopLogo.module.css'
export const ShopLogo = () => {
	return (
		<Link className={classes.myLogo} to={SHOP_ROUTE}>GLANCE</Link>
	)
}

