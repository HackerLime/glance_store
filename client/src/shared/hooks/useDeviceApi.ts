import { useMemo } from 'react'
import { useGetBrandsQuery, useGetDevicesQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi'

export const useDeviceApi = () => {
  const getDevicesResponse = useGetDevicesQuery(undefined)
  const getBrandsResponse = useGetBrandsQuery(undefined)
  const getTypesResponse = useGetTypesQuery(undefined)

  const isLoading = getBrandsResponse.isLoading || getTypesResponse.isLoading || getDevicesResponse.isLoading
  const isError = getBrandsResponse.isError || getTypesResponse.isError || getDevicesResponse.isError

  if (isLoading || isError) {
    return useMemo(() => {
      return { isLoading, isError, data: undefined }
    }, [getBrandsResponse, getTypesResponse, getDevicesResponse]
    )
  }

  return useMemo(() => {
    return {
      isLoading, isError, data: {
        brands: getBrandsResponse.data,
        types: getTypesResponse.data,
        devices: getDevicesResponse.data.rows
      }
    }
  }, [getDevicesResponse, getBrandsResponse, getTypesResponse])
}