import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/router'
import Shop from './pages/Shop'
const AppRouter = () => {
	const isAuth = false
	return (
		<BrowserRouter>
			<Routes>
				{isAuth && privateRoutes.map(
					(route, idx) => <Route key={idx} path={route.path} element={route.component} />)}
				{publicRoutes.map(
					(route, idx) => <Route key={idx} path={route.path} element={route.component} />)}
				<Route path='*' element={<Shop />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter