import { useGetBrandsQuery, useGetDevicesQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi';
import { DevicesSlider } from 'widgets/devicesSlider/DevicesSlider';
import classes from './ShopPromotions.module.css';
export const ShopPromotions = () => {

	const devicesResponse = useGetDevicesQuery(undefined)
	const brandsResponse = useGetBrandsQuery(undefined)
	const typesResponse = useGetTypesQuery(undefined)


	if (devicesResponse.isLoading || brandsResponse.isLoading || typesResponse.isLoading) {
		return <h1>Загрузка...</h1>
	}

	if (devicesResponse.isError || brandsResponse.isError || typesResponse.isError) {
		return <h1>Ошибка загрузки</h1>
	}

	if (devicesResponse.data && brandsResponse.data && typesResponse.data) {
		console.log(brandsResponse.data)
		console.log(devicesResponse.data)


		return (
			<section >
				<h6 className={classes.shopPromotions__text}>Акции</h6>
				<div className={classes.shopPromotions__main}>

					<DevicesSlider devices={devicesResponse.data.rows} brands={brandsResponse.data} types={typesResponse.data} />


				</div>
			</section >
		)
	}


}

