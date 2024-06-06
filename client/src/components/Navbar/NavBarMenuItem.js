import React from 'react'
import { Link } from 'react-router-dom'

const NavBarMenuItem = (props) => {

	return (
		<div
			{...props}
		>
			<Link
				to={props.route}
				style={{ cursor: 'pointer', textDecoration: 'none', color: props.textcolor }}
				className='d-flex flex-column  align-items-center'>
				<div>{props.icon}</div>
				<div >{props.name}</div>
			</Link>
		</div>
	)
}

export default NavBarMenuItem