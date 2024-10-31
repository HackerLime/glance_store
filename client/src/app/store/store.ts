import { configureStore } from '@reduxjs/toolkit'
import filterReducer from 'entities/filter/model/filter.slice'
import { devicesApi } from 'shared/api/devices/devicesApi'

export const store = configureStore({
  reducer: {
    filter: filterReducer
    ,
    [devicesApi.reducerPath]: devicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(devicesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch