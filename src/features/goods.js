import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { apiRoot, requestKey } from "../config/global-variables"

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoot.concat(`/hs/hsprice/`),
  }),
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: (article) => ({
        url: "",
        params: {
          key: requestKey,
          number: article,
        },
      }),
    }),
    getOptions: builder.query({
      query: ({ article, brand }) => ({
        url: "",
        params: {
          key: requestKey,
          number: article,
          brand,
          analogues: "on",
        },
      }),
    }),
  }),
})

export const { useGetBrandsQuery, useGetOptionsQuery } = goodsApi
