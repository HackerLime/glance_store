import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type TDeviceImages = {
	deviceImages: string;
}

export const DeviceImages: FC<TDeviceImages> = ({ deviceImages }) => {


	return (

		<>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView={1}
				pagination


			>
				<SwiperSlide>
					<img src={import.meta.env.VITE_API_URL + '/' + deviceImages} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={import.meta.env.VITE_API_URL + '/' + deviceImages} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={import.meta.env.VITE_API_URL + '/' + deviceImages} />
				</SwiperSlide>

			</Swiper>
		</>

	)
}

