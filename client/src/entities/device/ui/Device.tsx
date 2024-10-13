import { FC } from 'react'
import type { TDeviceProps } from '../model'
import { DeviceAsBasketListItem } from './deviceAsBasketListItem/DeviceAsBasketListItem'
import { DeviceAsListItem } from './deviceAsListItem/DeviceAsListItem'
import { DeviceAsSliderItem } from './deviceAsSliderItem/DeviceAsSliderItem'

export const Device: FC<TDeviceProps> = ({ asSliderItem, asListItem, asBasketListItem, device }) => {

  if (asSliderItem) {
    return <DeviceAsSliderItem device={device} />
  }
  if (asListItem) {
    return <DeviceAsListItem device={device} />
  }
  if (asBasketListItem) {
    return <DeviceAsBasketListItem device={device} />
  }
}
