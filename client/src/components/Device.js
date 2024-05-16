import React from 'react'
import { Container } from 'react-bootstrap'

import DeviceHeader from './Device/DeviceHeader'
import DeviceMain from './Device/DeviceMain'
import DeviceFooter from './Device/DeviceFooter'
const Device = () => {
	return (
		<Container>
			<div style={{ padding: '17px 0 80px 0' }}>
				<DeviceHeader />
				<DeviceMain />
				<DeviceFooter />
			</div>
		</Container>
	)
}

export default Device