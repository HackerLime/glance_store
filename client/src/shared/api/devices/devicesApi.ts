import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../config';
export const devicesApi = createApi({

  reducerPath: 'devicesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({

    getDevices: builder.query({
      query: () => '/device',
    }),

    getDeviceById: builder.query({
      query: (payload) => `/device'/${payload}`,
    }),

    getBrands: builder.query({
      query: () => '/brand',
    }),

    getTypes: builder.query({
      query: () => '/type',
    }),

  }),
})


export const {
  useGetDevicesQuery, useGetDeviceByIdQuery,
  useGetBrandsQuery, useGetTypesQuery
} = devicesApi