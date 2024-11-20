import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../config';
import { loginAction, logOutAction } from './user.slice';
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { endpoint }) => {
    const token = localStorage.getItem('token')
    const authorizedEndpoints = [
      'checkUser'
    ]
    if (token && authorizedEndpoints.includes(endpoint)) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({

    tryLogin: builder.mutation({
      query: (credentials) => ({
        url: 'api/user/login',
        method: 'POST',
        body: credentials
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(loginAction(data.token))
        } catch (err) {
          console.error(err.error)

        }
      },
    }),
    tryRegistration: builder.mutation({
      query: (credentials) => ({
        url: `api/user/registration`,
        method: 'POST',
        body: credentials
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(loginAction(data.token))
        } catch (err) {
          console.error(err)
        }
      },
    }),
    checkUser: builder.query({
      query: () => ({
        url: `api/user/auth`,
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(loginAction(data.token))
        } catch (err) {
          console.error(err)
          dispatch(logOutAction())
        }
      },
    })
  })
})

export const { useTryLoginMutation, useTryRegistrationMutation, useCheckUserQuery } = userApi

