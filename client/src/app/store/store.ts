import { configureStore } from '@reduxjs/toolkit'
import filterReducer from 'entities/filter/model/filter.slice'
import { basketApi } from 'shared/api/basket/basketApi'

import { devicesApi } from 'shared/api/devices/devicesApi'
import { userApi } from 'shared/api/user/user.api'
import userReducer from 'shared/api/user/user.slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: userReducer,
    [devicesApi.reducerPath]: devicesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(devicesApi.middleware, userApi.middleware, basketApi.middleware)

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch