import { Link } from 'react-router-dom'
import styles from './NavBarMenuItem.module.css'
const NavBarMenuItem = (props) => {

	return (
		<div
			{...props}
			style={{ marginRight: props.id === 1 ? '10px' : '0' }}
		>
			<Link
				to={props.route}
				style={{ cursor: 'pointer', textDecoration: 'none', color: props.textcolor }}
				className='d-flex flex-column  align-items-center'>
				<div>{props.icon}</div>
				<div className={styles.linkText} >{props.name}</div>
			</Link>
		</div>
	)
}

export default NavBarMenuItem