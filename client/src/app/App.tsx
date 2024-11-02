
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../widgets/Navbar';
import { AppRouter } from './routers';
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
				{/* 	<Routes>
					{
						publicRoutes.map(route =>
							<Route key={route.path} path={route.path} element={<route.component />} />
						)
					}
					<Route path='*' element={<Shop />} />

				</Routes> */}
				<AppRouter />
			</BrowserRouter>
		</Provider>
	)
}
{/* <BrowserRouter>
			<NavBar />
			<ScrollToTop />
			<AppRouter />
		</BrowserRouter> */}


