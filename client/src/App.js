import React from 'react';
import NavBar from './components/Navbar/NavBar';
import AppRouter from './components/AppRouter';

function App() {
	return (
		<div className="App" style={{ backgroundColor: '#f6f6f6' }}>
			<NavBar />
			<AppRouter />
		</div>
	)
}

export default App;
