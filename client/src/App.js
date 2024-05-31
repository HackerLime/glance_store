import React, { useContext, useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import { fetchBrands, fetchDevices, fetchTypes } from './http/deviceAPI';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
	const { device } = useContext(Context)
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		fetchBrands().then(data => device.setBrands(data)).catch(e => console.log(`Ошибка fetchBrands ${e.message}`))
		fetchTypes().then(data => device.setTypes(data)).catch(e => console.log(`Ошибка fetchTypes ${e.message}`))
		fetchDevices().then(data => device.setDevices(data.rows)).catch(e => console.log(`Ошибка fetchDevices ${e.message}`))
		setIsLoading(false)
	}, [])

	if (isLoading) {
		return <h1>Загрузка...</h1>
	}
	return (
		<div className="App" style={{ backgroundColor: '#f6f6f6', paddingTop: 91, paddingBottom: 200 }}>
			<BrowserRouter>
				<NavBar />
				<AppRouter />
			</BrowserRouter>
		</div>
	)
})

export default App;
