import { Shop } from 'pages/ShopPage';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../widgets/Navbar';


export const App = () => {
	/* 	const isLoading = false
	 */


	/* 	if (isLoading) {
			return <LoadingAnimation />
		} */
	return (
		<BrowserRouter>
			<NavBar />
			<Shop />
		</BrowserRouter>
	)
}
{/* <BrowserRouter>
			<NavBar />
			<ScrollToTop />
			<AppRouter />
		</BrowserRouter> */}


