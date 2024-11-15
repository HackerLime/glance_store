import { FC } from 'react';
import { Link } from 'react-router-dom';
import { DEVICEPAGE_ROUTE } from 'shared/routerPaths';
import styles from './DeviceName.module.css';

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
			className={styles.text_wrapper}
		>
			<p className={styles.typeName} >{typeName}</p>
			<p className={styles.brandName} >{brandName}</p>
			<p className={styles.device__Name}>{deviceName}</p>
		</Link >)
}


