import Shop from "../components/pages/Shop";
import Admin from "../components/pages/Admin";
import Auth from "../components/pages/Auth";
import Basket from "../components/pages/Basket";
import Catalog from "../components/pages/Catalog";
import DevicePage from '../components/pages/DevicePage'
import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, DEVICEPAGE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./paths";
import Profile from "../components/pages/Profile";

export const publicRoutes = [
	{
		path: SHOP_ROUTE,
		component: <Shop />
	},
	{
		path: LOGIN_ROUTE,
		component: <Auth />
	},
	{
		path: REGISTRATION_ROUTE,
		component: <Auth />
	},
	{
		path: CATALOG_ROUTE,
		component: <Catalog />
	},
	{
		path: DEVICEPAGE_ROUTE + '/:id',
		component: <DevicePage />
	},
]

export const privateRoutes = [
	{
		path: BASKET_ROUTE,
		component: <Basket />
	},
	{
		path: ADMIN_ROUTE,
		component: <Admin />
	},
	{
		path: PROFILE_ROUTE,
		component: <Profile />
	}
]