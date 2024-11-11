import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TBrandAndTypeResponse, TDevice, TDeviceResponse } from 'shared/types';
import { baseUrl } from '../config';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders(headers, { endpoint }) {
    const token = localStorage.getItem('token')
    const authEndpoints = [
      'createDevice',
      'createBrand',
      'createType'
    ]
    if (token && authEndpoints.includes(endpoint)) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const devicesApi = createApi({

  reducerPath: 'devicesApi',
  baseQuery,
  tagTypes: ['Device'],
  endpoints: (builder) => ({

    getDevices: builder.query<TDeviceResponse, undefined>({
      query: () => '/api/device',
    }),

    getDeviceById: builder.query<TDevice, number>({
      query: (payload) => `/api/device/${payload}`,
    }),

    getBrands: builder.query<TBrandAndTypeResponse[], undefined>({
      query: () => '/api/brand',
    }),
    getBrandById: builder.query<TBrandAndTypeResponse, undefined>({
      query: (payload) => `/api/brand/${payload}`,
    }),

    getTypes: builder.query<TBrandAndTypeResponse[], undefined>({
      query: () => '/api/type',
    }),
    getTypeById: builder.query<TBrandAndTypeResponse, undefined>({
      query: (payload) => `/api/type/${payload}`,
    }),


    createDevice: builder.mutation({
      query: (payload) => ({
        url: `/api/device`,
        method: 'POST',
        body: payload
      }),

    }),
    createBrand: builder.mutation({
      query: (payload) => ({
        url: `/api/brand`,
        method: 'POST',
        body: payload
      }),
    }),
    createType: builder.mutation({
      query: (payload) => ({
        url: `/api/type`,
        method: 'POST',
        body: payload
      }),

    }),

  }),
})


export const {
  useGetDevicesQuery, useGetDeviceByIdQuery,
  useGetBrandsQuery, useGetTypesQuery,
  useGetBrandByIdQuery, useGetTypeByIdQuery,
  useCreateDeviceMutation, useCreateBrandMutation,
  useCreateTypeMutation
} = devicesApi