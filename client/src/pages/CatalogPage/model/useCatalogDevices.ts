import type { RootState } from 'app/store/store';
import { useSelector } from 'react-redux';
import { useGetDevicesQuery } from 'shared/api/devices/devicesApi';

export const useCatalogDevices = () => {

  const devicesResponse = useGetDevicesQuery(undefined);
  const filter = useSelector((state: RootState) => state.filter);

  if (devicesResponse.data) {

    let filteredDevices = devicesResponse.data.rows || []

    if (filteredDevices.length) {
      //*filter by typeid
      if (filter.typeIds.length) {
        const typeIds = new Set(filter.typeIds)
        filteredDevices = filteredDevices.filter(cur => typeIds.has(cur.typeId))
      }
      //*filter by brandid
      if (filter.brandIds.length) {
        const brandIds = new Set(filter.brandIds)
        filteredDevices = filteredDevices.filter(cur => brandIds.has(cur.brandId))
      }
      //*filter by price
      if (filter.price.from || filter.price.to) {
        filteredDevices = filteredDevices.filter(device => device.price >= filter.price.from && device.price <= filter.price.to)
        if (filter.price.from > filter.price.to) {
          return []
        }
      }
      //*sort by params
      if (filteredDevices.length > 1) {
        if (filter.sortBy === "default") {
          return filteredDevices
        }
        if (filter.sortBy === "from cheaper") {
          filteredDevices = filteredDevices.sort((a, b) => a.price - b.price)
        }
        if (filter.sortBy === "from expensive") {
          filteredDevices = filteredDevices.sort((a, b) => b.price - a.price)
        }
      }
    }

    return filteredDevices
  }

  return []
}
