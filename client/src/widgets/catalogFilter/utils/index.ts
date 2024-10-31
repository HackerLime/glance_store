export { getFromTo } from './utils';

/* export const sortByPriceFilter: TSortByPriceFilter = (devices, from, to) => {
  if (!from && !to) {
    setCancelVisible(false)
    return devices
  } else {
    let pricesArr: number[] = []
    devices.map(i => pricesArr.push(i.price))
    pricesArr = pricesArr.filter(i => i >= prices.defaultFrom && i <= prices.defaultTo)
    setCatalogDevices([...catalogDevices].filter(i => pricesArr.includes(i.price)))
    setCancelVisible(true)
  }
} */
/* import { useState } from 'react'

//! для PriceFilter
export const [cancelVisible, setCancelVisible] = useState(false)
//! для Фильтра
export const variants = [
  { id: 1, name: 'сначала Дешевле' },
  { id: 2, name: 'сначала Дороже' },
]

//! Алгоритм Упорядочения по выбранному параметру
export const sortDevices = (id) => {
    switch (id) {
     case 1:
       setCatalogDevices([...catalogDevices].sort((a, b) => a.price - b.price))
       break
     case 2:
       setCatalogDevices([...catalogDevices].sort((a, b) => a.price - b.price).reverse())
       break
     default:
       return catalogDevices
   } 
}

*/