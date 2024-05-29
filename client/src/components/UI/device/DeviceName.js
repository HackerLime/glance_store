import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DEVICEPAGE_ROUTE } from '../../../router/paths'
import classes from './DeviceName.module.css'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
const DeviceName = observer(({ device }) => {
	const store = useContext(Context)
	const deviceStore = store.device
	console.log(deviceStore.brands)
	const brandName = deviceStore.brands.find(brand => brand.id === device.brandId).name
	const typeName = deviceStore.types.find(type => type.id === device.typeId).name


	return (
		<Link
			to={DEVICEPAGE_ROUTE + '/' + device.id}
			className={classes.deviceCarouselText}
		>{typeName} {brandName} {device.name}</Link>)
})


export default DeviceName