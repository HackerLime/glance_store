import { Device } from 'entities/device';
import { TDevice } from 'entities/device/model';
import { FC } from 'react';
import type { TBrandAndTypeResponse } from 'shared/types';


type TDevicesList = {
  devices: TDevice[];
  brands: TBrandAndTypeResponse[];
  types: TBrandAndTypeResponse[];
}

export const DevicesList: FC<TDevicesList> = ({ devices, brands, types }) => {

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
