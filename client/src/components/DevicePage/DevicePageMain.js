import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import iphoneImg from '../UI/icons/device/bigIphone.svg'
import MyButton from '../UI/buttons/MyButton'
import ColorPalette from './palette/ColorPalette'
import DeviceInfo from './info/DeviceInfo'
import DeviceTypeBrandName from './DeviceTypeNameBrand.js/DeviceTypeBrandName'
import DeviceAddBasket from './palette/addBasket/DeviceAddBasket'

const DevicePageMain = () => {
	const device = { id: 1, name: 'iPhone 13 128GB', type: 'Смартфон', brand: 'Apple ', price: 75999 }
	const deviceInfo = { id: 1, title: 'Какой то тайтл', description: 'Какой то дескр' }
	const [palette, setPallete] = useState([
		{ id: 1, name: 'Красный', color: 'rgb(255, 0, 0)' },
		{ id: 2, name: 'Черный', color: 'rgb(12, 12, 12)' },
		{ id: 3, name: 'Белый', color: 'rgb(246,246,246)' },
	]
	)

	return (
		<div className='d-flex justify-content-between' style={{ margin: '0 0 40px 0' }}>
			<div>
				<div style={{ backgroundColor: 'rgb(248, 252, 255)', borderRadius: '8px' }}><Image src={iphoneImg} style={{ width: 411, height: 590 }} /></div>
			</div>
			<div style={{ maxWidth: 354 }}>
				<DeviceTypeBrandName device={device} />
				<ColorPalette palette={palette} />
				<DeviceInfo deviceInfo={deviceInfo} />
			</div>
			<div>
				<DeviceAddBasket device={device} />
			</div>
		</div>
	)
}

export default DevicePageMain