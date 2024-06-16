import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../router/paths';
import { observer } from 'mobx-react-lite';
import { login, registartion } from '../../http/userAPI';
import { Context } from '../../index'

const Auth = observer(() => {
	const navigate = useNavigate()
	const { user } = useContext(Context)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const location = useLocation()
	let isLogin = location.pathname === '/login'
	const auth = async () => {
		let userData;
		if (isLogin) {
			userData = await login(email, password).then(data => {
				user.setUser(data)
				user.setIsAuth(true)
				navigate(SHOP_ROUTE)
			})
				.catch(e => alert(`Ошибка login ${e.response.data.message}`))
			return userData
		}
		userData = await registartion(email, password)
			.then(data => {
				user.setUser(data)
				user.setIsAuth(true)
				navigate(SHOP_ROUTE)
			})
			.catch(e => alert(`Ошибка registration ${e.response.data.message}`))
		return userData
	}
	return (
		<Container>
			<Form style={{ maxWidth: '350px', margin: '0px auto' }}>
				<h1 style={{ margin: '0 0 30px 0', textAlign: 'center' }}>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						value={email}
						onChange={e => setEmail(e.target.value)}
						type="email" placeholder="Введите Email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Пароль</Form.Label>
					<Form.Control
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password" placeholder="Введите пароль" />
				</Form.Group>

				<div className='d-flex justify-content-between align-items-center'>
					<Button
						onClick={auth}
						variant="outline-primary">
						{isLogin ? 'Войти' : 'Регистрация'}
					</Button>
					<p>нет аккаунта?<Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE} style={{ color: 'teal' }}>{isLogin ? 'Зарегестрируйся!' : 'Авторизуйся'}</Link></p>
				</div>
			</Form>
		</Container>
	)
})

export default Auth