import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DEVICEPAGE_ROUTE } from '../../../router/paths'
import classes from './DeviceName.module.css'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
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
		>{typeName} {brandName}	{device.name} </Link>)
})


export default DeviceName