import { BrowserRouter } from 'react-router-dom';
import { LoadingAnimation } from '../shared/loadingAnimation/index';
import { NavBar } from '../widgets/Navbar';
import { AppRouter } from './routers';
import ScrollToTop from './ScrollToTop';


const App = () => {
	const isLoading = false



	if (isLoading) {
		return <LoadingAnimation />
	}
	return (

		<BrowserRouter>
			<NavBar />
			<ScrollToTop />
			<AppRouter />
		</BrowserRouter>

	)
}

export default App;
