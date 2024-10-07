import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Context } from '../../index';
import DevicesSlider from '../UI/slider/DevicesSlider';
import classes from './ShopPromotions.module.css';

const ShopPromotions = observer(() => {
	const { device } = useContext(Context)

	return (
		<div >
			<div style={{ height: 64 }}>
				<h6 style={{ fontSize: 32 }}>Акции</h6>
			</div>
			<div className={classes.promotionMain}>
				<DevicesSlider device={device.devices} />

			</div>
		</div >
	)
})

export default ShopPromotions