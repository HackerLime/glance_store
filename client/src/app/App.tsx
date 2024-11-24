import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../widgets/Navbar';
import { AppRouter } from './routers';
import ScrollToTop from './ScrollToTop';
import { store } from './store/store';

export const App = () => {

	return (
		<Provider store={store}>
			<BrowserRouter>
				<NavBar />
				<ScrollToTop />
				<AppRouter />
			</BrowserRouter>
		</Provider>
	)
}


