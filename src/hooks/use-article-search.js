import { useSearchParams } from "react-router"

const SEARCH_PARAM_NAME = "article"

export function useArticleSearch() {
  const [searchParams, setSearchParams] = useSearchParams()
  const article = searchParams.get(SEARCH_PARAM_NAME)

  const setArticle = (value) => {
    setSearchParams((prev) => {
      const newParams = { ...prev }
      if (value) {
        newParams[SEARCH_PARAM_NAME] = value
      }
      return newParams
    })
  }

  return {
    article,
    setArticle,
    showBrandList: !!article,
  }
}
