import { RootState } from 'app/store/store'
import { logOutAction, loginAction } from 'entities/user/model/user.slice'
import { Shop } from 'pages'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { check } from 'shared/api/user/userAPI'
import { useCheckToken } from 'shared/hooks'
import { authRoutes, privateRoutes, publicRoutes } from './router'
import { useEffect } from 'react'

export const AppRouter = () => {
	const user = useSelector((state: RootState) => state.user)
	const tokenIsValid = useCheckToken()
	const dispatch = useDispatch()

	useEffect(() => {
		if (tokenIsValid) {
			check().then(e => dispatch(loginAction(e)))
		} else {
			dispatch(logOutAction())
			localStorage.removeItem('token')
		}

	}, [])

	return (
		<Routes>
			{user.isAuth && privateRoutes.map(
				(route, idx) => <Route key={idx} path={route.path} element={<route.component />} />)}
			{!user.isAuth && authRoutes.map(
				(route, idx) => <Route key={idx} path={route.path} element={<route.component />} />)}
			{publicRoutes.map(
				(route, idx) => <Route key={idx} path={route.path} element={<route.component />} />)}
			<Route path='*' element={<Shop />} />
		</Routes>
	)
}

