import { Admin } from "pages/AdminPage";
import { Auth } from "pages/AuthPage";
import { Basket } from "pages/BasketPage";
import { Catalog } from "pages/CatalogPage";
import { DevicePage } from "pages/DevicePage";
import { Profile } from "pages/ProfilePage";
import { Shop } from "pages/ShopPage";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  CATALOG_ROUTE,
  DEVICEPAGE_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "shared/routerPaths";

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    component: Shop,
  },
  {
    path: CATALOG_ROUTE,
    component: Catalog,
  },
  {
    path: DEVICEPAGE_ROUTE + "/:id",
    component: DevicePage,
  },
];

export const authRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    component: Auth,
  },
];

export const privateRoutes = [
  {
    path: BASKET_ROUTE,
    component: Basket,
  },
  {
    path: ADMIN_ROUTE,
    component: Admin,
  },
  {
    path: PROFILE_ROUTE,
    component: Profile,
  },
];
