import { useGetDevicesQuery } from 'shared/api/devices/devicesApi';
import { DevicesSlider } from 'widgets/devicesSlider/DevicesSlider';
import classes from './ShopPromotions.module.css';
export const ShopPromotions = () => {

	const { data, isError, isLoading } = useGetDevicesQuery(undefined)
	if (isLoading) {
		return <h1>Загрузка...ShopPromotions</h1>
	}

	if (isError) {
		return <h1>Какая то Ошибка ShopPromotions</h1>
	}

	if (data) {
		return (
			<section >
				<h6 className={classes.shopPromotions__text}>Акции</h6>
				<div className={classes.shopPromotions__main}>

					<DevicesSlider devices={data} />


				</div>
			</section >
		)
	}


}

