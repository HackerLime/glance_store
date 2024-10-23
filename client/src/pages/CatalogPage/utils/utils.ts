import { useState } from 'react'

//! для PriceFilter
export const [cancelVisible, setCancelVisible] = useState(false)
//! для Фильтра
export const variants = [
  { id: 1, name: 'сначала Дешевле' },
  { id: 2, name: 'сначала Дороже' },
]

//! Алгоритм Упорядочения по цене min/max
export const sortDevices = (id) => {
  /*  switch (id) {
     case 1:
       setCatalogDevices([...catalogDevices].sort((a, b) => a.price - b.price))
       break
     case 2:
       setCatalogDevices([...catalogDevices].sort((a, b) => a.price - b.price).reverse())
       break
     default:
       return catalogDevices
   } */
}

//! Алгоритм Фильтрации товаров в диапазоне цены min/max

export const devicePrice = getPrice()
const sortByPrice = (prices) => {
  /*   if (!prices.defaultFrom && !prices.defaultTo) {
      setCancelVisible(false)
      return setCatalogDevices([...device.devices])
    } else {
      let pricesArr = []
      device.devices.map(i => pricesArr.push(i.price))
      pricesArr = pricesArr.filter(i => i >= prices.defaultFrom && i <= prices.defaultTo)
      setCatalogDevices([...catalogDevices].filter(i => pricesArr.includes(i.price)))
      setCancelVisible(true) */
}
}



//! алгос для нахождения min и max цены
export function getPrice() {
 /*  let priceArr = []
  catalogDevices.map(i => priceArr.push(i.price))
  let minPrice = Math.min.apply(null, priceArr)
  let maxPrice = Math.max.apply(null, priceArr)
  if (Number.isFinite(minPrice) && Number.isFinite(maxPrice)) {
    return { max: maxPrice, min: minPrice }
  } else
    return { max: 1, min: 0  */}
} 