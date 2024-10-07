import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../index'
import { DEVICEPAGE_ROUTE } from '../../../router/paths'
import classes from './DeviceName.module.css'
const DeviceName = observer(({ device, props }) => {
	const store = useContext(Context)
	const deviceStore = store.device
	const brandName = deviceStore.brands.find(brand => brand.id === device.brandId).name
	const typeName = deviceStore.types.find(type => type.id === device.typeId).name

	return (
		<Link
			{...props}
			to={DEVICEPAGE_ROUTE + '/' + device.id}
			className={classes.deviceCarouselText}
		>
			<p className={classes.typeName} >{typeName}</p>
			<p className={classes.brandName} > {brandName}</p>
			<p className={classes.deviceName}>{device.name}</p>
		</Link >)
})


export default DeviceName