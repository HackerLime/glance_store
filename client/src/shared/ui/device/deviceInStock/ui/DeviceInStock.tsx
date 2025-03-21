import classes from './DeviceInStock.module.css'
export const DeviceInStock = ({ device }) => {

	return (
		<h3 className={classes.deviceInStock} style={{ color: device.id % 2 === 0 ? 'rgb(22,155,0)' : 'red' }}>
			{device.id % 2 === 0 ? 'В наличии' : 'Отсутсвует'}
		</h3>
	)
}

