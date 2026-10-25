import {
  Button,
  Card,
  Descriptions,
  Empty,
  Listy,
  Pagination,
  Spin,
  Typography,
} from "antd"
import { useState } from "react"
import { useGetOptionsQuery } from "@/features/goods"
import { useArticleSearch } from "@/hooks/use-article-search"
import styles from "./option-list.module.css"

const OptionList = ({ brand }) => {
  const { article } = useArticleSearch()
  const [pagination, setPagination] = useState({
    article,
    brand,
    page: 1,
  })
  const { data, isLoading, isFetching, isError, refetch } = useGetOptionsQuery({
    article,
    brand,
  })

  if (isError) {
    return (
      <Card>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <Typography.Text>
              Не удалось получить список рекомендаций
            </Typography.Text>
          }
        />
        <Button onClick={refetch}>Попробовать снова</Button>
      </Card>
    )
  }

  const pageSize = 10
  const options = data ?? []
  const requestedPage =
    pagination.article === article && pagination.brand === brand
      ? pagination.page
      : 1
  const currentPage = Math.min(
    requestedPage,
    Math.max(1, Math.ceil(options.length / pageSize)),
  )
  const pageItems = options.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  const isOptionsLoading = isLoading || isFetching

  return (
    <Spin spinning={isOptionsLoading}>
      {options.length > 0 ? (
        <Listy
          className={styles.cardList}
          classNames={{ item: styles.cardListItem }}
          items={pageItems}
          rowKey="key"
          itemRender={(option) => (
            <Card className={styles.optionCard} size="small">
              <Typography.Text strong>{option.brand}</Typography.Text>
              <Typography.Paragraph className={styles.optionName}>
                {option.name}
              </Typography.Paragraph>
              <Descriptions
                className={styles.optionDetails}
                column={{ xs: 1, sm: 3 }}
                size="small"
                items={[
                  { key: "code", label: "Склад", children: option.code },
                  { key: "price", label: "Цена", children: option.price },
                  { key: "stock", label: "Остаток", children: option.stock },
                ]}
              />
            </Card>
          )}
        />
      ) : (
        !isOptionsLoading && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Нет доступных рекомендаций"
          />
        )
      )}
      {options.length > pageSize && (
        <Pagination
          className={styles.pagination}
          current={currentPage}
          pageSize={pageSize}
          showSizeChanger={false}
          total={options.length}
          onChange={(page) => setPagination({ article, brand, page })}
        />
      )}
    </Spin>
  )
}

export default OptionList
