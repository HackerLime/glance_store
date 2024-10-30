import { Device } from 'entities/device';
import { TDevice } from 'entities/device/model';
import { FC } from 'react';
import type { TBrandAndTypeResponse } from 'shared/types';
import { SadMessage } from 'shared/ui/sadMessage';
import styles from './DevicesTiles.module.css';
type TDevicesTilesProps = {
  devices: TDevice[];
  brands: TBrandAndTypeResponse[];
  types: TBrandAndTypeResponse[];
}
export const DevicesTiles: FC<TDevicesTilesProps> = ({ devices, brands, types }) => {
  if (!devices.length) {
    return <SadMessage message='Устройств не найдено!' />
  }
  return (
    <div className={styles.tiles__wrapper} >
      {devices.map(i => {
        const brand = brands.find(brand => brand.id === i.brandId)
        const type = types.find(type => type.id === i.typeId)
        return (
          <Device
            key={i.id}
            asSliderItem={true}
            device={i}
            brandName={brand?.name || 'unknown brand'}
            typeName={type?.name || 'unknown type'}
          />
        )
      }
      )}
    </div>
  )
}
