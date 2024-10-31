import { TDevice } from 'shared/types'

export const getFromTo = (devices: TDevice[]) => {
  if (devices.length) {
    let prices: number[] = []
    devices.map(device => prices.push(device.price))
    prices = prices.sort()
    return { from: prices[0], to: prices[prices.length - 1] }
  }
  return { from: 0, to: 0 }
}