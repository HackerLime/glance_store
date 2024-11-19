//@ts-nocheck
import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useCreateDeviceMutation, useGetBrandsQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi';
import type { TInfoState, TModalProps, TSelectedItemState } from './types';


export const CreateDevice: FC<TModalProps> = ({ show, setShow }) => {

	const brandsQuery = useGetBrandsQuery(undefined)
	const typesQuery = useGetTypesQuery(undefined)
	const [createDevice] = useCreateDeviceMutation()

	const [info, setInfo] = useState<TInfoState>([])
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [file, setFile] = useState(null)
	const [selectedType, setSelectedType] = useState<TSelectedItemState>(null)
	const [selectedBrand, setSelectedBrand] = useState<TSelectedItemState>(null)

	if (brandsQuery.isLoading || typesQuery.isLoading) {
		return <h1>Загрузка...</h1>
	}

	if (brandsQuery.isError || typesQuery.isError) {
		return <h1>Ошибка Загрузки</h1>
	}


	const addInfo = () => {
		setInfo([...info, { number: Date.now(), title: '', description: '' }])
	}
	const removeInfo = (num: number) => {
		setInfo(info.filter(i => i.number !== num))
	}
	const changeInfo = (num: number, key: string, value: string) => {
		setInfo(info.map(i => i.number === num ? { ...i, [key]: value } : i))
	}
	const selectFile = (e) => {
		setFile(e.target.files[0])
	}
	const hideModal = () => {
		setShow(false)
		setSelectedType(null)
		setSelectedBrand(null)
		setName('')
		setPrice('')
		setFile(null)
		setInfo([])
	}

	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file ? file : 'null')
		formData.append('brandId', selectedBrand ? String(selectedBrand.id) : 'null')
		formData.append('typeId', selectedType ? String(selectedType.id) : 'null')
		formData.append('info', JSON.stringify(info))
		console.log(formData)
		createDevice(formData).then(() => hideModal()).catch(e => console.log(e.response.data)
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

								{selectedType ? selectedType.name : `Выберите тип`}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{typesQuery.data.map(type =>
									<Dropdown.Item onClick={() => setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className='mb-2'>
							<Dropdown.Toggle variant="info" id="dropdown-basic">

								{selectedBrand ? selectedBrand.name : 'Выберите брэнд'}
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
							onChange={e => selectFile(e)}
							className='mb-3' type='file' />
						<Button
							className='mb-3'
							variant='outline-dark'
							onClick={addInfo}
						>Добавить характеристики</Button>
						{info.map((i, idx) =>
							<Row key={idx} className='mb-2' >
								<Col ><Form.Control
									value={i.title}
									onChange={e => changeInfo(i.number, 'title', e.target.value)}
								/></Col>
								<Col ><Form.Control
									value={i.description}
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


