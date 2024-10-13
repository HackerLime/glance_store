import { useNavigate } from 'react-router-dom'
import { useSliderParams } from 'shared/hooks/useSliderParams'
import { CATALOG_ROUTE } from 'shared/routerPaths'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { catalogSource } from '../lib'
import styles from './ShopCatalog.module.css'
import { ShopCatalogItem } from './ShopCatalogItem'

export const ShopCatalog = () => {
	const { mySlidesPerView } = useSliderParams()

	const navigate = useNavigate()

	return (
		<section className={styles.shopCatalog__wrapper}>
			<h6 className={styles.shopCatalog__title}>Каталог</h6>
			<Swiper
				slidesPerView={mySlidesPerView}
				freeMode={true}
				modules={[FreeMode, Pagination]}
				className="mySwiper"
			>
				{catalogSource.map(i =>
					<SwiperSlide key={i.id}>
						<ShopCatalogItem onClick={() => navigate(CATALOG_ROUTE)} key={i.id} sourceImage={i.sourceImage} name={i.name} />
					</SwiperSlide>
				)}
			</Swiper>
		</section>
	)
}

