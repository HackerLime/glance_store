import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../config'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery(baseUrl),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/api/login',
        method: 'POST',
        body: { email, password }
      })
    }),
  }),
})

export const { useLoginMutation } = userApi