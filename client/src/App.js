import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Shop from './components/Shop';
import Device from './components/Device';

function App() {
	return (
		<div className="App" style={{ backgroundColor: '#f6f6f6' }}>
			<NavBar />
			<Shop />
		</div>
	)
}

export default App;
