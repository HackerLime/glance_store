import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import smartphoneimg from '../UI/icons/catalog/smartphone.svg'
import notebookimg from '../UI/icons/catalog/notebook.svg'
import pcimg from '../UI/icons/catalog/pc.svg'
import tvimg from '../UI/icons/catalog/tv.svg'
import tabletimg from '../UI/icons/catalog/tablet.svg'
import soundbarimg from '../UI/icons/catalog/soundbar.svg'

const ShopCatalog = () => {
	const [catalogItems, setCatalogItems] = useState([
		{ id: 1, name: 'Смартфоны', img: smartphoneimg },
		{ id: 2, name: 'Ноутбуки', img: notebookimg },
		{ id: 3, name: 'Компьютеры', img: pcimg },
		{ id: 4, name: 'Телевизоры', img: tvimg },
		{ id: 5, name: 'Планшеты', img: tabletimg },
		{ id: 6, name: 'Колонки', img: soundbarimg },
	])
	return (
		<div
			style={{ margin: '0 0 40px 0' }}
		>
			<h6 style={{ fontSize: 32, margin: '0 0 28px 0' }}>Каталог</h6>
			<div className='d-flex justify-content-between'>
				{catalogItems.map(i =>
					<div
						style={{ cursor: 'pointer' }}
						className='d-flex flex-column justify-content-center align-items-center' key={i.id}>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{ width: 200, height: 246, backgroundColor: '#BCC5FF', borderRadius: '8px', margin: '0 0 12px 0' }}>
							<Image src={i.img} />
						</div>
						<p style={{ fontSize: 20, margin: 0 }}>{i.name}</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default ShopCatalog