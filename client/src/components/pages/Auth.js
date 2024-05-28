import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../router/paths';


const Auth = () => {
	const location = useLocation()
	let isLogin = location.pathname === '/login'
	return (
		<Container>
			<Form style={{ maxWidth: '350px', margin: '0px auto' }}>
				<h1 style={{ margin: '0 0 30px 0', textAlign: 'center' }}>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Введите Email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Пароль</Form.Label>
					<Form.Control type="password" placeholder="Введите пароль" />
				</Form.Group>

				<div className='d-flex justify-content-between align-items-center'>
					<Button variant="outline-primary">
						{isLogin ? 'Войти' : 'Регистрация'}
					</Button>
					<p>нет аккаунта?<Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE} style={{ color: 'teal' }}>{isLogin ? 'Зарегестрируйся!' : 'Авторизуйся'}</Link></p>
				</div>
			</Form>
		</Container>
	)
}

export default Auth