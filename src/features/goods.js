import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { apiRoot, requestKey } from "@/config/global-variables"
import { formatGoods } from "@/utils/goods"

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
      transformResponse: (returnValue) => ({
        goods: returnValue.goods.map(({ brand, name }) => ({
          brand,
          name,
          key: brand,
        })),
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
      transformResponse: (returnValue) => {
        const result = []
        result.push(
          ...returnValue.goods.flatMap((goodsOption) =>
            formatGoods(goodsOption),
          ),
        )
        result.push(
          ...returnValue.goods.flatMap((goodsOption) => {
            if (goodsOption.analogues) {
              return goodsOption.analogues.flatMap((analog) =>
                formatGoods(analog),
              )
            }
            return []
          }),
        )

        return result
      },
    }),
  }),
})

export const { useGetBrandsQuery, useGetOptionsQuery } = goodsApi
