import { RootState } from 'app/store/store'
import { FC, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changePriceById, toggleCheckedDevice } from 'shared/api/basket/basket.slice'
import { useDeleteBasketDeviceMutation } from 'shared/api/basket/basketApi'
import { SVGDelete } from 'shared/assets/icons/remove/SVGDelete'
import { BasketCounter } from 'shared/ui/basket'
import { DeviceImages } from 'shared/ui/device/deviceImages'
import { DeviceInStock } from 'shared/ui/device/deviceInStock/ui/DeviceInStock'
import { DeviceName } from 'shared/ui/device/deviceName'
import { DevicePrice } from 'shared/ui/device/devicePrice'
import { BlueLine } from 'shared/ui/lines/BlueLine'
import type { TDeviceItemProps } from '../../model'
import styles from './DeviceAsBasketListItem.module.css'

export const DeviceAsBasketListItem: FC<TDeviceItemProps> = ({ device, brandName, typeName }) => {

  const [priceState, setPriceState] = useState(device.price)
  const hashedPrice = device.price
  const basketState = useSelector((state: RootState) => state.basket)
  const userState = useSelector((state: RootState) => state.user)

  console.log(basketState)
  const [deleteBasketDevice] = useDeleteBasketDeviceMutation()
  const dispatch = useDispatch()

  const checkAction = (device) => {
    dispatch(toggleCheckedDevice(device))
  }

  const counterChangeAction = (counterState: number): void => {
    setPriceState(hashedPrice * counterState)
    dispatch(changePriceById({ id: device.id, price: hashedPrice * counterState }))
  }

  const deleteAction = () => {
    deleteBasketDevice({ basketId: userState.user?.id, deviceId: device.id })
  }



  return (
    <div className={styles.wrapper}>
      <BlueLine />
      <div className={styles.content}>
        <div className={styles.contentImage_wrapper}> <DeviceImages deviceImages={device.img} /></div>
        <div className={styles.contentInfo_wrapper} >
          <div className={styles.check_wrapper}>
            <Form.Check onChange={e => checkAction(device)} />
          </div>
          <DeviceName brandName={brandName} typeName={typeName} deviceName={device.name} deviceId={device.id} />
          <DeviceInStock device={device} />
          <DevicePrice devicePrice={priceState} />
          <div className='d-flex'>
            <SVGDelete style={{ cursor: 'pointer' }} onClick={() => deleteAction()} />
            <BasketCounter counterChangeAction={counterChangeAction} />
          </div>
        </div>
      </div>
    </div>
  )
}
