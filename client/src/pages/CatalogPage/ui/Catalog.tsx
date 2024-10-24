import { useState } from 'react'
import { useGetBrandsQuery, useGetDevicesQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi'
import { SVGList, SVGTile } from 'shared/assets/icons'
import { useDeviceApi } from 'shared/hooks/useDeviceApi'
import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { BlueLine } from 'shared/ui/lines'
import { LoadingAnimation } from 'shared/ui/loadingAnimation'
import { CatalogFilter } from 'widgets/catalogFilter'
import { DevicesList } from 'widgets/devicesList'
import { DevicesTiles } from 'widgets/devicesTiles'
import { PageHeader } from 'widgets/pageHeader'

export const Catalog = () => {

	const getDevicesResponse = useGetDevicesQuery(undefined)
	const getBrandsResponse = useGetBrandsQuery(undefined)
	const getTypesResponse = useGetTypesQuery(undefined)
	const screenWidth = useScreenWidth()

	const newHook = useDeviceApi()




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


	if (getDevicesResponse.isLoading || getBrandsResponse.isLoading || getTypesResponse.isLoading) {
		return <LoadingAnimation />
	}

	if (getDevicesResponse.isError || getBrandsResponse.isError || getTypesResponse.isError) {
		return <h1>Ошибка загрузки</h1>
	}

	if (getDevicesResponse.data && getBrandsResponse.data && getTypesResponse.data && screenWidth <= 768) {
		return (
			<main className='d-flex flex-column' style={{ padding: '0 15px' }}>
				<CatalogFilter isMobile={true} brands={getBrandsResponse.data} types={getTypesResponse.data} />
				<DevicesList brands={getBrandsResponse.data} types={getTypesResponse.data} devices={getDevicesResponse.data.rows} />
			</main>
		)
	}

	if (getDevicesResponse.data && getBrandsResponse.data && getTypesResponse.data && screenWidth > 768) {

		return (

			<main style={{ maxWidth: '1200px', margin: '0px auto', padding: '0 15px' }}>
				<PageHeader description='Каталог' />
				<div className='d-flex'>
					<CatalogFilter isDesktop={true} brands={getBrandsResponse.data} types={getTypesResponse.data} />
					<div className='d-flex flex-column' style={{ maxWidth: '860px' }} >
						<div className='d-flex justify-content-start' style={{ margin: '0 0 24px 0' }}>
							<div style={{ width: '66px' }} >
								<SVGTile onClick={() => tileClick()} color={tileColor} style={{ margin: '0 16px 0 0', cursor: 'pointer' }} />
								<SVGList onClick={() => listClick()} color={listColor} style={{ cursor: 'pointer' }} />
							</div>
						</div>
						{catalogViewStatus === 'tiles' ?
							<div>
								<BlueLine />
								<DevicesTiles brands={getBrandsResponse.data} types={getTypesResponse.data} devices={getDevicesResponse.data.rows} />
							</div>
							:
							<div className='d-flex flex-column'>
								<DevicesList brands={getBrandsResponse.data} types={getTypesResponse.data} devices={getDevicesResponse.data.rows} />
							</div>
						}
					</div>
				</div>
			</main >

		)
	}











}

