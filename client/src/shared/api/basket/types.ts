import { TDevice } from 'shared/types';

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

export type TGetBasketDevicesParams = { basketId: number }
export type TGetBasketDevicesResponse = { data: [] } | { data: TDevice[] }

export type TDeleteBasketDeviceParams = {
  deviceId: number;
  basketId: number
}
export type TDeleteBasketDeviceResponse = { data: number }