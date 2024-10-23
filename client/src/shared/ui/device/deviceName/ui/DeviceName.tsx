import { FC } from 'react';
import { Link } from 'react-router-dom';
import { DEVICEPAGE_ROUTE } from 'shared/routerPaths';
import classes from './DeviceName.module.css';

type TDeviceNameType = {
	deviceName: string;
	brandName: string;
	typeName: string;
	deviceId: number;
}

export const DeviceName: FC<TDeviceNameType> = ({ deviceName, deviceId, brandName, typeName }) => {

	return (
		<Link
			to={DEVICEPAGE_ROUTE + '/' + deviceId}
			className={classes.deviceCarouselText}
		>
			<p className={classes.typeName} >{typeName}</p>
			<p className={classes.brandName} >{brandName}</p>
			<p className={classes.device__Name}>{deviceName}</p>
		</Link >)
}


