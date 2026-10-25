import { Table, Typography } from "antd"
import { useGetOptionsQuery } from "@/features/goods"
import { useArticleSearch } from "@/hooks/use-article-search"

const columns = [
  { title: "Производитель", dataIndex: "brand", key: "brand" },
  { title: "Наименование", dataIndex: "name", key: "name" },
  { title: "Код склада", dataIndex: "code", key: "code" },
  { title: "Цена", dataIndex: "price", key: "price" },
  { title: "Остаток", dataIndex: "stock", key: "stock" },
]

const OptionList = ({ brand }) => {
  console.log({ brand })
  const { article } = useArticleSearch()
  const { data, isLoading, isFetching, isError } = useGetOptionsQuery({
    article,
    brand,
  })

  if (isError) {
    return <Typography>Не удалось получить список рекомендаций</Typography>
  }
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={isLoading || isFetching}
    />
  )
}

export default OptionList
