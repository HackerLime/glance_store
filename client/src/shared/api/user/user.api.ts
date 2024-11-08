import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../config';
import { loginAction } from './user.slice';
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { endpoint }) => {
    const token = localStorage.getItem('token')
    const authorizedEndpoints = [
      'checkUser'
    ]
    if (token && authorizedEndpoints.includes(endpoint)) {
      headers.set('Authorization', token)
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
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
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
        url: 'api/user/registration',
        method: 'POST',
        body: credentials
      }),
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(loginAction(data.token))
        } catch (err) {
          console.error(err.error)
        }
      },
    })
  })
})

export const { useTryLoginMutation, useTryRegistrationMutation } = userApi

/* 
import { jwtDecode } from 'jwt-decode'
import { $authHost, $host } from './index'
export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const registartion = async (email, password) => {
  const { data } = await $host.post('api/user/registration', { email, password, role: "ADMIN" })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
*/