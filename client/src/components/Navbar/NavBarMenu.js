import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../router/paths'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import Button from 'react-bootstrap/Button'
import NavBarMenuItem from './NavBarMenuItem'
import SVGFBStarF from '../UI/icons/SVGFBStarF'
import SVGCatalog from '../UI/icons/SVGCatalog'
import SVGProfile from '../UI/icons/SVGProfile'
import SVGBasket from '../UI/icons/SVGBasket'
const NavBarMenu = observer(() => {
	const [hoverColor, setHoverColor] = useState('#454545')

	const navigate = useNavigate()
	const [publicMenuItems, setPublicMenuItems] = useState([
		{ id: 1, icon: <SVGCatalog color={hoverColor} />, name: 'Каталог', route: CATALOG_ROUTE },
	])
	const [privateMenuItems, setPrivateMenuItems] = useState([
		{ id: 1, icon: <SVGBasket color={hoverColor} />, name: 'Корзина', route: BASKET_ROUTE },
		{ id: 2, icon: <SVGProfile color={hoverColor} />, name: 'Профиль', route: PROFILE_ROUTE },
	])


	const { user } = useContext(Context)

	const logout = () => {
		user.setIsAuth(false)
		localStorage.removeItem('token')
	}

	return (
		<div className='d-flex'>
			<div className='d-flex' style={{ margin: '0 10px 0 0', background: 'gray' }}>

				{publicMenuItems.map(i =>
					<NavBarMenuItem
						onMouseEnter={() => console.log('mosueenter')}
						onMouseLeave={() => console.log('mouseleave')}
						textcolor={hoverColor} key={i.id} name={i.name} route={i.route} icon={i.icon} />
				)}
				{user.isAuth && privateMenuItems.map(i =>
					<NavBarMenuItem
						onMouseEnter={() => console.log('mosueenter')}
						onMouseLeave={() => console.log('mouseleave')}
						textcolor={hoverColor} key={i.id} name={i.name} route={i.route} icon={i.icon} />
				)}
			</div>
			{user.isAuth ?
				<div className='d-flex'>
					<Button className='me-2' onClick={() => logout()} >Выйти</Button>
					<Button onClick={() => navigate(ADMIN_ROUTE)} >Админка</Button>
				</div>

				:
				<Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
			}
		</div>
	)
})

export default NavBarMenu