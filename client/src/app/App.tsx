import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../widgets/Navbar';


const App = () => {
	/* 	const isLoading = false
	 */


	/* 	if (isLoading) {
			return <LoadingAnimation />
		} */
	return (
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	)
}
{/* <BrowserRouter>
			<NavBar />
			<ScrollToTop />
			<AppRouter />
		</BrowserRouter> */}

export default App;
