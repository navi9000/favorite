import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { apiRoot, requestKey } from "../config/global-variables"

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoot.concat(`/hs/hsprice/?key=${requestKey}&`),
  }),
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: (article) => `number=${article}`,
    }),
    getOptions: builder.query({
      query: ({ article, brand }) =>
        `number=${article}&brand=${brand}&analogues=on`,
    }),
  }),
})

export const { useGetBrandsQuery, useGetOptionsQuery } = goodsApi
