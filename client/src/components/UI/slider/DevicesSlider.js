import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Device from '../device/Device';
import { observer } from 'mobx-react-lite';
import { useSliderParams } from '../../../hooks/useSliderParams';

const DevicesSlider = observer((props) => {
	const { mySlidesPerView, mySlidesSpaceBetween } = useSliderParams()

	return (
		<Swiper
			slidesPerView={mySlidesPerView || 5.5}
			spaceBetween={mySlidesSpaceBetween || 30}
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