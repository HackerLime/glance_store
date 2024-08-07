import React, { useContext, useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import { check } from './http/userAPI';
import LoadingAnimation from './components/UI/loadingAnimation/LoadingAnimation';
import ScrollToTop from './ScrollToTop';


const App = observer(() => {
	const { user } = useContext(Context)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		check().then(data => {
			user.setUser(data)
			user.setIsAuth(true)
		})
			.catch(e => {
				user.setUser({})
				user.setIsAuth(false)
			}).finally(() => setIsLoading(false))
	}, [])

	if (isLoading) {
		return <LoadingAnimation />
	}
	return (
		<div className="App" >
			<BrowserRouter>
				<NavBar />
				<ScrollToTop />
				<AppRouter />
			</BrowserRouter>
		</div>
	)
})

export default App;
