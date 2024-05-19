import Shop from "../components/pages/Shop";
import Admin from "../components/pages/Admin";
import Auth from "../components/pages/Auth";
import Basket from "../components/pages/Basket";
import Catalog from "../components/pages/Catalog";
import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./paths";

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
]

export const privateRoutes = [
	{
		path: BASKET_ROUTE,
		component: <Basket />
	},
	{
		path: ADMIN_ROUTE,
		component: <Admin />
	}
]