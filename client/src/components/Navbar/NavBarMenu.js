import React, { useContext, useState } from 'react'
import SVGCatalog from '../UI/icons/SVGCatalog'
import SVGBasket from '../UI/icons/SVGBasket'
import SVGProfile from '../UI/icons/SVGProfile'
import { Link, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../router/paths'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import Button from 'react-bootstrap/Button'
const NavBarMenu = observer(() => {
	const navigate = useNavigate()
	const menuItems = [
		{ id: 1, element: <SVGCatalog />, name: 'Каталог', route: { CATALOG_ROUTE } },
		{ id: 2, element: <SVGBasket />, name: 'Корзина', route: { BASKET_ROUTE } },
		{ id: 3, element: <SVGProfile />, name: 'Профиль', route: { ADMIN_ROUTE } },
	]
	const [catalogColor, setCatalogColor] = useState('#454545')
	const [basketColor, setBasketColor] = useState('#454545')
	const [profileColor, setProfileColor] = useState('#454545')

	const { user } = useContext(Context)

	const logout = () => {
		user.setIsAuth(false)
	}

	return (
		<div className='d-flex'
			style={{ maxWidth: 230 }}
		>
			<Link
				to={CATALOG_ROUTE}
				style={{ cursor: 'pointer', textDecoration: 'none', margin: '0 32px 0 0' }}
				onMouseEnter={() => setCatalogColor('#091d9e')}
				onMouseLeave={() => setCatalogColor('#454545')}
				className='d-flex flex-column  align-items-center'>
				<div ><SVGCatalog color={catalogColor} /></div>
				<div style={{ color: catalogColor }}>Каталог</div>
			</Link>
			{user.isAuth &&
				<div className='d-flex'>
					<Link
						to={BASKET_ROUTE}
						style={{ cursor: 'pointer', textDecoration: 'none', margin: '0 32px 0 0' }}
						onMouseEnter={() => setBasketColor('#091d9e')}
						onMouseLeave={() => setBasketColor('#454545')}
						className='d-flex flex-column  align-items-center'>
						<div ><SVGBasket color={basketColor} /></div>
						<div style={{ color: basketColor }}>Корзина</div>
					</Link>
					<Link
						to={PROFILE_ROUTE}
						style={{ cursor: 'pointer', textDecoration: 'none', margin: '0 32px 0 0' }}
						onMouseEnter={() => setProfileColor('#091d9e')}
						onMouseLeave={() => setProfileColor('#454545')}
						className='d-flex flex-column  align-items-center'>
						<div ><SVGProfile color={profileColor} /></div>
						<div style={{ color: profileColor }}>Профиль</div>
					</Link>
				</div>
			}
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