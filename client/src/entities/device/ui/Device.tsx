import { FC } from 'react'
import type { TDeviceProps } from '../model'
import { DeviceAsBasketListItem } from './deviceAsBasketListItem/DeviceAsBasketListItem'
import { DeviceAsListItem } from './deviceAsListItem/DeviceAsListItem'
import { DeviceAsSliderItem } from './deviceAsSliderItem/DeviceAsSliderItem'

export const Device: FC<TDeviceProps> = ({ asSliderItem, asListItem, asBasketListItem, device, brandName, typeName }) => {
  console.log(brandName)
  console.log(typeName)

  if (asSliderItem) {
    return <DeviceAsSliderItem device={device} brandName={brandName} typeName={typeName} />
  }
  if (asListItem) {
    return <DeviceAsListItem device={device} brandName={brandName} typeName={typeName} />
  }
  if (asBasketListItem) {
    return <DeviceAsBasketListItem device={device} brandName={brandName} typeName={typeName} />
  }
}
