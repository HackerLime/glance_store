import { Admin, Auth, Basket, Catalog, DevicePage, Profile, Shop } from "pages";
import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, DEVICEPAGE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "shared/routerPaths";

export const publicRoutes = [
	{
		path: SHOP_ROUTE,
		component: Shop
	},
	{
		path: CATALOG_ROUTE,
		component: Catalog
	},
	{
		path: DEVICEPAGE_ROUTE + '/:id',
		component: DevicePage
	},
]

export const authRoutes = [
	{
		path: LOGIN_ROUTE,
		component: Auth
	},
	{
		path: REGISTRATION_ROUTE,
		component: Auth
	},
]

export const privateRoutes = [
	{
		path: BASKET_ROUTE,
		component: Basket
	},
	{
		path: ADMIN_ROUTE,
		component: Admin
	},
	{
		path: PROFILE_ROUTE,
		component: Profile
	}
]