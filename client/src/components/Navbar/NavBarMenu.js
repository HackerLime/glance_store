import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../router/paths'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

import Button from 'react-bootstrap/Button'
import NavBarMenuItem from './NavBarMenuItem'
import SVGCatalog from '../UI/icons/SVGCatalog'
import SVGProfile from '../UI/icons/SVGProfile'
import SVGBasket from '../UI/icons/SVGBasket'
const NavBarMenu = observer(() => {

	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [publicMenuItems, setPublicMenuItems] = useState([
		{ id: 1, icon: <SVGCatalog color={pathname === '/catalog' ? '#091D9E' : '#454545'} />, name: 'Каталог', route: CATALOG_ROUTE },
	])
	const [privateMenuItems, setPrivateMenuItems] = useState([
		{ id: 1, icon: <SVGBasket color={pathname === '/basket' ? '#091D9E' : '#454545'} />, name: 'Корзина', route: BASKET_ROUTE },
		{ id: 2, icon: <SVGProfile color={pathname === '/profile' ? '#091D9E' : '#454545'} />, name: 'Профиль', route: PROFILE_ROUTE },
	])
	const { user } = useContext(Context)

	return (
		<div className='d-flex align-items-center'>
			<div className='d-flex'>
				{publicMenuItems.map(i =>
					<NavBarMenuItem
						textcolor={'#454545'} id={i.id} key={i.id} name={i.name} route={i.route} icon={i.icon} />
				)}
				{user.isAuth && privateMenuItems.map(i =>
					<NavBarMenuItem
						textcolor={'#454545'} id={i.id} key={i.id} name={i.name} route={i.route} icon={i.icon} />
				)}
			</div>
			<div>
				{user.isAuth ?
					""
					:
					<Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
				}
			</div>
		</div>
	)
})

export default NavBarMenu