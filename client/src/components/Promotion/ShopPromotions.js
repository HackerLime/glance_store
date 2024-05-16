import React, { useState } from 'react'
import iphone14Img from '../UI/icons/promotion/14.svg'
import iphone12Img from '../UI/icons/promotion/12.svg'
import novaY61img from '../UI/icons/promotion/61.svg'
import redmiImg from '../UI/icons/promotion/redmi.svg'
import iphone14_2Img from '../UI/icons/promotion/14_2.svg'
import novaY61_2img from '../UI/icons/promotion/Y61_2.svg'


import ShopPromotionProduct from './ShopPromotionProduct'




const ShopPromotions = () => {

	const [promotionDevice, setPromotionDevice] = useState([
		{ id: 1, name: 'Смартфон Apple iPhone 14 128GB', stockPrice: 84999, defaultPrice: 87999, percent: 0, inStock: true, img: iphone14Img },
		{ id: 2, name: 'Смартфон Apple iPhone 12 64GB', stockPrice: 42980, defaultPrice: 47756, percent: 0, inStock: true, img: iphone12Img },
		{ id: 3, name: 'Смартфон HUAWEI nova Y61', stockPrice: 11999, defaultPrice: 14117, percent: 0, inStock: true, img: novaY61img },
		{ id: 4, name: 'Смартфон Xiaomi Redmi  128GB', stockPrice: 17665, defaultPrice: 19999, percent: 0, inStock: true, img: redmiImg },
		{ id: 5, name: 'Смартфон Apple iPhone 14 128GB', stockPrice: 75999, defaultPrice: 79999, percent: 0, inStock: true, img: iphone14_2Img },
		{ id: 6, name: 'Смартфон HUAWEI nova Y61', stockPrice: 11999, defaultPrice: 14999, percent: 0, inStock: true, img: novaY61_2img },
	])



	return (
		<div >
			<div style={{ height: 64 }}>
				<h6 style={{ fontSize: 32 }}>Акции</h6>
			</div>
			<div
				className='d-flex justify-content-between'
				style={{ padding: '24px 0 24px 24px', borderTop: '1px solid rgb(193, 193, 193)', borderBottom: '1px solid rgb(193, 193, 193)' }}
			>
				{promotionDevice.map(device =>
					<ShopPromotionProduct key={device.id} device={device} />
				)}
			</div>
		</div >
	)
}

export default ShopPromotions