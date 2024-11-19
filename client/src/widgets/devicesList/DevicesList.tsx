import { Device } from 'entities/device';
import { FC } from 'react';
import type { TBrandAndTypeResponse, TDevice } from 'shared/types';
import { SadMessage } from 'shared/ui/sadMessage';


type TDevicesList = {
  devices: TDevice[];
  brands: TBrandAndTypeResponse[];
  types: TBrandAndTypeResponse[];
}

export const DevicesList: FC<TDevicesList> = ({ devices, brands, types }) => {

  if (!devices.length) {
    return <SadMessage message='Устройств не найдено!' />
  } else {
    return (
      <>
        {devices.map(i => {
          const brand = brands.find(brand => brand.id === i.brandId)
          const type = types.find(type => type.id === i.typeId)
          return (
            <Device
              key={i.id}
              asListItem={true}
              device={i}
              brandName={brand?.name || 'unknown brand'}
              typeName={type?.name || 'unknown type'}
            />
          )
        }
        )}
      </>
    )
  }
}
