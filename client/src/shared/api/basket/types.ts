
type basketDeviceData = {
  id: number;
  createdAt: string;
  updatedAt: string;
  basketId: number;
  deviceId: number;
}

export type TAddBasketDeviceParams = {
  deviceId: number;
  basketId: number
}

export type TAddBasketDeviceResponse = basketDeviceData

export type TFetchBasketDevicesParams = { basketId: number }
export type TFetchBasketDevicesResponse = { data: [] } | { data: basketDeviceData[] }

export type TDeleteBasketDeviceParams = {
  deviceId: number;
  basketId: number
}
export type TDeleteBasketDeviceResponse = { data: number }