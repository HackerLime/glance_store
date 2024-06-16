import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import ColorPalette from './palette/ColorPalette'
import DeviceInfo from './info/DeviceInfo'
import DeviceTypeBrandName from './DeviceTypeNameBrand.js/DeviceTypeBrandName'
import DeviceAddBasket from './palette/addBasket/DeviceAddBasket'

const DevicePageMain = ({ device }) => {



	const [palette, setPallete] = useState([
		{ id: 1, name: 'Красный', color: 'rgb(255, 0, 0)' },
		{ id: 2, name: 'Черный', color: 'rgb(12, 12, 12)' },
		{ id: 3, name: 'Белый', color: 'rgb(246,246,246)' },
	]
	)

	return (
		<div className='d-flex justify-content-between' style={{ margin: '0 0 40px 0' }}>
			<div>
				<div style={{ backgroundColor: 'rgb(248, 252, 255)', borderRadius: '8px' }}><Image src={process.env.REACT_APP_API_URL + '/' + device.img} style={{ width: 411, height: 590 }} /></div>
			</div>
			<div style={{ maxWidth: 354 }}>
				<DeviceTypeBrandName device={device} />
				<ColorPalette palette={palette} />
				{device.info.length ?
					<div>
						<h4 style={{ fontSize: 18, lineHeight: '21px', color: 'rgb(12, 12, 12)', margin: '0 0 20px 0' }}>Характеристики:</h4>
						{device.info.map((i, idx) => <DeviceInfo key={idx} deviceInfo={i} />)
						}
						<h4 style={{ color: "rgb(9,29,158)", fontSize: 18, lineHeight: "21px" }}>Все характеристики</h4>
					</div>
					:
					''
				}
			</div>
			<div>
				<DeviceAddBasket device={device} />
			</div>
		</div>
	)
}

export default DevicePageMain