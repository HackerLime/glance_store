import type { RootState } from 'app/store/store';
import { addPriceRange } from 'entities/filter';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDevicesQuery } from 'shared/api/devices/devicesApi';



export const useCatalogDevices = () => {

  const devicesResponse = useGetDevicesQuery(undefined);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch()
  if (devicesResponse.data) {
    let filteredDevices = devicesResponse.data.rows || []

    if (filteredDevices.length && filter.typeIds.length) {
      const typeIds = new Set(filter.typeIds)
      filteredDevices = filteredDevices.filter(cur => typeIds.has(cur.typeId))
    }

    if (filteredDevices.length && filter.brandIds.length) {
      const brandIds = new Set(filter.brandIds)
      filteredDevices = filteredDevices.filter(cur => brandIds.has(cur.brandId))
    }



    return filteredDevices
  }

  return []
}
