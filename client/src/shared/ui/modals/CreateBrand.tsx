import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useCreateBrandMutation } from 'shared/api/devices/devicesApi';
import type { TModalProps } from './types';

export const CreateBrand: FC<TModalProps> = ({ show, setShow }) => {
	const [createBrand] = useCreateBrandMutation()


	const hideModal = () => {
		setShow(false)
	}
	const [brandName, setBrandName] = useState('')
	const newBrand = () => {
		createBrand({ name: brandName })
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

