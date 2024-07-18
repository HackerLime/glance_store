import React, { useState } from 'react'
import smartphoneimg from '../UI/icons/catalog/smartphone.svg'
import notebookimg from '../UI/icons/catalog/notebook.svg'
import pcimg from '../UI/icons/catalog/pc.svg'
import tvimg from '../UI/icons/catalog/tv.svg'
import tabletimg from '../UI/icons/catalog/tablet.svg'
import soundbarimg from '../UI/icons/catalog/soundbar.svg'
import { observer } from 'mobx-react-lite'
import ShopCatalogItem from './ShopCatalogItem'
import { useNavigate } from 'react-router-dom'
import { CATALOG_ROUTE } from '../../router/paths'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ShopCatalog = observer(() => {
	const navigate = useNavigate()
	const [devices, setDevices] = useState([
		{ id: 1, name: 'Смартфоны', img: smartphoneimg },
		{ id: 2, name: 'Ноутбуки', img: notebookimg },
		{ id: 3, name: 'Компьютеры', img: pcimg },
		{ id: 4, name: 'Телевизоры', img: tvimg },
		{ id: 5, name: 'Планшеты', img: tabletimg },
		{ id: 6, name: 'Колонки', img: soundbarimg },
	])
	return (
		<div
			style={{ margin: '0 0 40px 0' }}
		>
			<h6 style={{ fontSize: 32, margin: '0 0 28px 0' }}>Каталог</h6>
			<div className='d-flex justify-content-between'>
				<Swiper
					slidesPerView={5.9}
					spaceBetween={1.5}
					freeMode={true}
					modules={[FreeMode, Pagination]}
					className="mySwiper"
				>
					{devices.map(i =>
						<SwiperSlide key={i.id}>
							<ShopCatalogItem onClick={() => navigate(CATALOG_ROUTE)} key={i.id} img={i.img} name={i.name} />
						</SwiperSlide>
					)}
				</Swiper>

			</div>
		</div>
	)
})

export default ShopCatalog