import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import ColorPalette from './palette/ColorPalette'
import DeviceInfo from './info/DeviceInfo'
import DeviceTypeBrandName from './DeviceTypeNameBrand.js/DeviceTypeBrandName'
import DeviceAddBasket from './palette/addBasket/DeviceAddBasket'
import { observer } from 'mobx-react-lite'
import styles from './DevicePageMain.module.css'

const DevicePageMain = observer(({ device, brandName, typeName }) => {

	const [palette, setPallete] = useState([
		{ id: 1, name: 'Красный', color: 'rgb(255, 0, 0)' },
		{ id: 2, name: 'Черный', color: 'rgb(12, 12, 12)' },
		{ id: 3, name: 'Белый', color: 'rgb(246,246,246)' },
	]
	)

	return (
		<div className={styles.devicePageMainWrapper} >
			<div className={styles.devicePageImage}>
				<Image src={process.env.REACT_APP_API_URL + '/' + device.img} />
			</div>
			<div className={styles.deviceCharacteristicsWrapper}>
				<DeviceTypeBrandName brandName={brandName} typeName={typeName} device={device} />
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
			<div style={{ padding: '0 10px' }}>
				<DeviceAddBasket device={device} />
			</div>
		</div>
	)
})

export default DevicePageMain