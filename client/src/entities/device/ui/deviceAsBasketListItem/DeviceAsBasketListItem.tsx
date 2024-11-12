import { FC } from 'react'
import { Form } from 'react-bootstrap'
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


  return (
    <div className={styles.wrapper}>
      <BlueLine />

      <div className={styles.content}>
        <div className={styles.contentImage_wrapper}> <DeviceImages deviceImages={device.img} /></div>
        <div className={styles.contentInfo_wrapper} >
          <div className={styles.check_wrapper}> <Form.Check /> </div>
          <DeviceName brandName={brandName} typeName={typeName} deviceName={device.name} deviceId={device.id} />
          <DeviceInStock device={device} />
          <DevicePrice devicePrice={device.price} />
          <div className='d-flex'>
            <SVGDelete style={{ cursor: 'pointer' }} />
            <BasketCounter />
          </div>
        </div>
      </div>
    </div>
  )
}
