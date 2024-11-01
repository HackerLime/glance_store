import type { RootState } from 'app/store/store';
import { useSelector } from 'react-redux';
import { useGetDevicesQuery } from 'shared/api/devices/devicesApi';



export const useCatalogDevices = () => {

  const devicesResponse = useGetDevicesQuery(undefined);
  const filter = useSelector((state: RootState) => state.filter);
  if (devicesResponse.data) {
    let filteredDevices = devicesResponse.data.rows || []
    console.log(filteredDevices)
    if (filteredDevices.length && filter.typeIds.length) {
      const typeIds = new Set(filter.typeIds)
      filteredDevices = filteredDevices.filter(cur => typeIds.has(cur.typeId))
    }

    if (filteredDevices.length && filter.brandIds.length) {
      const brandIds = new Set(filter.brandIds)
      filteredDevices = filteredDevices.filter(cur => brandIds.has(cur.brandId))
    }

    if (filteredDevices.length && filter.price.from < filter.price.to) {
      filteredDevices = filteredDevices.filter(device => device.price >= filter.price.from && device.price <= filter.price.to)
      return filteredDevices
    }

    if (filteredDevices.length > 1) {
      //todo надо добавить логику сортировки по значению
      //* "default" | "from expensive" | "from cheaper"
      if (filter.sortBy === "from cheaper")
        filteredDevices = [...filteredDevices].sort((a, b) => a.price - b.price)
    }


    return filteredDevices
  }

  return []
}
