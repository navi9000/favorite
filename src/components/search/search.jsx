import { Input, Button, Space } from "antd"
import { useArticleSearch } from "../../hooks/use-article-search"
import { useRef } from "react"
import styles from "./search.module.css"

const Search = () => {
  const { article, setArticle } = useArticleSearch()
  const inputRef = useRef(article)

  const onClick = () => {
    if (!inputRef.current) {
      return
    }
    setArticle(inputRef.current.input.value)
  }

  return (
    <Space className={styles.form} size="middle">
      <Space.Compact className={styles.control}>
        <Input
          placeholder="Введите артикул"
          ref={inputRef}
          defaultValue={article}
          size="large"
          aria-label="Артикул"
        />
        <Button type="primary" size="large" onClick={onClick}>
          Поиск
        </Button>
      </Space.Compact>
    </Space>
  )
}

export default Search
