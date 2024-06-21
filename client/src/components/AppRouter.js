import React, { Fragment, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes, authRoutes } from '../router/router'
import { observer } from 'mobx-react-lite'
import Shop from './pages/Shop'
import { Context } from '../index'
import ScrollToTop from '../ScrollToTop'

const AppRouter = observer(() => {
	const { user } = useContext(Context)
	return (
		<Routes>			{user.isAuth && privateRoutes.map(
			(route, idx) => <Route key={idx} path={route.path} element={route.component} />)}
			{!user.isAuth && authRoutes.map(
				(route, idx) => <Route key={idx} path={route.path} element={route.component} />)}
			{publicRoutes.map(
				(route, idx) => <Route key={idx} path={route.path} element={route.component} />)}
			<Route path='*' element={<Shop />} />
		</Routes>
	)
})

export default AppRouter