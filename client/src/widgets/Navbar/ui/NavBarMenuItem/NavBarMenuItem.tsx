import { RootState } from 'app/store/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NavBarMenuItem.module.css';

type NavBarMenuItemPropsType = {
	id: number
	icon: JSX.Element;
	name: string;
	route: string;
	bgColor: string;
	isBasketIcon: boolean;
}

export const NavBarMenuItem: FC<NavBarMenuItemPropsType> = ({ icon, name, route, bgColor, isBasketIcon }) => {

	const basketState = useSelector((state: RootState) => state.basket)


	return (
		<Link
			style={{ backgroundColor: bgColor }}
			to={route}
			className={styles.wrapper}>
			<div className={styles.icon} >{icon}</div>
			<span className={styles.linkText} >{name}</span>
			{
				isBasketIcon && basketState.totalCount ?
					<span className={styles.linkCounter}>{basketState.totalCount}</span>
					:
					null
			}
		</Link>
	)
}

