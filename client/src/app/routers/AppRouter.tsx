import { Shop } from 'pages'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, privateRoutes, publicRoutes } from './router'

export const AppRouter = () => {
	const user = {
		isAuth: true
	}

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

