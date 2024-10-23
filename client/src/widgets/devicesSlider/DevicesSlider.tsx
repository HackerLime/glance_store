import { Device } from 'entities/device';
import { TDevice } from 'entities/device/model';
import { FC } from 'react';
import { useSliderParams } from 'shared/hooks/useSliderParams';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type TBrandAndTypeResponse = {
	id: number;
	name: string;
}

type TDevicesSlider = {
	devices: TDevice[];
	brands: TBrandAndTypeResponse[];
	types: TBrandAndTypeResponse[];
	slidesPerViewProp?: number;
	spaceBetweenProp?: number
}

export const DevicesSlider: FC<TDevicesSlider> = ({ devices, brands, types, slidesPerViewProp, spaceBetweenProp }) => {

	const { mySlidesPerView, mySlidesSpaceBetween } = useSliderParams()

	return (
		<Swiper
			slidesPerView={slidesPerViewProp || mySlidesPerView || 5.5}
			spaceBetween={spaceBetweenProp || mySlidesSpaceBetween || 30}
			freeMode={true}
			modules={[FreeMode, Pagination]}
			className="mySwiper"
		>
			{devices.map(i => {
				const brand = brands.find(brand => brand.id === i.brandId)
				const type = types.find(type => type.id === i.typeId)
				return (
					<SwiperSlide key={i.id}>
						<Device
							asSliderItem={true}
							device={i}
							brandName={brand?.name || 'unknown brand'}
							typeName={type?.name || 'unknown type'}
						/>
					</SwiperSlide>
				)
			}
			)}
		</Swiper>
	)
}

