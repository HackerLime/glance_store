import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TBrandAndTypeResponse, TDevice, TDeviceResponse } from 'shared/types';
import { baseUrl } from '../config';
export const devicesApi = createApi({

  reducerPath: 'devicesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
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
  }),
})


export const {
  useGetDevicesQuery, useGetDeviceByIdQuery,
  useGetBrandsQuery, useGetTypesQuery,
  useGetBrandByIdQuery, useGetTypeByIdQuery
} = devicesApi