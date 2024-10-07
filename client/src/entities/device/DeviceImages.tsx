import { observer } from 'mobx-react-lite'
import DeviceCarousel from './DeviceCarousel'
import classes from './DeviceImages.module.css'

const DeviceImages = observer(({ device, ...props }) => {
	return (
		<div {...props} className={classes.deviceCarousel}><DeviceCarousel device={device} /></div>

	)
})

export default DeviceImages