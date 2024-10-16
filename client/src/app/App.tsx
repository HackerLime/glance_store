
import { DevicePage } from 'pages/DevicePage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../widgets/Navbar';
import { store } from './store/store';

export const App = () => {
	/* 	const isLoading = false
	 */

	/* 	if (isLoading) {
			return <LoadingAnimation />
		} */
	return (

		<Provider store={store}>
			<BrowserRouter>
				<NavBar />
				<DevicePage />
			</BrowserRouter>
		</Provider>
	)
}
{/* <BrowserRouter>
			<NavBar />
			<ScrollToTop />
			<AppRouter />
		</BrowserRouter> */}


