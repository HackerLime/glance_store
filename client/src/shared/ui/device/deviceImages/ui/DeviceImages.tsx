import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DeviceImage } from './deviceImage/DeviceImage';

type TDeviceImages = {
	deviceImages: string;
}

export const DeviceImages: FC<TDeviceImages> = ({ deviceImages }) => {

	return (

		<Swiper
			modules={[Pagination, Navigation]}
			slidesPerView={1}
			pagination
		>
			<SwiperSlide >
				<DeviceImage deviceImage={deviceImages} />
			</SwiperSlide>
			<SwiperSlide>
				<DeviceImage deviceImage={deviceImages} />
			</SwiperSlide>
			<SwiperSlide>
				<DeviceImage deviceImage={deviceImages} />

			</SwiperSlide>
		</Swiper>

	)
}

