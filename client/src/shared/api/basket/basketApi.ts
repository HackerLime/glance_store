import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../config';
import type { TAddBasketDeviceParams, TAddBasketDeviceResponse, TDeleteBasketDeviceParams, TDeleteBasketDeviceResponse, TGetBasketDevicesParams, TGetBasketDevicesResponse } from './types';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders(headers, { endpoint }) {
    const token = localStorage.getItem('token')
    const authEndpoints = [
      'addBasketDevice',
      'fetchBasketDevices',
      'deleteBasketDevice'
    ]
    if (token && authEndpoints.includes(endpoint)) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})


export const basketApi = createApi({
  baseQuery,
  tagTypes: ['basketDevices']
  ,
  endpoints: (builder) => ({
    addBasketDevice: builder.mutation<TAddBasketDeviceResponse, TAddBasketDeviceParams>({
      query: (payload) => ({
        url: '/api/basket/create',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['basketDevices']
    })
    ,
    getBasketDevices: builder.query<TGetBasketDevicesResponse, TGetBasketDevicesParams>({
      query: (payload) => ({
        url: '/api/basket/get',
        method: 'POST',
        body: payload
      }),
      providesTags: ['basketDevices']
    })
    ,
    deleteBasketDevice: builder.mutation<TDeleteBasketDeviceResponse, TDeleteBasketDeviceParams>({
      query: (payload) => ({
        url: '/api/basket/destroy',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['basketDevices']
    })
    ,
  })
})

export const { useAddBasketDeviceMutation, useGetBasketDevicesQuery, useDeleteBasketDeviceMutation } = basketApi


