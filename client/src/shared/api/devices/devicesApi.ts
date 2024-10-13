import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const devicesApi = createApi({
  reducerPath: 'devicesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/device' }),
  endpoints: (builder) => ({
    getDevices: builder.query({
      query: () => '',
    }),
    getDeviceById: builder.query({
      query: (payload) => `/${payload}`,
    }),
  }),
})


export const { useGetDevicesQuery, useGetDeviceByIdQuery } = devicesApi