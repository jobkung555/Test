import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mockApi = createApi({
  reducerPath: 'attractionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62d5a29e15ad24cbf2caf682.mockapi.io/api/' }),
  endpoints: (builder) => ({
    getAllMockapi: builder.query({
      query: () => `users`,
    }),
  }),
})

export const { useGetAllMockapiQuery } = mockApi