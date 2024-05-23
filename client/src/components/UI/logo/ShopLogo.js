import React from 'react'
import classes from './ShopLogo.module.css'
import { Link } from 'react-router-dom'
import { SHOP_ROUTE } from '../../../router/paths'
const ShopLogo = () => {
	return (
		<div><Link className={classes.myLogo} to={SHOP_ROUTE}>GLANCE</Link></div>
	)
}

export default ShopLogo