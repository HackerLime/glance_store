import React from 'react';
import NavBar from './components/Navbar/NavBar';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className="App" style={{ backgroundColor: '#f6f6f6', paddingTop: 91 }}>
			<BrowserRouter>
				<NavBar />
				<AppRouter />
			</BrowserRouter>
		</div>
	)
}

export default App;
