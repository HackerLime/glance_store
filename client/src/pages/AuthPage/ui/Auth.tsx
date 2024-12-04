//@ts-nocheck
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userApi, useTryLoginMutation, useTryRegistrationMutation } from 'shared/api/user/user.api';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'shared/routerPaths';
import { emailPattern, passwordPattern } from '../lib';
import styles from './Auth.module.css';
import { AuthPageInput } from './authpageInput';

export const Auth = () => {
	const { register, formState, handleSubmit } = useForm({
		mode: 'onChange'
	})
	const location = useLocation()
	const isLogin = location.pathname === '/login'
	const [tryLogin, tryLoginStatus] = useTryLoginMutation()
	const [tryRegistration, tryRegistrationStatus] = useTryRegistrationMutation()
	const dispatch = useDispatch()

	const emailError = formState.errors['email']?.message as string | undefined
	const passwordError = formState.errors['password']?.message as string | undefined
	type TOnSubmitData = { email: string, password: string }
	type TOnSubmit = (data: TOnSubmitData) => void;

	const authAction = async (email, password) => {
		if (isLogin) {
			tryLogin({ email, password })
		} else {
			tryRegistration({ email, password, role: 'USER' })
		}
	}

	const onSubmit: TOnSubmit = ({ email, password }) => {
		authAction(email, password)
	}

	const errNotify = (message) => {
		toast.error(message, {
			position: "bottom-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	}

	useEffect(() => {
		if (tryLoginStatus.isError) {
			if ('error' in tryLoginStatus.error) {
				dispatch(userApi.util.resetApiState())
				return errNotify(tryLoginStatus.error.error)
			}
			dispatch(userApi.util.resetApiState())
			return errNotify(tryLoginStatus.error.data.message || 'Ошибка авторизации')

		}
		if (tryRegistrationStatus.isError) {
			if ('error' in tryRegistrationStatus.error) {
				dispatch(userApi.util.resetApiState())
				return errNotify(tryRegistrationStatus.error.error)
			}
			dispatch(userApi.util.resetApiState())
			return errNotify(tryRegistrationStatus.error.data.message || 'Ошибка регистрации')

		}
	}, [tryLoginStatus.isError, tryRegistrationStatus.isError])


	return (
		<Container>
			<form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={styles.authPageHeader}>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
				<div className={styles.authForm__inputContainer}>
					<AuthPageInput
						register={register}
						name={'email'}
						labelText={'Email'}
						placeholderText={'Введите Email'}
						isError={emailError}
						requiredText={'*Введите email'}
						pattern={emailPattern}
					/>
					<AuthPageInput
						register={register}
						name={'password'}
						labelText={'Пароль'}
						placeholderText={'Введите пароль'}
						isError={passwordError}
						requiredText={'*Введите пароль'}
						pattern={passwordPattern}
						type={'password'}
					/>
				</div>
				<div className={styles.authForm__actionsContainer}>
					<button className={styles.authForm__button} type='submit'>
						{isLogin ? 'Войти' : 'Регистрация'}
					</button>
					<p>нет аккаунта?<Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE} style={{ color: 'teal' }}>{isLogin ? 'Зарегестрируйся!' : 'Авторизуйся'}</Link></p>
				</div>
			</form>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme="colored"
			/>
		</Container>
	)
}
