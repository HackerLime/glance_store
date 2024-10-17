import { useEffect, useState } from 'react';
import FBFox from 'shared/assets/img/feedback/FBFox.jpg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { FeedbackItem } from './FeedbackItem';

export const FeedbackItems = () => {
	const [mySlidesPerView, setMySlidesPerView] = useState(0.9)
	const screenWidth = useScreenWidth()
	const user = { id: 1, img: FBFox, name: 'Илон Маск' }
	const userRate = { id: 1, rate: 5, positiveFB: 'Очень красивый, удобно пользоваться', negativeFB: 'нет', date: '25.07' }

	useEffect(() => {
		if (screenWidth >= 850) {
			setMySlidesPerView(2.9)
		}
		if (screenWidth < 850 && screenWidth >= 768) {
			setMySlidesPerView(2.1)

		}
		if (screenWidth < 640 && screenWidth >= 590) {
			setMySlidesPerView(1.9)
		}
		if (screenWidth < 590 && screenWidth >= 470) {
			setMySlidesPerView(1.5)
		}
		if (screenWidth < 470) {
			setMySlidesPerView(1)
		}


	}, [screenWidth])

	return (
		<Swiper
			slidesPerView={mySlidesPerView}
			spaceBetween={1}
			freeMode={true}
			modules={[FreeMode, Pagination]}
			className="mySwiper"
		>
			<SwiperSlide>
				<FeedbackItem user={user} userRate={userRate} />
			</SwiperSlide>
			<SwiperSlide>
				<FeedbackItem user={user} userRate={userRate} />
			</SwiperSlide>
			<SwiperSlide>
				<FeedbackItem user={user} userRate={userRate} />
			</SwiperSlide>

		</Swiper>
	)
}

