import React from 'react'
import iphone14Img from '../UI/icons/promotion/14.svg'
import iphone12Img from '../UI/icons/promotion/12.svg'
import novaY61img from '../UI/icons/promotion/61.svg'
import redmiImg from '../UI/icons/promotion/redmi.svg'
import iphone14_2Img from '../UI/icons/promotion/14_2.svg'
import novaY61_2img from '../UI/icons/promotion/Y61_2.svg'
import Device from '../UI/device/Device'
import classes from './ShopPromotions.module.css'

const ShopPromotions = () => {

	const devices = [
		{ id: 1, name: 'Смартфон Apple iPhone 14 128GB', price: 87999, percent: 15, inStock: true, img: iphone14Img },
		{ id: 2, name: 'Смартфон Apple iPhone 12 64GB', price: 47756, percent: 20, inStock: true, img: iphone12Img },
		{ id: 3, name: 'Смартфон HUAWEI nova Y61', price: 14117, percent: 25, inStock: true, img: novaY61img },
		{ id: 4, name: 'Смартфон Xiaomi Redmi  128GB', price: 19999, percent: 0, inStock: true, img: redmiImg },
		{ id: 5, name: 'Смартфон Apple iPhone 14 128GB', price: 79999, percent: 13, inStock: true, img: iphone14_2Img },
		{ id: 6, name: 'Смартфон HUAWEI nova Y61', price: 14999, percent: 22, inStock: true, img: novaY61_2img },
	]

	return (
		<div >
			<div style={{ height: 64 }}>
				<h6 style={{ fontSize: 32 }}>Акции</h6>
			</div>
			<div className={`d-flex justify-content-between ${classes.promotionMain}`}>
				{devices.map(device =>
					<Device key={device.id} device={device} />
				)}
			</div>
		</div >
	)
}

export default ShopPromotions