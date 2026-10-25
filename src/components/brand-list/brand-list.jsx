import { Card, Empty, Table, Typography } from "antd"
import OptionList from "../option-list/option-list"
import { useArticleSearch } from "@/hooks/use-article-search"
import { useGetBrandsQuery } from "@/features/goods"
import styles from "./brand-list.module.css"

const columns = [
  { title: "Бренд", dataIndex: "brand", key: "brand", width: 180 },
  { title: "Наименование", dataIndex: "name", key: "name", width: 360 },
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
      <div className={styles.tableContainer}>
        <Table
          columns={columns}
          dataSource={data?.goods}
          expandable={{
            expandedRowRender: ({ brand }) => <OptionList brand={brand} />,
          }}
          loading={isLoading || isFetching}
          tableLayout="fixed"
          scroll={{ x: 600 }}
          pagination={{
            hideOnSinglePage: true,
            showSizeChanger: false,
            size: 10,
          }}
        />
      </div>
    </Card>
  )
}

export default BrandList
