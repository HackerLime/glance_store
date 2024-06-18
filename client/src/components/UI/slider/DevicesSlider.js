import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Device from '../device/Device';
import { observer } from 'mobx-react-lite';

const DevicesSlider = observer((props) => {

	return (
		<Swiper
			slidesPerView={props.slidesPerView || 5.5}
			spaceBetween={props.spaceBetween || 30}
			freeMode={true}
			modules={[FreeMode, Pagination]}
			className="mySwiper"
			{...props}
		>
			{props.device.map(i =>
				<SwiperSlide key={i.id}><Device device={i} /></SwiperSlide>
			)}
		</Swiper>
	)
})

export default DevicesSlider