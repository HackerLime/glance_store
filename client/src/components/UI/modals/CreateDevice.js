import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createDevice, fetchBrands, fetchTypes } from '../../../http/deviceAPI';
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite';
const CreateDevice = observer(({ show, setShow }) => {

	const { device } = useContext(Context)
	const [info, setInfo] = useState([])
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState(null)

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
	}, [])

	const addInfo = () => {
		setInfo([...info, { number: Date.now(), title: '', description: '' }])
	}
	const removeInfo = (num) => {
		setInfo(info.filter(i => i.number !== num))
	}
	const changeInfo = (num, key, value) => {
		setInfo(info.map(i => i.number === num ? { ...i, [key]: value } : i))
	}
	const selectFile = e => {
		setFile(e.target.files[0])
	}
	const hideModal = () => {
		setShow(false)
		device.setSelectedBrand({})
		device.setSelectedType({})
		setName('')
		setPrice(0)
		setFile(null)
		setInfo([])
	}
	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', device.selectedBrand.id)
		formData.append('typeId', device.selectedType.id)
		formData.append('info', JSON.stringify(info))
		createDevice(formData).then(data => hideModal()).catch(e => console.log(e.response.data)
		)
	}




	return (
		<Container>
			<Modal show={show} onHide={() => hideModal()}>
				<Modal.Header closeButton>
					<Modal.Title>новое Устройство</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Dropdown className='mb-2'>
						<Dropdown.Toggle variant="info" id="dropdown-basic">
							{device.selectedType.name || 'Выберите тип'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type =>
								<Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mb-2'>
						<Dropdown.Toggle variant="info" id="dropdown-basic">
							{device.selectedBrand.name || 'Выберите брэнд'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand =>
								<Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						value={name}
						onChange={e => setName(e.target.value)}
						className='mb-2' placeholder='Введите название' />
					<Form.Control
						value={price}
						onChange={e => setPrice(e.target.value)}
						className='mb-2' type='number' placeholder='Введите стоимость' />
					<Form.Control
						onChange={selectFile}
						className='mb-3' type='file' />
					<Button
						className='mb-3'
						variant='outline-dark'
						onClick={addInfo}
					>Добавить характеристики</Button>
					{info.map((i, idx) =>
						<Row key={idx} className='mb-2' >
							<Col ><Form.Control
								value={info.title}
								onChange={e => changeInfo(i.number, 'title', e.target.value)}
							/></Col>
							<Col ><Form.Control
								value={info.description}
								onChange={e => changeInfo(i.number, 'description', e.target.value)}
							/></Col>
							<Col md={3}>
								<Button
									onClick={() => removeInfo(i.number)}
									variant='danger'>Удалить</Button>
							</Col>
						</Row>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-danger" onClick={() => hideModal()}>
						Закрыть
					</Button>
					<Button variant="outline-success" onClick={addDevice}>
						Добавить
					</Button>
				</Modal.Footer>
			</Modal >
		</Container>
	)
})

export default CreateDevice