import { RootState } from 'app/store/store'
import { Shop } from 'pages'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useCheckUserQuery } from 'shared/api/user/user.api'
import { useCheckToken } from 'shared/hooks'
import { authRoutes, privateRoutes, publicRoutes } from './router'

export const AppRouter = () => {
	const user = useSelector((state: RootState) => state.user)
	useEffect(() => {
		useCheckToken()
	}, [])
	useCheckUserQuery(undefined)



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

