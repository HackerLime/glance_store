import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/router'
import { observer } from 'mobx-react-lite'
import Shop from './pages/Shop'
import { Context } from '../index'
const AppRouter = observer(() => {
	const { user } = useContext(Context)
	return (
		<Routes>
			{user.isAuth && privateRoutes.map(
				(route, idx) => <Route key={idx} path={route.path} element={route.component} />)}
			{publicRoutes.map(
				(route, idx) => <Route key={idx} path={route.path} element={route.component} />)}
			<Route path='*' element={<Shop />} />
		</Routes>
	)
})

export default AppRouter