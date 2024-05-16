import React, { useState } from 'react'
import SVGCatalog from '../UI/icons/SVGCatalog'
import SVGBasket from '../UI/icons/SVGBasket'
import SVGProfile from '../UI/icons/SVGProfile'
const NavBarMenu = () => {

	const [catalogColor, setCatalogColor] = useState('#454545')
	const [basketColor, setBasketColor] = useState('#454545')
	const [profileColor, setProfileColor] = useState('#454545')



	return (
		<div className='d-flex justify-content-between'
			style={{ maxWidth: 230, cursor: 'pointer' }}
		>
			<div
				onMouseEnter={() => setCatalogColor('#091d9e')}
				onMouseLeave={() => setCatalogColor('#454545')}
				className='d-flex flex-column  align-items-center'>
				<div ><SVGCatalog color={catalogColor} /></div>
				<div style={{ color: catalogColor }}>Каталог</div>
			</div>
			<div
				onMouseEnter={() => setBasketColor('#091d9e')}
				onMouseLeave={() => setBasketColor('#454545')}
				className='d-flex flex-column  align-items-center'>
				<div ><SVGBasket color={basketColor} /></div>
				<div style={{ color: basketColor }}>Корзина</div>
			</div>
			<div
				onMouseEnter={() => setProfileColor('#091d9e')}
				onMouseLeave={() => setProfileColor('#454545')}
				className='d-flex flex-column  align-items-center'>
				<div ><SVGProfile color={profileColor} /></div>
				<div style={{ color: profileColor }}>Профиль</div>
			</div>

		</div>
	)
}

export default NavBarMenu