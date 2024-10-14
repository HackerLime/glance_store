import { Link } from 'react-router-dom'
import { DEVICEPAGE_ROUTE } from 'shared/routerPaths'
import classes from './DeviceName.module.css'
export const DeviceName = ({ device }) => {
	/* 	const store = useContext(Context)
		const deviceStore = store.device
		const brandName = deviceStore.brands.find(brand => brand.id === device.brandId).name
		const typeName = deviceStore.types.find(type => type.id === device.typeId).name 
*/

	return (
		<Link

			to={DEVICEPAGE_ROUTE + '/' + device.id}
			className={classes.deviceCarouselText}
		>
			{/* <p className={classes.typeName} >{typeName}</p>
			<p className={classes.brandName} > {brandName}</p>
			<p className={classes.deviceName}>{device.name}</p> */}
			<p className={classes.typeName} >Я имя типа</p>
			<p className={classes.brandName} > Я имя брэнда</p>
			<p className={classes.deviceName}>я имя девайса</p>
		</Link >)
}


