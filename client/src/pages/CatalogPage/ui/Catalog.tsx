import { useState } from 'react'
import { SVGList, SVGTile } from 'shared/assets/icons'
import { useDeviceApi } from 'shared/hooks/useDeviceApi'
import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { BlueLine } from 'shared/ui/lines'
import { LoadingAnimation } from 'shared/ui/loadingAnimation'
import { CatalogFilter } from 'widgets/catalogFilter'
import { DevicesList } from 'widgets/devicesList'
import { DevicesTiles } from 'widgets/devicesTiles'
import { PageHeader } from 'widgets/pageHeader'
import styles from './Catalog.module.css'

export const Catalog = () => {

	const { isLoading, isError, data } = useDeviceApi()
	const screenWidth = useScreenWidth()

	const [catalogViewStatus, setCatalogViewStatus] = useState('list')
	const [tileColor, setTileColor] = useState('#ABABAB')
	const [listColor, setListColor] = useState('#0C0C0C')


	const tileClick = () => {
		setCatalogViewStatus('tiles')
		setTileColor('#0C0C0C')
		setListColor('#ABABAB')
	}
	const listClick = () => {
		setCatalogViewStatus('list')
		setListColor('#0C0C0C')
		setTileColor('#ABABAB')
	}


	if (isLoading) {
		return <LoadingAnimation />
	}

	if (isError) {
		return <h1>Ошибка загрузки</h1>
	}

	if (screenWidth <= 768) {
		return (
			<main className={styles.mobCatalog__wrapper}>
				<CatalogFilter devices={data?.devices} isMobile={true} brands={data?.brands} types={data?.types} />
				<DevicesList brands={data?.brands} types={data?.types} devices={data?.devices} />
			</main>
		)
	}

	if (screenWidth > 768) {

		return (

			<main className={styles.deskCatalog__wrapper} >
				<PageHeader description='Каталог' />
				<div className={styles.deskCatalog__container}>
					<CatalogFilter devices={data?.devices} isDesktop={true} brands={data?.brands} types={data?.types} />
					<div className={styles.deskCatalog__content} >
						<div className={styles.deskCatalog__content_icons}>
							<SVGTile onClick={() => tileClick()} color={tileColor} style={{ marginRight: '1em', cursor: 'pointer' }} />
							<SVGList onClick={() => listClick()} color={listColor} style={{ cursor: 'pointer' }} />
						</div>
						{catalogViewStatus === 'tiles' ?
							<div>
								<BlueLine />
								<DevicesTiles brands={data?.brands} types={data?.types} devices={data?.devices} />
							</div>
							:
							<div className={styles.deskCatalog__content_devicesList_container}>
								<DevicesList brands={data?.brands} types={data?.types} devices={data?.devices} />
							</div>
						}
					</div>
				</div>
			</main >

		)
	}











}

