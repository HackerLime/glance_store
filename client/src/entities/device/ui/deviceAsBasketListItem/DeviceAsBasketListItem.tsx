import { FC } from 'react'
import { SVGDelete } from 'shared/assets/icons/remove/SVGDelete'
import { DeviceImages } from 'shared/ui/device/deviceImages'
import { DeviceInStock } from 'shared/ui/device/deviceInStock/ui/DeviceInStock'
import { DeviceName } from 'shared/ui/device/deviceName'
import { DevicePrice } from 'shared/ui/device/devicePrice'
import { BlueLine } from 'shared/ui/lines/BlueLine'
import styles from './DeviceAsBasketListItem.module.css'

import type { TDeviceItemProps } from '../../model'

export const DeviceAsBasketListItem: FC<TDeviceItemProps> = ({ device }) => {
  //?todo
  const destroyAction = (deviceId) => {
    console.log('destroyAction', deviceId)
  }
  const isChecked = false
  const onChangeAction = (isChecked) => {
    //!  надо ще передать deviceId
    console.log('isCheckedAction', isChecked)
  }
  //?todo



  /*   useEffect(() => {
      if (store.device.inBasketDevicesId.includes(device.id)) {
        setIsDeviceInBasket(true)
      }
    }, [device.id, store.device.inBasketDevicesId]) */



  return (
    <div style={{ margin: '0 0 10px 0' }}>
      <BlueLine />
      <div style={{ marginBottom: '15px' }} className='d-flex justify-content-end'>
        <Form.Check
          checked={isChecked}
          onChange={e => onChangeAction(e.target.checked)}
        />
      </div>
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
                <div className='d-flex'>
                  <SVGDelete style={{ cursor: 'pointer' }} onClick={() => destroyAction(device.id)} />
                  <BasketCounter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
