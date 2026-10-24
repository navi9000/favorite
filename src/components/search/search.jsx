import { Input, Button, Space } from "antd"
import { useArticleSearch } from "../../hooks/use-article-search"
import { useRef } from "react"

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
    <Space>
      <Space.Compact>
        <Input
          placeholder="Введите артикул"
          ref={inputRef}
          defaultValue={article}
        />
        <Button onClick={onClick}>Поиск</Button>
      </Space.Compact>
    </Space>
  )
}

export default Search
