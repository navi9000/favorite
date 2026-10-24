import { Input, Button, Space } from "antd"
import useSearch from "../../hooks/use-search"
import { useRef } from "react"

const Search = () => {
  const { search, setSearch } = useSearch()
  const inputRef = useRef(search)

  const onClick = () => {
    if (!inputRef.current) {
      return
    }
    setSearch(inputRef.current.input.value)
  }

  return (
    <Space>
      <Space.Compact>
        <Input
          placeholder="Введите артикул"
          ref={inputRef}
          defaultValue={search}
        />
        <Button onClick={onClick}>Поиск</Button>
      </Space.Compact>
    </Space>
  )
}

export default Search
