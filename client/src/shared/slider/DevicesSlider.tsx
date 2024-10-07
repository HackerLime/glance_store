import { observer } from 'mobx-react-lite';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSliderParams } from '../../../hooks/useSliderParams';
import Device from '../device/Device';

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