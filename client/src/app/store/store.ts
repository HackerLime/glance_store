import { configureStore } from '@reduxjs/toolkit'
import filterReducer from 'entities/filter/model/filter.slice'
import { basketApi } from 'shared/api/basket/basketApi'
import basketReducer from 'shared/api/basket/basket.slice'
import { devicesApi } from 'shared/api/devices/devicesApi'
import { userApi } from 'shared/api/user/user.api'
import userReducer from 'shared/api/user/user.slice'
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: userReducer,
    basket: basketReducer,
    [devicesApi.reducerPath]: devicesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(devicesApi.middleware, userApi.middleware, basketApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch