import { useState } from 'react'
import SVGSearch from '../UI/icons/SVGSearch'
import classes from './NavBarSearch.module.css'
const NavBarSearch = () => {
	const [active, setActive] = useState(false)

	return (
		<div
			className={
				!active ?
					classes.mySearch
					:
					classes.mySearch_active
			}>
			<input
				onFocus={() => setActive(true)}
				onBlur={() => setActive(false)}
				placeholder='Поиск'
				className={classes.myInput}
			/>
			<SVGSearch className={classes.myIcon} />
		</div>
	)
}

export default NavBarSearch