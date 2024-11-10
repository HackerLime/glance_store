import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../config';
import type { TAddBasketDeviceParams, TAddBasketDeviceResponse, TDeleteBasketDeviceParams, TDeleteBasketDeviceResponse, TFetchBasketDevicesParams, TFetchBasketDevicesResponse } from './types';

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
  endpoints: (builder) => ({
    addBasketDevice: builder.mutation<TAddBasketDeviceResponse, TAddBasketDeviceParams>({
      query: (payload) => ({
        url: '/api/basket/create',
        method: 'POST',
        body: payload
      })
    })
    ,
    fetchBasketDevices: builder.mutation<TFetchBasketDevicesResponse, TFetchBasketDevicesParams>({
      query: (payload) => ({
        url: '/api/basket/get',
        method: 'POST',
        body: payload
      })
    })
    ,
    deleteBasketDevice: builder.mutation<TDeleteBasketDeviceResponse, TDeleteBasketDeviceParams>({
      query: (payload) => ({
        url: '/api/basket/destroy',
        method: 'POST',
        body: payload
      })
    })
    ,
  })
})

export const { useAddBasketDeviceMutation, useFetchBasketDevicesMutation, useDeleteBasketDeviceMutation } = basketApi


