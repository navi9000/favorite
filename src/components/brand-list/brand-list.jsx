import { Card, Empty, Table, Typography } from "antd"
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

  if (isError) {
    return (
      <Card>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <Typography.Text>Не удалось получить данные</Typography.Text>
          }
        />
      </Card>
    )
  }

  return (
    <Card title="Найденные бренды">
      <Table
        columns={columns}
        dataSource={data?.goods}
        expandable={{
          expandedRowRender: ({ brand }) => <OptionList brand={brand} />,
        }}
        loading={isLoading || isFetching}
        scroll={{ x: "max-content" }}
      />
    </Card>
  )
}

export default BrandList
