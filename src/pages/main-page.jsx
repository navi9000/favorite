import Search from "@/components/search/search"
import { Card, Empty, Layout, Typography } from "antd"
import { useArticleSearch } from "@/hooks/use-article-search"
import { lazy } from "react"
import styles from "./main-page.module.css"

const BrandList = lazy(() => import("@/components/brand-list/brand-list"))

const MainPage = () => {
  const { showBrandList } = useArticleSearch()

  return (
    <Layout className={styles.page}>
      <main className={styles.content}>
        <header className={styles.header}>
          <Typography.Text type="secondary">
            Каталог автозапчастей
          </Typography.Text>
          <Typography.Title level={1}>
            Поиск аналогов
          </Typography.Title>
          <Typography.Paragraph type="secondary">
            Найдите подходящие детали по артикулу и сравните предложения
            производителей.
          </Typography.Paragraph>
        </header>

        <div className={styles.sections}>
          <Card>
            <Search />
          </Card>

          {showBrandList ? (
            <BrandList />
          ) : (
            <Card>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <Typography.Text>Бренд не выбран</Typography.Text>
                }
              />
            </Card>
          )}
        </div>
      </main>
    </Layout>
  )
}

export default MainPage
