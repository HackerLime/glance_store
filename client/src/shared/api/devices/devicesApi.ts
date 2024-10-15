import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../config';
export const devicesApi = createApi({

  reducerPath: 'devicesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({

    getDevices: builder.query({
      query: () => '/api/device',
    }),

    getDeviceById: builder.query({
      query: (payload) => `/api/device'/${payload}`,
    }),

    getBrands: builder.query({
      query: () => '/api/brand',
    }),

    getTypes: builder.query({
      query: () => '/api/type',
    }),

  }),
})


export const {
  useGetDevicesQuery, useGetDeviceByIdQuery,
  useGetBrandsQuery, useGetTypesQuery
} = devicesApi