import { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useLocation } from 'react-router-dom'
import { Context } from '../../../../index'
import DeviceButton from '../../buttons/DeviceButton'
import SVGDelete from '../../icons/remove/SVGDelete'
import BlueLine from '../../lines/BlueLine'
import BasketCounter from '../basket/BasketCounter'
import DeviceImages from '../DeviceImages'
import DeviceInStock from '../DeviceInStock'
import DeviceName from '../DeviceName'
import DevicePrice from '../DevicePrice'
import styles from './DeviceAsList.module.css'
const DeviceAsList = ({ device, destroyAction, isChecked }) => {
	const [isDeviceInBasket, setIsDeviceInBasket] = useState(false)
	const store = useContext(Context)
	const { pathname } = useLocation()

	useEffect(() => {
		if (store.device.inBasketDevicesId.includes(device.id)) {
			setIsDeviceInBasket(true)
		}
	}, [device.id, store.device.inBasketDevicesId])




	return (
		<div style={{ margin: '0 0 10px 0' }}>
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
			<div className={`d-flex  ${styles.deviceWrapper}`}  >
				<div className={styles.imageBlock}>
					<DeviceImages device={device} />
				</div>
				<div className={`d-flex flex-grow-1 ${styles.secondSide}`} >
					<div className={`flex-grow-1 ${styles.nameAndInStock}`} >
						<div style={{ margin: '0 0 12px 0' }}>
							<DeviceName device={device} />
						</div>
						<DeviceInStock device={device} />
					</div>
					<div className={styles.priceAndButton}>
						<div style={{ margin: '0 0 24px 0' }}>
							<DevicePrice device={device} />
						</div>
						<div className='d-flex'>
							<div className={styles.buttonBlock} >
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
}

export default DeviceAsList