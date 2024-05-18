import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import DeviceStore from './store/deviceStore'
import UserStore from './store/userStore'
import GarbageStore from './store/garbageStore'

const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={{
		user: new UserStore(),
		device: new DeviceStore(),
		garbage: new GarbageStore()
	}}>
		<App />
	</Context.Provider>
);

