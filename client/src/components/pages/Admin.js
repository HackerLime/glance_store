import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import CreateBrand from '../UI/modals/CreateBrand';
import CreateType from '../UI/modals/CreateType';
import CreateDevice from '../UI/modals/CreateDevice';
import { observer } from 'mobx-react-lite';
const Admin = observer(() => {
	const [brandVisible, setBrandVisible] = useState(false)
	const [typeVisible, setTypeVisible] = useState(false)
	const [deviceVisible, setDeviceVisible] = useState(false)

	return (
		<Container>
			<div className='d-flex flex-column' style={{ maxWidth: '200px', margin: '0px auto' }}>
				<Button onClick={() => setBrandVisible(true)} style={{ margin: '0 0 15px 0', fontSize: '20px' }} >новый Брэнд</Button>
				<Button onClick={() => setTypeVisible(true)} style={{ margin: '0 0 15px 0', fontSize: '20px' }} >новый Тип</Button>
				<Button onClick={() => setDeviceVisible(true)} style={{ fontSize: '20px' }} >новое Устройство</Button>
				<CreateBrand show={brandVisible} setShow={setBrandVisible} />
				<CreateType show={typeVisible} setShow={setTypeVisible} />
				<CreateDevice show={deviceVisible} setShow={setDeviceVisible} />
			</div>
		</Container >
	)
})

export default Admin