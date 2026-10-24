import BrandList from "@/components/brand-list/brand-list"
import Search from "@/components/search/search"
import Typography from "antd/es/typography/Typography"
import { useArticleSearch } from "@/hooks/use-article-search"

const MainPage = () => {
  const { showBrandList } = useArticleSearch()

  return (
    <div>
      <Search />
      {showBrandList ? <BrandList /> : <Typography>Бренд не выбран</Typography>}
    </div>
  )
}

export default MainPage
