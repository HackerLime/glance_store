import { RootState } from 'app/store/store'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { SVGBasket, SVGCatalog, SVGProfile } from 'shared/assets/icons'
import { BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from 'shared/routerPaths'
import { NavBarMenuItem } from '../../NavBarMenuItem'
import styles from './NavBarMenu.module.css'
export const NavBarMenu = () => {

	const { pathname } = useLocation()
	const navigate = useNavigate()
	const user = useSelector((state: RootState) => state.user)


	const publicMenuItems = [
		{
			id: 1,
			icon: <SVGCatalog color={pathname === '/catalog' ? '#091D9E' : '#454545'} />,
			name: 'Каталог',
			route: CATALOG_ROUTE,
			bgColor: pathname === '/catalog' ? '#BCC5FF' : 'transparent',
			isBasketIcon: false
		}
	]
	const privateMenuItems = [
		{
			id: 1,
			icon: <SVGBasket color={pathname === '/basket' ? '#091D9E' : '#454545'} />,
			name: 'Корзина',
			route: BASKET_ROUTE,
			bgColor: pathname === '/basket' ? '#BCC5FF' : 'transparent',
			isBasketIcon: true
		},
		{
			id: 2,
			icon: <SVGProfile color={pathname === '/profile' ? '#091D9E' : '#454545'} />,
			name: 'Профиль',
			route: PROFILE_ROUTE,
			bgColor: pathname === '/profile' ? '#BCC5FF' : 'transparent',
			isBasketIcon: false
		},
	]

	return (
		<div className={styles.navBarMenuWrapper} >
			<div className={styles.navBarMenuItems__authItems}>
				{publicMenuItems.map(i =>
					<NavBarMenuItem
						id={i.id} key={i.id} name={i.name} route={i.route} icon={i.icon} bgColor={i.bgColor} isBasketIcon={i.isBasketIcon} />
				)}
				{user.isAuth && privateMenuItems.map(i =>
					<NavBarMenuItem
						id={i.id} key={i.id} name={i.name} route={i.route} icon={i.icon} bgColor={i.bgColor} isBasketIcon={i.isBasketIcon} />
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

