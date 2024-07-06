import React, { useContext, useEffect, useState } from 'react'
import DeviceButton from '../../buttons/DeviceButton'
import DevicePrice from '../DevicePrice'
import DeviceInStock from '../DeviceInStock'
import DeviceName from '../DeviceName'
import DeviceImages from '../DeviceImages'
import BlueLine from '../../lines/BlueLine'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'
import BasketCounter from '../basket/BasketCounter'
import SVGDelete from '../../icons/remove/SVGDelete'
import Form from 'react-bootstrap/Form'
import { Context } from '../../../../index'
const DeviceAsList = observer(({ device, destroyAction, isChecked }) => {
	const [isDeviceInBasket, setIsDeviceInBasket] = useState(false)
	const store = useContext(Context)
	const { pathname } = useLocation()

	useEffect(() => {
		if (store.device.inBasketDevicesId.includes(device.id)) {
			setIsDeviceInBasket(true)
		}
	}, [])



	return (
		<div>
			<BlueLine />
			{pathname === '/basket' ?
				<div style={{ marginBottom: '15px' }} className='d-flex justify-content-end'>
					<Form.Check
						checked={isChecked}
						onChange={e => store.device.setBasketDevicesIsChecked(device.id, e.target.checked)}
					/>
				</div>
				:
				''
			}
			<div className='d-flex' >
				<div style={{ margin: '0 24px 0 0', maxWidth: '169px' }}>
					<DeviceImages device={device} />
				</div>
				<div className='d-flex flex-grow-1' >
					<div className='flex-grow-1' >
						<div style={{ margin: '0 0 12px 0' }}>
							<DeviceName device={device} />
						</div>
						<DeviceInStock device={device} />
					</div>
					<div className='d-flex flex-column align-items-end'>
						<div style={{ margin: '0 0 24px 0' }}>
							<DevicePrice device={device} />
						</div>
						<div className='d-flex'>
							<div >
								{pathname === '/basket' ?
									<div className='d-flex'>
										<SVGDelete style={{ cursor: 'pointer' }} onClick={() => destroyAction(device.id)} />
										<BasketCounter />
									</div>
									:
									<DeviceButton deviceId={device.id} isDeviceInBasket={isDeviceInBasket} />
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

export default DeviceAsList