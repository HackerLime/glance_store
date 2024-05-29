import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createBrand } from '../../../http/deviceAPI';

const CreateBrand = ({ show, setShow }) => {
	const hideModal = () => {
		setShow(false)
	}
	const [brandName, setBrandName] = useState('')
	const newBrand = () => {
		createBrand(brandName)
		hideModal()
		setBrandName('')
	}


	return (
		<Container>
			<Modal show={show} onHide={() => hideModal()}>
				<Modal.Header closeButton>
					<Modal.Title>Новый Брэнд</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Control
						value={brandName}
						onChange={e => setBrandName(e.target.value)}
						placeholder='Введите название' />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-danger" onClick={() => hideModal()}>
						Закрыть
					</Button>
					<Button variant="outline-success" onClick={() => newBrand()}>
						Добавить
					</Button>
				</Modal.Footer>
			</Modal >
		</Container >
	)
}

export default CreateBrand