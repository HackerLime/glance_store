import { RootState } from 'app/store/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetBrandsQuery, useGetDevicesQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi';
import { SVGList, SVGTile } from 'shared/assets/icons';
import { useScreenWidth } from 'shared/hooks/useScreenWidth';
import { BlueLine } from 'shared/ui/lines';
import { LoadingAnimation } from 'shared/ui/loadingAnimation';
import { CatalogFilter } from 'widgets/catalogFilter';
import { DevicesList } from 'widgets/devicesList';
import { DevicesTiles } from 'widgets/devicesTiles';
import { PageHeader } from 'widgets/pageHeader';
import { useCatalogDevices } from '../model/useCatalogDevices';
import styles from './Catalog.module.css';

export const Catalog = () => {
	const screenWidth = useScreenWidth();
	const devicesResponse = useGetDevicesQuery(undefined);
	const brandsResponse = useGetBrandsQuery(undefined);
	const typesResponse = useGetTypesQuery(undefined);
	const filter = useSelector((state: RootState) => state.filter);
	const [catalogViewStatus, setCatalogViewStatus] = useState('list');
	const [tileColor, setTileColor] = useState('#ABABAB');
	const [listColor, setListColor] = useState('#0C0C0C');

	const catalogDevices = useCatalogDevices()




	const tileClick = () => {
		setCatalogViewStatus('tiles');
		setTileColor('#0C0C0C');
		setListColor('#ABABAB');
	};
	const listClick = () => {
		setCatalogViewStatus('list');
		setListColor('#0C0C0C');
		setTileColor('#ABABAB');
	};

	if (devicesResponse.isLoading || brandsResponse.isLoading || typesResponse.isLoading) {
		return <LoadingAnimation />;
	}

	if (devicesResponse.isError || brandsResponse.isError || typesResponse.isError) {
		return <h1>Ошибка загрузки</h1>;
	}
	if (devicesResponse.data && brandsResponse.data && typesResponse.data) {
		if (screenWidth <= 768) {
			return (
				<main className={styles.catalog__wrapper}>
					<CatalogFilter devices={catalogDevices} isMobile={true} brands={brandsResponse.data} types={typesResponse.data} />
					<DevicesList brands={brandsResponse.data} types={typesResponse.data} devices={catalogDevices} />
				</main>
			);
		}

		return (
			<main className={styles.catalog__wrapper}>
				<PageHeader description='Каталог' />
				<div className={styles.deskCatalog__container}>
					<CatalogFilter devices={catalogDevices} isDesktop={true} brands={brandsResponse.data} types={typesResponse.data} />
					<div className={styles.deskCatalog__content}>
						<div className={styles.deskCatalog__content_icons}>
							<SVGTile onClick={tileClick} color={tileColor} style={{ marginRight: '1em', cursor: 'pointer' }} />
							<SVGList onClick={listClick} color={listColor} style={{ cursor: 'pointer' }} />
						</div>
						{catalogViewStatus === 'tiles' ? (
							<div>
								<BlueLine />
								<DevicesTiles brands={brandsResponse.data} types={typesResponse.data} devices={catalogDevices} />
							</div>
						) : (
							<div className={styles.deskCatalog__content_devicesList_container}>
								<DevicesList brands={brandsResponse.data} types={typesResponse.data} devices={catalogDevices} />
							</div>
						)}
					</div>
				</div>
			</main>
		);
	}
};
