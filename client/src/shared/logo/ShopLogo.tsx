import { Link } from 'react-router-dom'
import { SHOP_ROUTE } from '../../../router/paths'
import classes from './ShopLogo.module.css'
const ShopLogo = () => {
	return (
		<div><Link className={classes.myLogo} to={SHOP_ROUTE}>GLANCE</Link></div>
	)
}

export default ShopLogo