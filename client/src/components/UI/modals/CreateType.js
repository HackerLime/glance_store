import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { createType } from '../../../http/deviceAPI';

const CreateType = ({ show, setShow }) => {
	const hideModal = () => {
		setShow(false)
	}
	const [typeName, setTypeName] = useState('')
	const newType = () => {
		createType(typeName)
		hideModal()
		setTypeName('')
	}
	return (
		<Container>
			<Modal show={show} onHide={() => hideModal()}>
				<Modal.Header closeButton>
					<Modal.Title>Новый Тип</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Control
						value={typeName}
						onChange={e => setTypeName(e.target.value)}
						placeholder='Введите название' />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-danger" onClick={() => hideModal()}>
						Закрыть
					</Button>
					<Button variant="outline-success" onClick={() => newType()}>
						Добавить
					</Button>
				</Modal.Footer>
			</Modal >
		</Container >
	)
}

export default CreateType