import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useCreateTypeMutation } from 'shared/api/devices/devicesApi';
import type { TModalProps } from './types';


export const CreateType: FC<TModalProps> = ({ show, setShow }) => {
	const [createType] = useCreateTypeMutation()

	const hideModal = () => {
		setShow(false)
	}
	const [typeName, setTypeName] = useState('')
	const newType = () => {
		createType({ name: typeName })
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

