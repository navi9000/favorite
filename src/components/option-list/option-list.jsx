import { Card, Descriptions, List, Typography } from "antd"
import { useGetOptionsQuery } from "@/features/goods"
import { useArticleSearch } from "@/hooks/use-article-search"
import styles from "./option-list.module.css"

const OptionList = ({ brand }) => {
  const { article } = useArticleSearch()
  const { data, isLoading, isFetching, isError } = useGetOptionsQuery({
    article,
    brand,
  })

  if (isError) {
    return <Typography>Не удалось получить список рекомендаций</Typography>
  }

  return (
    <List
      className={styles.cardList}
      dataSource={data ?? []}
      loading={isLoading || isFetching}
      rowKey="key"
      pagination={{
        hideOnSinglePage: true,
        showSizeChanger: false,
        pageSize: 10,
      }}
      renderItem={(option) => (
        <List.Item className={styles.cardListItem}>
          <Card className={styles.optionCard} size="small">
            <Typography.Text strong>{option.brand}</Typography.Text>
            <Typography.Paragraph className={styles.optionName}>
              {option.name}
            </Typography.Paragraph>
            <Descriptions
              className={styles.optionDetails}
              column={3}
              size="small"
              items={[
                { key: "code", label: "Код склада", children: option.code },
                { key: "price", label: "Цена", children: option.price },
                { key: "stock", label: "Остаток", children: option.stock },
              ]}
            />
          </Card>
        </List.Item>
      )}
    />
  )
}

export default OptionList
