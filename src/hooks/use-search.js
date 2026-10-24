import { useSearchParams } from "react-router"

const SEARCH_PARAM_NAME = "search"

export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get(SEARCH_PARAM_NAME)

  const setSearch = (value) => {
    setSearchParams((prev) => {
      const newParams = { ...prev }
      if (value) {
        newParams[SEARCH_PARAM_NAME] = value
      }
      return newParams
    })
  }

  return {
    search,
    setSearch,
    showBrandList: !!search,
  }
}
