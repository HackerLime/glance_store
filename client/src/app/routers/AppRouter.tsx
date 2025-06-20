import { RootState } from "app/store/store";
import { Shop } from "pages/ShopPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useGetBasketDevicesQuery } from "shared/api/basket/basketApi";
import { useCheckUserQuery } from "shared/api/user/user.api";
import { checkToken } from "shared/utils/checkToken";
import { authRoutes, privateRoutes, publicRoutes } from "./router";

export const AppRouter = () => {
  const userState = useSelector((state: RootState) => state.user);
  useEffect(() => {
    checkToken();
  }, []);
  useCheckUserQuery(undefined);

  const basketDevices = useGetBasketDevicesQuery({
    basketId: userState.user?.id,
  });

  return (
    <Routes>
      {userState.isAuth &&
        privateRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      {!userState.isAuth &&
        authRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      {publicRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Shop />} />
    </Routes>
  );
};
