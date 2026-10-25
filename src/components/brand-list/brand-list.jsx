import { Table, Typography } from "antd"
import OptionList from "../option-list/option-list"
import { useArticleSearch } from "@/hooks/use-article-search"
import { useGetBrandsQuery } from "@/features/goods"

const columns = [
  { title: "Бренд", dataIndex: "brand", key: "brand" },
  { title: "Наименование", dataIndex: "name", key: "name" },
]

const BrandList = () => {
  const { article } = useArticleSearch()
  const { data, isLoading, isFetching, isError } = useGetBrandsQuery(article)

  if (isLoading) {
    return <Typography>Загрузка</Typography>
  }
  if (isError) {
    return <Typography>Не удалось получить данные</Typography>
  }

  return (
    <Table
      columns={columns}
      dataSource={data?.goods}
      expandable={{
        expandedRowRender: ({ brand }) => <OptionList brand={brand} />,
      }}
      loading={isFetching}
    />
  )
}

export default BrandList
