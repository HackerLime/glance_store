
import { Shop } from 'pages/ShopPage';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../widgets/Navbar';
import { devRoute } from './routers/router';
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
				<Routes>
					<Route path={devRoute.path} element={<devRoute.component />} />
					<Route path='*' element={<Shop />} />

				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
{/* <BrowserRouter>
			<NavBar />
			<ScrollToTop />
			<AppRouter />
		</BrowserRouter> */}


