import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarMenuItem.module.css';

type NavBarMenuItemPropsType = {
	id: number
	icon: JSX.Element;
	name: string;
	route: string;
}

export const NavBarMenuItem: FC<NavBarMenuItemPropsType> = ({ icon, name, route }) => {

	return (
		<Link
			to={route}
			className={styles.wrapper}>
			<div className={styles.icon} >{icon}</div>
			<span className={styles.linkText} >{name}</span>
		</Link>
	)
}

