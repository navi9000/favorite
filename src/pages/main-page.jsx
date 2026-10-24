import BrandList from "@/components/brand-list/brand-list"
import Search from "@/components/search/search"
import useSearch from "@/hooks/use-search"
import Typography from "antd/es/typography/Typography"

const MainPage = () => {
  const { showBrandList } = useSearch()

  return (
    <div>
      <Search />
      {showBrandList ? <BrandList /> : <Typography>Бренд не выбран</Typography>}
    </div>
  )
}

export default MainPage
