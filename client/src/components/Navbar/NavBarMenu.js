import React from 'react'
import SVGCatalog from '../UI/icons/SVGCatalog'
import SVGBasket from '../UI/icons/SVGBasket'
import SVGProfile from '../UI/icons/SVGProfile'
const NavBarMenu = () => {
	const menuItems = [
		{ id: 1, component: <SVGCatalog />, name: 'Каталог' },
		{ id: 2, component: <SVGBasket />, name: 'Корзина' },
		{ id: 3, component: <SVGProfile />, name: 'Профиль' },
	]
	return (
		<div className='d-flex justify-content-between'
			style={{ maxWidth: 230, cursor: 'pointer' }}
		>
			{menuItems.map(item =>
				<div
					onMouseEnter={() => console.log('Вошел')}
					onMouseLeave={() => console.log('Вышел')}
					className='d-flex flex-column  align-items-center' key={item.id}>
					<div >{item.component}</div>
					<div>{item.name}</div>
				</div>
			)}
		</div>
	)
}

export default NavBarMenu