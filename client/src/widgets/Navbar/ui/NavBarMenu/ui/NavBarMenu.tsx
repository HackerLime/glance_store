import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { SVGBasket, SVGCatalog, SVGProfile } from 'shared/assets/icons'
import { BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from 'shared/routerPaths'
import { NavBarMenuItem } from '../../NavBarMenuItem'
import styles from './NavBarMenu.module.css'
import { RootState } from 'app/store/store'

export const NavBarMenu = () => {

	const { pathname } = useLocation()
	const navigate = useNavigate()
	const user = useSelector((state: RootState) => state.user)

	const publicMenuItems = [
		{ id: 1, icon: <SVGCatalog color={pathname === '/catalog' ? '#091D9E' : '#454545'} />, name: 'Каталог', route: CATALOG_ROUTE },
	]
	const privateMenuItems = [
		{ id: 1, icon: <SVGBasket color={pathname === '/basket' ? '#091D9E' : '#454545'} />, name: 'Корзина', route: BASKET_ROUTE },
		{ id: 2, icon: <SVGProfile color={pathname === '/profile' ? '#091D9E' : '#454545'} />, name: 'Профиль', route: PROFILE_ROUTE },
	]

	return (
		<div className={styles.navBarMenuWrapper} >
			<div className={styles.navBarMenuItems__authItems}>
				{publicMenuItems.map(i =>
					<NavBarMenuItem
						id={i.id} key={i.id} name={i.name} route={i.route} icon={i.icon} />
				)}
				{user.isAuth && privateMenuItems.map(i =>
					<NavBarMenuItem
						id={i.id} key={i.id} name={i.name} route={i.route} icon={i.icon} />
				)}
			</div>
			{user.isAuth ?
				""
				:
				<Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
			}
		</div>
	)
}

