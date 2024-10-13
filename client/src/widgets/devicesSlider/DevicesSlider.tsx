import { TDevice } from 'entities/device/model';
import { FC } from 'react';
import { useSliderParams } from 'shared/hooks/useSliderParams';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

type TDevicesSlider = {
	devices: TDevice[]
}

export const DevicesSlider: FC<TDevicesSlider> = ({ devices }) => {
	const { mySlidesPerView, mySlidesSpaceBetween } = useSliderParams()

	return (
		<Swiper
			slidesPerView={mySlidesPerView || 5.5}
			spaceBetween={mySlidesSpaceBetween || 30}
			freeMode={true}
			modules={[FreeMode, Pagination]}
			className="mySwiper"

		>
			{/* 	{devices.map(i =>
				<SwiperSlide key={i.id}><Device asSliderItem={true} device={i} /></SwiperSlide>
			)} */}
		</Swiper>
	)
}

