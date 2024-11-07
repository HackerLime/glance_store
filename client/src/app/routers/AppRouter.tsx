import { RootState } from 'app/store/store'
import { Shop } from 'pages'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { useCheckToken } from 'shared/hooks'
import { authRoutes, privateRoutes, publicRoutes } from './router'

export const AppRouter = () => {
	const user = useSelector((state: RootState) => state.user)
	const tokenIsValid = useCheckToken()
	const dispatch = useDispatch()



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

