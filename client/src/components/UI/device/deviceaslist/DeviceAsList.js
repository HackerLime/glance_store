import React from 'react'
import MyButton from '../../buttons/DeviceButton'
import DevicePrice from '../DevicePrice'
import DeviceInStock from '../DeviceInStock'
import DeviceFavoriteIcon from '../DeviceFavoriteIcon'
import DeviceName from '../DeviceName'
import DeviceImages from '../DeviceImages'
import BlueLine from '../../lines/BlueLine'
import { observer } from 'mobx-react-lite'
const DeviceAsList = observer(({ device }) => {
	return (
		<div>
			<BlueLine />
			<div className='d-flex' >
				<div style={{ margin: '0 24px 0 0', maxWidth: '169px' }}><DeviceImages device={device} /></div>
				<div className='d-flex flex-grow-1' >
					<div className='flex-grow-1' >
						<div style={{ margin: '0 0 12px 0' }}><DeviceName device={device} /></div>
						<DeviceInStock device={device} />
					</div>
					<div className='d-flex flex-column align-items-end'>
						<div style={{ margin: '0 0 24px 0' }}><DevicePrice device={device} /></div>
						<div className='d-flex'>
							<DeviceFavoriteIcon style={{ margin: "0 16px 0 0" }} />
							<div >
								<MyButton>В корзину</MyButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

export default DeviceAsList