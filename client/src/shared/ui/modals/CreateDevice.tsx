import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useCreateDeviceMutation, useGetBrandsQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi';


export const CreateDevice = ({ show, setShow }) => {

	const brandsQuery = useGetBrandsQuery(undefined)
	const typesQuery = useGetTypesQuery(undefined)
	const [createDevice] = useCreateDeviceMutation()

	const [info, setInfo] = useState([])
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [file, setFile] = useState(null)
	const [selectedType, setSelectedType] = useState({})
	const [selectedBrand, setSelectedBrand] = useState({})

	if (brandsQuery.isLoading || typesQuery.isLoading) {
		return <h1>Загрузка...</h1>
	}

	if (brandsQuery.isError || typesQuery.isError) {
		return <h1>Ошибка Загрузки</h1>
	}


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
		setSelectedType({})
		setSelectedBrand({})
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
		formData.append('brandId', selectedBrand.id)
		formData.append('typeId', selectedType.id)
		formData.append('info', JSON.stringify(info))
		console.log(formData)
		createDevice(formData).then(data => hideModal()).catch(e => console.log(e.response.data)
		)
	}



	if (brandsQuery.data && typesQuery.data) {
		return (
			<Container>
				<Modal show={show} onHide={() => hideModal()}>
					<Modal.Header closeButton>
						<Modal.Title>новое Устройство</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Dropdown className='mb-2'>
							<Dropdown.Toggle variant="info" id="dropdown-basic">

								{selectedType.name || `Выберите тип`}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{typesQuery.data.map(type =>
									<Dropdown.Item onClick={() => setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className='mb-2'>
							<Dropdown.Toggle variant="info" id="dropdown-basic">

								{selectedBrand.name || 'Выберите брэнд'}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{brandsQuery.data.map(brand =>
									<Dropdown.Item onClick={() => setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
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
	}


}


